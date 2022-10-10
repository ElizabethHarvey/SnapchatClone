import React from 'react';
import {
  Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import Header from '../components/Header';
import MessageList from '../components/MessageList';

function ChatScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <MessageList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEED',
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: '20%',
  },
  topIcons: {
    flexDirection: 'row',
    marginTop: '4%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    bottom: '3%',
  },
});

export default ChatScreen;
