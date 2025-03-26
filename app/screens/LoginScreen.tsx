import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { toastPromise } from '../../utils/toast';
import FormError from '../../components/ui/FormError';
import { FontAwesome } from '@expo/vector-icons'; // İkon kütüphanesini ekledik

const png = require('../../assets/images/xcardiaa.png');

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fakeLogin = (email: string, password: string): Promise<boolean> =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        email === 'test@test.com' && password === '123456'
          ? resolve(true)
          : reject(new Error('Email veya şifre hatalı'));
      }, 1500)
    );

  const handleLogin = async () => {
    setFormError('');
    try {
      await toastPromise(fakeLogin(email, password), {
        loading: 'Giriş yapılıyor...',
        success: 'Hoş geldin!',
        error: 'Email veya şifre hatalı',
      });

      router.replace('/(tabs)');
    } catch (err: any) {
      setFormError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image
        source={require('../../assets/images/xcardiaa.png')}
        style={styles.logo}
        resizeMode="contain" // Görselin uygun şekilde sığmasını sağlar
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
        {/* Password Input */}
        <View style={styles.passwordWrapper}>
          <TextInput
            style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]}
            placeholder="Şifre"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          {/* Göz ikonu ile şifreyi göster/gizle */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="#42b883" />
          </TouchableOpacity>
        </View>
      {formError && <FormError message={formError} />}

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View style={styles.registerSection}>
        <Text style={styles.registerText}>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Kaydol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ddeedf',
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#283739',
    marginBottom: 5,
  },
  input: {
    alignSelf: 'center',
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
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the input and icon
    position: 'relative', // Keep the eye icon inside the input area
  },
  passwordInput: {
    flex: 1, // Makes the input take all available space
  },
  eyeIcon: {
    position: 'absolute',
    right: 15, // Position the eye icon at the right end
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  button: {
    width: '50%',
    backgroundColor: '#42b883',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
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
  logo: {
    width: '80%',
    height: 180,
    marginBottom: 30,
    alignSelf: 'center',
  },
});
