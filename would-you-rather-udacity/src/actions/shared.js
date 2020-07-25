import * as API from '../utils/api'
import {populateQuestions, updateQuestionNew} from './questions'
import {populateUsers, updateUserQuestion} from './users'
import {populateAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'
import { shallowEqual } from 'react-redux'
const AUTH_USER='sarahedo'

export const actions = {
    populateUsers : 'populateUsers',
    populateQuestions : 'populateQuestion',
    populateAuthedUser : 'populateAuthedUser',
    updateQuestionAnswer: 'updateQuestionAnswer',
    updateUserQuestion: 'updateUserQuestion',
    updateQuestionNew: 'updateQuestionNew',
    logout: 'logout',
    login: 'login'
}
export const updateQuestionAnswer = (qid, authedUser, answer) => ({
    type: actions.updateQuestionAnswer,
    qid,
    authedUser,
    answer
})

export const getData = () =>{
    return (dispatch) => {
        dispatch(showLoading())
        API.getData()
        .then( ({users, questions }) => {
            dispatch(populateUsers(users))
            dispatch(populateQuestions(questions))
            dispatch(populateAuthedUser(AUTH_USER))
            dispatch(hideLoading())
        })
    }
}

export const answerPoll = ({qid, authedUser, answer})=> {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(updateQuestionAnswer(qid, authedUser, answer))
        API.saveQuestionAnswer({qid, authedUser, answer}).then( res => dispatch(hideLoading()))
    }
}

export const createNewQuestion = (question) => {
    return (dispatch)=> {
        dispatch(showLoading())
        API.saveQuestion(question)
        .then( question => {
            dispatch(updateUserQuestion(question.author, question.id))
            dispatch(updateQuestionNew(question))
            dispatch(hideLoading())
        })
    }
}