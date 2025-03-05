import React from "react";
import "./nav.scss";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Trang chủ
      </NavLink>
      <NavLink to="/todo" className={({ isActive }) => (isActive ? "active" : "")}>
        Todo
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        Giới thiệu
      </NavLink>
      </nav>
    );
  }
}
export default Nav;
