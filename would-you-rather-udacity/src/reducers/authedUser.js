import { actions } from '../actions/shared'

export default function authedUser(state = null, action) {
    switch(action.type) {
        // case actions.populateAuthedUser:
        //     return action.authedUser
        case actions.logout:
            return null
        case actions.login:
            return action.id
        default:
            return state
    }
}