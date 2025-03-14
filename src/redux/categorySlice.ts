import { createSlice } from '@reduxjs/toolkit'
import { getCategoryOfProduct } from './operation'

type Categories = {
  _id: string
  quantity: string
  image: string
  title: string
}

export interface categoryState {
  category: Categories[]
}

const initialState: categoryState = {
  category: []
}

export const categorySlice = createSlice({
  name: 'category',

  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategoryOfProduct.fulfilled, (state, action) => {
      state.category = action.payload
    })
  }
})

export const categoryReducer = categorySlice.reducer
