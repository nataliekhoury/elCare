// import React from "react";
// import Images from "../images";
// import { useState } from "react";
// import EventInfoScreen from "./EventInfoScreen";
// import { View, Text,StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useEffect } from 'react';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";



// const AddPostFeedScreen = () => {
//   const navigation = useNavigation();
//   const addPost =firebase.firestore().collection('posts');
//   const [caption, setCaption] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading,setUploading]=useState(false);

//   const addInfo = async () => {
//     if (caption > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         caption: caption,
//         imageUrl: imageUrl, 
//         isSaved: isSaved, 
//         createdAt:timeStamp,
//       };
//       addPost.add(data).then (() => {
//       setCaption('');
//       setImageUrl('');
//       Keyboard.dismiss();
//       // setImageUrl('');
//       // setIsSaved(false);
//       } ).then (() =>{
//         Alert.alert ("your information has been updated!");
//       })
//       .catch((error) => {
//         alert(error)
//       })
//       .then(() => {
//         navigation.replace('PostFeedScreen');
//       })

//     }
//   }

//   const pickImage =async()=>{
//     let result =await ImagePicker.launchImageLibraryAsync({
//       mediaTypes:ImagePicker.MediaTypeOptions.All,
//       allowsEditing:true,
//       aspect :[4,3],
//       quality:1,
//       borderRadius:1800,
//     });
//     const source ={uri:result.assets[0].uri};
//     setImageUrl(source);
//   };
  
//    const uploadImage =async()=>{
//     setUploading(true);
//     const responseUploading =await fetch(imageUrl.uri);
//     const blob =await responseUploading.blob();
//     const filename=imageUrl.uri.substring(imageUrl.uri.lastIndexOf('/')+1);
//     var ref =firebase.storage().ref().child(filename).put(blob);
//     try{
//       await ref ;
//     }catch (e){
//       console.log(e);
//     }
//     setUploading(false);
//     // Alert.alert('photo uploaded');
//     setImageUrl(null);
//    }


//   // checks if the text input is empty or not 
//   // const checkTextInput = () => {
//   //   //Check for the Name TextInput
//   //   if(imageUrl.trim()==0) {
//   //     Alert.alert ('Please fill the empty field');
//   //     return;
//   //   }
//   // }
    
  



//   const handleSave = () => {
//     console.log('Saved:',  caption, imageUrl);
//     // Save the user input to a database or perform any other necessary action
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setCaption('');
//       setImageUrl('');
//       setIsSaved(false);
//     }
//   }, [isSaved]);


//   const functionCombined=()=>{
//     addInfo();
//     uploadImage();
//     // checkTextInput(); 
//     handleSave();
//   }

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <View style = {{display: 'flex'}}>
//      <SafeAreaView> 
    

              

//       <View style={{position: 'relative'}}>
// <TouchableOpacity onPress={() => navigation.navigate ('PostFeedScreen')}>
//             <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
//         </TouchableOpacity>


//     <Image source={require('../images/Ellipse.png')} 
//             style = {styles.topImage}/>    


    
//       <TouchableOpacity onPress={pickImage}>
//         <Image
//                source={require("../images/addphoto.png")}
//                style = {{resizeMode: "contain", height: 40, bottom: 350, left: 150}}
//                 />
//         </TouchableOpacity>
//         {imageUrl && <Image source={{uri:imageUrl.uri}} style ={{resizeMode: "contain",width:25,height:18,borderRadius:15, left: 120, bottom: 350 }}/>}

     
     
// </View>


//       <Text style ={styles.title}>Fill Information to Add Post: </Text>
//       <View>
//       <NativeViewGestureHandler>
//         <ScrollView style = {{margin: -370, top: -30}} > 
//       <View >

//         <Text style={styles.fields}>Caption: </Text>
//         <TextInput
//           style={styles.textBox}
//           placeholder="Caption"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(caption)=>setCaption(caption)}
//           value={caption}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           // onChangeText={(text) => handleTextChange('title', text)}
//           // value={title}
//           // onSubmitEditing={AdminAddEvent}
//         />

// <Text style={styles.fields}>Image URL: </Text>
//         <TextInput
//           style={styles.textBox}
//           placeholder="Image URL"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           rules={{
//             required: "Image is required",
//           }}
//           onChangeText={(imageUrl)=>setImageUrl(imageUrl)}
//           value={imageUrl}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           // onChangeText={(text) => handleTextChange('title', text)}
//           // value={title}
//           // onSubmitEditing={AdminAddEvent}
//         />


      

//         {/* <Text style={styles.fields}>Image URL: </Text> */}
//         {/* <TextInput
//           style={styles.textBox}
//           placeholder="Image"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(imageUrl)=>setImageUrl(imageUrl)}
//           value={imageUrl}
//           multiline={false}
//           underlineColorAndroid='transparent' */}
//           {/* // onChangeText={(text) => handleTextChange('imageUrl', text)}
//           // // value={imageUrl}
//           // // onSubmitEditing={AdminAddEvent} */}
        

        
      
//       <View style = {styles.saveButton}>
//       <Button title="Save" onPress={functionCombined}/>
      
//       </View>


      
//      </View> 
//      </ScrollView>
//      </NativeViewGestureHandler>
//       </View>
     
//     </SafeAreaView>  
    
//     </View>  
//     </GestureHandlerRootView> 
//   )
// }

// export default AddPostFeedScreen








// const styles = StyleSheet.create ({
//   topImage: {
//     left: -5,
//     top: -226,
//     resizeMode: 'contain',
//    width: 400,
//    height: 500,
//    position: 'relative',
//    zIndex: -1,
// },

//   title: {
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     fontSize: 19,
//     paddingStart: 20,
//     bottom: 350,
    
// },

// textBox: {
//   height: 40, 
//   width: 235, 
//   borderWidth: 2, 
//   left: 50,
//   paddingStart: 20,
//   alignSelf: 'center',
//   borderRadius: 20,
//   borderColor: '#943ADA',
//   fontWeight: 'bold',
//   fontSize: 15,
// },

// saveButton: {
//   bottom: -15,
//   alignSelf: 'center',
// },

// fields: {
//   top: 50, 
//   right: 130,
//   alignSelf: 'center',
//   fontWeight: 'bold',
//   fontSize: 17,
//   margin: 20,
// },

// backIcon: {    

//   // bottom: 610,
//   top: 10,
//   left: 20,
//   position: 'absolute',
//   zIndex: 1,
//   // backgroundColor: 'red',
  
// },
// })


// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";

// const AddPostFeedScreen = () => {
//   const navigation = useNavigation();
//   const addPost = firebase.firestore().collection('posts');
//   const [caption, setCaption] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   const addInfo = async () => {
//     if (caption.length > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         caption: caption,
//         imageUrl: imageUrl,
//         isSaved: isSaved,
//         createdAt: timeStamp,
//       };
//       try {
//         await addPost.add(data);
//         setCaption('');
//         setImageUrl(null);
//         Keyboard.dismiss();
//         Alert.alert("Your information has been updated!");
//         navigation.replace('PostFeedScreen');
//       } catch (error) {
//         alert(error);
//       }
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       borderRadius: 1800,
//     });
//     if (!result.cancelled) {
//       setImageUrl(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     setUploading(true);
//     try {
//       const responseUploading = await fetch(imageUrl);
//       const blob = await responseUploading.blob();
//       const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//       const ref = firebase.storage().ref().child(filename);
//       await ref.put(blob);
//       Alert.alert('Photo uploaded');
//       setImageUrl(null);
//     } catch (error) {
//       console.log(error);
//     }
//     setUploading(false);
//   };

//   const handleSave = () => {
//     console.log('Saved:', caption, imageUrl);
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setCaption('');
//       setImageUrl(null);
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     addInfo();
//     uploadImage();
//     handleSave();
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')} style={styles.backButton}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <Text style={styles.title}>Add Post</Text>
//         <ScrollView contentContainerStyle={styles.contentContainer}>
//           <TouchableOpacity onPress={pickImage}>
//             <View style={styles.imageContainer}>
//               {imageUrl ? (
//                 <Image source={{ uri: imageUrl }} style={styles.selectedImage} />
//               ) : (
//                 <Image source={require("../images/addphoto.png")} style={styles.addPhotoIcon} />
//               )}
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.fieldLabel}>Caption</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter caption"
//             placeholderTextColor="grey"
//             autoCorrect={true}
//             onChangeText={(caption) => setCaption(caption)}
//             value={caption}
//             multiline={false}
//           />
//           <View style={styles.buttonContainer}>
//             <Button title="Save" onPress={functionCombined} />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// export default AddPostFeedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//     marginBottom: 20,
//   },
//   backIcon: {
//     width: 50,
//     height: 50,
//     paddingStart: 20,
//   },
//   topImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     top: -120,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//     backgroundColor: '#EAEAEA',
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   addPhotoIcon: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     tintColor: '#666666',
//   },
//   selectedImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//   },
//   fieldLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });







// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import AsyncStorage from '@react-native-async-storage/async-storage';


// let userName = '';
// let userImage = null;

// const AddPostFeedScreen = () => {
//   const navigation = useNavigation();
//   const addPost = firebase.firestore().collection('posts');
//   // const [caption, setCaption] = useState('');
//   // const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [user, setUser] = useState ([]);
//   const [userName, setUserName] = useState('');
//   const [userImage, setUserImage] = useState(null);



//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('userData').get();
//         const fetchedUsers= snapshot.docs.map((doc) => doc.data());
//         setUser(fetchedUsers);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const [caption, setCaption] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//   useEffect(() => {
//     getFcmToken();
//   }, []);
//   const getFcmToken = async () => {
//     userName = await AsyncStorage.getItem('userName');
//     userImage = await AsyncStorage.getItem('userImage');
//     console.log(userName);
//   }

//   // const addInfo = async () => {
//   //   if (caption.length > 0) {
//   //     const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//   //     const data = {
//   //       caption: caption,
//   //       imageUrl: imageUrl,
//   //       userName : await AsyncStorage.getItem('userName'),
//   //       userImage: userImage,
//   //       isSaved: isSaved,
//   //       createdAt: timeStamp,
//   //     };

//   //     try {
//   //       await addPost.add(data);
//   //       setCaption('');
//   //       setImageUrl(null);
//   //       setUserName('');
//   //       setUserImage(null);
//   //       Keyboard.dismiss();
//   //       Alert.alert("Your information has been updated!");
//   //       navigation.replace('PostFeedScreen');
//   //     } catch (error) {
//   //       alert(error);
//   //     }
//   //   }
//   // };
//   // const Add = () => {
//   //   const [caption, setCaption] = useState('');
//   //   const [imageUrl, setImageUrl] = useState(null);
//   //   useEffect(() => {
//   //     getFcmToken();
//   //   }, []);
//   //   const getFcmToken = async () => {
//   //     userName = await AsyncStorage.getItem('userName');
//   //     userImage = await AsyncStorage.getItem('userImage');
//   //     console.log(userName);
//   //   }
//   // }

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       borderRadius: 1800,
//     });
//     if (!result.cancelled) {
//       setImageUrl(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     setUploading(true);
//     try {
//       const responseUploading = await fetch(imageUrl);
//       const blob = await responseUploading.blob();
//       const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//       const ref = firebase.storage().ref().child(filename);
//       await ref.put(blob);
//       firebase.firestore().collection('posts').add({
//         imageUrl: imageUrl,
//         caption: caption,
//         userName: userName,
//         userImage: userImage,
//         createdAt: timeStamp,
//       })
//       Alert.alert('Photo uploaded');
//       setImageUrl(null);
//     } catch (error) {
//       console.log(error);
//     }
//     setUploading(false);
//   };

//   const handleSave = () => {
//     // console.log('Saved:', caption, imageUrl);
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setCaption('');
//       setImageUrl(null);
//       setUserName('');
//       setUserImage(null);
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     // addInfo();
//     uploadImage();
//     handleSave();
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={{ display: 'flex' }}>
//         <SafeAreaView>
//           <View style={{ position: 'relative' }}>
//             <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')}>
//               <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//             </TouchableOpacity>
//             <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//             <TouchableOpacity onPress={pickImage}>
//             <View style={styles.imageContainer}>

//               <Image
//                 source={require("../images/addphoto.png")}
//                 style={{ resizeMode: "contain", height: 40, alignItems: 'center' }}
//               />
//               </View>
//             </TouchableOpacity>

            
//             {/* {imageUrl && <Image source={{ uri: imageUrl }} style={{ resizeMode: "contain", width: 300, height: 300, borderRadius: 15, left: 150, bottom: 50, alignItems: 'center'}} />} */}
      
//           </View>
  
//           <Text style={styles.title}>Fill Information to Add Post: </Text>
//           <View>
//             <NativeViewGestureHandler>
//               <ScrollView style={{ margin: -370, top: 30}} >
//                 <View>
//                   <Text style={styles.fields}>Caption: </Text>
//                   <TextInput
//                     style={styles.textBox}
//                     placeholder="Caption"
//                     placeholderTextColor={'grey'}
//                     autoCorrect={true}
//                     onChangeText={(caption) => setCaption(caption)}
//                     value={caption}
//                     multiline={false}
//                     underlineColorAndroid='transparent'
//                   />
//                    {imageUrl && <Image source={{ uri: imageUrl }} style={{ resizeMode: "contain", width: 300, height: 300, borderRadius: 20, alignSelf: 'center', alignItems: 'center'}} />}

  
//                   {/* <Text style={styles.imageContainer}>Image URL: </Text>
//                   <TextInput
//                     style={styles.textBox}
//                     placeholder="Image URL"
//                     placeholderTextColor={'grey'}
//                     autoCorrect={true}
//                     onChangeText={(imageUrl) => setImageUrl(imageUrl)}
//                     value={imageUrl}
//                     multiline={false}
//                     underlineColorAndroid='transparent'
//                   /> */}
  
//                   <View style={styles.saveButton}>
//                     <Button title="Save" onPress={functionCombined} />
//                   </View>
//                 </View>
//               </ScrollView>
//             </NativeViewGestureHandler>
//           </View>
//         </SafeAreaView>
//       </View>
//     </GestureHandlerRootView>
//   );
  
// }

// export default AddPostFeedScreen;

// const styles = StyleSheet.create({
//     imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//     backgroundColor: '#EAEAEA',
//     // marginBottom: 20,
//     borderRadius: 10,
//     top: -300,
//   },
//   topImage: {
//     left: -5,
//     top: -226,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//     position: 'relative',
//     zIndex: -1,
//   },
//   title: {
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     fontSize: 19,
//     paddingStart: 20,
//     bottom: 550,
//   },
//   textBox: {
//     height: 40,
//     width: 235,
//     borderWidth: 2,
//     left: 50,
//     paddingStart: 20,
//     alignSelf: 'center',
//     borderRadius: 20,
//     borderColor: '#943ADA',
//     fontWeight: 'bold',
//     fontSize: 15,
    
//   },
//   saveButton: {
//     bottom: 30,
//     alignSelf: 'center',
//   },
//   fields: {
//     top: 50,
//     right: 130,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     fontSize: 17,
//     margin: 20,
//   },
//   backIcon: {
//     top: 10,
//     left: 20,
//     position: 'absolute',
//     zIndex: 1,
//     // borderRadius: 15,
//     // backgroundColor: '#999999',
//   },
// });




// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AddPostFeedScreen = () => {
//   const navigation = useNavigation();
//   const addPost = firebase.firestore().collection('posts');
//   const [caption, setCaption] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userImage, setUserImage] = useState(null);
//   const [user, setUser] = useState([]);


//   useEffect(() => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser) {
//         const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email).get(userName);
//         console.log(userDataRef);
//     }

//     // const fetchUser = async () => {
//     //   try {
//     //     const snapshot = await firebase.firestore().collection('userData').get();
//     //     const fetchedUsers= snapshot.docs.map((doc) => doc.data());
//     //     setUser(fetchedUsers);
//     //     userName : fetchedUsers.userName;
//     //     userImage: fetchedUsers.userImage;
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // };

//     // fetchUser();
//   }, []);



//   const addInfo = async () => {
//     if (caption.length > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         caption: caption,
//         imageUrl: imageUrl,
//         isSaved: isSaved,
//         createdAt: timeStamp,
//         userName: await AsyncStorage.getItem('userName'),
//       };
//       try {
//         await addPost.add(data);
//         setCaption('');
//         setImageUrl(null);
//         setUserName('');
//         setUserImage(null);
//         Keyboard.dismiss();
//         Alert.alert("Your information has been updated!");
//         navigation.replace('PostFeedScreen');
//       } catch (error) {
//         alert(error);
//       }
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       borderRadius: 1800,
//     });
//     if (!result.cancelled) {
//       setImageUrl(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     setUploading(true);
//     try {
//       const responseUploading = await fetch(imageUrl);
//       const blob = await responseUploading.blob();
//       const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//       const ref = firebase.storage().ref().child(filename);
//       await ref.put(blob);
//       Alert.alert('Photo uploaded');
//       setImageUrl(null);
//     } catch (error) {
//       console.log(error);
//     }
//     setUploading(false);
//   };

//   const handleSave = () => {
//     console.log('Saved:', caption, imageUrl);
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setCaption('');
//       setImageUrl(null);
//       setUserName('');
//       setUserImage(null);
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     addInfo();
//     uploadImage();
//     handleSave();
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')} style={styles.backButton}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <Text style={styles.title}>Add Post</Text>
//         <ScrollView contentContainerStyle={styles.contentContainer}>
//           <TouchableOpacity onPress={pickImage}>
//             <View style={styles.imageContainer}>
//               {imageUrl ? (
//                 <Image source={{ uri: imageUrl }} style={styles.selectedImage} />
//               ) : (
//                 <Image source={require("../images/addphoto.png")} style={styles.addPhotoIcon} />
//               )}
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.fieldLabel}>Caption</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter caption"
//             placeholderTextColor="grey"
//             autoCorrect={true}
//             onChangeText={(caption) => setCaption(caption)}
//             value={caption}
//             multiline={false}
//           />
//           <View style={styles.buttonContainer}>
//             <Button title="Save" onPress={functionCombined} />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// export default AddPostFeedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//     marginBottom: 20,
//   },
//   backIcon: {
//     width: 50,
//     height: 50,
//     paddingStart: 20,
//   },
//   topImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     top: -120,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//     backgroundColor: '#EAEAEA',
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   addPhotoIcon: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     tintColor: '#666666',
//   },
//   selectedImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//   },
//   fieldLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AddPostFeedScreen = () => {
//   const navigation = useNavigation();
//   const addPost = firebase.firestore().collection('posts');
//   const [caption, setCaption] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userImage, setUserImage] = useState(null);
//   const [likeCount, setLikeCount] = useState(0);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = firebase.auth().currentUser;
//         if (currentUser) {
//           const userDataRef = await firebase.firestore().collection("userData").where("userId", "==", currentUser.email).get();
//           if (!userDataRef.empty) {
//             const userData = userDataRef.docs[0].data();
//             setUserName(userData.userName);
//             setUserImage(userData.userImage);
//           }
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const addInfo = async () => {
//     if (caption.length > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         caption: caption,
//         imageUrl: imageUrl,
//         isSaved: isSaved,
//         createdAt: timeStamp,
//         userName: userName,
//         userImage: userImage,
//         likeCount: likeCount,
//       };
//       try {
//         await addPost.add(data);
//         setCaption('');
//         setImageUrl(null);
//         setUserName('');
//         setUserImage(null);
//         setLikeCount(0); // Reset likeCount after adding a post
//         Keyboard.dismiss();
//         Alert.alert("Your information has been updated!");
//         navigation.replace('PostFeedScreen');
//       } catch (error) {
//         alert(error);
//       }
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       borderRadius: 1800,
//     });
//     if (!result.cancelled) {
//       setImageUrl(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     if (imageUrl) {
//       try {
//         const responseUploading = await fetch(imageUrl);
//         const blob = await responseUploading.blob();
//         const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//         const ref = firebase.storage().ref().child(filename);
//         await ref.put(blob);
//         Alert.alert('Photo uploaded');
//         setImageUrl(null);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const handleSave = () => {
//     console.log('Saved:', caption, imageUrl);
//     setIsSaved(true);
//   };

//   const handleLike = () => {
//     setLikeCount(likeCount + 1);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setCaption('');
//       setImageUrl(null);
//       setUserName('');
//       setUserImage(null);
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     addInfo();
//     uploadImage();
//     handleSave();
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')} style={styles.backButton}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <Text style={styles.title}>Add Post</Text>
//         <ScrollView contentContainerStyle={styles.contentContainer}>
//           <TouchableOpacity onPress={pickImage}>
//             <View style={styles.imageContainer}>
//               {imageUrl ? (
//                 <Image source={{ uri: imageUrl }} style={styles.selectedImage} />
//               ) : (
//                 <Image source={require("../images/addphoto.png")} style={styles.addPhotoIcon} />
//               )}
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.fieldLabel}>Caption</Text>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter caption"
//             placeholderTextColor="grey"
//             autoCorrect={true}
//             onChangeText={(caption) => setCaption(caption)}
//             value={caption}
//             multiline={false}
//           />
//           <View style={styles.buttonContainer}>
//             <Button title="Like" onPress={handleLike} />
//             <Text style={styles.likeCount}>{likeCount} Likes</Text>
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button title="Save" onPress={functionCombined} />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// export default AddPostFeedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//     marginBottom: 20,
//   },
//   backIcon: {
//     width: 50,
//     height: 50,
//     paddingStart: 20,
//   },
//   topImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     top: -120,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//     backgroundColor: '#EAEAEA',
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   addPhotoIcon: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     tintColor: '#666666',
//   },
//   selectedImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//   },
//   fieldLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
//   likeCount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPostFeedScreen = () => {
  const navigation = useNavigation();
  const addPost = firebase.firestore().collection('posts');
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          const userDataRef = await firebase
            .firestore()
            .collection('userData')
            .where('userId', '==', currentUser.email)
            .get();
          if (!userDataRef.empty) {
            const userData = userDataRef.docs[0].data();
            setUserName(userData.userName);
            setUserImage(userData.userImage);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const addInfo = async () => {
    if (caption.length > 0) {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        caption: caption,
        isSaved: isSaved,
        createdAt: timeStamp,
        userName: userName,
        userImage: userImage,
      };
  
      try {
        const docRef = await addPost.add(data);
        const postId = docRef.id;
        if (imageUrl) {
          const imageRef = firebase.storage().ref().child(`images/${postId}`);
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          await imageRef.put(blob);
          const downloadURL = await imageRef.getDownloadURL();
          await docRef.update({ imageUrl: downloadURL });
        }
  
        setCaption('');
        setImageUrl(null);
        Keyboard.dismiss();
        Alert.alert('Your information has been updated!');
        navigation.replace('PostFeedScreen');
      } catch (error) {
        alert(error);
      }
    }
  };
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      borderRadius: 1800,
    });

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  const uploadImage = async () => {
    if (imageUrl) {
      try {
        const responseUploading = await fetch(imageUrl);
        const blob = await responseUploading.blob();
        const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

        const ref = firebase.storage().ref().child(filename);
        const snapshot = await ref.put(blob);

        const downloadURL = await snapshot.ref.getDownloadURL();
        console.log('Download URL:', downloadURL);

        setImageUrl(downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleSave = () => {
    console.log('Saved:', caption, imageUrl);
    setIsSaved(true);
  };

  useEffect(() => {
    if (isSaved) {
      setCaption('');
      setImageUrl(null);
      setIsSaved(false);
    }
  }, [isSaved]);

  const functionCombined = async () => {
    await uploadImage();
    await addInfo();
    handleSave();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')}>
        <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>Add a New Post</Text>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.selectedImage} />
          ) : (
            <Image source={require('../images/addphoto.png')} style={styles.addPhotoIcon} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.fieldLabel}>What's on your mind?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type Something..."
        placeholderTextColor="grey"
        autoCorrect={true}
        onChangeText={(caption) => setCaption(caption)}
        value={caption}
        multiline={false}
      />
      <View style={styles.buttonContainer}>
        <Button title="POST" color="white" onPress={functionCombined} />
      </View>
    </SafeAreaView>
  );
};

export default AddPostFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    width: 40,
    height: 40,
    marginStart: 10,
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '800',
    marginBottom: -10,
    paddingStart: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
    width: 350,
    backgroundColor: '#EAEAEA',
    marginBottom: 20,
    borderRadius: 10,
  },
  addPhotoIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#666666',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  fieldLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingStart: 20,
  },
  textInput: {
    height: 140,
    fontSize: 18,
    borderColor: '#CCCCCC',
    width: 350,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: -25,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'rgba(106, 97, 207, 0.84)',
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
});
