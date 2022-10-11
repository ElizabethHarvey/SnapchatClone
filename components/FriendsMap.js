import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function FriendsMap(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Chat')}
      >
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: '85%', height: '90%', borderRadius: '100%', alignItems: 'center'}}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    width: 70,
    height:30,
    borderRadius: '100%',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    left: '9%',
    justifyContent: 'center',
  },
  text: {
    borderRadius: '5%',
    marginTop: '12%',
    width: 95,
    height: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    paddingLeft: '2%',
    paddingLeft: '2%',
    paddingBottom: '5%',
    paddingTop: '1%',
    fontSize: '15',
    top: '65%',
    backgroundColor: 'lightgray',
  }
});

export default FriendsMap;