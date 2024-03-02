import { RegisterUserParams, RegisterUserResponse } from './interface'
import { request } from './request'

export const getUserInfo = async () => {
  const res = await request.get(`/api/users/me`)

  return res.data
}

export const registerUser = async (body: RegisterUserParams) => {
  const res = await request.post<RegisterUserResponse>(
    `/api/auth/local/register`,
    body,
  )

  return res.data
}
