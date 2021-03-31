import React, {useState, useContext, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import QuestionForm from './QuestionForm';
import {Context } from './store';

const Quiz = () => {
    const [state, dispatch] = useContext(Context);
    const [questionIndex, setIndex] = useState(0);
    const {type} = useParams();
    useEffect(() => {
        if (state.questions.length === 0) {
            dispatch({
                type: 'SET_TYPE',
                payload: type
            })
        }
    }, [])
    return (
        <div>
            <QuestionForm index={questionIndex}/>
        </div>
    )

}

export default Quiz;