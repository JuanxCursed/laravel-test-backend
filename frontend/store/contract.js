import { resourceContract } from '~/constants/api'
import ErrorReporter from '~/constants/errorHandling'

export const state = () => {
  return {
    contract: {},
    contracts: [],
    currentPage: 0,
    total: 0,
    rows: 0,
  }
}

export const mutations = {
  setContract(state, value) {
    state.contract = value
  },
  setContracts(state, value) {
    state.contracts = value
  },
  setCurrentPage(state, value) {
    state.currentPage = value
  },
  setTotalPage(state, value) {
    state.total = value
  },
  setTotalRows(state, value) {
    state.rows = value
  },
}

export const actions = {
  async list({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(resourceContract, {
        filters: payload,
      })
      commit('setContracts', data.data)
      commit('setCurrentPage', data.current_page)
      commit('setTotalPage', data.last_page)
      commit('setTotalRows', data.total)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async show({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(resourceContract, { id: payload })
      commit('setContract', data.data)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async add(_, payload) {
    try {
      return await this.$axios.post(resourceContract, payload)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async update({ commit }, payload) {
    try {
      const { data } = await this.$axios.put(
        `${resourceContract}/${payload.id}`,
        payload
      )
      commit('setContract', data.data)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async destroy({ dispatch }, id) {
    try {
      await this.$axios.delete(`${resourceContract}/${id}`)
      dispatch('list')
    } catch (e) {
      return ErrorReporter(e)
    }
  },
}

export const getters = {
  list(state) {
    return state.contracts
  },
}
