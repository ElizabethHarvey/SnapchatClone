import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const SignUpUsername = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ left: '5%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#11ACFA'
            onPress={() => navigation.navigate('Birthday')}
          />
        </TouchableOpacity>
        <Text style={styles.login}>Pick a username</Text>
        <Text style={styles.text}>Your username is how friends add you</Text>
        <Text style={styles.text2}>on Snapchat.</Text>
        <Text style={styles.username}>USERNAME</Text>
        <TextInput
          style={styles.textInput1}
          numberOfLines={1}
          width='80%'
          maxLength={15}
        />
        <View style={styles.button}>
          <Button
            title='Continue'
            color='white'
            onPress={() => navigation.navigate('Password')}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    fontSize: '20%',
    alignSelf: 'center',
    top: '5.5%',
  },
  username: {
    top: '11%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: '13%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  button: {
    borderWidth: '1%',
    borderRadius: '100%',
    width: '55%',
    height: '5.5%',
    top: '60%',
    alignSelf: 'center',
    backgroundColor: '#11ACFA',
    borderColor: '#11ACFA',
    fontWeight: 'bold',
    position: 'absolute',
    justifyContent: 'center',
  },
  text: {
    top: '6%',
    alignSelf: 'center',
  },
  text2: {
    top: '6.3%',
    alignSelf: 'center',
  },
});

export default SignUpUsername;
