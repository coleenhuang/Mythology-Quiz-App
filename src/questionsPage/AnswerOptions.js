import React from 'react';

const AnswerOptions  = ({answers, change}) => {
    console.log(answers)
    return (
        <div onChange={change}>
                {answers.map((answer, index) => (
                    <div key={`c${index}`}>
                        <input required type="radio" name='answerOption' id={`r${index}`} value={answer.id}/>
                        <label htmlFor={`r${index}`}>{answer.text}</label>
                    </div>
                ))}
        </div>
    )
}

export default AnswerOptions;