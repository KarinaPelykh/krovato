import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from './operation'
import { ArrayOfProduct } from './type'

const initialState: ArrayOfProduct = {
  product: [],
  favorite: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductToFavorite: (state, action) => {
      state.favorite?.push(action.payload)
    }
  },
  extraReducers: builder => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload
    })
  }
})
export const { addProductToFavorite } = productSlice.actions
export const productReducer = productSlice.reducer
