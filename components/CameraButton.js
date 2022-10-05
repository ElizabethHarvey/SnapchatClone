import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

function CameraButton({ onPress }) {
  return (
    <TouchableOpacity  style={styles.ellipse} onPress={onPress}>
      <Ionicons
        name='ellipse-outline'
        size={120}
        color='white'
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

});

export default CameraButton;
