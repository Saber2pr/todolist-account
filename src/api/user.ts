import { request } from './request'

export const getUserInfo = async () => {
  const res = await request.get(`/api/users/me`)

  return res.data
}
