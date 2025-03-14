import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from './operation'

const initialState = {
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
