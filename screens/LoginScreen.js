import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ left: '5%' }}>
        <Ionicons
          name='chevron-back-outline'
          size='30%'
          color='#11ACFA'
          onPress={() => navigation.navigate('OnBoard')}
        />
      </TouchableOpacity>
      <Text style={styles.login}>Log In</Text>
      <Text style={styles.username}>USERNAME OR EMAIL</Text>
      <TextInput style={styles.textInput1} numberOfLines={1} width='80%' maxLength={58} />
      <Text style={styles.password}>PASSWORD</Text>
      <TextInput style={styles.textInput2} numberOfLines={1} width='80%' maxLength={58} />
      <TouchableOpacity style={styles.button}>
        <Button title='Log In' color='white'  onPress={() => navigation.navigate('AppNav')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgot}>
        <Button title='Forgot your password?' color='#0074FF' height='5%' />
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
    top: '6%',
  },
  username: {
    top: '10%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: '12%',
    left: '10%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  password: {
    top: '13.5%',
    left: '10%',
    letterSpacing: '1%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput2: {
    top: '16%',
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
    top: '40%',
    alignSelf: 'center',
    backgroundColor: '#4EC3EF',
    borderColor: '#4EC3EF',
  },
  forgot: {
    top: '15%',
  },
});

export default LoginScreen;
