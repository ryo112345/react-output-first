  import { useState } from "react";
  import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";

  export const TodoTemplate = () => {
    // 状態管理: Todoリスト
    const [todoList, setTodoList] = useState(INIT_TODO_LIST);
    // 状態管理: 入力値
    const [inputValue, setInputValue] = useState("");
    // 状態管理: ユニークID
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

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

    return (
      <div>
        <h1>Todo List</h1>
        
        {/* 入力フィールド */}
        <input 
          type="text"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTodo}
          placeholder="新しいTodoを入力してEnter"
        />
        
        {/* Todoリスト表示 */}
        {todoList.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    );
  };
