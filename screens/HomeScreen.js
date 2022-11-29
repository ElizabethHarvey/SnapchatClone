import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera';
import * as MedialLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../firebase';

import ImageModal from '../components/ImageModal';
import MyStory from '../components/MyStory';
import Friends from '../components/AddFriends';
import MyFriends from '../components/MyFriends';
import BitmojiCards from '../components/BitmojiCards';

export default function HomeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [newDreamModalVisible, setNewDreamModalVisible] = useState(false);

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
  const ListFooter = () => {
    return <View style={styles.headerFooterStyle}></View>;
  };

  return (
    <View style={styles.cameraContainer}>
      <Modal
        style={styles.modal}
        animationType='fade'
        visible={newDreamModalVisible}
        onRequestClose={() => setNewDreamModalVisible(false)}
      >
        <ScrollView ListFooterComponent={ListFooter} style={styles.modalView}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => setNewDreamModalVisible(false)}
            >
              <Ionicons name='chevron-down-outline' size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cog}>
              <Ionicons name='cog' size={30} color='black' />
            </TouchableOpacity>
          </View>
          <View
            style={{
              resizeMode: 'contain',
              alignItems: 'center',
              borderWidth: '3%',
              borderRadius: '25%',
              marginLeft: '33%',
              marginRight: '34%',
            }}
          >
            <Image
              source={require('../assets/pfp.png')}
              style={{ width: 140, height: 141 }}
            />
          </View>
          <View style={{ alignItems: 'center', top: '1%' }}>
            <Text style={styles.name}>Stacy Brown</Text>
          </View>
          <View
            style={{
              top: '3%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.username}> stacyb </Text>
            <Text style={styles.dot}> ● </Text>
            <Text style={styles.snapScore}> 23,232 </Text>
            <Text> ♌ </Text>
          </View>
          <View style={{ top: '9%', left: '2.3%', flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Stories</Text>
            <View
              style={{
                right: '4%',
                flexDirection: 'row',
                position: 'absolute',
                backgroundColor: '#E8E8E8',
                width: '25%',
                alignItems: 'center',
                borderRadius: '10%',
                height: '110%',
              }}
            >
              <Ionicons
                name='add'
                size={20}
                style={{ left: '20%', color: '#4FAAF9' }}
              />
              <Text style={{ fontSize: 15, fontWeight: '600', left: '20%' }}>
                New Story
              </Text>
            </View>
          </View>
          <MyStory />
          <Text
            style={{
              left: '2.3%',
              fontSize: 20,
              fontWeight: '600',
              top: '38%',
            }}
          >
            Friends
          </Text>
          <Friends />
          <MyFriends />
          <Text
            style={{
              left: '2.3%',
              fontSize: 20,
              fontWeight: '600',
              top: '121%',
            }}
          >
            Bitmoji
          </Text>
          <BitmojiCards
            title={'Change Outfit'}
            name='shirt-outline'
            style={{ top: '123%' }}
          />
          <BitmojiCards
            title={'Edit Avatar'}
            name='pencil-outline'
            style={{ top: '124%' }}
          />
        </ScrollView>
      </Modal>
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
              onPress={() => setNewDreamModalVisible(true)}
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
    top: 70,
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
    top: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  Text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: 20,
  },
  arrow: {
    marginTop: 40,
    marginBottom: 15,
    left: '40%',
  },
  cog: {
    marginTop: 40,
    marginBottom: 15,
    right: '40%',
  },
  name: {
    top: '2%',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#3a3b3c',
  },
  username: {
    color: '#3a3b3c',
  },
  dot: {
    color: '#d3d3d3',
    fontSize: 5,
  },
  snapScore: {
    color: '#3a3b3c',
  },
  stories: {
    fontSize: '20%',
    color: '#3a3b3c',
    fontWeight: 'bold',
  },
  newStory: {
    fontSize: '15%',
    width: 95,
    height: 26,
    backgroundColor: '#f0f0f0',
  },
  headerFooterStyle: {
    width: '100%',
    height: '100%',
  },
});
