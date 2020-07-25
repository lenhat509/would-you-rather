import { actions } from './shared'

export const populateQuestions = (questions) => ({
    type: actions.populateQuestions,
    questions
})

export const updateQuestionNew = (question)=> ({
    type: actions.updateQuestionNew,
    question
})
