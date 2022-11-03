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
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(auth.currentUser);
      })
      .then(() => {
        navigation.navigate('AppNav');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView enabled={false}>
        <TouchableOpacity style={{ left: '5%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#1FAEE0'
            onPress={() => navigation.navigate('OnBoard')}
          />
        </TouchableOpacity>
        <Text style={styles.login}>Log In</Text>
        <Text style={styles.username}>USERNAME OR EMAIL</Text>
        <TextInput
          style={styles.textInput1}
          numberOfLines={1}
          width='80%'
          maxLength={58}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.password}>PASSWORD</Text>
        <TextInput
          style={styles.textInput2}
          numberOfLines={1}
          width='80%'
          maxLength={58}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.button}>
          <Button title='Log In' color='white' onPress={login} />
        </View>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    fontSize: '23%',
    alignSelf: 'center',
    top: '17%',
  },
  username: {
    top: '29%',
    left: '10%',
    letterSpacing: '1%',
    color: '#828A93',
    fontSize: '12%',
  },
  textInput1: {
    top: '37%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  password: {
    top: '40.5%',
    left: '10%',
    letterSpacing: '1%',
    color: '#828A93',
    fontSize: '11%',
  },
  textInput2: {
    top: '47%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  button: {
    borderWidth: '1%',
    borderRadius: '100%',
    width: '55%',
    height: '17%',
    justifyContent: 'center',
    top: '120%',
    alignSelf: 'center',
    backgroundColor: '#1FAEE0',
    borderColor: '#1FAEE0',
  },
  forgot: {
    top: '15%',
    color: '#0076FE',
    top: '950%',
    fontSize: '12%',
    alignSelf: 'center',
  },
});

export default LoginScreen;
