import { actions } from './shared'

export const populateAuthedUser = (authedUser) => ({
    type: actions.populateAuthedUser,
    authedUser
})

export const userLogout = ()=> ({
    type: actions.logout
})

export const login = (id) => ({
    type: actions.login,
    id
})