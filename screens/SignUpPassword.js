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

const SignUpPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ left: '5%', top: '3%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#11ACFA'
            onPress={() => navigation.navigate('Email')}
          />
        </TouchableOpacity>
        <Text style={styles.login}>Set a password</Text>
        <Text style={styles.text}>Your password should be at least 8</Text>
        <Text style={styles.text2}>characters.</Text>
        <Text style={styles.username}>PASSWORD</Text>
        <TextInput
          style={styles.textInput1}
          numberOfLines={1}
          width='80%'
          maxLength={15}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button
            title='Continue'
            color='white'
            onPress={() => navigation.navigate('User')}
          />
        </View>
    </SafeAreaView>
  );
};``

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    fontSize: '22%',
    alignSelf: 'center',
    top: '15%',
  },
  username: {
    top: '20%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: '22.5%',
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
    top: '16%',
    alignSelf: 'center',
    color: '#585858'
  },
  text2: {
    top: '16.3%',
    alignSelf: 'center',
    color: '#585858'
  },
});

export default SignUpPassword;