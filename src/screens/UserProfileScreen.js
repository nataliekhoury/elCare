  import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    TextInput,
    ScrollView,
  } from "react-native";
  import React, { useState,useEffect } from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { useNavigation } from "@react-navigation/native";
  import Images from "../images";
  import { firebase } from "../../config";
  import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard } from "react-native";
import { use } from "i18next";
import { Pressable } from "react-native";
import { FlatList } from "react-native";
 const UserProfileScreen = () => {
    const navigation = useNavigation();
    const [users,setUsers]=useState([]);
    const userDataRef=firebase.firestore().collection('userData');

    useEffect(()=>{
      userDataRef.onSnapshot
      (querySnapshot=>{
        const users=[]
        querySnapshot.forEach((doc)=>{
          const {userAge ,
            userLanguage,
            userCity,
            userHobbies,
            userAvai,
            userExperience,
            userId,
            // userImage,
          }=doc.data()

            users.push({
              id:doc.id,
              userAge ,
              userLanguage,
              userCity,
              userHobbies,
              userAvai,
              userExperience,
              userId,
              // userImage,

            })
        })
        setUsers(users)
      })
    
 },[])

      
  
    
    return (
      <ScrollView>
    <SafeAreaView>
            <View>
              
            <Image
                source={require("../images/userBack.png")}
                style={{ left: -70, top: -90, resizeMode: "contain" }} />
             <Image // the small rectangle back
                source={require("../images/userBack2.png")}
                       style={{ left: 50, top: -180, resizeMode: "contain" }} />
                         
            <View>
            <TouchableOpacity
            //chatscreen navigation
                onPress={() => navigation.navigate("ChatScreen")}
            >
                <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 260,top:-235 ,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25, textAlign: 'center',borderRadius:10}}> message</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{bottom: 500, alignSelf: 'center'}}>
  {users.map((item, index) => (
    <View key={index} style={{alignItems: 'center'}}>
      <Image style={ {height: 120,
    width: 120,
    borderRadius: 75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/elcare-bb10b.appspot.com/o/BDA91FFB-C8B8-4CB0-9360-10434396A8A5.jpg?alt=media&token=9dfdf9db-ae9f-45ef-99d6-fdf9d78a499c'}}/>
      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop:15}]}>
        {item.userId}
      </Text>
      <Text style={[styles.userInfoAge, {textAlign: 'center', marginTop: 5, marginBottom: 10}]}>
        age: {item.userAge}
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require("../images/locationIcon.png")}
          style={{resizeMode: "contain", marginRight: 4,marginTop: -8 }}
        />
        <Text style={[styles.userInfoCity, {textAlign: 'center', color :"#9E9E9E", fontSize: 17, marginTop: -8, marginRight: 30}]}>
          {item.userCity}
        </Text>
      </View>
    </View>
  ))}
  
</View>
  
<View style={{bottom:390, alignSelf: 'center',marginRight:120}}>
  <Text style={{fontSize:18,fontWeight:'bold'}}>Spoken languages</Text>
  {users.map((item, index) => (
    <View key={index} style={{alignItems: 'left',marginRight:120}}>
      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 12,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
        {item.userLanguage}
      </Text>
      <Text style={{fontSize:18,fontWeight:'bold', marginTop: 10}}>Hobbies</Text>
      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
        {item.userHobbies}
      </Text>
      <Text style={{fontSize:18,fontWeight:'bold', marginTop: 10}}>Available days</Text>

      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
        {item.userAvai}
      </Text>
      
      
  

    
    
    </View>
  ))}
  
</View>
            

<Image style={ {height: 150,
    width: 150,
    borderRadius: 75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/elcare-bb10b.appspot.com/o/BE8B5FD1-2FD4-4919-A800-718965BA1F50.jpg?alt=media&token=d56d338f-bc72-43b6-af59-4a81f3e7d51e'}}/>
        </View>
       
     </SafeAreaView>
     </ScrollView>
    );
  };
  
  export default UserProfileScreen;
  
  const styles = StyleSheet.create({
    backgroundColor:'#FFFFF',
    buttonMessageStyle: {
    //   left: 180,
    //   bottom: -50,
      backgroundColor: "#ffff",
      borderRadius: "40",
      paddingHorizontal: 50,
      justifyContent: "center",
      alignItem: "center",
      paddingVertical: 20,
      marginRight: 230,
      marginBottom: 40,
     borderBottomColor:"#6A61CF"      
    
    },
    userInfoAge:{
     color :"#9E9E9E",
     fontSize: "17",
     alignItem: "center",
     justifyContent: "center",
 

    },
    userInfonnnnname:{
      color :"#0000",
      fontSize: "17",
      alignItem: "center",
      justifyContent: "center",
      shadowOffset: {
       width: 0,
       height: 10,
     },
     shadowOpacity: 0.36,
     shadowRadius: 10.0,
     elevation: 11,
 
     },
    

  });
  