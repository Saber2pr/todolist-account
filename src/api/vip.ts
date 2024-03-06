import { message } from 'antd'
import { getConfig } from './common'
import { GetProductCheckoutResponse, GetProductResponse } from './interface'
import { ApiUrls, request } from './request'

export const getProduct = async () => {
  const config = await getConfig()
  const todolistProductId = config?.data?.attributes?.todolistProductId

  if (!todolistProductId) {
    message.error('Product Not Found')
    return
  }

  const res = await request.get<GetProductResponse>(
    `${ApiUrls.vipGetProduct}/${todolistProductId}`,
  )

  return res.data
}

export const getProductCheckout = async () => {
  const config = await getConfig()
  const todolistProductId = config?.data?.attributes?.todolistProductId

  if (!todolistProductId) {
    message.error('Product Not Found')
    return
  }

  const res = await request.get<GetProductCheckoutResponse>(
    `${ApiUrls.vipGetProductCheckout}/${todolistProductId}`,
  )

  return res.data
}
