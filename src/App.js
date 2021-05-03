import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import TodoList from './component/todolist/todoList'
import Header from './component/header/header'
import TodoPage from './component/todolist/todoPage'
import { Link, animateScroll as scroll } from "react-scroll";
import Scroll from "./scroll"
function App() {
  return (
    <>
      <Scroll />
    </>
  );
}

export default App;
