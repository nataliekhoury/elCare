import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import Images from "../images";
import { useState } from "react";
import {firebase } from "../../config";
import {firebaseConfig} from "../../config";
import EventInfoScreen from "./EventInfoScreen";
import EventListScreen from "./EventListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, SafeAreaView } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";



const AddPostFeedScreen = () => {
  return (
    <View>
      <Text>AddPostFeedScreen</Text>
    </View>
  )
}

export default AddPostFeedScreen