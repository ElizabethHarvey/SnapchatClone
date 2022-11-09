import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Fontisto name='snapchat' size={95} color='white' style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate('Email')}
      >
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFC00',
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    top: 140,
  },
  login: {
    backgroundColor: '#EE4850',
    alignSelf: 'center',
    bottom: '8.5%',
    width: '100%',
    height: '8.5%',
    justifyContent: 'center',
    position: 'absolute',
  },
  loginText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25%',
  },
  signUp: {
    backgroundColor: '#3DACF2',
    alignSelf: 'center',
    width: '100%',
    height: '9%',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
  signUpText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25%',
  },
});

export default OnBoardingScreen;
