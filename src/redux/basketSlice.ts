import { createSlice } from '@reduxjs/toolkit'
import { ArrayOfProduct } from './type'

const initialState: ArrayOfProduct = {
  product: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.product.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter(item => item._id !== action.payload)
    }
  }
})

export const { addProductToBasket, deleteProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer
