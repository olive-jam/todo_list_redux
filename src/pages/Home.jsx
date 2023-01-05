import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBtn, deleteBtn, toggleBtn } from "../redux/modules/todoList";
import nextId from "react-id-generator";
import { useLocation, Link } from "react-router-dom";

//import Users from "./components/User";

const Home = () => {
  const location = useLocation();
  const id = nextId();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const todos = useSelector((state) => state.todoList.todos);
  const addTodo = () => {
    dispatch(addBtn({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
    setTitle("");
    setBody("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onDeleteBtn = (id) => {
    // console.log(id);
    dispatch(deleteBtn(id));
  };

  const onToggleBtn = (id) => {
    // console.log(id);
    dispatch(toggleBtn(id));
  };

  return (
    <div>
      <div className="inputBar-set">
        제목 :
        <input
          type="text"
          name="title"
          value={todo.title}
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={onChangeHandler}
          // setting={setTitle}
        />
      </div>
      <div className="inputBar-set">
        내용 :
        <input
          type="text"
          name="body"
          value={todo.body || ""}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 body의 값으로 업데이트
          onChange={onChangeHandler}
        />
      </div>
      <div className="inputBar-set">
        <button
          onClick={() => {
            addTodo();
          }}
        >
          추가하기
        </button>
        <div>
          <h1> Working - 🔥 </h1>
        </div>

        <div className="Working-style">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <div key={todo.id}>
                  <Link to={`/${todo.id}`}>상세보기</Link>
                  <h2>{todo.title}</h2>
                  <h3>{todo.body}</h3>
                  <button onClick={() => onDeleteBtn(todo.id)}>Delete</button>
                  <button onClick={() => onToggleBtn(todo.id)}>
                    {todo.isDone ? "Cancel" : "Done"}
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <h1> Done - ✅ </h1>
        </div>
        <div className="Working-style">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <div key={todo.id}>
                  <Link to={`/${todo.id}`}>상세보기</Link>
                  <h2>{todo.title}</h2>
                  <h3>{todo.body}</h3>
                  <button onClick={() => onDeleteBtn(todo.id)}>Delete</button>
                  <button onClick={() => onToggleBtn(todo.id)}>
                    {todo.isDone ? "Cancel" : "Done"}
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
