import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

function Weather(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{ justifyContent: 'center', flexDirection: 'row', alignSelf: 'center', right: 70 }}
      >
        <FontAwesome
          name='cloud'
          size={50}
          color='white'
          style={styles.cloud}
        />
        <Ionicons name='chatbox' size={20} color='#E7E6E6' />
        <View style={{ right: 17, top: 2 }}>
          <Ionicons name='happy-outline' size={13} color='black' />
        </View>
        <Text style={styles.weather}>Weather</Text>
        <Text style={styles.dot}>●</Text>
        <Text style={styles.news}>Local News</Text>
        <Text style={styles.time}>1h</Text>
      </View>
      <Text style={styles.text}>Today's high is 44° with a low of 39°.</Text>
      <Text style={styles.text2}>Tap for your personalized forecast.</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6c6c6c',
    padding: '1%',
    borderRadius: '20%',
    width: 420,
    alignSelf: 'center',
  },
  weather: {
    color: 'white',
    fontSize: '15%',
    fontWeight: 'bold',
    paddingRight: '1%',
    right: '15%',
    top: 10,
  },
  dot: {
    color: 'lightgray',
    fontSize: '5%',
    top: 10,
  },
  news: {
    color: 'lightgray',
    fontSize: '13%',
    fontWeight: 'bold',
    top: 10,
  },
  time: {
    color: 'lightgray',
    fontSize: '13%',
    fontWeight: 'bold',
    left: 130,
    top: 10,
  },
  text: {
    color: 'lightgray',
    fontSize: '15%',
    fontWeight: 'bold',
    bottom: '20%',
    left: 4,
    alignSelf: 'center',
  },
  text2: {
    color: 'lightgray',
    fontSize: '15%',
    fontWeight: 'bold',
    right: 1,
    bottom: '20%',
    alignSelf: 'center',
  },
  cloud: {
    right: 5,
    top: 20,
  },
});

export default Weather;
