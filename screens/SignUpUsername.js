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

const SignUpUsername = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const update = {
    displayUsername: username,
  };

  const addUsername = () => {
    auth.currentUser
    .updateProfile(update)
    .then(() => {
      usersCollection
        .doc(auth.currentUser.uid)
        .update({
          Username: username,
        })
        .then(() => {
          console.log('success');
        });
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ left: '5%', top: '3%' }}>
        <Ionicons
          name='chevron-back-outline'
          size='30%'
          color='#11ACFA'
          onPress={() => navigation.navigate('Birthday')}
        />
      </TouchableOpacity>
      <Text style={styles.login}>Pick a username</Text>
      <Text style={styles.text}>Your username is how friends add you</Text>
      <Text style={styles.text2}>on Snapchat.</Text>
      <Text style={styles.username}>USERNAME</Text>
      <TextInput
        style={styles.textInput1}
        numberOfLines={1}
        width='80%'
        maxLength={50}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={styles.button}>
        <Button title='Continue' color='white' onPress={addUsername} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    alignSelf: 'center',
    fontSize: '23%',
    top: '10%',
  },
  username: {
    top: '19%',
    left: '13%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: '21%',
    left: '13%',
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
  text: {
    top: '10%',
    alignSelf: 'center',
  },
  text2: {
    top: '10.5%',
    alignSelf: 'center',
  },
});

export default SignUpUsername;
