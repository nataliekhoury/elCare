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
import HomeScreen from "./src/screens/HomeScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import LanguageScreen from "./src/screens/LanguageScreen";
import ChatScreen from "./src/screens/ChatScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
// import MatchingScreen from "./src/screens/MatchingScreen";
import InfoScreen from "./src/screens/InfoScreen";
import { StatusBar } from "react-native";
import EventScreen from './src/screens/EventScreen';
import EventInfoScreen from './src/screens/EventInfoScreen';
import EventListScreen from './src/screens/EventListScreen';
import menuBar from './src/screens/menuBar';
import DrawerNav from './src/screens/DrawerNav';
import PostFeedScreen from './src/screens/PostFeedScreen';
import AddPostFeedScreen from './src/screens/AddPostFeedScreen';


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
        
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
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
    <Stack.Screen name="InfoScreen" component={InfoScreen} />

    <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />

    <Stack.Screen name="ChatScreen" component={ChatScreen} />
    {/* <Stack.Screen name="MatchingScreen" component={MatchingScreen} /> */}
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} />
        <Stack.Screen name="EventListScreen" component={EventListScreen} />
    </Stack.Navigator>
    );
    
}



// return (
// <Stack.Navigator>
// <Stack.Screen name="ChatScreen" component={ChatScreen} />
// </Stack.Navigator>
// )

export default () => {
  return (
    <NavigationContainer>
    <App/>
   </NavigationContainer>
    
  )

  }