import React, { useState, useEffect } from "react";
import i18n from "./src/languages/i18n";
import { firebase } from "./config";
import { View, Text } from "react-native";
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
import DetailScreen from "./src/screens/DetailScreen";
import ElderlyProfileScreen from "./src/screens/ElderlyProfileScreen";
import CaregiverProfileScreen from "./src/screens/CaregiverProfileScreen";
// import GoogleButton from 'react-google-button'
import ChatListScreen from './src/screens/ChatListScreen'
const Stack = createNativeStackNavigator();
function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscribe  = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

     <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="WalkthroughtScreen"
          component={WalkthroughtScreen}
        />
 
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />

      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="MatchingScreen" component={MatchingScreen} /> */}
        {/* <Stack.Screen name="EventScreen" component={EventScreen} /> */}
         {/* <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} /> */}
         <Stack.Screen name="CaregiverProfileScreen" component={CaregiverProfileScreen} />
         <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
          {/* <Stack.Screen name="DrawerNav" component={DrawerNav} /> */}
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="ElderlyProfileScreen" component={ElderlyProfileScreen} />
    </Stack.Navigator>
    );
    
}


 

export default () => {
  return (
    <NavigationContainer>
    <App/>
   </NavigationContainer>
    
  )

  }