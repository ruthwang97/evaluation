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
      {/* <Header /> */}
      <Scroll />
      
      {/* <Switch>
        <Route path = "/todolist" exact>
          <TodoList />
        </Route>
        <Route path = "/todo/:id" exact>
          <TodoPage />
        </Route>
        <Route path = "/counter" exact>
          
        </Route>
        <Route path = "/search" exact>
          
        </Route>
        <Route  path = "*">

        </Route>
      </Switch> */}
    </>
  );
}

export default App;
