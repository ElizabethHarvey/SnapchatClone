import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function BirthdayScreen({ navigation }) {
  const [date, setDate] = useState(new Date('October 18, 2022'));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showIos, setShowIos] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onChangeIos = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowIos(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS == 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showModeIOS = (currentMode) => {
    if (Platform.OS === 'ios') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showDatepickerIOS = () => {
    showModeIOS('date');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>When's your birthday?</Text>
      <Text style={styles.birthday}>BIRTHDAY</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Email')}
      >
        <Text style={styles.signUpText}>Continue</Text>
      </TouchableOpacity>
      {Platform.OS === 'android' ? (
        <TouchableOpacity onPress={showDatepicker}>
          <TextInput
            placeholderTextColor={'black'}
            editable={false}
            style={styles.textInput1}
            value={
              date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
            }
          />
        </TouchableOpacity>
      ) : null}
      {Platform.OS === 'ios' ? (
        <TextInput
          placeholderTextColor={'black'}
          editable={false}
          style={styles.textInput1}
          value={
            date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
          }
          onPressIn={showDatepickerIOS}
          width='70%'
        />
      ) : null}
      {Platform.OS === 'android'
        ? show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
              style={styles.iosPicker}
            />
          )
        : null}
      {Platform.OS === 'ios'
        ? show && (
            <DateTimePicker
              display='spinner'
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChangeIos}
              style={styles.iosPicker}
            />
          )
        : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: '23%',
    top: 160,
  },
  birthday: {
    top: 195,
    left: '13%',
    color: 'gray',
    fontSize: '12%',
  },
  textInput1: {
    top: 250,
    left: '13%',
    borderBottomWidth: '1%',
    borderColor: 'lightgray',
  },
  iosPicker: {
    top: '79%',
    width: '100%',
    height: '30%',
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    borderWidth: '1%',
    borderRadius: '100%',
    bottom: '34%',
    width: '55%',
    height: '6%',
    backgroundColor: '#1FAEE0',
    borderColor: '#1FAEE0',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  signUpText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: '20%',
  },
});

export default BirthdayScreen;
