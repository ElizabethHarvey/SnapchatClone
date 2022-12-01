import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import MessageRow from './MessageRow';

const MessageList = ({ onPress }) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: 'Team Snapchat',
      streak: '30',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'red', 
      textColor: 'red',
      time: '10m',
      smile: '😊',
    },
    {
      id: 2,
      name: 'Alexandra Shae',
      streak: '31',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'purple',
      textColor: 'purple',
      time: '20m',
    },
    {
      id: 3,
      name: 'Ludo Pavel',
      streak: '6',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'purple',
      textColor: 'purple',
      time: '5m',
    },
    {
      id: 4,
      name: 'Rickie Rebeccanne',
      streak: '17',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'play-outline',
      IconColor: 'red',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
    {
      id: 5,
      name: 'Nichole Jannette',
      streak: '23',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
    {
      id: 6,
      name: 'Rae Neil',
      streak: '100',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '1h',
    },
    {
      id: 7,
      name: 'Sherley Hayley',
      streak: '51',
      image: 'https://picsum.photos/200/300',
      title: 'call-enabled',
      IconName: 'call-outline',
      IconColor: 'lightblue',
      textColor: 'grey',
      time: '5m',
    },
    {
      id: 8,
      name: 'Everette Addy',
      streak: '5',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '40m',
      smile: '😊',
    },
    {
      id: 9,
      name: 'Branden Lorrin',
      streak: '17',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'square-outline',
      IconColor: 'red',
      textColor: 'grey',
      time: '3h',
    },
    {
      id: 10,
      name: 'Elodie Cameron',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'chatbox-outline',
      IconColor: 'lightblue',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
    {
      id: 11,
      name: 'Sunny Iggy',
      streak: '30',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'red',
      textColor: 'red',
      time: '10m',
    },
    {
      id: 12,
      name: 'Eddy Joshua',
      streak: '31',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'purple',
      textColor: 'purple',
      time: '20m',
      smile: '😊',
    },
    {
      id: 13,
      name: 'Darcey Talia',
      streak: '6',
      image: 'https://picsum.photos/200/300',
      title: 'New Snap',
      IconName: 'square',
      IconColor: 'purple',
      textColor: 'purple',
      time: '5m',
    },
    {
      id: 14,
      name: 'Angel Leo',
      streak: '17',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'play-outline',
      IconColor: 'red',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
    {
      id: 15,
      name: 'Jerry ',
      streak: '23',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
    {
      id: 16,
      name: 'Lottie',
      streak: '100',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '1h',
    },
    {
      id: 17,
      name: 'Eliza Rozanne',
      streak: '51',
      image: 'https://picsum.photos/200/300',
      title: 'call-enabled',
      IconName: 'call-outline',
      IconColor: 'lightblue',
      textColor: 'grey',
      time: '5m',
    },
    {
      id: 18,
      name: 'Deforrest Kenya',
      streak: '5',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'square-outline',
      IconColor: 'purple',
      textColor: 'grey',
      time: '40m',
      smile: '😊',
    },
    {
      id: 19,
      name: 'Emilia Lilibeth',
      streak: '17',
      image: 'https://picsum.photos/200/300',
      title: 'Opened',
      IconName: 'square-outline',
      IconColor: 'red',
      textColor: 'grey',
      time: '3h',
    },
    {
      id: 20,
      name: 'Harmonie Irene',
      image: 'https://picsum.photos/200/300',
      title: 'Received',
      IconName: 'chatbox-outline',
      IconColor: 'lightblue',
      textColor: 'grey',
      time: '5m',
      smile: '😊',
    },
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
