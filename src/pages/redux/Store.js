import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './slices/AppSlices'
import bookSlice  from './slices/BookSlice'
import basketSlice  from './slices/BasketSlices'

export const store = configureStore({
  reducer: {
    app: appSlice,
    book: bookSlice,
    basket: basketSlice
  },
  devTools:process.env.NODE_ENV !=="production",
})