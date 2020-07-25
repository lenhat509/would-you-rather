import { actions } from '../actions/shared'

export default function loading(state = true, action) {
    switch(action.type) {
        case actions.populateAuthedUser:
            return false
        default:
            return state
    }
}