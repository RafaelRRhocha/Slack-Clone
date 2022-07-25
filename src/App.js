import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import { Login } from './pages/Login';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}
