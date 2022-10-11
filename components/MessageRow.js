import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const MessageRow = ({ image, streak, name, textColor, title, iconName, time, iconColor, smile }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.bottomText}>
          <Ionicons
            style={{ right: '10%' }}
            name={iconName}
            size={15}
            color={iconColor}
            />
          <Text style={{ color:textColor ,}}>{title}</Text>
          <Text style={{ color: 'darkgray', fontWeight: '800' }}> • {time} • </Text>
          <Text>{streak} 🔥</Text>
        </View>
      </View>
            <Text style={styles.smile}>{smile}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginVertical: '1%',
    borderBottomColor: '#E7E6E6',
    borderBottomWidth: '1%',
    height: 80,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '100%',
  },
  name: {
    bottom: '10%',
    fontSize: 23,
    left: '6%',
  },
  bottomText: {
    flexDirection: 'row',
    left: '15%',
  },
  smile: {
    left: '100%',
    position: 'absolute',
    fontSize: '25%',
    alignSelf: 'center',
  }
});

export default MessageRow;
