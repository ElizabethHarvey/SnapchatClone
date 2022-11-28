import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import MessageRow from './MessageRow';

const MessageList = ({ onPress }) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: 'Daddy',
      streak: '30',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'red',
      textColor: 'red',
      time: '10m',
    },
    // {
    //   id: 2,
    //   name: 'Mommy',
    //   streak: '31',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'New Snap',
    //   IconName: 'square',
    //   IconColor: 'purple',
    //   textColor: 'purple',
    //   time: '20m',
    //   smile: '😊',
    // },
    // {
    //   id: 3,
    //   name: 'Zeke H.',
    //   streak: '6',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'New Snap',
    //   IconName: 'square',
    //   IconColor: 'purple',
    //   textColor: 'purple',
    //   time: '5m',
    // },
    // {
    //   id: 4,
    //   name: 'Ethan H.',
    //   streak: '17',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'play-outline',
    //   IconColor: 'red',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
    // {
    //   id: 5,
    //   name: 'Elijah Harvey',
    //   streak: '23',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
    // {
    //   id: 6,
    //   name: 'harvey',
    //   streak: '100',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '1h',
    // },
    // {
    //   id: 7,
    //   name: 'Zeke',
    //   streak: '51',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'call-enabled',
    //   IconName: 'call-outline',
    //   IconColor: 'lightblue',
    //   textColor: 'grey',
    //   time: '5m',
    // },
    // {
    //   id: 8,
    //   name: 'Lizzy Harvey',
    //   streak: '5',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '40m',
    //   smile: '😊',
    // },
    // {
    //   id: 9,
    //   name: 'Ethan Harvey',
    //   streak: '17',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'square-outline',
    //   IconColor: 'red',
    //   textColor: 'grey',
    //   time: '3h',
    // },
    // {
    //   id: 10,
    //   name: 'Elijah Harvey',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'chatbox-outline',
    //   IconColor: 'lightblue',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
    // {
    //   id: 11,
    //   name: 'Daddy',
    //   streak: '30',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'New Snap',
    //   IconName: 'square',
    //   IconColor: 'red',
    //   textColor: 'red',
    //   time: '10m',
    // },
    // {
    //   id: 12,
    //   name: 'Mommy',
    //   streak: '31',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'New Snap',
    //   IconName: 'square',
    //   IconColor: 'purple',
    //   textColor: 'purple',
    //   time: '20m',
    //   smile: '😊',
    // },
    // {
    //   id: 13,
    //   name: 'Zeke H.',
    //   streak: '6',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'New Snap',
    //   IconName: 'square',
    //   IconColor: 'purple',
    //   textColor: 'purple',
    //   time: '5m',
    // },
    // {
    //   id: 14,
    //   name: 'Ethan H.',
    //   streak: '17',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'play-outline',
    //   IconColor: 'red',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
    // {
    //   id: 15,
    //   name: 'Elijah Harvey',
    //   streak: '23',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
    // {
    //   id: 16,
    //   name: 'harvey',
    //   streak: '100',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '1h',
    // },
    // {
    //   id: 17,
    //   name: 'Zeke',
    //   streak: '51',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'call-enabled',
    //   IconName: 'call-outline',
    //   IconColor: 'lightblue',
    //   textColor: 'grey',
    //   time: '5m',
    // },
    // {
    //   id: 18,
    //   name: 'Lizzy Harvey',
    //   streak: '5',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'square-outline',
    //   IconColor: 'purple',
    //   textColor: 'grey',
    //   time: '40m',
    //   smile: '😊',
    // },
    // {
    //   id: 19,
    //   name: 'Ethan Harvey',
    //   streak: '17',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Opened',
    //   IconName: 'square-outline',
    //   IconColor: 'red',
    //   textColor: 'grey',
    //   time: '3h',
    // },
    // {
    //   id: 20,
    //   name: 'Elijah Harvey',
    //   image: 'https://picsum.photos/200/300',
    //   title: 'Received',
    //   IconName: 'chatbox-outline',
    //   IconColor: 'lightblue',
    //   textColor: 'grey',
    //   time: '5m',
    //   smile: '😊',
    // },
  ];

  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageRow
            image={item.image}
            name={item.name}
            streak={item.streak}
            title={item.title}
            iconName={item.IconName}
            iconColor={item.IconColor}
            textColor={item.textColor}
            time={item.time}
            smile={item.smile}
            onPress={onPress}
          />
        )}
      />
    </View>
  );
};

export default MessageList;
