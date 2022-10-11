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

function SmileHomeButton({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.happy} onPress={onPress}>
        <Ionicons name='happy-outline' size={35} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  happy: {
    marginTop: '12%',
    flexDirection: 'row',
  },
});

export default SmileHomeButton;
