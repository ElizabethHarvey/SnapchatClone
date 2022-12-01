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
      title: 'Team Snapchat',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: '19h ago',
    },
    {
      id: 2,
      title: 'Alexandra Shae',
      image: 'https://picsum.photos/200/300',
      time: '1d ago',
    },
    {
      id: 3,
      title: 'Ludo Pavel',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: '4h ago',
    },
    {
      id: 4,
      title: 'Rickie Rebeccanne',
      image: 'https://picsum.photos/200/300',
      time: '12h ago',
    },
    {
      id: 5,
      title: 'Nichole Jannette',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
      time: '2d ago',
    },
    {
      id: 6,
      title: 'Rae Neil',
      image: 'https://picsum.photos/200/300',
      time: 'today',
    },
  ];

  const ListFooter = () => {
    return <View style={styles.headerFooterStyle}></View>;
  };

  return (
    <View>
      <FlatList
        ListFooterComponent={ListFooter}
        vertical={true}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ForYouRow image={item.image} title={item.title} time={item.time} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerFooterStyle: {
    width: '100%',
    height: 110,
  },
});

export default ForYouList;
