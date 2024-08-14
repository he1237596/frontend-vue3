/*
 * @Author: Chris
 * @Date: 2024-08-14 01:21:23
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-14 01:24:41
 * @Descripttion: **
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserStore = defineStore('user', () => {
  const token = ref('')
  const getToken = () => {
    return token.value
  }
  const setToken = (token) => {
    token.value = token
  }

  const logout = () => {
    token.value = ''
  }

  return { getToken, setToken, logout }
})

export default useUserStore
