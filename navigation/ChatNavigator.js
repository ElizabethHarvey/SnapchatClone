import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../screens/ChatScreen';
import InChatScreen from '../screens/InChatScreen';
import InChatHeader from '../components/InChatHeader';


const Stack = createNativeStackNavigator();

const ChatNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none'}
      }}
    >
      <Stack.Screen component={ChatScreen} name='ChatScreen' />
      <Stack.Screen component={InChatScreen} name='InChat' />
      <Stack.Screen component={InChatHeader} name='ChatHeader' />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
