// import { View, Text, Button, SafeAreaView } from 'react-native'
// import React, { useState }  from 'react'
// import { useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';



// import UserProfileScreen from './UserProfileScreen';
// import EventScreen from './EventScreen';
// import ChatScreen from './ChatScreen';

// const Stack = createStackNavigator();



// const TabBar = () => {
//   const [selectedScreen, setSelectedScreen] = useState(null);

//   const renderSelectedScreen = () => {
//     switch (selectedScreen) {
//       case 'Event':
//         return <EventScreen />;
//       case 'Profile':
//         return <UserProfileScreen />;
//       case 'Chat':
//         return <ChatScreen />;
//       default:
//         return null;
//     }
//   };

//   const navigateToScreen = (screenName) => {
//     setSelectedScreen(screenName);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 , flexDirection: 'row-reverse' }}>
//       <View style={{ flex: 1 }}>
//         <Stack.Navigator>
//           <Stack.Screen name="MainScreen" component={renderSelectedScreen} options={{ headerShown: false }}/>
//         </Stack.Navigator>
//       </View>

//       <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
//         <Text>Bottom Half</Text>
//         <Button title="Event" onPress={() => navigateToScreen('Event')} />
//         <Button title="Profile" onPress={() => navigateToScreen('Profile')} />
//         <Button title="Chat" onPress={() => navigateToScreen('Chat')} />
//       </View>
//     </SafeAreaView>
//   );
// };


// export default TabBar

import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UserProfileScreen from './UserProfileScreen';
import EventScreen from './EventScreen';
import ChatScreen from './ChatScreen';

const TabBar = () => {
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [isTabBarVisible, setTabBarVisible] = useState(true);
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    setSelectedScreen(screenName);
  };

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 'Event':
        return <EventScreen />;
      case 'Profile':
        return <UserProfileScreen />;
      case 'Chat':
        return <ChatScreen />;
      default:
        return null;
    }
  };

  const closeTabBar = () => {
    setTabBarVisible(false);
    if (selectedScreen) {
      navigation.navigate(selectedScreen);
    }
  };

  if (!isTabBarVisible) {
    return null; // Return null to hide the Tab Bar screen
  }

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'row-reverse' }}>
      <View style={{ flex: 1 }}>
        {selectedScreen ? (
          <TouchableOpacity style={{ flex: 1 }} onPress={closeTabBar}>
            {renderSelectedScreen()}
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
        <Text>Bottom Half</Text>
        <Button title="Event" onPress={() => navigateToScreen('Event')} />
        <Button title="Profile" onPress={() => navigateToScreen('Profile')} />
        <Button title="Chat" onPress={() => navigateToScreen('Chat')} />
        {selectedScreen ? (
          <TouchableOpacity style={{ marginTop: 20 }} onPress={closeTabBar}>
            <Text style={{ color: 'red', fontSize: 18 }}>Close</Text>
          </TouchableOpacity>
        ) : null} 
      </View>  
    </SafeAreaView>
  );
};

export default TabBar;



