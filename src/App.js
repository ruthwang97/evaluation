import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import Scroll from "./scroll"
export const FontColorContext = React.createContext("'Source Sans Pro', Arial, sans-serif");
function App() {

  return (
    <FontColorContext.Provider value = "'Source Sans Pro', Arial, sans-serif">
      <Scroll />
    </FontColorContext.Provider>
  );
}

export default App;
