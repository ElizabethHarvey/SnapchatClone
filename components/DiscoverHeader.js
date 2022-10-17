import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.topIcons}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <TouchableOpacity style={styles.search}
        onPress={() => navigation.navigate('Chat')}>
          <Ionicons name='search-outline' size={30} color='#E7E6E6' />
        </TouchableOpacity>
        <Text style={styles.text}>Discover</Text>
      <TouchableOpacity style={styles.dots}>
        <Ionicons name='ellipsis-horizontal' size={33} color='#E7E6E6' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    right: '285%',
    color: '#E7E6E6',
  },
  topIcons: {
    flexDirection: 'row',
    top: '1%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '3%',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    right: '20%',
  },
  search: {
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    left: '19%',
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    left: '95%',
    borderRadius: '100%',
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DiscoverScreen;
