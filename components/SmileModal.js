import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SmileHomeButton from './SmileIcon';
import IconButton from './ExitIcon';
import ExitIcon from './ExitIcon';
import ImageIcon from './ImageIcon';
import SmileIcon from './SmileIcon';

const SmileModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your to ugly too use a filter</Text>
            <ExitIcon onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
      <SmileIcon onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: '90%',
    margin: '20%',
    backgroundColor: 'white',
    borderRadius: '30%',
    padding: '5%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: 'black',
  },
});

export default SmileModal;
