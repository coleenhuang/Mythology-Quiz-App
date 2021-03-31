import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Start from './Start';
import Questions from './Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/questions/:type">
          <Questions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
