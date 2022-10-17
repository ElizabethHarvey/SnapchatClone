import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import BirthdayScreen from '../screens/BirthdayScreen';

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
      <Stack.Screen component={SignUpScreen} name='Sign' />
      <Stack.Screen component={BirthdayScreen} name='Birthday' />
      <Stack.Screen component={AppNavigator} name='AppNav' />
      
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;