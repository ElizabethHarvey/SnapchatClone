import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

function CameraButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name='ellipse-outline' size={120} color='white' />
    </TouchableOpacity>
  );
}

export default CameraButton;
