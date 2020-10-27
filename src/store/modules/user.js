import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  userInfo: {},
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {

  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', 'default')
      setToken('default')
      if(username&&password) {
          resolve()
      } else {
          reject('need username and passsword')
      }
      resolve()
      //request login
    })
  },

  logout({ commit }) {
    return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
        //request logout
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
