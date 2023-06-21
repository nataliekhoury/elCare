
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
import Profile from "./src/screens/Profile";



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
      {/* TEST Musa */}

    </Stack.Navigator>
  );
}
function MatchStack(){
  return (
    <Stack.Navigator>

      {/* <Stack.Screen name="SelectedUserProfileScreen" component={Profile} options={{ headerShown: false }} /> */}
      <Stack.Screen name="MatchingScreen" component={MatchingScreen} options={{ headerShown: false }} />

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
          {/* TEST  */}
          <Tab.Screen
            name="SelectedUserProfileScreen"
            component={Profile}
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
                  <Text style={{ color: focused ? '#943ADA' : 'black', fontSize: 12 }}>Profile Match</Text>
                </View>
              ),
            }}
          />
          {/* END */}
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
            name="MatchStack"
            component={MatchStack}
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
