import { View, Text } from 'react-native'
import React from 'react'
import InChatHeader from '../components/InChatHeader'

const InChatScreen = () => {
  return (
    <View>
      <InChatHeader name='Team Snapchat' onPress={() => navigation.navigate('Chat')} />
    </View>
  )
}

export default InChatScreen