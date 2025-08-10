  import { useState } from "react";
  import { INIT_TODO_LIST } from "../../../constants/data.js";

  export const TodoTemplate = () => {
    // 状態管理: Todoリスト
    const [todoList, setTodoList] = useState(INIT_TODO_LIST);

    return (
      <div>
        <h1>Todo List</h1>
        {todoList.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    );
  };
