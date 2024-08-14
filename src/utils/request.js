/*
 * @Author: Chris
 * @Date: 2024-08-14 01:05:14
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-14 01:30:19
 * @Descripttion: **
 */
import axios from 'axios'

import { Message } from 'element-ui'
import { useUserStore } from '@/stores'
import { getToken, logout } from '@/utils/auth'
import router from '@/router'

const baseURL = ''

// create an axios instance
const service = axios.create({
  baseURL, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  (response) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code === 20000) {
      return res
    }
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      Message({
        message: '登录过期，请重新登录',
        // message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // store.dispatch('user/logout')
      logout()
      // 跳转登录页
    } else {
      Message({
        message: res.msg || '服务异常',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res)
    }
  },
  (error) => {
    if (error.message?.status === 401) {
      router.push('/login')
    }
    console.log('err' + error) // for debug
    Message({
      message: error.response.data.message || '服务异常',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

export { baseURL }
