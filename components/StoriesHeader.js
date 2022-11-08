import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function StoriesHeader(props) {
  return (
    <View style={styles.topIcons}>
      <Image
        style={styles.profilePic}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <TouchableOpacity style={styles.search}>
        <Ionicons name='search-outline' size={30} color='#5A5A5A' />
      </TouchableOpacity>
      <Text style={styles.text}>Stories</Text>
      <TouchableOpacity style={styles.person}>
        <Ionicons name='person-add' size={30} color='#5A5A5A' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dots}>
        <Ionicons name='ellipsis-horizontal' size={33} color='#5A5A5A' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
  topIcons: {
    top: 5,
    marginBottom: 70,
    flex: 1,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: '100%',
    right: '20%',
    top: '2%',
    position: 'absolute',
    left: 10,
  },
  search: {
    borderRadius: '100%',
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    top: 10,
    left: '23%',
    position: 'absolute',
  },
  person: {
    borderRadius: '100%',
    width: 45,
    height: 45,
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '20%',
    top: 10,
  },
  dots: {
    backgroundColor: '#E7E6E6',
    borderRadius: '100%',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: '5%',
    position: 'absolute',
  },
});

export default StoriesHeader;
