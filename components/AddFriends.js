import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Friends = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.addFriends}>Add Friends</Text>
      <TouchableOpacity style={{ top: '20%', right: '40%'}}>
        <Ionicons
          name='person-add-outline'
          color='gray'
          size='30%'
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ justifyContent: 'center'}}>
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

export default Friends;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    top: '135%',
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: '20%',
    borderRadius: '15%',
    position: 'absolute',
  },
  addFriends: {
    fontSize: '17%',
    color: '#484848',
    position: 'absolute',
    left: '20%',
    top: '30%',
  },
  add: {
    right: '40%',
    top: '20%',
  },
  arrow: {
    position: 'absolute',
    left: '40%',
  },
});
