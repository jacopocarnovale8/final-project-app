import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // dati mock (servono solo per Home)
    const data = [
      { id: 1, title: 'Item One' },
      { id: 2, title: 'Item Two' },
      { id: 3, title: 'Item Three' },
    ];
    setItems(data);
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER CON LOGO */}
      <View style={styles.header}>
        <Text style={styles.logo}>My App Logo</Text>
      </View>

      {/* LISTA */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Detail', { item })
            }
          >
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.detailLink}>Go to Detail →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
  },
  itemText: { fontSize: 16 },
  detailLink: { color: 'blue', marginT
