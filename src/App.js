import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';


export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">  
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}


