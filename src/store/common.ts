import {
  GerUserInfoResponse,
  GetConfigResponse,
  GetProductCheckoutResponse,
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
    product: null as GetProductCheckoutResponse,
    config: null as GetConfigResponse,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setLoading: (state, action) => {
      state.loadingInfo = action.payload
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setConfig: (state, action) => {
      state.config = action.payload
    },
  },
})

export default commonSlice.reducer
