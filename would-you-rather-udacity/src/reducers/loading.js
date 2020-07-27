import { actions } from '../actions/shared'

export default function loading(state = true, action) {
    switch(action.type) {
        case actions.finishLoading:
            return false
        case actions.startLoading:
            return true
        default:
            return state
    }
}