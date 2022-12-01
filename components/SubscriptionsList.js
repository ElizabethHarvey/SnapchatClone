import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';
import SubscriptionsRow from './SubscriptionsRow';

const SubscriptionList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Harmonie Irene',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 2,
      title: 'Emilia',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 3,
      title: 'Deforrest H.',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 4,
      title: 'Eliza H.',
      image: 'https://picsum.photos/200/300',
      time: 'today',
      star: '✪',
    },
    {
      id: 5,
      title: 'Rozanne',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 6,
      title: 'harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 7,
      name: 'Zeke',
      image: 'https://picsum.photos/200/300',
      star: '✪',
    },
    {
      id: 8,
      title: 'Lizzy Harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      star: '✪',
    },
    {
      id: 9,
      title: 'Ethan Harvey',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 10,
      title: 'Elijah Harvey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      star: '✪',
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
          <SubscriptionsRow
            image={item.image}
            title={item.title}
            time={item.time}
            star={item.star}
          />
        )}
      />
    </View>
  );
};

export default SubscriptionList;
