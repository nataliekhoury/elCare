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
import Images from "../images"
import { firebase } from "../../config";

import 'expo-dev-client';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // navigation.replace('ChatScreen')
    } catch (error) {
      Alert.alert("Login Error", "Wrong Email Or Password");
    }
  };
   useEffect(()=>{
    const unsubscribe=firebase.auth().onAuthStateChanged
    (function(user){
      if (user){
      navigation.replace('DrawerNav');
     
      }else {
        navigation.canGoBack() 
       
      }
    })
   })

  return (
    <View>
      <Image
        source={require("../images/loginBackground.png")}
        style={{ left: -210, top: -90, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.logintext}>Login</Text>
      </View>
      <View style={{ bottom: 110 }}>
        <View>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
            Email
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              color: "grey",
              width: "80%",
              backgroundColor: "white",
              borderColor: "#D5D5D5",
              paddingHorizontal: 30,
              paddingVertical: 18,
              marginBottom: 20,
              borderBottomColor: "#D5D5D5",
              marginVertical: 20,
              shadowColor: "#000",
              marginLeft: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect="none"
          ></TextInput>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
            password
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              color: "grey",
              width: "80%",
              backgroundColor: "white",
              borderColor: "#D5D5D5",
              paddingHorizontal: 30,
              paddingVertical: 18,
              marginBottom: 20,
              borderBottomColor: "#D5D5D5",
              marginVertical: 20,
              shadowColor: "#000",
              marginLeft: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            placeholder="password"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            secureTextEntry={true}
          ></TextInput>
        </View>
        {/* /forget password button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgetPasswordScreen")}
        >
          <Text
            style={{ color: "#6A61CF", fontWeight: "bold", marginLeft: 230 }}
          >
            {" "}
            Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={styles.buttonLoginStyle}
        >
          <Text style={styles.logInStyle}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonJoinNowStyle}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.joinStyle}>Join Now</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "20",
              marginRight: 280,
              top: -100,
            }}
          >
            {"\n"}
            {"\n"}
            {"\n"} New User?{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logintext: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginTop: -330,
    right: 20,
  },
  buttonLoginStyle: {
    width: "80%",
    backgroundColor: "rgba(106, 97, 207, 0.84)",
    borderRadius: "50",
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginLeft: 38,
    // marginBottom:-59,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  logInStyle: {
    fontWeight: "bold",
    fontSize: "17",
    color: "white",
    textAlign: "center",
  },
  buttonJoinNowStyle: {
    left: 180,
    bottom: -50,
    backgroundColor: "#D4D4D4",
    borderRadius: "40",
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginRight: 230,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  joinStyle: {
    // fontSize:'12',
    fontWeight: "bold",
    fontSize: "17",
    color: "#6A61CF",
  },
});
