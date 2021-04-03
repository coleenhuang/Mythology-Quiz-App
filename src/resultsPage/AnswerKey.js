import React, {useEffect} from 'react';


const AnswerKey = ({questionText, correct, correctAnswer, addScore, score}) => {
    useEffect(() => {
        if (correct) {
            addScore(score + 1)
        }
    }, [])
    return( 
        <div>
            <p>AnswerKey</p>
            <p>{questionText}</p>
            <p>{correct?'Correct':'Incorrect'}</p>
            <p>Correct Answer: {correctAnswer}</p>

        </div>)
}

export default AnswerKey;