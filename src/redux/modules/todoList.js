const ADD_BTN = "ADD_BTN";

export const addBtn = (payload) => {
  return {
    type: ADD_BTN,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: 1,
      title: "졸려",
      body: "졸립다아아~~",
      isDone: false,
    },
  ],
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BTN: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default todoList;
