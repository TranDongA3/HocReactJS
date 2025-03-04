import React from "react";
import logo from "./logo.svg";
import "./App.scss";

// import {MyComponent} from "./Example/myClass";
import TodoList from "./TodoApp/todoList";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Making Todo-APP with Xuan Dong</p>

        {/* <MyComponent></MyComponent> */}
        <TodoList></TodoList>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
