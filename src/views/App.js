import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { MyComponent } from "./Example/myClass";
import TodoList from "./TodoApp/todoList";
import Home from "./Example/home";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Nav from "./Example/Nav/nav";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router> {/* Dùng Router để bọc toàn bộ ứng dụng */}
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home /> */}
          <Routes> {/* Phải đặt Route bên trong Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/about" element={<MyComponent />} />
          </Routes>
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
    </Router>
  );
}


export default App;
