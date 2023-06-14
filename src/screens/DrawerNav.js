


// import { useNavigation } from "@react-navigation/native";

// import React, { useRef, useState } from 'react';
// import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { firebase } from "../../config";
// import menu from '../images/menu.png';
// import close from '../images/close.png';
// import home from '../images/home.png';
// import profile from '../images/profile.png';
// import chat from '../images/chat.png';

// const DrawerNav = () => {
//     const [currentTab, setCurrentTab] = useState("EventScreen");
//     // To get the curretn Status of menu ...
//     const [showMenu, setShowMenu] = useState(false);
//       const navigation = useNavigation();

//     // Animated Properties...
  
//     const offsetValue = useRef(new Animated.Value(0)).current;
//     // Scale Intially must be One...
//     const scaleValue = useRef(new Animated.Value(1)).current;
//     const closeButtonOffset = useRef(new Animated.Value(0)).current;
  
//     return (
//       <SafeAreaView style={styles.container}>
//         <LinearGradient
//       colors={[' rgba(27, 146, 214, 0.68)', 'rgba(127, 93, 220, 0.797618)s']}
//         className="w-full flex-1"
//       >
//         <View style={{ justifyContent: 'flex-start', padding: 15 }}>
//           <Image source={profile} style={{
//             width: 60,
//             height: 60,
//             borderRadius: 10,
//             marginTop: 8
//           }}></Image>
  
//           <Text style={{
//             fontSize: 20,
//             fontWeight: 'bold',
//             color: 'white',
//             marginTop: 20
//           }}>Jenna Ezarik</Text>
  
//           <TouchableOpacity  onPress={() => navigation.navigate("UserProfileScreen")}    >
//             <Text style={{
//               marginTop: 6,
//               color: 'white'
//             }}>View Profile</Text>
//           </TouchableOpacity>
  
//           <View style={{ flexGrow: 1, marginTop: 50 }}>
//             {
//               // Tab Bar Buttons....
//             }
          
//             {TabButton(currentTab, setCurrentTab, "Event", home,() => navigation.navigate('EventScreen'))}
            
//             {TabButton(currentTab, setCurrentTab, "profile", chat, () => navigation.navigate('UserProfileScreen'))}            
              
//      <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 249, top: -283, width: 90, height: 25, textAlign: 'center' }}> </Text>
//   {/*             
//             {TabButton(currentTab, setCurrentTab, "Explore", notifications)}
//             {TabButton(currentTab, setCurrentTab, "Events", settings)} */}
  
//           </View>
  
//           <View>
//             {/* {TabButton(currentTab, setCurrentTab, "LogOut", logout)} */}
//           </View>
  
//         </View>
  
  
//         {
//           // Over lay View...
//         }
  
//         <Animated.View style={{
//           flexGrow: 1,
//           backgroundColor: 'white',
//           position: 'absolute',
//           top: 0,
//           bottom: 0,
//           left: 0,
//           right: 0,
//           paddingHorizontal: 15,
//           paddingVertical: 20,
//           borderRadius: showMenu ? 15 : 0,
//           // Transforming View...
//           transform: [
//             { scale: scaleValue },
//             { translateX: offsetValue }
//           ]
//         }}>
  
//           {
//             // Menu Button...
//           }
  
//           <Animated.View style={{
//             transform: [{
//               translateY: closeButtonOffset
//             }]
//           }}>
//             <TouchableOpacity onPress={() => {
//               // do not know if it is wkoring or not 
//              setCurrentTab(tittle);
//               Animated.timing(scaleValue, {
//                 toValue: showMenu ? 1 : 0.88,
//                 duration: 300,
//                 useNativeDriver: true
//               })
//                 .start()
  
//               Animated.timing(offsetValue, {
//                 // YOur Random Value...
//                 toValue: showMenu ? 0 : 170,
//                 duration: 300,
//                 useNativeDriver: true
//               })
//                 .start()
                  
//               Animated.timing(closeButtonOffset, {
//                 // YOur Random Value...
//                 toValue: !showMenu ? -30 : 0,
//                 duration: 300,
//                 useNativeDriver: true
//               })
//                 .start()
  
//               setShowMenu(!showMenu);
//             }}>
                  
//                   <Image source={showMenu ? close : menu} style={{
//               width: 20,
//               height: 20,
//               tintColor: 'black',
//               marginTop: 40,

//             }}></Image>

  
//             </TouchableOpacity>

            
//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: 'black',
//             paddingTop: 20
//           }}>{currentTab}</Text>
  
//             {/* <Text style={{
//               fontSize: 30,
//               fontWeight: 'bold',
//               color: 'black',
//               paddingTop: 20
//             }}>{currentTab}</Text>
  
//             <Image source={photo} style={{
//               width: '100%',
//               height: 300,
//               borderRadius: 15,
//               marginTop: 25
//             }}></Image>
                      
//           </Animated.View>
  
//         </Animated.View>
//         </LinearGradient>
//       </SafeAreaView>
      
//     );
//   }
  
//   // // For multiple Buttons...
//   // const TabButton = (currentTab, setCurrentTab, title, image) => {
//   //   return (
  
//   // <SafeAreaView>
//   //     <TouchableOpacity onPress={() => {
//   //       if (title == "LogOut") {
//   //         // Do your Stuff...
//   //       } else {
             
//   //           setCurrentTab(title)
//   //       }
//   //     }}>
//   //       <View style={{
//   //         flexDirection: "row",
//   //         alignItems: 'center',
//   //         paddingVertical: 8,
//   //         backgroundColor: currentTab == title ? '#E4E4E4' : 'transparent',
//   //         paddingLeft: 30,
//   //         paddingRight: 25,
//   //         borderRadius: 8,
//   //         marginTop: 15
//   //       }}>
  
//   //         <Image source={image} style={{
//   //           width: 25, height: 25,
//   //           tintColor: currentTab == title ? "#5359D1" : "white"
//   //         }}></Image>
//   // <TouchableOpacity >
//   //         <Text style={{
//   //           fontSize: 15,
//   //           fontWeight: 'bold',
//   //           paddingLeft: 15,
//   //           color: currentTab == title ? "#5359D1" : "white"
//   //         }}>{title}</Text>
//   // </TouchableOpacity>
    
  
//   //       </View>
//   //     </TouchableOpacity>
//   //     </SafeAreaView>
//   //   );
//   // }
//   const TabButton = (currentTab, setCurrentTab, title, image, onPress) => {
//     return (
//             <TouchableOpacity onPress={() => {
//         if (title == "LogOut") {
//           // Do your Stuff...
//         } else {
             
//             setCurrentTab(title)
//         }
//       }}>
        
//       <TouchableOpacity onPress={onPress}>
//         <View style={{
//           flexDirection: "row",
//           alignItems: 'center',
//           paddingVertical: 8,
//           backgroundColor: currentTab == title ? '#E4E4E4' : 'transparent',
//           paddingLeft: 30,
//           paddingRight: 25,
//           borderRadius: 8,
//           marginTop: 15
//         }}>
//           <Image source={image} style={{
//             width: 25, height: 25,
//             tintColor: currentTab == title ? "#5359D1" : "white"
//           }} />
//           <Text style={{
//             fontSize: 15,
//             fontWeight: 'bold',
//             paddingLeft: 15,
//             color: currentTab == title ? "#5359D1" : "white"
//           }}>{title}</Text>
//         </View>
//       </TouchableOpacity>
//       </TouchableOpacity>

//     );
//   };
  
  
//   const styles = StyleSheet.create({
//     container: {
//         flex:1,
//       // // backgroundColor: '#E4E4E4',
//       alignItems: 'flex-start',
//       justifyContent: 'flex-start',
      
//     },
  
//   });
  

// export default DrawerNav;









// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import EventScreen from './EventScreen';
// import UserProfileScreen from './UserProfileScreen';
// import ChatListScreen from './ChatListScreen';
// import PostFeedScreen from './PostFeedScreen';
// import home from '../images/home.png';

// function EventS(){
//   return <EventScreen/>
//  }
//  function ProfileS(){
//   return <UserProfileScreen/>
//  }
//  function FeedS(){
//   return <PostFeedScreen/>
//  }
//  function ChatS(){
//   return <ChatListScreen/>
//  }
 


// const Tab = createBottomTabNavigator();

// export default function DrawerNav() {
//   return (
//     // <NavigationContainer>
//     <Tab.Navigator  screenOptions={{ headerShown: false }}>
    
//       <Tab.Screen name = 'Event' component={EventS} options={{ home:3 }}/>
//       <Tab.Screen name = 'Profile' component={ProfileS}/>
//       <Tab.Screen name = 'Feed' component={FeedS}/>
//       <Tab.Screen name = 'Chat' component={ChatS}/>

//     </Tab.Navigator>
//   // {/* </NavigationContainer> */}

//   );
// }

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from './EventScreen';
import UserProfileScreen from './UserProfileScreen';
import PostFeedScreen from './PostFeedScreen';
import ChatListScreen from "./ChatListScreen"


function EventS(){
  return <EventScreen/>
 }
 function ProfileS(){
  return <UserProfileScreen/>
 }
 function FeedS(){
  return <PostFeedScreen/>
 }
 function ChatS(){
  return <ChatListScreen/>
 }


 


const Tab = createBottomTabNavigator();

export default function DrawerNav() {
  return (
    // <NavigationContainer>
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
    
      <Tab.Screen name = 'Event' component={EventS} options={{ home:3 }}/>
      <Tab.Screen name = 'Profile' component={ProfileS}/>
      <Tab.Screen name = 'Feed' component={FeedS}/>
      <Tab.Screen name = 'Chat' component={ChatS}/>

    </Tab.Navigator>
  // {/* </NavigationContainer> */}

  );
}