import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import authentication from 'react-azure-adb2c'
import HomePage from './HomePage'
import MembersArea from './MembersArea'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/private" component={authentication.required(MembersArea)} />
      </Switch>
    </Router>
  );
}

export default App;
