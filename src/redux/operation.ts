// category
import { instance } from '../service/Api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addProductToBasket } from './basketSlice'
import { addProductToFavorite } from './productSlice'
import { Product } from './type'

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
  async (product: Product, { dispatch, rejectWithValue }) => {
    try {
      dispatch(addProductToBasket(product))
    } catch (error) {
      console.log(rejectWithValue)
    }
  }
)
///favorite
export const addProductInFavoriteThunk = createAsyncThunk(
  'add/favorite',
  async (product: Product, { dispatch, rejectWithValue }) => {
    try {
      dispatch(addProductToFavorite(product))
    } catch (error) {
      console.log(rejectWithValue)
    }
  }
)
