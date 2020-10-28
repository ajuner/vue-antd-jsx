import { getToken, setToken, removeToken } from '@/utils/auth'

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

  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      //request login
      commit('SET_TOKEN', 'default')
      setToken('default')
      if(username&&password) {
          resolve()
      } else {
          reject('need username and passsword')
      }
    })
  },

  getUserInfo({ commit }) {
    return new Promise((resolve) => {
      //request login
      commit('SET_USERINFO', {username: 'admin', password: '123456', name: 'Admin'})
      resolve()
    })
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      //request logout
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
