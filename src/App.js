import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Start from './startPage/Start';
import Questions from './questionsPage/Questions'
import Results from './resultsPage/Results'




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
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </ContextProvider>
    </div>
  );
}

export default App;
