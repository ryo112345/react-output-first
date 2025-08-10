  import { INIT_TODO_LIST } from "../../../constants/data.js";

  export const TodoTemplate = () => {
    return (
      <div>
        <h1>Todo List</h1>
        {INIT_TODO_LIST.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    );
  };
