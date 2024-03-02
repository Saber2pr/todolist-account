import { message } from 'antd'
import axios, { AxiosError } from 'axios'

const tokenKey = 'token'

const request = axios.create({
  baseURL: 'https://strapi.saber2pr.top',
})

request.interceptors.request.use((config) => {
  config.headers.setAuthorization(localStorage.getItem(tokenKey))
  return config
})

request.interceptors.response.use(
  (res) => {
    return res
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      message.error('You have been logged out due to inactivity')
      localStorage.removeItem(tokenKey)
      location.hash = '/login'
    }
  },
)

export { request }
