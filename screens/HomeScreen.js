import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MedialLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';

import ImageModal from '../components/ImageModal';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  console.log(auth.currentUser);

  useEffect(() => {
    (async () => {
      MedialLibrary.requestPermissionsAsync();
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

  const savePicture = async () => {
    if (image) {
      try {
        await MedialLibrary.createAssetAsync(image);
        alert('Success');
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>Permission Denied</Text>;
  }

  return (
    <View style={styles.cameraContainer}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={styles.Header}>
            <TouchableOpacity
              style={styles.profilePic}
              onPress={() => navigation.navigate('')}
            >
              <Image
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={{ width: '90%', height: '90%', borderRadius: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.search}>
              <Ionicons name='search-outline' size={35} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addFriend}>
              <Ionicons name='person-add' size={35} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ellipsis}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <Ionicons
                name={'git-compare-outline'}
                size={35}
                color={'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flash}>
              <Ionicons
                name={
                  flash === Camera.Constants.FlashMode.off
                    ? 'flash-off-outline'
                    : 'flash-outline'
                }
                size={35}
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
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View style={{ flex: 1 }}>
            <View style={{ bottom: '10%', left: '10%', position: 'absolute' }}>
              <TouchableOpacity onPress={() => setImage(null)}>
                <Ionicons name='reload-outline' size={50} color='white' />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={savePicture}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '80%',
                  }}
                >
                  <Ionicons
                    name='checkmark-circle-outline'
                    size={50}
                    color='white'
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity style={styles.picture} onPress={takePicture} />
            <TouchableOpacity style={styles.pictureIcon}>
              <ImageModal />
            </TouchableOpacity>
            <TouchableOpacity style={styles.happy}>
              <ImageModal />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: '100%',
    borderColor: 'white',
    borderWidth: '3%',
    position: 'absolute',
    bottom: 30,
    flex: 1,
    alignSelf: 'center',
  },
  pictureIcon: {
    position: 'absolute',
    bottom: 50,
    left: 110,
    flex: 1,
  },
  happy: {
    position: 'absolute',
    bottom: 50,
    right: 110,
    flex: 1,
  },
  toggleCamera: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '18%',
  },
  search: {
    position: 'absolute',
    left: '20%',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: '100%',
    position: 'absolute',
    left: 10,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFriend: {
    position: 'absolute',
    right: '15%',
  },
  ellipsis: {
    position: 'absolute',
    right: '4%',
    alignItems: 'center',
  },
  flash: {
    position: 'absolute',
    right: '4%',
    top: 25,
  },
});
