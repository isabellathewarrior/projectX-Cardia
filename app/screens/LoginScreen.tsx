import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Button } from 'react-native';
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

  const goToRegister = () => {
    router.push('/register'); 
  };

  const goToHome = () => {
router.push('/screens/HomeScreen');  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        <LoginForm
          handleLogin={handleLogin}
          formError={formError}
          onNavigateToRegister={goToRegister}
        />
      </View>
      <View style={styles.homeButtonContainer}>
        <Button title="Home" onPress={goToHome} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddeedf',
    paddingHorizontal: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  homeButtonContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default LoginScreen;
