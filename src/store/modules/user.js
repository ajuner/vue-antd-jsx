import { getToken, setToken, removeToken } from '@/utils/auth'
import { Login, GetUserInfo, Logout } from '@/api/index'
const state = {
  token: getToken(),
  userInfo: {},
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {

  async login({ commit }, userInfo) {
    try {
      const { data } = await Login(userInfo)
      commit('SET_TOKEN', data)
      setToken(data)
      return data
    } catch (e) {
      return e
    }
  },

  async getUserInfo({ commit }) {
    try {
      const { data } = await GetUserInfo()
      commit('SET_USERINFO', data)
      return data
    } catch (e) {
      return e
    }
  },

  async logout({ commit }) {
    try {
      const res = await Logout()
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
      removeToken()
      return res
    } catch (e) {
      console.log(e)
    }
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
