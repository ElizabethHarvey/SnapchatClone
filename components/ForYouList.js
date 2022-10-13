import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import ForYouRow from './ForYouRow';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';
import SubscriptionsRow from './SubscriptionsRow';

const ForYouList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Daddy',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪'
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
      star: '✪'
    },
    {
      id: 4,
      title: 'Ethan H.',
      image: 'https://picsum.photos/200/300',
      time: 'today',
      star: '✪'
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
          <ForYouRow image={item.image} title={item.title} time={item.time} star={item.star} />
        )}
      />
    </View>
  );
};

export default ForYouList;
