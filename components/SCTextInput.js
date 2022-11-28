import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

function SCTextInput(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textInputBackground}>
        <TextInput width='55%'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  textInputBackground: {
    backgroundColor: '#000',
    borderRadius: '100%',
    width: '60%',
    height: '33%',
  },
});

export default SCTextInput;
