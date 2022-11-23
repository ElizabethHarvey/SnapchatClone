import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function InChatHeader({ name, onPress }) {
  return (
    <SafeAreaView style={styles.topIcons}>
      <TouchableOpacity style={styles.profilePic}>
        <Image
          onPress={onPress}
          style={{ width: 32, height: 32, borderRadius: '100%' }}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={styles.phone}>
        <Ionicons name='call' size={20} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.camera}>
        <Ionicons name='videocam' size={20} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back}>
        <Ionicons name='chevron-forward' size={30} color='#000' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    left: '40%',
    top: 2,
    textAlignVertical: 'center',
  },
  topIcons: {
    marginTop: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    top: '2%',
    borderColor: '#E7E6E6',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: '100%',
    right: '20%',
    left: 10,
    bottom: '1%',
    borderWidth: '2%',
    borderColor: '#3DACF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    borderRadius: '30%',
    width: 45,
    height: 35,
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    left: '225%',
    bottom: '1%',
  },
  camera: {
    borderRadius: '100%',
    width: 45,
    height: 35,
    backgroundColor: '#E7E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    left: '230%',
    bottom: '1%',
  },
  back: {
    borderRadius: '100%',
    width: 45,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    left: 90,
    bottom: '1%',
  },
});

export default InChatHeader;
