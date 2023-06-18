import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Images from "../images";
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1DFFD6" }}>
      <View
        style={{ flex: 3, flexDirection: "column", backgroundColor: "#ddd" }}
      >
        <ImageBackground
          source={require("../images/icon.png")}
          style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}
        />
      </View>

      {/* button and text */}
      <View style={{ flex: 2, backgroundColor: "#fff" }}>
        {/* Text part */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
            Welcome to elCare
          </Text>
        </View>

        {/* Button */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              width: "70%",
              backgroundColor: "#6A61CF",
              height: 50,
              marginBottom: 80,
              borderRadius: 40,
            }}
            onPress={() => navigation.navigate("WalkthroughtScreen")}
          >
            <Text
              style={{
                fontSize: 15,
                letterSpacing: 1.5,
                textAlign: "center",
                position: "relative",
                color: "#1DFFD6",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text
              style={{ fontSize: 15, marginBottom: 56, fontWeight: "bold" }}
            >
              already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
