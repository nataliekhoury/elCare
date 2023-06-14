
// // const UserProfileScreen = () => {
// //   const navigation = useNavigation();
// //   const [users,setUsers]=useState([]);
  
// //   // const userDataRef=firebase.firestore().collection('userData');

// //   useEffect(()=>{
// //     const currentUser = firebase.auth().currentUser;
// //   if (currentUser) {
// //     const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);

// //     userDataRef.get().then((querySnapshot)=>{
// //         const users = [];
// //         querySnapshot.forEach((doc) => {
// //         const {userAge ,
// //           userLanguage,
// //           userCity,
// //           userHobbies,
// //           userAvai,
// //           userExperience,
// //           userPay,
// //           userId,
// //           // userImage,
// //         }=doc.data()

// //           users.push({
// //             id:doc.id,
// //             userAge ,
// //             userLanguage,
// //             userCity,
// //             userHobbies,
// //             userAvai,
// //             userPay,
// //             userExperience,
// //             userId,
// //           });
// //         });
// //         setUsers(users);
// //       });

// //     // return () => unsubscribe();
// //   }
// // }, []);
    

  
// //   return (
// //     <ScrollView>
// //   <SafeAreaView>
// //     <View>
      
// //     </View>
// //   <View>   
// //           <Image
// //               source={require("../images/userBack.png")}
// //               style={{ left: -70, top: -90, resizeMode: "contain" }} />
// //            <Image // the small rectangle back
// //               source={require("../images/userBack2.png")}
// //                      style={{ left: 50, top: -180, resizeMode: "contain" }} />
                       
// //           <View>
// //           <TouchableOpacity
// //           //chatscreen navigation
// //               onPress={() => navigation.navigate("ChatScreen")}>
// //                 <Image
// //               source={require("../images/messageBack.png")}
// //               style={{ left: 240, top:-240, resizeMode: "contain" }} />
// //               <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 249,top:-273 ,width:90,height:25, textAlign: 'center'}}> message</Text>
// //           </TouchableOpacity>
// //           </View>
          
// //           <View style={{bottom: 530, alignSelf: 'center'}}>
// // {users.map((item, index) => (
// //   <View key={index} style={{alignItems: 'center'}}>
// //     <Image style={ {height: 120,
// //   width: 120,
// //   borderRadius: 75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/elcare-bb10b.appspot.com/o/BDA91FFB-C8B8-4CB0-9360-10434396A8A5.jpg?alt=media&token=9dfdf9db-ae9f-45ef-99d6-fdf9d78a499c'}}/>
// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop:15}]}>
// //       {item.userId}
// //     </Text>
// //     <Text style={[styles.userInfoAge, {textAlign: 'center', marginTop: 5, marginBottom: 10}]}>
// //       age: {item.userAge}
// //     </Text>

// //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
// //       <Image
// //         source={require("../images/locationIcon.png")}
// //         style={{resizeMode: "contain", marginRight: 4,marginTop: -8 }}
// //       />
// //       <Text style={[styles.userInfoCity, {textAlign: 'center', color :"#9E9E9E", fontSize: 17, marginTop: -8, marginRight: 30}]}>
// //         {item.userCity}
// //       </Text>
// //     </View>
// //   </View>
// // ))}

// // </View>

// // <View style={{bottom:390,left: 120, alignSelf: 'center',marginRight:120}}>
// // <Text style={{fontSize:18,fontWeight:'bold'}}>Spoken languages</Text>
// // {users.map((item, index) => (
// //   <View key={index} style={{alignItems: 'left',marginRight:120}}>
// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 12,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
// //       {item.userLanguage}
// //     </Text>
// //     <Text style={{fontSize:18,fontWeight:'bold', marginTop: 30}}>Hobbies</Text>
// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop:9,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
// //       {item.userHobbies}
// //     </Text>
// //     {/* <Text style={{fontSize:18,fontWeight:'bold', marginTop: 10}}>Available days</Text>

// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
// //       {item.userAvai}
// //     </Text>
// //      <Text style={{fontSize:18,fontWeight:'bold', marginTop: 10}}>Experience</Text>

// //   <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:90,height:25,borderRadius:10}]}>
// //         {item.userExperience +' year'}
// //   </Text>
// //   <Text style={{fontSize:18,fontWeight:'bold',left: 120, marginTop: 10}}>Payment</Text>

// //   <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4,borderWidth:2 , borderColor:'rgba(148, 58, 218, 0.83)',width:100,height:25,borderRadius:10}]}>
// //         {item.userPay} 
// //   </Text> */}
// //     <View>
// //     <Image // the small rectangle back
// //               source={require("../images/userInfoBottomBox.png")}
// //                      style={{ left: -10, top:60, resizeMode: "contain" }} />
                       
// //  <Text style={{fontSize:15,fontWeight:'bold', marginTop: -34}}>Available days</Text>

// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 15,width:90,height:25}]}>
// //       {item.userAvai}
// //     </Text>
// //     <View>
// //       <Text style={{fontSize:15,fontWeight:'bold', marginTop: -58,left:120}}>Experience</Text>

// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 15,width:90,height:25, marginTop: 13,left:120}]}>
// //     {item.userExperience +'  year(s)'}
// //     </Text></View>
// //     <View style={{marginTop: -66}}>
// //     <Text style={{fontSize:15,fontWeight:'bold',left:250, marginTop: 10}}>Payment</Text>
// //     <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4, marginTop: 13,left:105}]}>
// //         {item.userPay} 





// import React from "react";
// import { View, StyleSheet, Text, Alert, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
// import Images from "../images";
// //import {firebase} from "../../config";
// import {firebaseConfig} from "../../config";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from "@react-navigation/native";
// import EventScreen from "./EventScreen";
// import { useState } from "react";
// import { useEffect } from 'react';
// import { firebase } from "../../config";

// const renderItems = (label) => {
//     const navigation = useNavigation();
//     const renderedItems = [];
//     for (let i = 0; i < label.length; i++) {
//       const item = label[i];
//       renderedItems.push(
//         <TouchableOpacity>
//           <Text style = {styles.designText}>{item}</Text>
//           </TouchableOpacity>
//       );
//     }
//     return renderedItems;
//   };


// const EventInfoScreen = () => {
//   const navigation = useNavigation();
//   const [event, setEvent] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [location, setLocation] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   const eventsRef = firebase.firestore().collection('events');

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const querySnapshot = await eventsRef.get();
//         if (!querySnapshot.empty) {

//         // const fetchedEvents = querySnapshot.docs.map((doc) => doc.data());
//         // setEvent (fetchEvent);

//           const firstEvent = querySnapshot.docs[1];
//           const eventData = firstEvent.data();
//           setEvent({ id: firstEvent.id, ref: firstEvent.ref }); // Store document ID and reference
//           setTitle(eventData.title);
//           setDescription(eventData.description);
//           setDate(eventData.date);
//           setTime(eventData.time);
//           setLocation(eventData.location);
//           setImageUrl(eventData.imageUrl);
//         } else {
//           Alert.alert('No events found');
//           navigation.goBack();
//         }
//       } catch (error) {
//         console.error('Error fetching event:', error);
//         Alert.alert('Error fetching event');
//         navigation.goBack();
//       }
//     };

//     fetchEvent();
//   }, []);






//   //   const navigation = useNavigation();
//   //   const [data, setData] = useState([]);
//   // const [filteredLabels, setFilteredLabels] = useState([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const db = firebase.firestore();
//   //     const collectionRef = db.collection('events');
//   //     try {
//   //       const querySnapshot = await collectionRef.get();
//   //       const retrievedData = querySnapshot.docs.map((doc) => doc.data());
//   //       setData(retrievedData);

//   //       const allLabels = retrievedData.map((lab) => lab.id);
//   //       const uniqueLabels = [...new Set(allLabels)];
//   //       setFilteredLabels(uniqueLabels);
//   //     } catch (error) {
//   //       console.error('Error getting documents: ', error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);
//     return (
//     <View>
//          {/* <View style = {{top: 30}}>
//       <ScrollView horizontal={true}>
//         {renderItems(filteredLabels)}
//       </ScrollView>
//     </View> */}
//      <View>
        
//      </View>
//      {/* <ImageBackground style = {styles.imageDesign}>{imageUrl}</ImageBackground> */}
//         {/* <Image style = {styles.imageDesign} source={require('../images/eventWalking.png')}/> */}
//         <Image Image source={{ uri: imageUrl }} style= {styles.imageDesign} />

//         <Text style = {styles.title}>{title}</Text>
//         <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
//             <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>    
//         </TouchableOpacity>
//         <View>
//       {/* <ScrollView horizontal={true}>
//         {renderItems(filteredLabels)}
//       </ScrollView> */}
//       {/* <View>
//         <Image Image source={{ uri: imageUrl }} style= {styles.imageDesign} />
//       </View> */}
//        <View>
//            <Text style = {styles.des}>Description</Text>
//             <Text style = {styles.desInfo}>{description}</Text>
//             </View>

//             <View style ={{bottom: '35%'}}>
//             <Image style = {styles.calender} source={require('../images/CalenderVector.png')}/>
//             <Text style = {styles.calenderInfo}>{date}</Text>
//             </View>
            
//             <View style ={{bottom: '41%', right: '-60%'}}>
//             <Image style = {styles.clock} source={require('../images/ClockVector.png')} />
//             <Text style = {styles.clockInfo} >{time}</Text> 
//             </View>
            
//             <View>
//             <Text style = {styles.loc}>Location</Text>    
//             <Text style = {styles.locInfo}>{location}</Text>
//                 </View>
//           </View>
    
      
      
//         {/* {data.map((item, index) => (
//           <View key={index}>
//             <View>
//            <Text style = {styles.des}>Description</Text>
//             <Text style = {styles.desInfo}>{item.description}</Text>
//             </View>

//             <View style ={{bottom: '35%'}}>
//             <Image style = {styles.calender} source={require('../images/CalenderVector.png')}/>
//             <Text style = {styles.calenderInfo}>{item.date}</Text>
//             </View>
            
//             <View style ={{bottom: '41%', right: '-60%'}}>
//             <Image style = {styles.clock} source={require('../images/ClockVector.png')} />
//             <Text style = {styles.clockInfo} >{item.time}</Text> 
//             </View>
            
//             <View>
//             <Text style = {styles.loc}>Location</Text>    
//             <Text style = {styles.locInfo}>{item.location}</Text>
//                 </View>
//           </View>
            
//         ))}      */}
//         </View>
          
      
//     )

// }
// export default EventInfoScreen





// const styles = StyleSheet.create ({

//     imageDesign: {
//         width: 400,
//         height: 310,
//         borderRadius: 40,  
//     },

//     title: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         top: 40,
//         paddingStart: 20,
//         paddingBottom: 20,
//     },

//     calender: {
//         width: 17,
//         height: 15,
//         marginStart: 30,
//         bottom: '-50%',
//     },

//     calenderInfo: {
//         marginStart: 60,
//         color: '#9E9E9E',
//         fontWeight: 'bold',
//         fontSize: 18,
//     },

//     clock: {
//         width: 18,
//         height: 18,
//         // right: -250,
//         // top: 35,
//     },

//     clockInfo: {
//         right: '-10%',
//         top: '-45%',
//         color: '#9E9E9E',
//         fontWeight: 'bold',
//         fontSize: 18,
//     },

//     des:{
//         fontWeight: 'bold',
//         fontSize: 20,
//         paddingTop: 70,
//         paddingStart: 20,
//     },

//     desInfo: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         top: '20%',
//         color: '#9E9E9E',
//         marginStart: 30,
//     },

//     loc: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         paddingTop: 80,
//         paddingStart: 20,
//     },

//     locInfo: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         top: '20%',
//         color: '#9E9E9E',
//         marginStart: 30,


//     },

//     backIcon: {
//         // bottom: 610,
//         right: -10,
//         top: '-760%',
//         // backgroundColor: '#D9D9D9',
//         // borderRadius: 18,
    
//     },
// })



// // if (!event) {
// //   return (
// //     <View style={styles.loadingContainer}>
// //       <Text style={styles.loadingText}>Loading event...</Text>
// //     </View>
// //   );
// // }



import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../config";
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

const EventInfoScreen = ({route}) => {
  const navigation = useNavigation();
  const {event} = route.params; 
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const eventsRef = firebase.firestore().collection('events');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await eventsRef.get();
        if (!querySnapshot.empty) {
          const fetchedEvents = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return { ...data, id: doc.id };
          });
          setEvents(fetchedEvents);
        } else {
          Alert.alert('No events found');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        Alert.alert('Error fetching events');
        navigation.goBack();
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading events...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View>
      <View>
        <Image source={{ uri: event.imageUrl }} style={styles.imageDesign} />
  
        <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
          <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
        </TouchableOpacity>
  
        <View>
       
            <ScrollView style = {{top:-30, minHeight: '100%'}}>
              <Text style={styles.title}>{event.title}</Text>
  
              <Text style={styles.des}>Description</Text>
              <Text style={styles.desInfo}>{event.description}</Text>
  
              <View style={{ bottom: '35%' }}>
                <Image style={styles.calender} source={require('../images/CalenderVector.png')} />
                <Text style={styles.calenderInfo}>{event.date}</Text>
              </View>
  
              <View style={{ bottom: '41%', right: '-60%' }}>
                <Image style={styles.clock} source={require('../images/ClockVector.png')} />
                <Text style={styles.clockInfo}>{event.time}</Text>
              </View>
  
              <View>
                <Text style={styles.loc}>Location</Text>
                <Text style={styles.locInfo}>{event.location}</Text>
              </View>
            </ScrollView>
          
        </View>
      </View>
    </View>
    </GestureHandlerRootView>
  );
  
};

const styles = StyleSheet.create({
  imageDesign: {
    width: 400,
    height: 310,
    borderRadius: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 30,
    paddingStart: 20,
    paddingBottom: 20,
  },
  calender: {
    width: 17,
    height: 15,
    marginStart: 30,
    top: 60,
  },
  calenderInfo: {
    marginStart: 70,
    color: '#9E9E9E',
    fontWeight: 'bold',
    fontSize: 18,
    top: 42,
  },
  clock: {
    width: 18,
    height: 18,
    top: 45,
  },
  clockInfo: {
    right: '-10%',
    top: 27,
    bottom: '-135%',
    color: '#9E9E9E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  des: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 70,
    top: 30,
    paddingStart: 20,
  },
  desInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    top: '20%',
    color: '#9E9E9E',
    top: 50,
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
    right: -10,
    bottom: 270,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});

export default EventInfoScreen;

