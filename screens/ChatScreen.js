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

import Header from '../components/ChatHeader';
import MessageList from '../components/MessageList';

function ChatScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MessageList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEED',
    flex: 1,
  },
});

export default ChatScreen;
