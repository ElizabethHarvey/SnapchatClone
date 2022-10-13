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

const ForYouRow = ({ image, title, time }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.profile}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.name}>{title}</Text>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: '0.5%',
    marginBottom: '1.5%',
  },
  image: {
    width: 200,
    height: 275,
    borderRadius: '10%',
    left: '5%',
  },
  name: {
    left: '8%',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '85%',
  },
  time: {
    fontSize: 15,
    color: 'gray',
    position: 'absolute',
    left: '8%',
    bottom: '10%',
  },
  star: {
    color: 'yellow',
    fontSize: '20%',
    right: '28%',
  },
});

export default ForYouRow;
