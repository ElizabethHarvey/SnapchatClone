import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SenderMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text>{message.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default SenderMessage;