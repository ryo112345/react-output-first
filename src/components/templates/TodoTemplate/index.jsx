  import { useState, useMemo } from "react";
  import { InputForm } from "../../atoms/InputForm";
  import { AddTodo } from "../../organisms/AddTodo";
  import { TodoList } from "../../organisms/TodoList";
  import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";
  import styles from "./styles.module.css";

  export const TodoTemplate = () => {
    // 状態管理: Todoリスト
    const [todoList, setTodoList] = useState(INIT_TODO_LIST);
    // 状態管理: 入力値
    const [inputValue, setInputValue] = useState("");
    // 状態管理: ユニークID
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
    // 状態管理: 検索キーワード
    const [searchKeyword, setSearchKeyword] = useState("");

    // 表示用TodoList（検索フィルタリング）
    const showTodoList = useMemo(() => {
      return todoList.filter((todo) => {
        // 検索キーワードに部分一致したTodoだけを一覧表示する
        const regexp = new RegExp("^" + searchKeyword, "i");
        return todo.title.match(regexp);
      });
    }, [todoList, searchKeyword]);

    // Todo追加処理
    const handleAddTodo = (e) => {
      if (e.key === "Enter" && inputValue !== "") {
        const nextUniqueId = uniqueId + 1;
        // 新しいTodoを追加
        const newTodo = {
          id: nextUniqueId,
          title: inputValue,
        };
        setTodoList([...todoList, newTodo]);
        setUniqueId(nextUniqueId);
        setInputValue(""); // 入力値をリセット
      }
    };

    // Todo削除処理
    const handleDeleteTodo = (targetId, targetTitle) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
        // 削除するid以外のtodoリストを再編集
        const newTodoList = todoList.filter((todo) => todo.id !== targetId);
        setTodoList(newTodoList);
      }
    };

    // 検索キーワード更新処理
    const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Todo List</h1>
        
        <div className={styles.content}>
          {/* Todo追加エリア */}
          <section className={styles.common}>
            <AddTodo
              addInputValue={inputValue}
              onChangeTodo={(e) => setInputValue(e.target.value)}
              handleAddTodo={handleAddTodo}
            />
          </section>

          {/* 検索フィールドエリア */}
          <section className={styles.common}>
            <h2 className={styles.subTitle}>SEARCH</h2>
            <InputForm
              inputValue={searchKeyword}
              handleChangeValue={handleChangeSearchKeyword}
              placeholder="Search Keyword"
            />
          </section>
          
          {/* Todoリスト表示 */}
          <section className={styles.common}>
            {showTodoList.length > 0 && (
              <TodoList
                todoList={showTodoList}
                handleDeleteTodo={handleDeleteTodo}
              />
            )}
          </section>
        </div>
      </div>
    );
  };
