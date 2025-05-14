import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const AnalysisDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { analysis } = route.params as { analysis: { title: string, date: string, disease?: string } };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#42b883" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analiz Detayı</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{analysis.title}</Text>
        <Text style={styles.date}>Tarih: {analysis.date}</Text>

        <Text style={styles.sectionTitle}>Tespit Edilen Durum</Text>
        <Text style={styles.disease}>
          {analysis.disease ? analysis.disease : 'Herhangi bir hastalık tespit edilmedi.'}
        </Text>

        <TouchableOpacity style={styles.chatButton} onPress={() => {
          // Yönlendirme: ChatBot ekranına (belirli analizle ilgili sohbet geçmişi olabilir)
          navigation.navigate('ChatBot');
        }}>
          <Text style={styles.chatButtonText}>💬 Bu analizle ilgili sohbet geçmişini görüntüle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#283739',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#283739',
    marginBottom: 4,
  },
  date: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#283739',
  },
  disease: {
    fontSize: 15,
    color: '#333',
    marginBottom: 30,
  },
  chatButton: {
    backgroundColor: '#42b883',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default AnalysisDetailScreen;
