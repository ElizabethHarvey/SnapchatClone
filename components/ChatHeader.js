import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function Header(props) {
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
        <Text style={styles.text}>Chat</Text>
        <TouchableOpacity style={styles.person}>
          <Ionicons name='person-add' size={30} color='#5A5A5A' />
        </TouchableOpacity>
      <TouchableOpacity style={styles.create}>
        <Ionicons name='create' size={33} color='#5A5A5A' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    right: '350%'
  },
  topIcons: {
    flexDirection: 'row',
    bottom: '1%',
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
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  person: {
    left: '80%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    left: '95%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
