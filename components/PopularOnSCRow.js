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

const PopularOnSCRow = ({ image, title, }) => {
    return (
      <TouchableOpacity style={styles.row}>
        <View>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <Text style={styles.name}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    row: {
      alignItems: 'center',
      padding: '0.2%',
    },
    image: {
      width: 150,
      height: 250,
      borderRadius: '10%',
      left: '10%',
    },
    name: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      right: '13%',
      bottom: '10%',
    },
  });

export default PopularOnSCRow;