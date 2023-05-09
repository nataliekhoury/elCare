// import {
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   StatusBar,
//   Alert,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import Images from "../images";
// import { InputWrapper, InputField } from "../styles/AddPostStyle";
// // import Field from "./Field";
// import { firebase } from "../../config";

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <View>
//         <Image
//           source={require("../images/rectangleBackground.png")}
//           style={{ left: -70, top: -5 }}
//         />

//         <TouchableOpacity onPress={() => navigation.navigate("AddPostScreen")}>
//           <Image
//             source={require("../images/addPostIcon.png")}
//             style={{ left: 380, top: -100 }}
//           />
//         </TouchableOpacity>
//         {/* <Image
//           source={require("../images/addPostIcon.png")}
//           style={{ left:380, top: -100 }}
//         /> */}
//       </View>
//     </View>
//   );
// };

// export default PostFeedScreen;

// const styles = StyleSheet.create({
//   logintext: {
//     fontSize: 50,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//     marginTop: -330,
//     right: 20,
//   },
//   buttonLoginStyle: {
//     width: "80%",
//     backgroundColor: "rgba(106, 97, 207, 0.84)",
//     borderRadius: "50",
//     paddingHorizontal: 60,
//     justifyContent: "center",
//     alignItem: "center",
//     paddingVertical: 20,
//     marginLeft: 38,
//     // marginBottom:-59,
//     marginTop: 50,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 11,
//   },
//   logInStyle: {
//     fontWeight: "bold",
//     fontSize: "17",
//     color: "white",
//     textAlign: "center",
//   },
//   buttonJoinNowStyle: {
//     left: 180,
//     bottom: -50,
//     backgroundColor: "#D4D4D4",
//     borderRadius: "40",
//     paddingHorizontal: 50,
//     justifyContent: "center",
//     alignItem: "center",
//     paddingVertical: 20,
//     marginRight: 230,
//     marginBottom: 40,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 11,
//   },
//   joinStyle: {
//     // fontSize:'12',
//     fontWeight: "bold",
//     fontSize: "17",
//     color: "#6A61CF",
//   },
// });
