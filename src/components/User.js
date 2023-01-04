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
            props.handleDelete(props.user.id);
          }}
        >
          삭제
        </button>
        <button
          className="doneBtn"
          onClick={() => {
            props.handleDone(props.user.id);
          }}
        >
          {props.user.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Users;
