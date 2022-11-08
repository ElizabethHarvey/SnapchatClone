import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const SignUpScreen = ({ navigation }) => {
  const [email, userEmail] = useState();
  const [password, userPassword] = useState();

  const signUp = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ left: '5%', top: '3%' }}>
        <Ionicons
          name='chevron-back-outline'
          size='30%'
          color='#11ACFA'
          onPress={() => navigation.navigate('OnBoard')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>What's your name?</Text>
      <Text style={styles.username}>FIRST NAME</Text>
      <TextInput
        style={styles.textInput1}
        numberOfLines={1}
        width='80%'
        maxLength={58}
      />
      <Text style={styles.password}>LAST NAME</Text>
      <TextInput
        style={styles.textInput2}
        numberOfLines={1}
        width='80%'
        maxLength={58}
      />
      <View style={styles.button}>
        <Button
          title='Sign Up & Accept'
          color='white'
          onPress={() => navigation.navigate('Birthday')}
        />
      </View>
      <Text style={styles.text}>
        By tapping Sign Up & Accept, you acknowledge that you have read the{' '}
        <Text style={{ color: 'skyblue' }}>Privacy Policy</Text> and agree to
        the{' '}
        <Text style={{ color: 'skyblue' }}>Terms of Service.</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: '23%',
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
    width: '80%',
  },
});
export default SignUpScreen;
