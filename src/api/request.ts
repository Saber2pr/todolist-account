import { message } from 'antd'
import axios, { AxiosError } from 'axios'

const tokenKey = 'token'

export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const clearToken = () => localStorage.removeItem(tokenKey)
export const getToken = () => localStorage.getItem(tokenKey)

const request = axios.create({
  baseURL: 'https://strapi.saber2pr.top',
})

request.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.setAuthorization(`Bearer ${getToken()}`)
  }
  return config
})

request.interceptors.response.use(
  (res) => {
    return res
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      message.error('You have been logged out due to inactivity')
      clearToken()
      location.hash = '/login'
    }
  },
)

export { request }
