import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,  // Auth için reducer ekleniyor
  },
});

// Store'un tiplerini tanımlıyoruz:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
