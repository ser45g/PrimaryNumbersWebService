import { configureStore } from "@reduxjs/toolkit";

import PrimaryNumbersReducer from './slices/primaryNumbersSlice';
import  AppColorModeReducer  from "./slices/appColorModeSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistPrimaryNumbersConfig = {
  key: 'persistedPrimaryNumbers',
  storage,
};

const persistAppColorModeConfig={
  key: 'persistedAppColorMode',
  storage
}


const persistedPrimaryNumbersReducer = persistReducer(persistPrimaryNumbersConfig, PrimaryNumbersReducer );

const persistedAppColorModeReducer = persistReducer(persistAppColorModeConfig, AppColorModeReducer );

export const store = configureStore({
  reducer:{
    primaryNumbers: persistedPrimaryNumbersReducer,
    appColorMode:
      persistedAppColorModeReducer
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