import { _getUsers , _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA'

export const getData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({ users, questions }))
}

export const saveQuestion = (question) => {
    return _saveQuestion(question)
}

export const saveQuestionAnswer = (info) => {
    return _saveQuestionAnswer(info)
}