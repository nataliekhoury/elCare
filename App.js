// import React, { useState, useEffect } from "react";
// import i18n from "./src/languages/i18n";
// import { firebase } from "./config";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import WalkthroughtScreen from "./src/screens/WalkthroughtScreen";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignupScreen from "./src/screens/SignupScreen";
// import HomeScreen from "./src/screens/HomeScreen";
// import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
// import LanguageScreen from "./src/screens/LanguageScreen";
// import ChatScreen from "./src/screens/ChatScreen";
// import UserProfileScreen from "./src/screens/UserProfileScreen";
// // import MatchingScreen from "./src/screens/MatchingScreen";
// import InfoScreen from "./src/screens/InfoScreen";
// import { StatusBar } from "react-native";
// import EventScreen from './src/screens/EventScreen';
// import EventInfoScreen from './src/screens/EventInfoScreen';
// // import EventListScreen from './src/screens/EventListScreen';
// import menuBar from './src/screens/menuBar';
// import DrawerNav from './src/screens/DrawerNav';
// import PostFeedScreen from './src/screens/PostFeedScreen';
// import AddPostFeedScreen from './src/screens/AddPostFeedScreen';
// import AdminAddEvent from './src/screens/AdminAddEvent';
// import AdminEditEvent from './src/screens/AdminEditEvent';
// import EditProfile from './src/screens/EditProfile'
// // import GoogleButton from 'react-google-button'
// import ChatListScreen from './src/screens/ChatListScreen'
// const Stack = createNativeStackNavigator();
// function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [users, setUsers] = useState();

//   function onAuthStateChanged(user) {
//     setUsers(users);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscribe  = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//   }, []);

//   if (initializing) return null;
//   if (!users) {
//     return (
//       <Stack.Navigator screenOptions={{ headerShown: false }}>

//      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
//         <Stack.Screen
//           name="WalkthroughtScreen"
//           component={WalkthroughtScreen}
//         />
//    <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />
//         <Stack.Screen
//           name="ForgetPasswordScreen"
//           component={ForgetPasswordScreen}
//         />
//             <Stack.Screen name="InfoScreen" component={InfoScreen} />

//         <Stack.Screen name="LanguageScreen" component={LanguageScreen} />

//       </Stack.Navigator>
//     );
//   }
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//      {/* <Stack.Screen name="DrawerNav" component={DrawerNav} /> */}
//     {/* <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} /> */}

//     <Stack.Screen name="ChatScreen" component={ChatScreen} />
//     {/* <Stack.Screen name="MatchingScreen" component={MatchingScreen} /> */}
//         <Stack.Screen name="EventScreen" component={EventScreen} />
//          <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} />
//          {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
//          {/* <Stack.Screen name="ChatListScreen" component={ChatListScreen} /> */}
     



//         {/* <Stack.Screen name="EventListScreen" component={EventListScreen} /> */}
//     </Stack.Navigator>
//     );
    
// }




// // return (
// // <Stack.Navigator>
// // <Stack.Screen name="ChatScreen" component={ChatScreen} />
// // </Stack.Navigator>
// // )

// export default () => {
//   return (
//     <NavigationContainer>
//     <App/>
//    </NavigationContainer>
    
//   )

//   }


// import React, { useState, useEffect } from "react";
// import i18n from "./src/languages/i18n";
// import { firebase } from "./config";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import WalkthroughtScreen from "./src/screens/WalkthroughtScreen";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignupScreen from "./src/screens/SignupScreen";
// import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
// import LanguageScreen from "./src/screens/LanguageScreen";
// import ChatScreen from "./src/screens/ChatScreen";
// import UserProfileScreen from "./src/screens/UserProfileScreen";
// // import MatchingScreen from "./src/screens/MatchingScreen";
// import { StatusBar } from "react-native";
// import EventScreen from './src/screens/EventScreen';
// import EventInfoScreen from './src/screens/EventInfoScreen';
// // import EventListScreen from './src/screens/EventListScreen';
// import menuBar from './src/screens/menuBar';
// import DrawerNav from './src/screens/DrawerNav';
// import PostFeedScreen from './src/screens/PostFeedScreen';
// import AddPostFeedScreen from './src/screens/AddPostFeedScreen';
// import AdminAddEvent from './src/screens/AdminAddEvent';
// import AdminEditEvent from './src/screens/AdminEditEvent';
// import EditProfile from './src/screens/EditProfile'
// import ChatHistoryListScreen from "./src/screens/ChatHistoryListScreen";
// // import DetailScreen from "./src/screens/DetailScreen";
// // import GoogleButton from 'react-google-button'
// import TabBar from "./src/screens/TabBar";
// import ChatListScreen from './src/screens/ChatListScreen'
// import OtherUserProfileScreen from "./src/screens/OtherUserProfileScreen";

// const Stack = createNativeStackNavigator();
// function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscribe  = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//   }, []);

//   if (initializing) return null;
//   if (!user) {
//     return (
//       <Stack.Navigator screenOptions={{ headerShown: false }}>

//      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
//         <Stack.Screen
//           name="WalkthroughtScreen"
//           component={WalkthroughtScreen}
//         />
 
//         {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
//         {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen
//           name="ForgetPasswordScreen"
//           component={ForgetPasswordScreen}
//         />
        
//         <Stack.Screen name="LanguageScreen" component={LanguageScreen} />

//       </Stack.Navigator>
//     );
//   }
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//     {/* <Stack.Screen name="MatchingScreen" component={MatchingScreen} /> */}
//     <Stack.Screen name="TabBar" component={TabBar} /> 

//         <Stack.Screen name="EventScreen" component={EventScreen} /> 
//          <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} />
//          <Stack.Screen name="AdminAddEvent" component={AdminAddEvent} />
//          <Stack.Screen name="AdminEditEvent" component={AdminEditEvent} />
//          <Stack.Screen name="EditProfile" component={EditProfile} />
//          <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
//          <Stack.Screen name="PostFeedScreen" component={PostFeedScreen} /> 
//          <Stack.Screen name="AddPostFeedScreen" component={AddPostFeedScreen} /> 
//           <Stack.Screen name="DrawerNav" component={DrawerNav} />
//           {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
//           <Stack.Screen name="ChatScreen" component={ChatScreen} />
//           <Stack.Screen name="ChatHistoryListScreen" component={ChatHistoryListScreen} />

//           <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
//           <Stack.Screen name="OtherUserProfile" component={OtherUserProfileScreen}  options={({ route }) => ({
//     title: route.params?.user?.userName || 'User Profile',
//   })}/>

//           {/* <Stack.Screen name="EventListScreen" component={EventListScreen} /> */}
//     </Stack.Navigator>
//     );
    
// }


 

// export default () => {
//   return (
//     <NavigationContainer>
//     <App/>
//    </NavigationContainer>
    
//   )

//   }




import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughtScreen from "./src/screens/WalkthroughtScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import LanguageScreen from "./src/screens/LanguageScreen";
import ChatScreen from "./src/screens/ChatScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
// import MatchingScreen from "./src/screens/MatchingScreen";
import { StatusBar } from "react-native";
import EventScreen from './src/screens/EventScreen';
import EventInfoScreen from './src/screens/EventInfoScreen';
// import EventListScreen from './src/screens/EventListScreen';
import menuBar from './src/screens/menuBar';
import DrawerNav from './src/screens/DrawerNav';
import PostFeedScreen from './src/screens/PostFeedScreen';
import AddPostFeedScreen from './src/screens/AddPostFeedScreen';
import AdminAddEvent from './src/screens/AdminAddEvent';
import AdminEditEvent from './src/screens/AdminEditEvent';
import EditProfile from './src/screens/EditProfile'
import ChatHistoryListScreen from "./src/screens/ChatHistoryListScreen";
// import MatchingScreen from "./src/screens/MatchingScreen";
// import DetailScreen from "./src/screens/DetailScreen";
// import GoogleButton from 'react-google-button'
import TabBar from "./src/screens/TabBar";
import ChatListScreen from './src/screens/ChatListScreen'
import OtherUserProfileScreen from "./src/screens/OtherUserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "./src/images/home.png";
import CaregiverProfileScreen from "./src/screens/CaregiverProfileScreen";
import ElderlyProfileScreen from "./src/screens/ElderlyProfileScreen";
import DetailScreen from "./src/screens/DetailScreen";
import MatchingScreen from "./src/screens/MatchingScreen";
import { createStackNavigator } from "@react-navigation/stack";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PostFeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostFeedScreen" component={PostFeedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AddPostFeedScreen" component={AddPostFeedScreen} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}
function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AdminAddEvent" component={AdminAddEvent} options={{ headerShown: false }} />
      <Stack.Screen name="AdminEditEvent" component={AdminEditEvent} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChatHistoryListScreen" component={ChatHistoryListScreen} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CaregiverProfileScreen" component={CaregiverProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ElderlyProfileScreen" component={ElderlyProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{ headerShown: false }} />

      
    </Stack.Navigator>
  );
}

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      {!user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="WalkthroughtScreen" component={WalkthroughtScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
          {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
          <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
          <Tab.Screen
            name="UserStack"
            component={UserStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('./src/images/profileIcon.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#943ADA' : 'black',
                    }}
                  />
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Profile</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="PostFeedStack"
            component={PostFeedStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('./src/images/home.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#943ADA' : 'black',
                    }}
                  />
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Post Feed</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="EventStack"
            component={EventStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('./src/images/eventIcon.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#943ADA' : 'black',
                    }}
                  />
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Events</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="MatchingScreen"
            component={MatchingScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('./src/images/matchIcon.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#943ADA' : 'black',
                    }}
                  />
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Match</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="ChatStack"
            component={ChatStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('./src/images/chatIcon.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#943ADA' : 'black',
                    }}
                  />
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Chat</Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
export default App;
