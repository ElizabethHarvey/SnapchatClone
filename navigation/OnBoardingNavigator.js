import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import BirthdayScreen from '../screens/BirthdayScreen';
import SignUpPassword from '../screens/SignUpPassword';
import SignUpUsername from '../screens/SignUpUsername';
import SignUpEmail from '../screens/SignUpEmail';
import NameScreen from '../screens/NameScreen';


const Stack = createNativeStackNavigator();

const OnBoardingNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName='onBoardingScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={OnBoardingScreen} name='OnBoard' />
      <Stack.Screen component={LoginScreen} name='LogIn' />
      <Stack.Screen component={NameScreen} name='Name' />
      <Stack.Screen component={BirthdayScreen} name='Birthday' />
      <Stack.Screen component={AppNavigator} name='AppNav' />
      <Stack.Screen component={SignUpUsername} name='User' />
      <Stack.Screen component={SignUpPassword} name='Password' />
      <Stack.Screen component={SignUpEmail} name='Email' />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
