import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../../config";

const DashBoard = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid.get())
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("user does not exists");
        }
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, {name.name}</Text>
      <TouchableOpacity
        onPress={() => {
          firebase.auth.signOut();
        }}
      >
        <Text>sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashBoard;
