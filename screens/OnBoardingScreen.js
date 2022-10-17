import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Fontisto
          name='snapchat'
          size={95}
          color='white'
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.login}
      onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('Sign')}
      >
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    top: '25%',
  },
  login: {
    backgroundColor: '#EF4E56',
    alignSelf: 'center',
    marginTop: '156%',
    width: '100%',
    height: '8.5%',
    justifyContent: 'center',
  },
  loginText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25%',
  },
  signUp: {
    backgroundColor: '#4EC3EF',
    alignSelf: 'center',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
  },
  signUpText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25%',
  },
});

export default OnBoardingScreen;
