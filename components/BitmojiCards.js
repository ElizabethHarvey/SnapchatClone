import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

function BitmojiCards({name, title, style}) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.addFriends}>{title}</Text>
      <TouchableOpacity style={styles.add}>
        <Ionicons
          name={name}
          color='gray'
          size='30%'
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ top: '30%'}}>
        <Ionicons
          style={styles.arrow}
          name='chevron-forward-outline'
          color='#F8F8F8'
          size='30%'
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BitmojiCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: '20%',
    alignSelf: 'center',
    borderRadius: '15%',
  },
  addFriends: {
    fontSize: '17%',
    color: '#484848',
    position: 'absolute',
    left: '20%',
    top: '35%',
  },
  add: {
    right: '85%',
    top: '25%',
    position: 'absolute',
  },
  arrow: {
    position: 'absolute',
    left: '90%',
  },
});
