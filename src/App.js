import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBtn } from "./redux/modules/todoList";
import Users from "./components/User";

// const App = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const addUserHandler = () => {
//     const newUser = {
//       id: users.length + 1,
//       body: body,
//       title: title,
//       done: false,
//     };
//     setUsers([...users, newUser]);
//     setTitle("");
//     setBody("");
//   };
//   const [users, setUsers] = useState([
//     { id: 1, title: "리액트공부", body: "공부하자", done: false },
//     { id: 2, title: "todolist", body: "만들자", done: true },
//   ]);

//   const deleteUserHandler = (id) => {
//     const newUserList = users.filter((user) => user.id !== id);
//     setUsers(newUserList);
//   };
//   const doneUserHandler = (id) => {
//     const newUserList = users.map((user) => {
//       if (user.id == id) {
//         return { ...user, done: !user.done };
//       } else {
//         return { ...user };
//       }
//     });
//     setUsers(newUserList);
//   };

//   return (
//     <div className="mainApp">
//       <h3>My Todo List</h3>
//       <div className="inputbar-style">
//         <div className="inputBar-set">
//           제목 :
//           <input
//             value={title}
//             placeholder="제목을 입력해주세요"
//             // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="inputBar-set">
//           내용 :
//           <input
//             value={body}
//             placeholder="내용을 입력해주세요"
//             // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
//             onChange={(e) => setBody(e.target.value)}
//           />
//         </div>
//         <div className="inputBar-set">
//           <button color="green" onClick={addUserHandler}>
//             추가하기
//           </button>
//         </div>
//       </div>
//       <div className="body-style">
//         <div className="bodyLayout1">
//           <h1> Working - 🔥 </h1>
//           <div className="Working-style">
//             {users.map((user) => {
//               if (user.done === false) {
//                 return (
//                   <User
//                     handleDelete={deleteUserHandler}
//                     handleDone={doneUserHandler}
//                     user={user}
//                     key={user.id}
//                   ></User>
//                 );
//               } else {
//                 return null;
//               }
//             })}
//           </div>
//         </div>
//         <div className="bodyLayout1">
//           <h1> Done - ☘️ </h1>
//           <div className="Done-style">
//             {users.map((user) => {
//               if (user.done === true) {
//                 return (
//                   <User
//                     handleDelete={deleteUserHandler}
//                     handleDone={doneUserHandler}
//                     user={user}
//                     key={user.id}
//                   ></User>
//                 );
//               } else {
//                 return null;
//               }
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector((state) => state.todoList.todos);
  const addTodo = () => {
    dispatch(
      addBtn({
        id: todos.length + 1,
        body: body,
        title: title,
        isDone: false,
      }),
    );
    setTitle("");
    setBody("");
  };
  const deleteUserHandler = () => {
    const newUserList = todos.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  const doneUserHandler = () => {
    const newUserList = todos.map((user) => {
      if (user.id == id) {
        return { ...user, isDone: !user.isDone };
      } else {
        return { ...user };
      }
    });
  };

  return (
    <div>
      <div className="inputBar-set">
        제목 :
        <input
          value={title}
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputBar-set">
        내용 :
        <input
          value={body}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
          onChange={(e) => setBody(e.target.value)}
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
          {todos.map((user) => {
            if (user.isDone === false) {
              return (
                <Users
                  handleDelete={deleteUserHandler}
                  handleDone={doneUserHandler}
                  user={user}
                  key={user.id}
                ></Users>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
