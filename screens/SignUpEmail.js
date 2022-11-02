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
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const SignUpEmail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ left: '5%' }}>
          <Ionicons
            name='chevron-back-outline'
            size='30%'
            color='#11ACFA'
            onPress={() => navigation.navigate('Password')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>What's your email?</Text>
        <Text style={styles.email}>EMAIL</Text>
        <TextInput
          style={styles.textInput1}
          numberOfLines={1}
          width='80%'
          maxLength={15}
          keyboardType='email-address'
        />
        <View style={styles.button}>
          <Button
            title='Continue'
            color='white'
            onPress={() => navigation.navigate('Email')}
          />
        </View>
    </SafeAreaView>
  );
};``

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
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
});

export default SignUpEmail;