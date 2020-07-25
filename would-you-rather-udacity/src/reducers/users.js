import { actions } from '../actions/shared'

export default function users(state={}, action){
    switch(action.type) {
        case actions.populateUsers:
            return {
                ...state,
                ...action.users
            }
        case actions.updateQuestionAnswer:
            {
            const {qid, authedUser, answer} = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        }
        case actions.updateUserQuestion:
            {
            const {author, qid} = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([qid])
                }
            }
        }
        default:
            return state
    }
}