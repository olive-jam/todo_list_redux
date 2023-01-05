import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getTodoByID } from "../redux/modules/todoList";

const DetailP = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoList.todo);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>ID : {todo.id}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        prev
      </button>
      <h2>{todo.title}</h2>
      <h3>{todo.body}</h3>
    </div>
  );
};

export default DetailP;
