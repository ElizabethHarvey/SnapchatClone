import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

import StoriesHeader from '../components/StoriesHeader';
import FriendsList from '../components/FriendsList';
import SubscriptionList from '../components/SubscriptionsList';
import ForYouList from '../components/ForYouList';

function StoriesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StoriesHeader />
      <ScrollView>
        <Text style={styles.text}>Friends</Text>
        <FriendsList />
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={styles.subText}>Subscriptions</Text>
          <Text style={styles.arrowHead}>{' >'}</Text>
        </TouchableOpacity>
        <SubscriptionList />
        <Text style={styles.ForYou}>ForYou</Text>
        <ForYouList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subText: {
    left: 15,
    marginTop: '2%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrowHead: {
    marginTop: '5%',
    bottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: 15,
    color: 'lightgrey',
  },
  ForYou: {
    fontWeight: 'bold',
    fontSize: 20,
    left: 15,
    bottom: '0.5%',
  },
  text: {
    marginTop: '1%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: 15,
  },
});

export default StoriesScreen;
