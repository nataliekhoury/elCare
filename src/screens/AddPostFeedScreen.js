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


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { firebase } from "../../config";

const AddPostFeedScreen = () => {
  const navigation = useNavigation();
  const addPost = firebase.firestore().collection('posts');
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  const addInfo = async () => {
    if (caption.length > 0) {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        caption: caption,
        imageUrl: imageUrl,
        isSaved: isSaved,
        createdAt: timeStamp,
      };
      try {
        await addPost.add(data);
        setCaption('');
        setImageUrl(null);
        Keyboard.dismiss();
        Alert.alert("Your information has been updated!");
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
    setUploading(true);
    try {
      const responseUploading = await fetch(imageUrl);
      const blob = await responseUploading.blob();
      const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
      const ref = firebase.storage().ref().child(filename);
      await ref.put(blob);
      Alert.alert('Photo uploaded');
      setImageUrl(null);
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
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

  const functionCombined = () => {
    addInfo();
    uploadImage();
    handleSave();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ display: 'flex' }}>
        <SafeAreaView>
          <View style={{ position: 'relative' }}>
            <TouchableOpacity onPress={() => navigation.navigate('PostFeedScreen')}>
              <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
            </TouchableOpacity>
            <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require("../images/addphoto.png")}
                style={{ resizeMode: "contain", height: 40, bottom: 350, left: 150 }}
              />
            </TouchableOpacity>
            {imageUrl && <Image source={{ uri: imageUrl }} style={{ resizeMode: "contain", width: 25, height: 18, borderRadius: 15, left: 120, bottom: 350 }} />}
          </View>
  
          <Text style={styles.title}>Fill Information to Add Post: </Text>
          <View>
            <NativeViewGestureHandler>
              <ScrollView style={{ margin: -370, top: -30 }} >
                <View>
                  <Text style={styles.fields}>Caption: </Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Caption"
                    placeholderTextColor={'grey'}
                    autoCorrect={true}
                    onChangeText={(caption) => setCaption(caption)}
                    value={caption}
                    multiline={false}
                    underlineColorAndroid='transparent'
                  />
  
                  <Text style={styles.fields}>Image URL: </Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Image URL"
                    placeholderTextColor={'grey'}
                    autoCorrect={true}
                    onChangeText={(imageUrl) => setImageUrl(imageUrl)}
                    value={imageUrl}
                    multiline={false}
                    underlineColorAndroid='transparent'
                  />
  
                  <View style={styles.saveButton}>
                    <Button title="Save" onPress={functionCombined} />
                  </View>
                </View>
              </ScrollView>
            </NativeViewGestureHandler>
          </View>
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
  
}

export default AddPostFeedScreen;

const styles = StyleSheet.create({
  topImage: {
    left: -5,
    top: -226,
    resizeMode: 'contain',
    width: 400,
    height: 500,
    position: 'relative',
    zIndex: -1,
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 19,
    paddingStart: 20,
    bottom: 350,
  },
  textBox: {
    height: 40,
    width: 235,
    borderWidth: 2,
    left: 50,
    paddingStart: 20,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#943ADA',
    fontWeight: 'bold',
    fontSize: 15,
  },
  saveButton: {
    bottom: -15,
    alignSelf: 'center',
  },
  fields: {
    top: 50,
    right: 130,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    margin: 20,
  },
  backIcon: {
    top: 10,
    left: 20,
    position: 'absolute',
    zIndex: 1,
  },
});

