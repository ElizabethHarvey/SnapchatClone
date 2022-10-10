import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function Header(props) {
  return (
    <View style={styles.topIcons}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://helios-i.mashable.com/imagery/articles/04tV2ASy4BKViKIw4pPBuMi/hero-image.fill.size_1200x1200.v1623368074.jpg',
          }}
        />
        <TouchableOpacity style={{ marginLeft: '4%' }}>
          <Ionicons name='search' size={30} color='gray' />
        </TouchableOpacity>
        <Text style={styles.text}>Chat</Text>
        <TouchableOpacity style={{ marginLeft: '24%' }}>
          <Ionicons name='person-add' size={30} color='gray' />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Ionicons name='create' size={33} color='gray' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEED',
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: '20%',
  },
  topIcons: {
    flexDirection: 'row',
    marginTop: '4%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    bottom: '3%',
  },
});

export default Header;
