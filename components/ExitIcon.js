import { Camera, CameraType } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

function ExitIcon({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.exit} onPress={onPress}>
        <Ionicons name='exit' size={45} color='black' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  exit: {
    marginTop: '12%',
    flexDirection: 'row',
  },
});

export default ExitIcon;