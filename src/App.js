import React, { useState } from 'react';
import ButtonCounter from './Components/HOC/ButtonCounter'
import HoverCounter from './Components/HOC/HoverCounter'
import './App.css';
import Main from './Components/JsonPlaceHolder/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Users from './Components/JsonPlaceHolder/Users';
import Photos from './Components/JsonPlaceHolder/Photos';
import Todo from './Components/JsonPlaceHolder/Todo';
import Errors from './Components/JsonPlaceHolder/Errors';

function App() {
  return (
    <div className="App bg">
      <br />
      <br />
      <br />
      <h2 className="text-success">JsonPlaceHolder Examples</h2>

      <BrowserRouter>

        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/users" component={Users} />
          <Route path="/photos" component={Photos} />
          <Route path="/todo" component={Todo} />
          <Route component={Errors} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
