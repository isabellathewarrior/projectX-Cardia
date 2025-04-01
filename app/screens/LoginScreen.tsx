import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { loginAsync } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';
import { toastPromise } from '../../utils/toast';
import LoginForm from '../../components/LoginForm';

const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [formError, setFormError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setFormError('');
    try {
      await toastPromise(dispatch(loginAsync({ email, password })), {
        loading: 'Giriş yapılıyor...',
        success: 'Hoş geldin!',
        error: 'Email veya şifre hatalı',
      });
      router.replace('/(tabs)');
    } catch (err: any) {
      setFormError(err.message);
    }
  };
  console.log("Render edilen bileşen:", LoginScreen.name); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <LoginForm handleLogin={handleLogin} formError={formError} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ddeedf',
    paddingHorizontal: 30,
  },
});

export default LoginScreen;
