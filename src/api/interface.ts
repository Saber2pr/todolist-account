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
