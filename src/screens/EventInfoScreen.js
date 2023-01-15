import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Images from "../images";
//import {firebase} from "../../config";
import {firebaseConfig} from "../../config";
const EventInfoScreen = () => {
    return (
    <View>
        <Image style = {styles.imageDesign} source={require('../images/eventWalking.png')}/>
        <Text style = {styles.title}>Hiking in the Nature</Text>
        <Image style = {styles.calender} source={require('../images/CalenderVector.png')}/>
        <Image style = {styles.clock} source={require('../images/ClockVector.png')} />
        <Text style = {styles.des}>Description</Text>
        <Text style = {styles.loc}>Location</Text>
        </View>
    )


}
export default EventInfoScreen




const styles = StyleSheet.create ({
    imageDesign: {
        width: 400,
        height: 280,
        borderRadius: 40,   
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 40,
        paddingStart: 20,
        paddingBottom: 20,
    },
    calender: {
        width: 15,
        height: 13,
        marginStart: 20,
        top: 50,
    },
    clock: {
        width: 18,
        height: 18,
        right: -250,
        top: 35,
    },
    des:{
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 70,
        paddingStart: 20,
    },
    loc: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 190,
        paddingStart: 20,

    }



})