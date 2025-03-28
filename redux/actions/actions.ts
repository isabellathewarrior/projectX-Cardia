// redux/actions/authActions.ts
import { loginAsync } from '../slices/authSlice';
import { LoginData } from '../../types/authTypes';
import { AppDispatch } from '../store';

export const login = (loginData: LoginData) => (dispatch: AppDispatch) => {
  dispatch(loginAsync(loginData)); // Async login işlemi
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch({ type: 'auth/logout' }); // Logout işlemi
};
