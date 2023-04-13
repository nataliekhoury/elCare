import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import Images from "../images";
import EventInfoScreen from "./EventInfoScreen";
import { NavigationContainer, SafeAreaView } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

const ImgOptionItem = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
            <Image style = {styles.designImages} source={require('../images/eventWalking.png')}/>
         </TouchableOpacity>
    )
}


const EventListScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
        <Text style = {styles.title}>the title</Text>
        {/* <View style = {styles.imgDesign}> */}
            <ScrollView style = {styles.imgDesign} contentContainerStyle = {styles.contentContainer}>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
            </ScrollView>
           {/* </View> */}
           <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
        </TouchableOpacity>
           </View>
    )

}

export default EventListScreen


const styles = StyleSheet.create ({
    imgDesign: {
        //top: 100,
        // justifyContent: 'space-between',
        // flex: 1,
        top: 100,
        // margin: 20,
        alignSelf: 'center',
        width: 248,
        height: 130,
        // padding: 10,
    },
    contentContainer: {
        width: 248,
        height: 500,
      


    },
    backIcon: {
        
        bottom: 120,
        right: -15,
        // backgroundColor: 'gray',
        
       

    },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 19,
        //paddingStart: 20,
        top: 70,
        alignSelf: 'center',
    },



})