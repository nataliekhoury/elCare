import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fakeData from '../FakeData';

 const OptionItem = ({}) => {
    const allLabels = fakeData.event.map(lab => lab.title)
    const filteredLabels = [... new Set(allLabels)];
    return (
        <View>
            <ScrollView horizontal ={true}>
            {renderItems(filteredLabels)}
            </ScrollView>
            
        </View>
      );
}

const renderItems = (label) => {
    const renderedItems = [];
    console.log(label);
    for (let i = 0; i < label.length; i++) {
      const item = label[i];

      renderedItems.push(
        <Text style = {styles.designText}>{item}</Text>
      );
    }

    return renderedItems;
  };

const ImgOptionItem = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
            <Image style = {styles.designImages} source={require('../images/eventWalking.png')}/>
         </TouchableOpacity>
    )
}

 const EventScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={require('../images/Ellipse.png')} 
            style = {styles.topImage}/>

            <Text style = {styles.title}>Events for You</Text> 

            <View style = {{bottom: 230}}>
            <TouchableOpacity onPress={() => navigation.navigate ('DrawerNav')}>
            <Image style = {styles.drawer} source={require('../images/menuBarIcon.png')}/> 
        </TouchableOpacity>

        <OptionItem></OptionItem>

           </View>

           <View style = {{bottom: 200}}>
            <ScrollView>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
                <ImgOptionItem></ImgOptionItem>
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
    drawer: {
         left: 15,
        bottom: 210,
        position: 'absolute',

    }
})
