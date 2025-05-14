import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const HomeScreen = () => {
  const router = useRouter();
  const userName = 'Esmanur'; // Mock kullanıcı adı

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/login')}>
        <Ionicons name="log-out-outline" size={20} color="#ff6464" />
        <Text style={styles.logoutText}>Çıkış</Text>
      </TouchableOpacity>
      <View style={styles.topSection}>
        <Text style={styles.welcome}>X-Cardia’ya Hoş Geldin,</Text>
        <Text style={styles.userName}>{userName} 👋</Text>
      </View>

      {/* Butonlar */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/ChatBotScreen')}
        >
          <Text style={styles.buttonText}>🤖 Akıllı Asistan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/screens/ProfileScreen')}
        >
          <Text style={styles.buttonText}>👤 Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  topSection: {
    marginTop: 20,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '700',
    color: '#283739',
    textAlign: 'left',
    marginBottom: 4,
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#42b883',
    textAlign: 'left',
  },
  bottomSection: {
    gap: 20,
  },
  button: {
    backgroundColor: '#42b883',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
   logoutButton: {
  position: 'absolute',
  top: 20, 
  right: 16, 
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#ff6464',
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
},
logoutText: {
  marginLeft: 4,
  color: '#ff6464',
  fontWeight: '500',
  fontSize: 12,
},
});

export default HomeScreen;
