import {
  GerUserInfoResponse,
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
  },
})

export default commonSlice.reducer
