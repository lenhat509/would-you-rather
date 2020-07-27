import * as API from '../utils/api'
import {populateQuestions, updateQuestionNew} from './questions'
import {populateUsers, updateUserQuestion} from './users'
import { startLoading, finishLoading } from './loading'
import {showLoading, hideLoading} from 'react-redux-loading'


export const actions = {
    populateUsers : 'populateUsers',
    populateQuestions : 'populateQuestion',
    startLoading: 'startLoading',
    finishLoading: 'finishLoading',
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
        dispatch(startLoading())
        API.getData()
        .then( ({users, questions }) => {
            dispatch(populateUsers(users))
            dispatch(populateQuestions(questions))
            // dispatch(populateAuthedUser(AUTH_USER))
            dispatch(finishLoading())
            dispatch(hideLoading())
        })
    }
}

export const answerPoll = ({qid, authedUser, answer})=> {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(startLoading())
        dispatch(updateQuestionAnswer(qid, authedUser, answer))
        API.saveQuestionAnswer({qid, authedUser, answer}).then( res => {
            dispatch(finishLoading())
            dispatch(hideLoading())
        })
    }
}

export const createNewQuestion = (question) => {
    return (dispatch)=> {
        dispatch(showLoading())
        dispatch(startLoading())
        API.saveQuestion(question)
        .then( question => {
            dispatch(updateUserQuestion(question.author, question.id))
            dispatch(updateQuestionNew(question))
            dispatch(finishLoading())
            dispatch(hideLoading())
        })
    }
}