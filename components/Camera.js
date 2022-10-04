import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Image, StyleSheet, Text, View } from 'react-native';

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
    justifyContent: 'center',
  },
  camera: {
    paddingBottom: '20%',
    borderRadius: 20,
  },
});
