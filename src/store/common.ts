import { GerUserInfoResponse } from '@/api/interface'
import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    userInfo: null as GerUserInfoResponse,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export default commonSlice.reducer
