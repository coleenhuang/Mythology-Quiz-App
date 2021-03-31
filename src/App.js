import React from 'react';
import {Switch, Route } from 'react-router-dom';
import {ContextProvider} from './store'
import Header from './Header';
import './App.css';
import Start from './Start';
import Questions from './Questions';
import Check from './Check';



function App() {
  return (
    <div className="App">
      <Header />
    <ContextProvider>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/questions/:num">
          <Questions />
        </Route>
        <Route path="/check/:num">
          <Check /> 
        </Route>
      </Switch>
    </ContextProvider>
    </div>
  );
}

export default App;
