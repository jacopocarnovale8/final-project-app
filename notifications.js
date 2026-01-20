import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export const requestPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission for notifications not granted!');
  }
};

export const triggerNotification = async (title, body) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: { seconds: 1 }, // notifica dopo 1 secondo
  });
};
