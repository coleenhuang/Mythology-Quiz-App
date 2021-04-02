import React from 'react';
import { connect } from 'react-redux';

const Results = ({answerList}) => {
    console.log(answerList)
    return (
        <div>
            Results
            <button>Reset</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        answerList: state.answerList
    }
}

export default connect(mapStateToProps)(Results);