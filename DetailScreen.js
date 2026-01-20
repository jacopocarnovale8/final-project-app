import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Detail</Text>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{item.title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>
        This is a detailed description of the selected item.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  value: { fontSize: 16 },
});
