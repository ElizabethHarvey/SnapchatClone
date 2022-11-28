import { View, Text } from 'react-native'
import React from 'react'
import InChatHeader from '../components/InChatHeader'
import SCTextInput from '../components/SCTextInput'

const InChatScreen = ({ navigation }) => {
  return (
    <View>
      <InChatHeader name='Team Snapchat' onPress={() => navigation.goBack('')}/>
      <SCTextInput />
    </View>
  )
}

export default InChatScreen