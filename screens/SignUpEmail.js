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
import { auth, usersCollection } from '../firebase';

import username from './SignUpUsername'

const SignUpEmail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('User');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        usersCollection.doc(auth.currentUser.uid).set({
          Email: email,
          Last_Known_Password: password,
        });
      })
    }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ left: '5%', top: '3%' }}>
        <Ionicons
          name='chevron-back-outline'
          size='30%'
          color='#11ACFA'
          onPress={() => navigation.navigate('User')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Set your email and password?</Text>
      <Text style={styles.email}>EMAIL</Text>
      <TextInput
        style={styles.textInput1}
        numberOfLines={1}
        width='80%'
        maxLength={50}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.password}>PASSWORD</Text>
      <TextInput
        style={styles.textInput2}
        numberOfLines={1}
        width='80%'
        maxLength={50}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
  
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>
          Sign up & Accept
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
  textInput3: {
    top: '29%',
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
  },
  username: {
    top: '27%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  password: {
    top: '23%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
});

export default SignUpEmail;
