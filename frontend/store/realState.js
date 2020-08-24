import { resourceRealty } from '~/constants/api'
import ErrorReporter from '~/constants/errorHandling'

export const state = () => {
  return {
    realState: {},
    realStates: [],
    currentPage: 0,
    total: 0,
    rows: 0,
  }
}

export const mutations = {
  setRealState(state, value) {
    state.realState = value
  },
  setRealStates(state, value) {
    state.realStates = value
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
      const { data } = await this.$axios.get(resourceRealty, {
        filters: payload,
      })
      commit('setRealStates', data.data)
      commit('setCurrentPage', data.current_page)
      commit('setTotalPage', data.last_page)
      commit('setTotalRows', data.total)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async show({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(resourceRealty, { id: payload })
      commit('setRealState', data.data)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async add(_, payload) {
    try {
      return await this.$axios.post(resourceRealty, payload)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async update({ commit }, payload) {
    try {
      const { data } = await this.$axios.put(
        `${resourceRealty}/${payload.id}`,
        payload
      )
      commit('setRealState', data.data)
    } catch (e) {
      return ErrorReporter(e)
    }
  },
  async destroy({ dispatch }, id) {
    try {
      await this.$axios.delete(`${resourceRealty}/${id}`)
      dispatch('list')
    } catch (e) {
      return ErrorReporter(e)
    }
  },
}

export const getters = {
  list(state) {
    return state.realStates.map((el) => {
      let address =
        `${el.street}, ` +
        (['', null, undefined].indexOf(el.number) > -1
          ? ''
          : `${el.number}, `) +
        (['', null, undefined].indexOf(el.complement) > -1
          ? ''
          : `${el.complement}, `) +
        `${el.district}, ${el.city}, ${el.state}, ${el.zip_code}`

      return {
        id: el.id,
        email: el.email,
        address,
        status: el.contract,
      }
    })
  },
}
