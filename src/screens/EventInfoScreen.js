import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Images from "../images";
//import {firebase} from "../../config";
import {firebaseConfig} from "../../config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import EventScreen from "./EventScreen";
import { useState } from "react";
import { useEffect } from 'react';
import { firebase } from "../../config";


const renderItems = (label) => {
    const navigation = useNavigation();
    const renderedItems = [];
    for (let i = 0; i < label.length; i++) {
      const item = label[i];
      renderedItems.push(
        <TouchableOpacity>
          <Text style = {styles.designText}>{item}</Text>
          </TouchableOpacity>
      );
    }
    return renderedItems;
  };


const EventInfoScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const collectionRef = db.collection('events');
      try {
        const querySnapshot = await collectionRef.get();
        const retrievedData = querySnapshot.docs.map((doc) => doc.data());
        setData(retrievedData);

        const allLabels = retrievedData.map((lab) => lab.id);
        const uniqueLabels = [...new Set(allLabels)];
        setFilteredLabels(uniqueLabels);
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };
    fetchData();
  }, []);
    return (
    <View>
         {/* <View style = {{top: 30}}>
      <ScrollView horizontal={true}>
        {renderItems(filteredLabels)}
      </ScrollView>
    </View> */}
     <View>
        
     </View>
        <Image style = {styles.imageDesign} source={require('../images/eventWalking.png')}/>
        <Text style = {styles.title}>Hiking in the Nature</Text>
        <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>    
        </TouchableOpacity>
        <View>
      {/* <ScrollView horizontal={true}>
        {renderItems(filteredLabels)}
      </ScrollView> */}
      
      
        {data.map((item, index) => (
          <View key={index}>
            <View>
           <Text style = {styles.des}>Description</Text>
            <Text style = {styles.desInfo}>{item.description}</Text>
            </View>

            <View style ={{bottom: '35%'}}>
            <Image style = {styles.calender} source={require('../images/CalenderVector.png')}/>
            <Text style = {styles.calenderInfo}>{item.date}</Text>
            </View>
            
            <View style ={{bottom: '41%', right: '-60%'}}>
            <Image style = {styles.clock} source={require('../images/ClockVector.png')} />
            <Text style = {styles.clockInfo} >{item.time}</Text> 
            </View>
            
            <View>
            <Text style = {styles.loc}>Location</Text>    
            <Text style = {styles.locInfo}>{item.location}</Text>
                </View>
          </View>
            
        ))}     
        </View>
          
      
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
        fontSize: 25,
        fontWeight: 'bold',
        top: 40,
        paddingStart: 20,
        paddingBottom: 20,
    },

    calender: {
        width: 17,
        height: 15,
        marginStart: 30,
        bottom: '-50%',
    },

    calenderInfo: {
        marginStart: 60,
        color: '#9E9E9E',
        fontWeight: 'bold',
        fontSize: 18,
    },

    clock: {
        width: 18,
        height: 18,
        // right: -250,
        // top: 35,
    },

    clockInfo: {
        right: '-10%',
        top: '-45%',
        color: '#9E9E9E',
        fontWeight: 'bold',
        fontSize: 18,
    },

    des:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 70,
        paddingStart: 20,
    },

    desInfo: {
        fontWeight: 'bold',
        fontSize: 18,
        top: '20%',
        color: '#9E9E9E',
        marginStart: 30,
    },

    loc: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 80,
        paddingStart: 20,
    },

    locInfo: {
        fontWeight: 'bold',
        fontSize: 18,
        top: '20%',
        color: '#9E9E9E',
        marginStart: 30,


    },

    backIcon: {
        // bottom: 610,
        right: -10,
        top: '-760%',
        // backgroundColor: '#D9D9D9',
        // borderRadius: 18,
    
    },
})