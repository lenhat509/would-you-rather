import { actions } from './shared'

export const startLoading = () => ({
    type: actions.startLoading
})

export const finishLoading = () => ({
    type: actions.finishLoading
})