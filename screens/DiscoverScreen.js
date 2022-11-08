import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import DiscoverHeader from '../components/DiscoverHeader';
import Weather from '../components/Weather';
import DiscoverSubList from '../components/DiscoverSubList';
import TrendingNowList from '../components/TrendingNowList';
import PopularOnSCList from '../components/PopularOnSCList';

function DiscoverScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DiscoverHeader />
        <Text style={styles.HappeningNow}>Happening Now</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            left: 10,
          }}
        >
          <Text style={styles.Date}>Sunday, May 24</Text>
          <View style={styles.dots}>
            <Ionicons name='notifications' size={27} color='#E7E6E6' />
          </View>
        </View>
        <Weather />
        <Text style={styles.text}>Discover Subscriptions</Text>
        <DiscoverSubList />
        <Text style={styles.text2}>Trending Now</Text>
        <TrendingNowList />
        <Text style={styles.text3}>Popular on Snapchat</Text>
        <PopularOnSCList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  HappeningNow: {
    backgroundColor: 'black',
    fontSize: '21%',
    fontWeight: 'bold',
    color: 'white',
    left: 17,
    marginTop: '2%',
  },
  Date: {
    backgroundColor: 'black',
    fontSize: '15%',
    fontWeight: 'bold',
    color: 'gray',
    left: '15%',
  },
  dots: {
    borderRadius: '100%',
    width: 40,
    height: 40,
    backgroundColor: '#767676',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '2%',
    right: '50%',
  },
  text: {
    marginTop: '5%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: '3%',
    color: 'white',
  },
  text2: {
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: '3%',
    color: 'white',
  },
  text3: {
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
    left: '3%',
    color: 'white',
  },
});

export default DiscoverScreen;
