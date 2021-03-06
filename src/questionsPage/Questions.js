import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AnswerOptions from './AnswerOptions';
import {useHistory} from 'react-router-dom';

const Questions = ({questionList, addAnswer}) => {
    let history = useHistory();
    const [questionIndex, setIndex] = useState(0);
    const [selectedAnswer, setAnswer] = useState();
    let q = questionList[questionIndex]

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }
    const next = () => {
        if (questionIndex + 1 === questionList.length){
            history.push('/results')
        }
        else{
            setIndex(questionIndex + 1)
        }
        
    }
    const submitAnswer = (event) => {
        event.preventDefault();
        addAnswer(q.id, parseInt(selectedAnswer))
        next()
    }
    
    const renderForm = () => {
        if (questionList.length === 0) {
            return null
        }
        
        return (
            <form onSubmit={submitAnswer}>
            <h2>{q.questionText}</h2>
            <AnswerOptions answers={q.options} change={handleChange}/>
            <button type='submit'>Next</button>
            </form>
        )
    }
    
    return (
        <div>
            {renderForm()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        questionList: state.questionList
    }
}

export default connect(mapStateToProps, actions)(Questions);