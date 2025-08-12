/**
 * TodoList
 *
 * @package components
 */
import styles from "./style.module.css";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.far}>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteTodo(todo.id, todo.title)}
            >
              Jd
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
