import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import Images from "../images";
import { useState } from "react";
//import {firebase } from "../../config";
import {firebaseConfig} from "../../config";
import EventInfoScreen from "./EventInfoScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, SafeAreaView } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";


// const navigateToScreen = (route) => {
//     const navigationAction = NavigationAction.navigate({
//         routeName: route
//     })
//     this.props.navigation.dispatch(NavigationAction)
// }

// const Stack = createNativeStackNavigator();


 const OptionItem = ({label, onPress}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
         {/* <TouchableOpacity onPress = {onPress}> */}
             <Text style = {styles.designText}>{label}</Text>
         </TouchableOpacity>
    )
}

const ImgOptionItem = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
            <Image style = {styles.designImages} source={require('../images/eventWalking.png')}/>
         </TouchableOpacity>
    )
}


 const EventScreen = () => {
    return (
        <View>
            <Image source={require('../images/Ellipse.png')} 
            style = {styles.topImage}/>

            <Text style = {styles.title}>Events for You</Text>

            <View style = {{bottom: 230}}>

            <ScrollView 
            horizontal={true}>
                {/* <TouchableOpacity onPress ={() => {navigation.navigate('EventInfoScreen')}}
                >
                    <Text>Sport</Text>
                </TouchableOpacity> */}
            
            <OptionItem 
             label = "Sport"/>
             <OptionItem 
             label = "Dance"
            //  onPress={() => {console.log("Dance")}}
             />
            <OptionItem 
             label = "Technology"
            //  onPress={() => {console.log("Technology")}}
             />
             <OptionItem
             label = "Meetings"
            //  onPress={() => {console.log("Meetings")}}
             />
             <OptionItem
             label = "Cooking"
            //  onPress={() => {console.log("Cooking")}}
             />
             <OptionItem
             label = "Sewing"
            //  onPress={() => {console.log("Sewing")}}
             />
             <OptionItem
             label = "Walking"
            //  onPress={() => {console.log("Walking")}}
             />
             <OptionItem
             label = "Reading"
            //  onPress={() => {console.log("Reading")}}
             />
             <OptionItem
             label = "Music"
            //  onPress={() => {console.log("Music")}}
             /> 
            </ScrollView>
           </View>

           <View style = {{bottom: 200}}>
            <ScrollView>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>

                {/* <Image style = {styles.designImages} source={require('../images/eventWalking.png')}/>
                <Image style = {styles.designImages} source={require('../images/eventSewing.png')}/>
               <Image style = {styles.designImages} source={require('../images/eventSport.png')}/> */}
            </ScrollView>
           </View>

            </View>
         
     

    )

    
} 
export default EventScreen 


const styles = StyleSheet.create ({
    topImage: {
        left: -5,
        top: -179,
        resizeMode: 'contain',
       width: 400,
       height: 500,
    },
    
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 19,
        paddingStart: 20,
        bottom: 250,
    },

    designText: {
        fontSize: 16, 
        color:'#9E9E9E',
        fontWeight:'semibold',
        padding: 20,        
    },
    designImages: {
        margin: 20,
        alignSelf: 'center',
        width: 248,
        height: 130,
    },
})





// const EventScreen = ({navigation}) => {
//     return (
//         <View>
//             <Text style = {styles.designText}> Sport </Text>
//             <TouchableOpacity 
//             onPress = {navigation.navigate('EventInfoScreen')}>
//                 <Text>dance </Text>
//             </TouchableOpacity>
//         </View>

//     )
// }