import axios from 'axios'
import { createVNode } from 'vue'
import { Modal, Message } from 'ant-design-vue'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.state.user?.token) {
      config.headers['Key'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code !== 200) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })

        if (res === 403) {
            Modal.confirm({
                title: 'warning',
                icon: createVNode(ExclamationCircleOutlined),
                content: 'quit',
                onOk() {
                    return new Promise((resolve) => {
                        setTimeout(()=>{
                            store.dispatch('user/logout')
                            resolve()
                            location.reload()
                        }, 1000);
                    })
                }
            })
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )

  export function postData(url, data) {
      return service.post(url, {
          data: data
      })
  }

  export function getData(url, params) {
      return service.get(url, {
          params: params
      })
  }