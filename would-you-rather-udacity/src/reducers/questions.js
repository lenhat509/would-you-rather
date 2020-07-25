import { actions } from '../actions/shared'

export default function questions(state={}, action) {
    switch(action.type) {
        case actions.populateQuestions:
            return {
                ...state,
                ...action.questions
            }
        case actions.updateQuestionAnswer:
            const {qid, authedUser, answer} = action
            return {
                ...state,
                [qid] : {
                    ...state[qid],
                    [answer] : {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        case actions.updateQuestionNew:
            const {question} = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}