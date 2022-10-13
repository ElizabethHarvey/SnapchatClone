import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ChatScreen from '../screens/ChatScreen';
import StoriesScreen from '../screens/StoriesScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='⋆'
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ focused, color, size, textColor }) => {
          let iconName;

          if (route.name === '‧') {
            iconName = focused ? 'location-outline' : 'location-outline';
            color = focused ? '#21c23e' : 'gray';
          } else if (route.name === '·') {
            iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
            color = focused ? '#3c9dde' : 'gray';
          } else if (route.name === '⋆') {
            iconName = focused ? 'camera-outline' : 'camera-outline';
            color = focused ? '#DEC20B' : 'gray';
          } else if (route.name === '◦') {
            iconName = focused ? 'people-outline' : 'people-outline';
            color = focused ? '#A020F0' : 'gray';
          } else if (route.name === '◌') {
            iconName = focused ? 'play-outline' : 'play-outline';
            color = focused ? '#FF0000' : 'gray';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {backgroundColor: 'black', },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen
        name='‧'
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='·'
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='⋆'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='◦'
        component={StoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='◌'
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
