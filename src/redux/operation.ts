// category
import { instance } from '../service/Api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addProductToBasket } from './basketSlice'

export const getCategoryOfProduct = createAsyncThunk(
  'get/allCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/categories')

      return data
      console.log(rejectWithValue)
    } catch (error) {}
  }
)
export const getProduct = createAsyncThunk(
  'get/allProduct',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/products')

      return data
    } catch (error) {
      console.log(rejectWithValue)
    }
  }
)
///  basket
export const addProductToBasketThunk = createAsyncThunk(
  'addProduct/basket',
  async (product, { dispatch, rejectWithValue }) => {
    try {
      dispatch(addProductToBasket(product))
    } catch (error) {
      console.log(rejectWithValue)
    }
  }
)
