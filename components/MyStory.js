import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const MyStory = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.myStory}>My Story</Text>
      <TouchableOpacity style={styles.image}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: 40, height: 40, borderRadius: '100%' }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons style={styles.eye} name='eye' color='#C8C8C8' size='20%' />
        <Text style={styles.views}>123</Text>
        <Ionicons
          style={styles.arrow}
          name='chevron-forward-outline'
          color='#C8C8C8'
          size='23.5%'
        />
        <Ionicons
          style={styles.backArrow}
          name='chevron-back'
          color='#C8C8C8'
          size='20%'
        />
        <Text style={styles.reopen}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ justifyContent: 'center', bottom: '15%' }}>
        <Ionicons
          style={styles.download}
          name='download-outline'
          color='gray'
          size='30%'
        />
        <Ionicons
          style={styles.dots}
          name='ellipsis-vertical'
          color='#C8C8C8'
          size='30%'
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MyStory;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    top: '100%',
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: '20%',
    borderRadius: '15%',
    position: 'absolute',
  },
  myStory: {
    fontSize: '15%',
    color: '#484848',
    position: 'absolute',
    left: '20%',
    top: '20%',
  },
  image: {
    borderWidth: '1%',
    borderColor: 'white',
    borderRadius: '100%',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    right: '40%',
    top: '15%',
  },
  eye: {
    right: '25%',
    position: 'absolute',
  },
  views: {
    color: 'gray',
    right: '18%',
    position: 'absolute',
  },
  arrow: {
    position: 'absolute',
    right: '11.5%',
  },
  backArrow: {
    position: 'absolute',
    right: '12%',
  },
  reopen: {
    color: 'gray',
    right: '10%',
    position: 'absolute',
  },
  download: {
    position: 'absolute',
    left: '30%',
  },
  dots: {
    position: 'absolute',
    left: '40%',
  },
});
