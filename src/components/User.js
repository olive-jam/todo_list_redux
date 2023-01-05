import {
  deleteUserHandler,
  toggleUserHandler,
} from "../redux/modules/todoList";

const Users = (props) => {
  return (
    <div className="square-style">
      <div className="todo-style">
        <h2>{props.user.title}</h2>
        <div>{props.user.body}</div>
      </div>
      <div className="twobtn-style">
        <button
          className="deleteBtn"
          onClick={() => {
            deleteUserHandler();
          }}
        >
          삭제
        </button>
        <button
          className="toggleBtn"
          onClick={() => {
            toggleUserHandler();
          }}
        >
          {props.user.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Users;
