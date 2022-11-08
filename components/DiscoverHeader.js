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
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigation.navigate('Chat')}
      >
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
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    color: '#E7E6E6',
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
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    top: 10,
    left: '23%',
    position: 'absolute',
  },
  dots: {
    backgroundColor: '#3b3b3b',
    borderRadius: '100%',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: 8,
    position: 'absolute',
  },
});

export default DiscoverScreen;
