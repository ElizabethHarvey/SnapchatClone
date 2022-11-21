import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth, usersCollection } from '../firebase';
import * as Location from 'expo-location';

const SignUpEmail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation(coords);
      console.log(coords);

      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
      }
    })();
  }, []);

  const addSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        usersCollection.doc(auth.currentUser.email).set({
          Email: email,
          Password: password,
          location: {
            extra: location,
            longitude: location ? location.longitude : 0,
            latitude: location ? location.latitude : 0,
          }, 
          address: {
            subregion: `${address?.['subregion']}`,
            streetAddress: `${address?.['street']}`,
            streetNumber: `${address?.['streetNumber']}`,
            timeZone: `${address?.['timezone']}`,
            region: `${address?.['region']}`,
            postalCode: `${address?.['postalCode']}`,
            fullStreet: `${
              address?.['streetNumber'] + '' + address?.['street']
            }`,
            isoCountryCode: `${address?.['isoCountryCode']}`,
            country: `${address?.['country']}`,
            city: `${address?.['city']}`,
          },
          streak: Math.floor(Math.random() * 1000000) + 100000,
        });
      })
      .then(() => navigation.navigate('Name'))
      .catch((e) => {
        if (e.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid');
        }
        if (e.code === 'auth/email-already-exists');
        {
          Alert.alert('Email already exists');
        }
        console.error(e);
      });
  };

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
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={addSignUp}>
        <Text style={styles.buttonText}>Sign up & Accept</Text>
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
