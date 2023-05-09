import React from "react";
// import { TextInput } from 'react-native-gesture-handler'
import { TextInput, View } from "react-native";
import {firebase} from '../../config'


const Field = (props) => {
  return (
    <View>
      <TextInput
        {...props}
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
        
      ></TextInput>

    </View>
  );
};

export default Field;
