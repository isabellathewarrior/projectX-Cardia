// services/authService.ts

import axios from 'axios';
import { LoginData, User } from '../types/authTypes';

// API URL'sini backend'in çalıştığı adrese göre düzenleyebilirsin
const API_URL = 'http://localhost:8000'; // Backend URL (Auth microservice)

export const loginRequest = async (loginData: LoginData): Promise<User> => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    
    // Backend'den kullanıcı bilgileri ve token döner
    const user: User = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      token: response.data.access_token, // JWT token döndüğünü varsayıyoruz
    };

    return user;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Giriş yapılamadı.');
  }
};
