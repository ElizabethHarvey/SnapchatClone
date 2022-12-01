import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function SCTextInput(props) {
  return (
    <View>
      <KeyboardAvoidingView
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          top: '173%',
          alignItems: 'center',
          borderTopWidth: 1,
          borderColor: '#E5E4E2',
        }}
      >
        <TouchableOpacity style={styles.camera}>
          <Ionicons name='camera' size={25} color='#71797E' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.textInputBackground}>
          <TextInput
            width='85%'
            placeholder='Support'
            placeholderTextColor={'gray'}
            multiline={true}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mic}>
          <Ionicons name='mic' size={22} color='#36454F' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.happy}>
          <Ionicons name='happy-outline' size={25} color='#36454F' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.copy}>
          <Ionicons name='copy-outline' size={25} color='#36454F' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rocket}>
          <Ionicons name='rocket-outline' size={25} color='#36454F' />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputBackground: {
    backgroundColor: '#E5E4E2',
    borderRadius: '100%',
    width: '55%',
    height: '68%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    backgroundColor: '#E5E4E2',
    borderRadius: '100%',
    width: '10%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
  mic: {
    right: '55%',
  },
  happy: {
    right: '20%',
  },
  copy: {},
  rocket: {
    left: 13,
  },
});

export default SCTextInput;
