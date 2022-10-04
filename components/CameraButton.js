import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';

function CameraButton({ onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      <Ionicons name='ellipse-outline' size={120} color='white' />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '170%',
  },
});

export default CameraButton;
