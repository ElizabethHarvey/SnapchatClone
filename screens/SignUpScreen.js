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

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ left: '5%'}}>
        <Ionicons name='chevron-back-outline' size='30%' color='#11ACFA' onPress={() => navigation.navigate('OnBoard')}/>
      </TouchableOpacity>
      <Text style={styles.login}>What's your name?</Text>
      <Text style={styles.username}>FIRST NAME</Text>
      <TextInput style={styles.textInput1} numberOfLines={1} width='80%' />
      <Text style={styles.password}>LAST NAME</Text>
      <TextInput style={styles.textInput2} numberOfLines={1} width='80%' />
      <TouchableOpacity style={styles.button}>
        <Button title='Sign Up & Accept' color='white' onPress={() => navigation.navigate('Birthday')} />
      </TouchableOpacity>
      <Text style={styles.text}>
        By tapping Sign Up & Accept, you acknowledge that
      </Text>
      <Text style={styles.text2}>
        you have read the Privacy Policy and agree to the{' '}
      </Text>
      <Text style={styles.text3}>Terms of Service.</Text>
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
  text: {
    top: '11%',
    left: '10%',
  },
  text2: {
    top: '11%',
    left: '10%',
  },
  text3: {
    top: '11%',
    left: '10%',
  },
});
export default SignUpScreen;
