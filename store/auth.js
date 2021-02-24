export const state = () => ({
  requestToken: () => {
    return (process.browser)
      ? localStorage.getItem('requestToken') || false
      : false
  },
  sessionId: () => {
    return (process.browser)
      ? localStorage.getItem('sessionId') || false
      : false
  }
})

export const mutations = {
  authSuccess (state, requestToken, sessionId) {
    if (process.browser) {
      localStorage.setItem('requestToken', requestToken)
      localStorage.setItem('sessionId', sessionId)
    }
    state.requestToken = requestToken
    state.sessionId = sessionId
  },
  logout (state) {
    if (process.browser) {
      localStorage.removeItem('requestToken')
      localStorage.removeItem('sessionId')
    }
    state.requestToken = false
    state.sessionId = false
  }
}

export const actions = {
  login ({ commit, dispatch }, requestToken, sessionId) {
    commit('authSuccess', requestToken, sessionId)
  },
  logout ({ commit }) {
    commit('logout')
  }
}
