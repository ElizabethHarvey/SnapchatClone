import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
import StoriesHeader from '../components/StoriesHeader';

function StoriesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StoriesHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default StoriesScreen;