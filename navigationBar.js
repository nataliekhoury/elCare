// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StyleSheet, Text, View } from "react-native";
// import { ColorfulTabBar } from "react-navigation-tabbar-collection";
// import Icon from "react-native-vector-icons/AntDesign";
// import HomeScreen from "./src/screens/HomeScreen";
// import DashBoard from "./src/screens/Dashboard";
// import settingsScreen from "./src/screens/settingsScreen";
// import matchingScreen from "./src/screens/matchingScreen";
// import chatScreen from "./src/screens/chatScreen";
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const DemoScreen = ({ route }) => (
//   <View style={styles.screen}>
//     <Text>{route.name}</Text>
//   </View>
// );

// const navigationBar = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="HomeScreen"
//         tabBar={(props) => <ColorfulTabBar {...props} />}
//       >
//         <Tab.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             title: "Home",
//             icon: ({ focused, color, size }) => (
//               <Icon name="home" size={size} color={color} />
//             ),
//             color: "primary",
//           }}
//         />
//         <Tab.Screen
//           name="News"
//           component={DemoScreen}
//           options={{
//             title: "News",
//             icon: ({ focused, color, size }) => (
//               <Icon name="sharealt" size={size} color={color} />
//             ),
//             color: "info",
//           }}
//         />
//         <Tab.Screen
//           name="Chat"
//           component={DemoScreen}
//           options={{
//             title: "Chat",
//             icon: ({ focused, color, size }) => (
//               <Icon name="API" size={size} color={color} />
//             ),
//             color: "warning",
//           }}
//         />
//         <Tab.Screen
//           name="Likes"
//           component={DemoScreen}
//           options={{
//             title: "Likes",
//             icon: ({ focused, color, size }) => (
//               <Icon name="hearto" size={size} color={color} />
//             ),
//             color: "danger",
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={DemoScreen}
//           options={{
//             title: "Settings",
//             icon: ({ focused, color, size }) => (
//               <Icon name="setting" size={size} color={color} />
//             ),
//             color: "success",
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default navigationBar;
