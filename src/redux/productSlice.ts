import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from './operation'

export type Product = {
  _id: string
  image: string
  size: string
  title: string
  isAvailable: string
  price: string
  sale: string
}

export interface productState {
  product: Product[]
}

const initialState: productState = {
  product: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload
    })
  }
})

export const productReducer = productSlice.reducer
