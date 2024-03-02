import {
  GerUserInfoResponse,
  LoginUserParams,
  LoginUserResponse,
  RegisterUserParams,
  RegisterUserResponse,
} from './interface'
import { request } from './request'

export const getUserInfo = async () => {
  const res = await request.get<GerUserInfoResponse>(`/api/users/me`)

  return res.data
}

export const registerUser = async (body: RegisterUserParams) => {
  const res = await request.post<RegisterUserResponse>(
    `/api/auth/local/register`,
    body,
  )

  return res.data
}

export const loginUser = async (body: LoginUserParams) => {
  const res = await request.post<LoginUserResponse>(`/api/auth/local`, body)

  return res.data
}
