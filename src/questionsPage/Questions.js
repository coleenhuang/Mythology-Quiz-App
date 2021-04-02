import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Questions = ({questionList}) => {
    return (
        <div>Questions</div>
    )
}

function mapStateToProps(state) {
    return {
        questionList: state.questionList
    }
}

export default connect(mapStateToProps, actions)(Questions);