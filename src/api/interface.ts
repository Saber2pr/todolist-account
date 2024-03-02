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
