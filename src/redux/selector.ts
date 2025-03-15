import { categoryState } from './categorySlice'
import { productState } from './productSlice'

export const categoriesSelector = (state: { category: categoryState }) =>
  state.category.category

export const productSelector = (state: { product: productState }) =>
  state.product.product
