import React, {useEffect} from 'react';
import {useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../actions'

const Questions = ({questionList}) => {
    return (
        <div>Questions</div>
    )
}

function mapStateToProps(state) {
    return {
        questionList
    }
}

export default Questions;