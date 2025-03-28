// redux/slices/authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest } from '../../services/authService';
import { AuthState, LoginData, User } from '../../types/authTypes';

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null, // İlk başta kullanıcı boş
};

// Async login işlemi
export const loginAsync = createAsyncThunk<User, LoginData, { rejectValue: string }>(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      return await loginRequest(loginData); // Servis çağrısı başarılıysa User döner
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || 'Giriş başarısız!');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null; // Hataları temizler
        state.user = null;  // Login sırasında kullanıcı temizlenir
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Kullanıcı bilgilerini kaydet
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Bilinmeyen bir hata oluştu!';
      });
  },
});

export const { logout } = authSlice.actions; // Logout action'u
export default authSlice.reducer;
