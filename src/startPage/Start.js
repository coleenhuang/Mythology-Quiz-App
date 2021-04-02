import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Start = ({questionList, resetQuestions, fetchQuestions}) => {
    useEffect(() => {
        if (questionList.length !== 0) {
            resetQuestions()
        }
    }, [])
    
    return (
        <div>
            <h2>How much do you know about mythology?</h2>
            <button onClick={() => fetchQuestions('greek')}>
                <Link to={`/questions/greek`}>Greek and Roman</Link>
            </button>
            <button onClick={() => fetchQuestions('norse')}>
                <Link to={`/questions/norse`}>Norse</Link>
            </button>    
        </div>
    )
}

function mapStateToProps(state) {
    return {
      questionList: state.questionList
    }
}

export default connect(mapStateToProps, actions)(Start);