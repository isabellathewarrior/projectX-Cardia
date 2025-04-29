// app/(auth)/RegisterScreen.tsx
import { useState } from 'react';
import { useRouter } from 'expo-router';
import RegisterForm from '../../components/RegisterForm';

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
    if (password !== confirm) {
      setFormError('Şifreler uyuşmuyor!');
      return;
    }
    setFormError('');
    router.replace('/(tabs)');
  };

  return (
    <RegisterForm
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      confirm={confirm}
      onConfirmChange={setConfirm}
      firstName={firstName}
      onFirstNameChange={setFirstName}
      lastName={lastName}
      onLastNameChange={setLastName}
      phone={phone}
      onPhoneChange={setPhone}
      department={department}
      onDepartmentChange={setDepartment}
      hospitalName={hospitalName}
      onHospitalNameChange={setHospitalName}
      formError={formError}
      onSubmit={handleRegister}
      onNavigateToLogin={() => router.push('/login')}
      showPassword={showPassword}
      toggleShowPassword={() => setShowPassword(!showPassword)}
      showConfirmPassword={showConfirmPassword}
      toggleShowConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
    />
  );
}
