import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';
import PopularOnSCRow from './PopularOnSCRow';
import SubscriptionsRow from './SubscriptionsRow';

const PopularOnScList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Daddy',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 2,
      title: 'Mommy',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 3,
      title: 'Zeke H.',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 4,
      title: 'Ethan H.',
      image: 'https://picsum.photos/200/300',
      time: 'today',
      star: '✪',
    },
    {
      id: 5,
      title: 'Elijah Harvey',
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
          <PopularOnSCRow image={item.image} title={item.title} />
        )}
      />
    </View>
  );
};

export default PopularOnScList;
