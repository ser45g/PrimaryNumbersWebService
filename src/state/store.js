import { configureStore } from "@reduxjs/toolkit";

import PrimaryNumbersReducer from './slices/primaryNumbersSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'persistedPrimaryNumbers',
  storage,
};


const persistedPrimaryNumbersReducer = persistReducer(persistConfig, PrimaryNumbersReducer );


export const store = configureStore({
  reducer:{
    primaryNumbers: persistedPrimaryNumbersReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);