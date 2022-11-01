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

const SubscriptionRow = ({ image, title, time, star }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.name}>{title}</Text>
      <View style={{ bottom: '10%', alignItems: 'center' }}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.star}>{star}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    padding: '0.2%',
  },
  image: {
    width: 130,
    height: 200,
    borderRadius: '10%',
    left: '10%',
  },
  name: {
    left: '15%',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '70%',
  },
  time: {
    fontSize: 15,
    color: 'gray',
    position: 'absolute',
  },
  star: {
    color: 'yellow',
    fontSize: '20%',
    right: '27%',
  },
});

export default SubscriptionRow;
