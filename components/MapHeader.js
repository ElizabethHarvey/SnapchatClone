import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function MapHeader({ title }) {
  return (
    <View style={styles.topIcons}>
      <Image
        style={styles.profilePic}
        source={{
          uri: 'https://picsum.photos/200/300',
          
        }}
      />
      <TouchableOpacity style={styles.search}>
        <Ionicons name='search-outline' size={30} color='white' />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.person}>
        <Ionicons name='person-add' size={30} color='white' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cog}>
        <Ionicons name='cog-outline' size={33} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    left: '45%',
  },
  topIcons: {
    bottom: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: '100%',
  },
  search: {
    right: '63%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    left: '22%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  person: {
    left: '80%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cog: {
    left: '95%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapHeader;
