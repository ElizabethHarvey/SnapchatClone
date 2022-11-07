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

const SignUpEmail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Email");
      }
    })

    return unsubscribe
  }, [])
  
  const SignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
  };

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ left: '5%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#11ACFA'
            onPress={() => navigation.navigate('User')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>What's your email?</Text>
        <Text style={styles.email}>EMAIL</Text>
        <TextInput
          style={styles.textInput1}
          numberOfLines={1}
          width='80%'
          maxLength={50}
          keyboardType='email-address'
          onChange={text => setEmail(text)}
          value={email}
        />
          <TextInput
          style={styles.textInput2}
          numberOfLines={1}
          width='80%'
          maxLength={50}
          keyboardType='email-address'
          onChange={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}onPress={SignUp}>
            Continue
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: '22%',
    alignSelf: 'center',
    top: '10%',
  },
  email: {
    top: '19%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: '21%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  textInput2: {
    top: '25%',
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
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: '17%',
}
});

export default SignUpEmail;

