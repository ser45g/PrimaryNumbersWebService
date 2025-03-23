import { configureStore } from "@reduxjs/toolkit";

import PrimaryNumbersReducer from './slices/primaryNumbersSlice';


export const store = configureStore({
  reducer:{
    primaryNumbers: PrimaryNumbersReducer
  },
  devTools:true
});