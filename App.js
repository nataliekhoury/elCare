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
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalkthroughtScreen from './src/screens/WalkthroughtScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();
const App = ()=>{
  
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
              <Stack.Screen name="WalkthroughtScreen" component={WalkthroughtScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App