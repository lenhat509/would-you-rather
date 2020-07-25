import { actions } from './shared'

export const populateUsers = (users) => ({
    type: actions.populateUsers,
    users
})

export const updateUserQuestion = (author, qid) => ({
    type: actions.updateUserQuestion,
    author,
    qid  
})