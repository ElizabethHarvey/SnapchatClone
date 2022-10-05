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
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? 'location' : 'location-outline';
            color = focused ? '#21c23e' : 'gray';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
            color = focused ? '#3c9dde' : 'gray';
          } else if (route.name === 'Home') {
            iconName = focused ? 'camera' : 'camera-outline';
            color = focused ? '#DEC20B' : 'gray';
          } else if (route.name === 'Stories') {
            iconName = focused ? 'people' : 'people-outline';
            color = focused ? '#A020F0' : 'gray';
          } else if (route.name === 'Discover') {
            iconName = focused ? 'play' : 'play-outline';
            color = focused ? '#FF0000' : 'gray';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name='Map'
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Stories'
        component={StoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
