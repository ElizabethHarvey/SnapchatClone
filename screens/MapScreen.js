import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapHeader from '../components/MapHeader';
import Ionicons from '@expo/vector-icons/Ionicons';

function MapScreen() {
  return (
    <SafeAreaView>
      <MapHeader title='Ocean' />
      <MapView
        mapType={'standard'}
        zoomEnabled={true}
        scrollEnabled={true}
        showsScale={true}
        style={{ width: '100%', height: '100%' }}
      >
        <Marker coordinate={{ latitude: 30.4543, longitude: -22.5479 }} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MapScreen;
