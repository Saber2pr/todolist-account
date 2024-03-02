import {
  ForgotPwdParams,
  ForgotPwdResponse,
  GerUserInfoResponse,
  LoginUserParams,
  LoginUserResponse,
  RegisterUserParams,
  RegisterUserResponse,
  ResetPwdParams,
  ResetPwdResponse,
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

export const forgotPwd = async (body: ForgotPwdParams) => {
  const res = await request.post<ForgotPwdResponse>(
    `/api/auth/forgot-password`,
    body,
  )

  return res.data
}

export const resetPwd = async (body: ResetPwdParams) => {
  const res = await request.post<ResetPwdResponse>(
    `/api/auth/reset-password`,
    body,
  )

  return res.data
}
