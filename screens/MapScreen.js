import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapHeader from '../components/MapHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth, usersCollection } from '../firebase';

function MapScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = usersCollection.onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.forEach((documentSnapshot) => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setUsers(users);
    });

    return () => subscriber();
  }, [setUsers]);

  return (
    <SafeAreaView>
      <MapHeader title='Ocean' />
      <MapView
        style={{ width: '100%', height: '100%' }}
        mapType={'standard'}
        zoomEnabled={true}
        scrollEnabled={true}
        showsUserLocation={true}
        followUserLocation={true}
        showsScale={true}
      >
        {users.map((e, i) => (
          <Marker
            title={`${
              e.name === `@${auth.currentUser.displayName}`
                ? 'Me'
                : `${e.name}'s`
            } ${
              e.name === `@${auth.currentUser.displayName}`
                ? ``
                : `Located in ${e.address.region}`
            }`}
            key={i}
            coordinate={{
              latitude:
                e.location.latitude != undefined ? e.location.latitude : 0,
              longitude:
                e.location.longitude != undefined ? e.location.longitude : 0,
            }}
          ></Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MapScreen;
