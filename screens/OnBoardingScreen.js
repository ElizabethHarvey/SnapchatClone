import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 85, height: 85 }}
        />
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
    justifyContent: 'center',
    top: 260
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
    letterSpacing: 3,
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
    letterSpacing: 3,
  },
});

export default OnBoardingScreen;
