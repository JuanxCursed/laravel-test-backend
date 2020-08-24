export const state = () => {
  return {
    pageTitle: 'Teste de Laravel',
  }
}

export const mutations = {
  setPageTitle(state, payload) {
    state.pageTitle = payload
  },
}
export const actions = {
  setPageTitle({ commit }, payload) {
    commit('setPageTitle', payload)
  },
}
export const getters = {}
