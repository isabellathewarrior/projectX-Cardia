import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FormError from '../components/ui/FormError';

type Props = {
  email: string;
  onEmailChange: (val: string) => void;
  password: string;
  onPasswordChange: (val: string) => void;
  confirm: string;
  onConfirmChange: (val: string) => void;
  firstName: string;
  onFirstNameChange: (val: string) => void;
  lastName: string;
  onLastNameChange: (val: string) => void;
  phone: string;
  onPhoneChange: (val: string) => void;
  department: string;
  onDepartmentChange: (val: string) => void;
  hospitalName: string;
  onHospitalNameChange: (val: string) => void;
  formError: string;
  showPassword: boolean;
  toggleShowPassword: () => void;
  showConfirmPassword: boolean;
  toggleShowConfirmPassword: () => void;
  onSubmit: () => void;
  onNavigateToLogin: () => void;
};

export default function RegisterForm({
  email, onEmailChange,
  password, onPasswordChange,
  confirm, onConfirmChange,
  firstName, onFirstNameChange,
  lastName, onLastNameChange,
  phone, onPhoneChange,
  department, onDepartmentChange,
  hospitalName, onHospitalNameChange,
  formError,
  showPassword, toggleShowPassword,
  showConfirmPassword, toggleShowConfirmPassword,
  onSubmit,
  onNavigateToLogin
}: Props) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TextInput style={[styles.input, formError ? styles.inputError : null]} placeholder="İsim" value={firstName} onChangeText={onFirstNameChange} />
      <TextInput style={[styles.input, formError ? styles.inputError : null]} placeholder="Soyisim" value={lastName} onChangeText={onLastNameChange} />
      <TextInput style={[styles.input, formError ? styles.inputError : null]} placeholder="E-posta" keyboardType="email-address" value={email} onChangeText={onEmailChange} />
      <TextInput style={[styles.input, formError ? styles.inputError : null]} placeholder="Telefon Numarası" keyboardType="phone-pad" value={phone} onChangeText={onPhoneChange} />

      <View style={styles.passwordWrapper}>
        <TextInput style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]} placeholder="Şifre" secureTextEntry={!showPassword} value={password} onChangeText={onPasswordChange} />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="#42b883" />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordWrapper}>
        <TextInput style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]} placeholder="Şifre Tekrar" secureTextEntry={!showConfirmPassword} value={confirm} onChangeText={onConfirmChange} />
        <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.eyeIcon}>
          <FontAwesome name={showConfirmPassword ? "eye-slash" : "eye"} size={24} color="#42b883" />
        </TouchableOpacity>
      </View>

      {formError && <FormError message={formError} />}

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableOpacity>

      <View style={styles.registerSection}>
        <Text style={styles.registerText}>Zaten hesabın var mı?</Text>
        <TouchableOpacity onPress={onNavigateToLogin}>
          <Text style={styles.registerLink}>Giriş yap</Text>
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
    color: '#2c3e50',
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
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
    marginTop: 15,
    marginBottom: 15,
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
