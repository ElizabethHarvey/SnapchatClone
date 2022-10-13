import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';

const MessageList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: 'Daddy',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
    {
      id: 2,
      name: 'Mommy',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Zeke H.',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
    {
      id: 4,
      name: 'Ethan H.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'Elijah Harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
    {
      id: 6,
      name: 'harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
    {
      id: 7,
      name: 'Zeke',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      name: 'Lizzy Harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
    {
      id: 9,
      name: 'Ethan Harvey',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      name: 'Elijah Harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed'
    },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendsRow image={item.image} name={item.name} lock={item.lock}/>
        )}
      />
    </View>
  );
};

export default MessageList;
