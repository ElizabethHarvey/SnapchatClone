import React from 'react';
import  Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function IconButton({ onPress, icon, color, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      <Ionicons name={icon} size={20} color={color} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginTop: '240%',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
});

export default IconButton;