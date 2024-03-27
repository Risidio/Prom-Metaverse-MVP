import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import { authApi } from "./auth/api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware),
  devTools: true, // dev tools added
});
