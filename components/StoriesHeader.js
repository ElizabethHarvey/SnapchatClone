import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function StoriesHeader(props) {
  return (
    <View style={styles.topIcons}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://helios-i.mashable.com/imagery/articles/04tV2ASy4BKViKIw4pPBuMi/hero-image.fill.size_1200x1200.v1623368074.jpg',
          }}
        />
        <TouchableOpacity style={{ right: '50%' }}>
          <Ionicons name='search' size={30} color='gray' />
        </TouchableOpacity>
        <Text style={styles.text}>Stories</Text>
        <TouchableOpacity style={{ left: '50%'}}>
          <Ionicons name='person-add' size={30} color='gray' />
        </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='ellipsis-horizontal' size={33} color='gray' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  topIcons: {
    flexDirection: 'row',
    top: '1%',
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
});

export default StoriesHeader;
