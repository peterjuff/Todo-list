import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./index.css";

const destination = document.querySelector("#container");

React.render(
  <div>
    <TodoList />
  </div>,
  destination
);
