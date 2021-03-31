import React from 'react';
import {Switch, Route } from 'react-router-dom';
import {ContextProvider} from './store'
import Header from './Header';
import './App.css';
import Start from './Start';
import Questions from './Questions';


function App() {
  return (
    <div className="App">
      <Header />
    <ContextProvider>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/questions/:type">
          <Questions />
        </Route>
      </Switch>
    </ContextProvider>
    </div>
  );
}

export default App;
