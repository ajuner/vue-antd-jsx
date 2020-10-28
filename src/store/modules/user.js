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
      const userInfo = {
        username: 'admin', 
        password: '123456', 
        name: 'Admin',
        menu: [{
          name: 'menu',
          children: [
            {
              name: 'dashboard',
              children:[]
            },
            {
              name: 'tool',
              children:[]
            },
            {
              name: 'table',
              children:[]
            }
          ]
        }]
      }
      commit('SET_USERINFO', userInfo)
      resolve(userInfo)
    })
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      //request logout
      location.reload()
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
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
