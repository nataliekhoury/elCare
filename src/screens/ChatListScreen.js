import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const ChatListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ChatListScreen</Text>
    </View>
  )
}

export default ChatListScreen