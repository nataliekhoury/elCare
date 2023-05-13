import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Images from "../images";
//import {firebase} from "../../config";
import {firebaseConfig} from "../../config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import EventScreen from "./EventScreen";
import {firebase} from '../../config';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import EventInfoScreen from "./EventInfoScreen";


// const Drawer = createDrawerNavigator();




const DrawerNav = () => {
    const navigation = useNavigation();
    return (
<View>

</View>
        
    //     <NavigationContainer>
    //     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    //       <Drawer.Screen name="EventScreen" component={EventScreen} />
    //       <Drawer.Screen name="EventInfoScreen" component={EventInfoScreen} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
           
           
        

        
    )
}
export default DrawerNav

const styles = StyleSheet.create ({
    backIcon: {
        
        top: 610,
        right: -10,  
       
    },



})