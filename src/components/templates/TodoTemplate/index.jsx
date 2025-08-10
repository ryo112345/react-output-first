  import { useState } from "react";
  import { INIT_TODO_LIST } from "../../../constants/data.js";

  export const TodoTemplate = () => {
    // 状態管理: Todoリスト
    const [todoList, setTodoList] = useState(INIT_TODO_LIST);
    // 状態管理: 入力値
    const [inputValue, setInputValue] = useState("");

    return (
      <div>
        <h1>Todo List</h1>
        
        {/* 入力フィールド */}
        <input 
          type="text"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいTodoを入力"
        />
        
        {/* Todoリスト表示 */}
        {todoList.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    );
  };
