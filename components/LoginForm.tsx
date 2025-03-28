// components/ui/LoginForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // İkon kütüphanesini ekledik
import FormError from '../components/ui/FormError';

const LoginForm = ({ handleLogin, formError }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Image
        source={require('../assets/images/xcardiaa.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, formError ? styles.inputError : null]}
          placeholder="E-posta"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {formError && <FormError message={formError} />}
      </View>

      <View style={styles.passwordWrapper}>
        <TextInput
          style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]}
          placeholder="Şifre"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#42b883" />
        </TouchableOpacity>
      </View>
      {formError && <FormError message={formError} />}

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={styles.registerSection}>
        <Text style={styles.registerText}>Hesabın yok mu?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink}>Kaydol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: '80%',
    height: 180,
    marginBottom: 30,
    alignSelf: 'center',
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 65,
    backgroundColor: '#f2f9f1',
    borderColor: '#b6cdbd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#283739',
  },
  inputError: {
    borderColor: 'red',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  button: {
    width: '50%',
    backgroundColor: '#42b883',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerText: {
    fontSize: 14,
    color: '#283739',
  },
  registerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff6464',
    marginLeft: 4,
  },
});

export default LoginForm;
