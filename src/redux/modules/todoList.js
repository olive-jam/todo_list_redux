const ADD_BTN = "ADD_BTN";
const DELETE_BTN = "DELETE_BTN";
const TOGGLE_BTN = "TOGGLE_BTN";
const GETTODOBYID = "GETTODOBYID";

export const addBtn = (payload) => {
  return {
    type: ADD_BTN,
    payload,
  };
};
export const deleteBtn = (id) => {
  return {
    type: DELETE_BTN,
    id,
  };
};
export const toggleBtn = (id) => {
  return {
    type: TOGGLE_BTN,
    id,
  };
};
export const getTodoByID = (id) => {
  return {
    type: GETTODOBYID,
    id,
  };
};
const initialState = {
  todos: [
    {
      id: "0",
      title: "졸려",
      body: "졸립다아아~~",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

const todoList = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case ADD_BTN: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_BTN:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_BTN:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        }),
      };
    case GETTODOBYID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.id;
        }),
      };

    default:
      return state;
  }
};

export default todoList;
