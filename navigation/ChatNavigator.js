import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../screens/ChatScreen';
import InChatScreen from '../screens/InChatScreen';
import InChatHeader from '../components/InChatHeader';
import AppNavigator from './AppNavigator';


const Stack = createNativeStackNavigator();

const ChatNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={InChatScreen} name='InChat' />
      <Stack.Screen component={InChatHeader} name='Header' />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
