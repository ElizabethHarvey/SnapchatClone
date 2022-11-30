import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function SCTextInput(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={styles.camera}>
          <Ionicons name='camera' size={25} color='gray' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.textInputBackground}>
          <TextInput width='55%' placeholder='' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mic}>
          <Ionicons name='mic' size={20} color='#000' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.happy}>
          <Ionicons name='happy-outline' size={20} color='#000' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.copy}>
          <Ionicons name='copy-outline' size={20} color='#000' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rock}>
          <Ionicons name='rocket-outline' size={20} color='#000' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputBackground: {
    backgroundColor: '#E5E4E2',
    borderRadius: '100%',
    width: '60%',
    height: '70%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  camera: {
    backgroundColor: '#E5E4E2',
    borderRadius: '100%',
    width: '10%',
    height: '70%',
    alignItems: 'center',
  },
});

export default SCTextInput;
