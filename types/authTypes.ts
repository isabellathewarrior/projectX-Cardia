// types/authTypes.ts

export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    token: string;  // JWT veya başka bir token
  }
  
  export interface AuthState {
    loading: boolean;          // Login işlemi sürerken spinner göstermek için
    error: string | null;      // Hata mesajı (eğer login başarısız olursa)
    user: User | null;         // Login sonrası kullanıcı bilgileri (eğer giriş başarılı olursa)
  }
  