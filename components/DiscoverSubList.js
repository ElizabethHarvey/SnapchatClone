import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import DiscoverSubRow from './DiscoverSubRow';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';
import SubscriptionsRow from './SubscriptionsRow';

const DiscoverSubList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Rozanne',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
    },
    {
      id: 2,
      title: 'Kenya',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 3,
      title: 'Lottie',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
    },
    {
      id: 4,
      title: 'Angel H.',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 5,
      title: 'Leo',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 6,
      title: 'Darcey',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
    },
    {
      id: 7,
      name: 'Talia',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      title: 'Joshua',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 9,
      title: 'Eddy',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 10,
      title: 'Sunny',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
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
          <DiscoverSubRow image={item.image} title={item.title} />
        )}
      />
    </View>
  );
};

export default DiscoverSubList;
