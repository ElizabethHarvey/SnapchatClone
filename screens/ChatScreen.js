import React, { useEffect, useState } from 'react';
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
import SenderMessage from '../components/SenderMessage';
import { auth, usersCollection } from '../firebase';
import MessageRow from '../components/MessageRow';

function ChatScreen(props) {
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const subscriber = usersCollection
  //     .doc(auth.currentUser.uid)
  //     .collection('messages')
  //     .where('room', 'array-contains', route.params.uid)
  //     .orderby('createdAt', 'desc')
  //     .onSnapshot((querySnapshot) => {
  //       const allSentMessages = []
  //       querySnapshot.forEach((documentSnapshot) => {
  //         allSentMessages.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });

  //       setMessages(allSentMessages);
  //     });
  //   return () => subscriber();
  // }, [usersCollection]);
  

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MessageList onPress={() => navigation.navigate('Header')} />
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
