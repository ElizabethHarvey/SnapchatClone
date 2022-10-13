import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StoriesHeader from '../components/StoriesHeader';
import FriendsList from '../components/FriendsList';
import SubscriptionList from '../components/SubscriptionsList';
import ForYouList from '../components/ForYouList';

function StoriesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StoriesHeader />
      <Text style={styles.text}>Friends</Text>
      <FriendsList />
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <Text style={styles.subText}>Subscriptions</Text>
        <Text style={styles.arrowHead}>{' >'}</Text>
      </TouchableOpacity>
      <SubscriptionList />
        <Text style={styles.ForYou}>ForYou</Text>
      <ForYouList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subText: {
    left: '20%',
    marginTop: '5%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrowHead: {
    marginTop: '5%',
    marginBottom: '%',
    fontWeight: 'bold',
    fontSize: 20,
    left: '20%',
    color: 'lightgrey',
  },
  ForYou: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: '9%',
    left: '5%',
  },
  text: {
    marginTop: '5%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: '3%',
  },
});

export default StoriesScreen;
