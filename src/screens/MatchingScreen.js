import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    TextInput,
  } from "react-native";
  import React, { useState,useEffect } from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { useNavigation } from "@react-navigation/native";
  import Images from "../images";
  import { firebase } from "../../config";
  import { SafeAreaView } from "react-native-safe-area-context";
const MatchingScreen = () => {
	const navigation = useNavigation();

  return (
	<View>
	  <Text>MatchingScreen</Text>
	</View>
  )
}

export default MatchingScreen