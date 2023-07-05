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
  TextInput,
} from "react-native";
import Images from "../images";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert("Login Error", "Wrong Email Or Password");
    }
  };
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <View>
      <View>
        <Image
          source={require("../images/forgetpasswordbackground.png")}
          style={{ top: -170, width: -110, height: 700, resizeMode: "contain" }}
        />
      </View>
      <View>
        <Text style={styles.ForgetText}>Forget</Text>
      </View>
      <View>
        <Text style={styles.PasswordText}>Password?</Text>
      </View>
      <View>
        <Text style={styles.ForgetPasswordDownText}>
          Don’t worry, it happens please enter the email associated with your
          account
        </Text>
      </View>
      <View style={{ bottom: 180 }}>
        <View>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
            Email Address
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
            placeholder="Email Address"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            // autoCorrect="none"
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            forgetPassword();
          }}
          style={styles.submitButtonStyle}
        >
          <Text style={styles.submitStyle}>submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  ForgetText: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginTop: -360,
    right: 125,
  },
  PasswordText: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginTop: -320,
    right: 60,
  },
  ForgetPasswordDownText: {
    fontSize: 22,
    // fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: "#9E9E9E",
    marginTop: -250,
  },
  submitButtonStyle: {
    width: "50%",
    backgroundColor: "rgba(106, 97, 207, 0.84)",
    borderRadius: 50,
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginLeft: 100,
    // marginBottom:-59,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  submitStyle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
