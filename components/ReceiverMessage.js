import React from 'react';
import { StyleSheet, View } from 'react-native';

function ReceiverMessage(props) {
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

export default ReceiverMessage;