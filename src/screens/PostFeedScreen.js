import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import Images from "../images";
import { useState } from "react";
//import {firebase } from "../../config";
import {firebaseConfig} from "../../config";
import EventInfoScreen from "./EventInfoScreen";
import EventListScreen from "./EventListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, SafeAreaView } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";



function LikeButton() {
    const [liked, setLiked] = useState(false);
  
    const handlePress = () => {
      setLiked(!liked);
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
          style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
        />
      </TouchableOpacity>
    );
  }
  


const PostFeedScreen= () => {

    const navigation = useNavigation();
    return (
        <View>
          
            <Image source={require('../images/postTop.png')} 
            style = {styles.topImage}/>
            
            <Text style = {styles.title}>Post Feed</Text>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate ('AddPostFeedScreen')}>
            <Image style = {styles.addPost} source={require('../images/addPost.png')}/>
            
        </TouchableOpacity>

            </View>
            <View style ={{bottom: 80, left: 100}}>
                <LikeButton></LikeButton>
            </View>

        </View>
    )


}
export default PostFeedScreen



const styles = StyleSheet.create ({
    topImage: {
        left: -5,
        bottom: 200,
        resizeMode: 'contain',
       width: 400,
       height: 500,
    },
    title: {
        // fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 19,
        // paddingStart: 20,
        bottom: 440,
        alignSelf: 'center',
        
        
    },
    addPost: {
        bottom: 475, 
        // right: -120,
        left: 330,
        height: 40,
        width: 40,
        // left: -20,
    }

})


