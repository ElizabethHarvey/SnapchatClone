import React from 'react';
import { View, FlatList } from 'react-native';
import FriendsRow from './FriendsRow';

const FriendsList = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: 'Team',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 2,
      name: 'Alexandra Shae',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Ludo Pavel',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 4,
      name: 'Rickie',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'Nichole Jannette',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 6,
      name: 'Rae Neil',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 7,
      name: 'Sherley Hayley',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      name: 'Everette Addy',
      image: 'https://picsum.photos/200/300',
      lock: 'lock-closed',
    },
    {
      id: 9,
      name: 'Branden Lorrin',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      name: 'Elodie ',
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
          <FriendsRow image={item.image} name={item.name} lock={item.lock} />
        )}
      />
    </View>
  );
};

export default FriendsList;
