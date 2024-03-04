import { GetProductCheckoutResponse, GetProductResponse } from './interface'
import { ApiUrls, request } from './request'

export const getProduct = async (productId: string) => {
  const res = await request.get<GetProductResponse>(
    `${ApiUrls.vipGetProduct}/${productId}`,
  )

  return res.data
}

export const getProductCheckout = async (productId: string) => {
  const res = await request.get<GetProductCheckoutResponse>(
    `${ApiUrls.vipGetProductCheckout}/${productId}`,
  )

  return res.data
}
