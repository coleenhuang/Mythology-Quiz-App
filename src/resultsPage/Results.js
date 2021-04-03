import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import AnswerKey from './AnswerKey';


const Results = ({answerList, questionList}) => {
    const [score, setScore] = useState(0);
   
    return (
        <div>
            Results
            Score: {score}
            {
                answerList.map((answer, index) => {
                    let q = questionList.find(question => question.id === answer.questionId);
                    let correctAnswer = q.options.find(a => a.id === q.correct).text
                    let correct = q.correct === answer.answerId
                    return <AnswerKey questionText={q.questionText} correct={correct} correctAnswer={correctAnswer} addScore={setScore} score={score}/>
                   })
            }
            <button>Reset</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        answerList: state.answerList,
        questionList: state.questionList
    }
}

export default connect(mapStateToProps)(Results);