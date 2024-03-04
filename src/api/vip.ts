import { GetProductCheckoutResponse, GetProductResponse } from './interface'
import { ApiUrls, VipProducts, request } from './request'

export const getProduct = async () => {
  const res = await request.get<GetProductResponse>(
    `${ApiUrls.vipGetProduct}/${VipProducts.TodolistTreeViewPro}`,
  )

  return res
}

export const getProductCheckout = async () => {
  const res = await request.get<GetProductCheckoutResponse>(
    `${ApiUrls.vipGetProductCheckout}/${VipProducts.TodolistTreeViewPro}`,
  )

  return res
}
