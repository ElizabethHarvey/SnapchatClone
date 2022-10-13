import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const FriendsRow = ({ image, name, lock }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.profile}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Ionicons style={styles.lock} name={lock} size='16' color='#AD4EC9' />
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    height: 80,
    marginBottom: '30%',
    padding: '1%',
    left: '10%',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: '100%',
  },
  name: {
    top: '115%',
    fontSize: 15,
    position: 'absolute',
  },
  profile: {
    width: 78,
    height: 78,
    borderRadius: '100%',
    borderColor: '#AD4EC9',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lock: {
  bottom: '9%',
  backgroundColor: '#E7E6E6',
  }
});

export default FriendsRow;
