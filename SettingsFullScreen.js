import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

export default function SettingsFullScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const saveSettings = () => {
    // qui puoi salvare su AsyncStorage o API se vuoi
    alert('Settings saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <Button title="Save Settings" onPress={saveSettings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
});
