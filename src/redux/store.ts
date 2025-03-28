import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from './categorySlice'
import { productReducer } from './productSlice'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { basketReducer } from './basketSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  basket: basketReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
