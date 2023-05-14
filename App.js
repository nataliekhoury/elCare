// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import WalkthroughtScreen from './src/screens/WalkthroughtScreen';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <WalkthroughtScreen/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalkthroughtScreen from './src/screens/WalkthroughtScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import EventScreen from './src/screens/EventScreen';
import EventInfoScreen from './src/screens/EventInfoScreen';
import EventListScreen from './src/screens/EventListScreen';
import menuBar from './src/screens/menuBar';
import {firebaseConfig} from "./config";
import { StatusBar } from 'expo-status-bar';
import DrawerNav from './src/screens/DrawerNav';
import PostFeedScreen from './src/screens/PostFeedScreen';
import AddPostFeedScreen from './src/screens/AddPostFeedScreen';
import AdminAddEvent from './src/screens/AdminAddEvent';
import AdminEditEvent from './src/screens/AdminEditEvent';


const Stack = createNativeStackNavigator();
const App = ()=>{
  
  return (
    <><StatusBar style='dark' /><NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="WalkthroughtScreen" component={WalkthroughtScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
            <Stack.Screen name="PostFeedScreen" component={PostFeedScreen} />
            <Stack.Screen name="AddPostFeedScreen" component={AddPostFeedScreen} />
        {/* <Stack.Screen name="EventScreen" component={EventScreen} /> 
        <Stack.Screen name="EventInfoScreen" component={EventInfoScreen} />
        {/* <Stack.Screen name="EventListScreen" component={EventListScreen} />  */}
        {/* <Stack.Screen name="AdminAddEvent" component={AdminAddEvent} />
        <Stack.Screen name="AdminEditEvent" component={AdminEditEvent} /> */} 

        {/* <Stack.Screen name="DrawerNav" component={DrawerNav} /> */}
        {/* <Stack.Screen name="menuBar" component={menuBar} /> */}
        
      </Stack.Navigator>
    </NavigationContainer></>
  );
}

export default App