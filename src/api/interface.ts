export interface RegisterUserParams {
  username: string
  password: string
  email: string
}
export interface RegisterUserResponse {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    level: number
    createdAt: string
    updatedAt: string
  }
}

export interface LoginUserParams {
  identifier: string
  password: string
}

export interface LoginUserResponse {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    level: number
    createdAt: string
    updatedAt: string
  }
}

export interface GerUserInfoResponse {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  level: number
  createdAt: string
  updatedAt: string
}

export interface ForgotPwdParams {
  email: string
}

export interface ForgotPwdResponse {}

export interface ResetPwdParams {
  code: string
  password: string
  passwordConfirmation: string
}

export interface ResetPwdResponse {}
