import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import * as MedialLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CameraButton from './CameraButton';
import IconButton from './ExitIcon';
import SmileModal from './SmileModal';
import ImageModal from './ImageModal';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

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
        alert('Picture Saved!!');
        setImage(null);
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
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image
              style={styles.profilePic}
              source={{
                uri: 'http://images2.fanpop.com/image/photos/8600000/random-animals-animals-8675984-377-442.jpg',
              }}
            />
            <TouchableOpacity style={{ marginLeft: '10%' }}>
              <Ionicons name='search' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View> 
              <Ionicons
                size={29}
                color={
                  flash === Camera.Constants.FlashMode.off ? 'gray' : 'white'
                }
                name={
                  flash === Camera.Constants.FlashMode.off ? 'flash-off' : 'flash'
                }
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              />
            </View>
            <Ionicons
              style={styles.flipIcon}
              name='git-compare'
              size={29}
              color='white'
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            marginTop: '127%',
          }}
        >
          <TouchableOpacity style={styles.happy}>
            <SmileModal />
          </TouchableOpacity>
          <CameraButton onPress={takePicture} />
          <TouchableOpacity style={styles.images}>
            <ImageModal />
          </TouchableOpacity>
        </View>
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
            <IconButton
              icon='checkmark-outline'
              title={'Save'}
              onPress={savePicture}
            />
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
    paddingBottom: '10%',
  },
  topIcons: {
    flexDirection: 'row',
    marginTop: '15%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  flipIcon: {
    paddingTop: '5%',
  },
  happy: {
    marginTop: '12%',
    flexDirection: 'row',
  },
  images: {
    paddingRight: '5%',
    marginTop: '12%',
    flexDirection: 'row',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: '100%',
  },
});
