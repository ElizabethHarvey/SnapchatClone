import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import * as MediaLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CameraButton from './CameraButton';
import IconButton from './IconButton';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {/* {!Image ? ( */}
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={styles.topIcons}>
          <TouchableOpacity>
            <Ionicons name='search' size={30} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={'flash'}
              size={30}
              color={
                flash === Camera.Constants.FlashMode.off ? 'gray' : 'white'
              }
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
            <Ionicons
            style={styles.flipIcon}
              name='git-compare'
              size={30}
              color='white'
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
          </TouchableOpacity>
        </View>
        <CameraButton onPress={takePicture} />
      </Camera>
      {/* ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View>
        {!image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: '12%',
            }}
          >
            <IconButton icon='sync' title={'Re-take'} />
            <IconButton icon='checkmark' title={'Save'} />
          </View>
        ) : (
          <CameraButton onPress={takePicture} />
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  camera: {
    paddingBottom: '25%',
  },
  topIcons: {
    flexDirection: 'row',
    marginTop: '20%',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  flipIcon: {
    paddingTop: '5%',
  }
});
