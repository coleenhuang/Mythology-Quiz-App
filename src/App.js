import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import './App.css';
import Start from './startPage/Start';
import Questions from './questionsPage/Questions'
import Results from './resultsPage/Results'


function App({questionList}) {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/questions/:type">
          {questionList.length === 0 ? <Redirect to='/' /> : <Questions />}
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList
  }
}

export default connect(mapStateToProps)(App);
