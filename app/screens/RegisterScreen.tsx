import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import FormError from '../../components/ui/FormError';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [formError, setFormError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    // Şifreler uyuşmuyorsa hata mesajını ayarla
    if (password !== confirm) {
      setFormError('Şifreler uyuşmuyor!');
      return;
    }
    setFormError('');
    router.replace('/(tabs)'); // Başarılı olursa yönlendir
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Name and surname */}
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="İsim"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="Soyisim"
        value={lastName}
        onChangeText={setLastName}
      />
      
      {/* Email Input */}
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="E-posta"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Phone Number */}
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="Telefon Numarası"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      
      {/* Department */}
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="Departman"
        value={department}
        onChangeText={setDepartment}
      />
      
      {/* Hospital Name */}
      <TextInput
        style={[styles.input, formError ? styles.inputError : null]}
        placeholder="Hastane Adı"
        value={hospitalName}
        onChangeText={setHospitalName}
      />

      {/* Password Input */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]}
          placeholder="Şifre"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        {/* Show/Hide Password Icon */}
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="#42b883" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={[styles.input, formError ? styles.inputError : null, styles.passwordInput]}
          placeholder="Şifre Tekrar"
          secureTextEntry={!showConfirmPassword}
          value={confirm}
          onChangeText={setConfirm}
        />
        {/* Show/Hide Confirm Password Icon */}
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
          <FontAwesome name={showConfirmPassword ? "eye-slash" : "eye"} size={24} color="#42b883" />
        </TouchableOpacity>
      </View>

      {/* Form Error */}
      {formError && <FormError message={formError} />}

      {/* Register Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View style={styles.registerSection}>
        <Text style={styles.registerText}>Zaten hesabın var mı?</Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
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
  inputWrapper: {
    width: '100%',
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
    color: '#2c3e50', // Dark gray color
    marginBottom: 10, // Added margin between inputs
  },
  inputError: {
    borderColor: 'red', // Optional: you can style errors here
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Keep the eye icon inside the input area
    marginBottom: 10, // Added margin between password fields
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
    marginTop: 15, // Added margin top
    marginBottom: 15, // Added more space between the button and the form
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
