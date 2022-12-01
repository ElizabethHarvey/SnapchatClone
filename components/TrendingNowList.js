import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import FriendsRow from './FriendsRow';
import MessageRow from './MessageRow';
import SubscriptionsRow from './SubscriptionsRow';
import TrendingNowRow from './TrendingNowRow';

const TrendingNowList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Sunny',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪', 
    },
    {
      id: 2,
      title: 'Eddy',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 3,
      title: 'Zke',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 4,
      title: 'Darcey',
      image: 'https://picsum.photos/200/300',
      time: 'today',
      star: '✪',
    },
    {
      id: 5,
      title: 'Talia',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 6,
      title: 'Angel',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: 'today',
      star: '✪',
    },
    {
      id: 7,
      name: 'Jerry',
      image: 'https://picsum.photos/200/300',
      star: '✪',
    },
    {
      id: 8,
      title: 'Leo',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      star: '✪',
    },
    {
      id: 9,
      title: 'Eliza',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
    {
      id: 10,
      title: 'Joshua',
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
          <TrendingNowRow image={item.image} title={item.title} />
        )}
      />
    </View>
  );
};

export default TrendingNowList;
