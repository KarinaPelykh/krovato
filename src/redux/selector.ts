import { categoryState } from './categorySlice'
import { ArrayOfProduct } from './type'

export const categoriesSelector = (state: { category: categoryState }) =>
  state.category.category

export const productSelector = (state: { product: ArrayOfProduct }) =>
  state.product.product

/// product added to  basket

export const basketSelector = (state: { basket: ArrayOfProduct }) =>
  state.basket.product
