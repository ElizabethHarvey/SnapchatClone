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
        <TouchableOpacity style={{ right: '63%' }}>
          <Ionicons name='search' size={30} color='gray' />
        </TouchableOpacity>
        <Text style={styles.text}>Chat</Text>
        <TouchableOpacity style={{ left: '63%'}}>
          <Ionicons name='person-add' size={30} color='gray' />
        </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='create' size={33} color='gray' />
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

export default Header;
