// sadece işlevsellik olucak şekilde tasarımla bölünücek
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  

export default function HomeScreen() {
  console.log("Render edilen bileşen:", HomeScreen.name); 

  return (
    <View style={styles.container}>
      {/* Hamburger Menü */}
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filtreler */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filtreler</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Yeni</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Popüler</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ana Sayfa Başlığı */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>🏠 Ana Sayfa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 50,
  },
  menuContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#42b883',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 15,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#42b883',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});
