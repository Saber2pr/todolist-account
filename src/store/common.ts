import {
  GerUserInfoResponse,
  GetConfigResponse,
  GetProductPayments,
} from '@/api/interface'
import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    userInfo: null as GerUserInfoResponse,
    loadingInfo: {
      loading: false,
      text: '',
    },
    config: null as GetConfigResponse,
    payments: [] as GetProductPayments['response'],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setLoading: (state, action) => {
      state.loadingInfo = action.payload
    },
    setConfig: (state, action) => {
      state.config = action.payload
    },
    setPayments: (state, action) => {
      state.payments = action.payload
    },
  },
})

export default commonSlice.reducer
