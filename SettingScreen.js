import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View style={styles.container}>
      {/* ICONA MENU */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>

      {/* MENU ITEMS */}
      {menuVisible && (
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  menuIcon: { marginBottom: 10 },
  iconText: { fontSize: 30 },
  menuItems: { marginTop: 20 },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
});
