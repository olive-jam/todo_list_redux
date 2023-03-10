import React, { useState } from "react";
import "./App.css"; // ð¥ ë°ëì App.css íì¼ì import í´ì¤ì¼ í©ëë¤.
import User from "./components/User";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      body: body,
      title: title,
      done: false,
    };
    setUsers([...users, newUser]);
    setTitle("");
    setBody("");
  };
  const [users, setUsers] = useState([
    { id: 1, title: "ë¦¬ì¡í¸ê³µë¶", body: "ê³µë¶íì", done: false },
    { id: 2, title: "todolist", body: "ë§ë¤ì", done: true },
  ]);

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  const doneUserHandler = (id) => {
    const newUserList = users.map((user) => {
      if (user.id == id) {
        return { ...user, done: !user.done };
      } else {
        return { ...user };
      }
    });
    setUsers(newUserList);
  };

  return (
    <div className="mainApp">
      <h3>My Todo List</h3>
      <div className="inputbar-style">
        <div className="inputBar-set">
          ì ëª© :
          <input
            value={title}
            placeholder="ì ëª©ì ìë ¥í´ì£¼ì¸ì"
            // ì¸í ì´ë²¤í¸ë¡ ë¤ì´ì¨ ìë ¥ ê°ì nameì ê°ì¼ë¡ ìë°ì´í¸
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputBar-set">
          ë´ì© :
          <input
            value={body}
            placeholder="ë´ì©ì ìë ¥í´ì£¼ì¸ì"
            // ì¸í ì´ë²¤í¸ë¡ ë¤ì´ì¨ ìë ¥ ê°ì ageì ê°ì¼ë¡ ìë°ì´í¸
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="inputBar-set">
          <button color="green" onClick={addUserHandler}>
            ì¶ê°íê¸°
          </button>
        </div>
      </div>
      <div className="body-style">
        <div className="bodyLayout1">
          <h1> Working - ð¥ </h1>
          <div className="Working-style">
            {users.map((user) => {
              if (user.done === false) {
                return (
                  <User
                    handleDelete={deleteUserHandler}
                    handleDone={doneUserHandler}
                    user={user}
                    key={user.id}
                  ></User>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="bodyLayout1">
          <h1> Done - âï¸ </h1>
          <div className="Done-style">
            {users.map((user) => {
              if (user.done === true) {
                return (
                  <User
                    handleDelete={deleteUserHandler}
                    handleDone={doneUserHandler}
                    user={user}
                    key={user.id}
                  ></User>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
