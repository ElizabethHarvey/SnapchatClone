import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const MyFriends = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../assets/bitmoji.png')}
        style={{ width: '100%', height: '60%', left: '2%' }}
      />
      <Text style={styles.myFriends}>My Friends</Text>
      <TouchableOpacity style={{ top: '10%', right: '40%' }}>
        <Ionicons name='list-outline' color='gray' size='30%' />
      </TouchableOpacity>
      <TouchableOpacity style={{ justifyContent: 'center' }}>
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

export default MyFriends;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    top: '158%',
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: '50%',
    borderRadius: '15%',
    position: 'absolute',
  },
  myFriends: {
    fontSize: '17%',
    color: '#484848',
    position: 'absolute',
    left: '20%',
    top: '74%',
  },
  arrow: {
    position: 'absolute',
    left: '40%',
  },
});
