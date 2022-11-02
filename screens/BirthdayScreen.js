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
  const [date, setDate] = useState(new Date('10/18/2022'));
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
      <View style={styles.button}>
        <Button
          title='Continue'
          color='white'
          onPress={() => navigation.navigate('User')}
        />
      </View>
      {Platform.OS === 'ios'
        ? show && (
            <DateTimePicker
              display='default'
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
    top: '25%',
    right: '17%',
    height: '47%',
  },
  button: {
    position: 'absolute',
    borderWidth: '1%',
    borderRadius: '100%',
    width: '55%',
    height: '10%',
    backgroundColor: '#1FAEE0',
    borderColor: '#1FAEE0',
    top: '125%',
    alignSelf: 'center',
    justifyContent:'center',
  },
});

export default BirthdayScreen;
