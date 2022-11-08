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
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('AppNav')
      }
    })

    return unsubscribe
  }, [])

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
   .then(userCredentials => {
    const user = userCredentials.user;
    console.log('Logged in with', user.email);
  })
  .catch(error => alert(error.message));
  };


  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ left: '5%', top: '3%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#1FAEE0'
            onPress={() => navigation.navigate('OnBoard')}
          />
        </TouchableOpacity>
        <Text style={styles.login}>Log In</Text>
        <Text style={styles.username}>USERNAME</Text>
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
        <TouchableOpacity style={{ top: '12%'}}>
        <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
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
    top: '5.5%',
  },
  username: {
    top: '11%',
    left: '10%',
    letterSpacing: '1%',
    fontSize: '12%',
    color: '#828A93',
  },
  textInput1: {
    top: '13%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  password: {
    top: '14.5%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput2: {
    top: '16.5%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  button: {
    borderWidth: '1%',
    borderRadius: '100%',
    width: '60%',
    height: '6.5%',
    justifyContent: 'center',
    top: '39%',
    alignSelf: 'center',
    backgroundColor: '#11ACFA',
    borderColor: '#11ACFA',
    fontWeight: 'bold',
  },
  forgot: {
    color: '#0076FE',
    fontSize: '12%',
    alignSelf: 'center',
  },
});

export default LoginScreen;
