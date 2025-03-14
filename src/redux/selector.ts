import { categoryState } from './categorySlice'

export const categoriesSelector = (state: { category: categoryState }) =>
  state.category.category

export const productSelector = state => state.product.product
