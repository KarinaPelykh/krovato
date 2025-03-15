// category
import { instance } from '../service/Api'
import { createAsyncThunk } from '@reduxjs/toolkit'

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
