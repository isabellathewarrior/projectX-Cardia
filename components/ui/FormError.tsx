//düzeltilecek, şu an view ile ilgili hata veriyor
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function FormError({ message }: { message?: string }) {
  if (!message) return null;

  return <Text style={styles.errorText}>{message}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: 'red',  
    marginTop: 4,  
  },
});
