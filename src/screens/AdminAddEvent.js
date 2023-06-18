// import { View, Text,StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard} from 'react-native';
// import { useState } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useEffect } from 'react';
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";



// const AdminAddEvent = () => {
//   const navigation = useNavigation();
//   const addEvent =firebase.firestore().collection('events');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [location, setLocation] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [uploading,setUploading]=useState(false);


//   const addInfo = async () => {
//     if (date > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         title: title,
//         description: description,
//         date: date,
//         time: time,
//         location: location,
//         imageUrl: imageUrl, 
//         isSaved: isSaved, 
//         createdAt:timeStamp,
//       };
//       addEvent.add(data).then (() => {
//       setTitle('');
//       setDescription('');
//       setDate('');
//       setTime('');
//       setLocation('');
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
//         navigation.replace('EventScreen');
//       })

//     }
//   }

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

 

//   // const pickImage =async()=>{
//   //   let result =await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes:ImagePicker.MediaTypeOptions.All,
//   //     allowsEditing:true,
//   //     aspect :[4,3],
//   //     quality:1,
//   //     borderRadius:1800,
//   //   });
//   //   const source ={uri:result.assets[0].uri};
//   //   setImageUrl(source);
//   // };

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
  
//   //  const uploadImage =async()=>{
//   //   setUploading(true);
//   //   const responseUploading =await fetch(imageUrl.uri);
//   //   const blob =await responseUploading.blob();
//   //   const filename=imageUrl.uri.substring(imageUrl.uri.lastIndexOf('/')+1);
//   //   var ref =firebase.storage().ref().child(filename).put(blob);
//   //   try{
//   //     await ref ;
//   //   }catch (e){
//   //     console.log(e);
//   //   }
//   //   setUploading(false);
//   //   // Alert.alert('photo uploaded');
//   //   setImageUrl(null);
//   //  }


//   // checks if the text input is empty or not 
//   const checkTextInput = () => {
//     //Check for the Name TextInput
//     if(title.trim()==0 || description.trim()==0 || date.trim()==0 || time.trim()==0 || location.trim()==0) {
//       Alert.alert ('Please fill tje empty field');
//       return;
//     }
//   }
    
//   const handleSave = () => {
//     console.log('Saved:',  title, description, date, time, location, imageUrl);
//     // Save the user input to a database or perform any other necessary action
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setTitle('');
//       setDescription('');
//       setDate('');
//       setTime('');
//       setLocation('');
//       setImageUrl('');
//       setIsSaved(false);
//     }
//   }, [isSaved]);


//   const functionCombined=()=>{
//     addInfo();
//     uploadImage();
//     checkTextInput(); 
//     handleSave();
//   }


//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <View style = {{display: 'flex'}}>
//      <SafeAreaView> 
    

              

//       <View style={{position: 'relative'}}>
// <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
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

//       <Text style ={styles.title}>Fill Information to Add Event: </Text>
//       <View>
//       <NativeViewGestureHandler>
//         <ScrollView style = {{margin: -370, top: -30}} > 
//       <View >

//         <Text style={styles.fields}>Title: </Text>
//         <TextInput
//           style={styles.textBox}
//           placeholder="Title"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           rules={{
//             required: "Title is required",
//           }}
//           onChangeText={(title)=>setTitle(title)}
//           value={title}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           // onChangeText={(text) => handleTextChange('title', text)}
//           // value={title}
//           // onSubmitEditing={AdminAddEvent}
//         />

//         <Text style={styles.fields}>Description: </Text>
//         <TextInput
//           style={styles.textBox}
//           placeholder="Description"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(description)=>setDescription(description)}
//           value={description}
//           multiline={false}
//           underlineColorAndroid='transparent'
//         />

//         <Text style={styles.fields}>Date: </Text>
//         <TextInput
//           style={styles.textBox}
//           // onChangeText={(text) => handleTextChange('date', text)}
//           // value={date}
//           placeholder="Date"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(date)=>setDate(date)}
//           value={date}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           keyboardType='numeric'
//           rules={{
//             required: "Date is required",
//           }}
//           // onSubmitEditing={AdminAddEvent}
//         />

//         <Text style={styles.fields}>Time: </Text>
//         <TextInput
//           style={styles.textBox}
//           // onChangeText={(text) => handleTextChange('time', text)}
//           // value={time}
//           placeholder="Time"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(time)=>setTime(time)}
//           value={time}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           keyboardType='numeric'
//           // onSubmitEditing={AdminAddEvent}
          
//         />

//         <Text style={styles.fields}>Location: </Text>
//         <TextInput
//           style={styles.textBox}
//           placeholder="Location"
//           placeholderTextColor={'grey'}
//           utoCorrect="true"
//           onChangeText={(location)=>setLocation(location)}
//           value={location}
//           multiline={false}
//           underlineColorAndroid='transparent'
//           // onChangeText={(text) => handleTextChange('location', text)}
//           // value={location}
//           // onSubmitEditing={AdminAddEvent}
//         />

//         <Text style={styles.fields}>Image URL: </Text>
      
        
      
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

// export default AdminAddEvent





//   const addInfo = async () => {
//     if (date > 0) {
//       const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         title: title,
//         description: description,
//         date: date,
//         time: time,
//         location: location,
//         imageUrl: imageUrl, 
//         isSaved: isSaved, 
//         createdAt:timeStamp,
//       };
//       addEvent.add(data).then (() => {
//       setTitle('');
//       setDescription('');
//       setDate('');
//       setTime('');
//       setLocation('');
//       Keyboard.dismiss();

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { firebase } from "../../config";

const AddPostFeedScreen = () => {
  const navigation = useNavigation();
  const addEvent = firebase.firestore().collection('events');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [uploading,setUploading]=useState(false);

  const addInfo = async () => {
    if (title.length > 0) {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        title: title,
        description: description,
        date: date,
        time: time,
        location: location,
        imageUrl: imageUrl,
        isSaved: isSaved,
        createdAt: timeStamp,
      };
  
      try {
        const docRef = await addEvent.add(data);
        const eventId = docRef.id;
        if (imageUrl) {
          const imageRef = firebase.storage().ref().child(`images/${eventId}`);
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          await imageRef.put(blob);
          const downloadURL = await imageRef.getDownloadURL();
          await docRef.update({ imageUrl: downloadURL });
        }
  
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
        setLocation('');
        setImageUrl(null);
        Keyboard.dismiss();
        Alert.alert("Your information has been updated!");
        navigation.replace('EventScreen');
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
  

  // const addInfo = async () => {
  //   if (title.length > 0) {
  //     const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  //     const data = {
  //       title: title,
  //       description: description,
  //       date: date,
  //       time: time,
  //       location: location,
  //       imageUrl: imageUrl,
  //       isSaved: isSaved,
  //       createdAt: timeStamp,
  //     };
  //     try {
  //       await addPost.add(data);
  //       setTitle('');
  //       setDescription('');
  //       setDate('');
  //       setTime('');
  //       setLocation('');
  //       setImageUrl(null);
  //       Keyboard.dismiss();
  //       Alert.alert("Your information has been updated!");
  //       navigation.replace('EventScreen');
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
  // };

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //     borderRadius: 1800,
  //   });
  //   if (!result.cancelled) {
  //     setImageUrl(result.uri);
  //   }
  // };

  // const uploadImage = async () => {
  //   setUploading(true);
  //   try {
  //     const responseUploading = await fetch(imageUrl);
  //     const blob = await responseUploading.blob();
  //     const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  //     const ref = firebase.storage().ref().child(filename);
  //     await ref.put(blob);
  //     Alert.alert('Photo uploaded');
  //     setImageUrl(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setUploading(false);
  // };

  const handleSave = () => {
    console.log('Saved:', title, description, date, time, location, imageUrl);
    setIsSaved(true);
  };

  useEffect(() => {
    if (isSaved) {
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
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
            <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
              <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
            </TouchableOpacity>
            <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
            {/* <TouchableOpacity onPress={pickImage}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../images/addphoto.png")}
                style={{ resizeMode: "contain", height: 40 }}
              />
              </View>
            </TouchableOpacity> */}
            {/* {imageUrl && <Image source={{ uri: imageUrl }} style={{ resizeMode: "contain", width: 25, height: 18, borderRadius: 15, left: 120, bottom: 350 }} />} */}
          </View>
  
          <Text style={styles.title}>Fill Information to Add Event: </Text>
          <View>
            <NativeViewGestureHandler>
              <ScrollView style={{ margin: -330, maxHeight: 600}} >
                <View>
                <TouchableOpacity onPress={pickImage}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../images/addphoto.png")}
                style={{ resizeMode: "contain", height: 40 }}
              />
              </View>
            </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.fields}>Title: </Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Title"
                    placeholderTextColor={'grey'}
                    autoCorrect={true}
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                    multiline={false}
                    underlineColorAndroid='transparent'
                  />


                <Text style={styles.fields}>Description: </Text>
        <TextInput
          style={styles.textBox}
          placeholder="Description"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          onChangeText={(description)=>setDescription(description)}
          value={description}
          multiline={false}
          underlineColorAndroid='transparent'
        />

        <Text style={styles.fields}>Date: </Text>
         <TextInput
          style={styles.textBox}
          placeholder="Date"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          onChangeText={(date)=>setDate(date)}
          value={date}
          multiline={false}
          underlineColorAndroid='transparent'
          keyboardType='numeric'
          rules={{
            required: "Date is required",
          }}
        />

         <Text style={styles.fields}>Time: </Text>
         <TextInput
          style={styles.textBox}
          // onChangeText={(text) => handleTextChange('time', text)}
          // value={time}
          placeholder="Time"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          onChangeText={(time)=>setTime(time)}
          value={time}
          multiline={false}
          underlineColorAndroid='transparent'
          keyboardType='numeric'
          // onSubmitEditing={AdminAddEvent}
          
        />

        <Text style={styles.fields}>Location: </Text>
        <TextInput
          style={styles.textBox}
          placeholder="Location"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          onChangeText={(location)=>setLocation(location)}
          value={location}
          multiline={false}
          underlineColorAndroid='transparent'
          // onChangeText={(text) => handleTextChange('location', text)}
          // value={location}
          // onSubmitEditing={AdminAddEvent}
        />
        {imageUrl && <Image source={{ uri: imageUrl }} style={{ resizeMode: "contain", width: 325, height: 218, borderRadius: 25, alignItems: 'center', alignSelf: 'center', margin: 40}} />}

  
                  {/* <Text style={styles.fields}>Image URL: </Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Image URL"
                    placeholderTextColor={'grey'}
                    autoCorrect={true}
                    onChangeText={(imageUrl) => setImageUrl(imageUrl)}
                    value={imageUrl}
                    multiline={false}
                    underlineColorAndroid='transparent'
                  /> */}
  
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


const styles = StyleSheet.create ({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // height: 200,
    width: 325, height: 218, borderRadius: 25,
    backgroundColor: '#EAEAEA',
    // marginBottom: 20,
    // borderRadius: 10,
    // top: -300,
  },
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
    bottom: 360,
    
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
  top: 10,
  alignSelf: 'center',
},

fields: {
  top: 50, 
  right: 130,
  alignSelf: 'center',
  fontWeight: 'bold',
  fontSize: 17,
  margin: 15,
},

backIcon: {    

  // bottom: 610,
  top: 10,
  left: 20,
  position: 'absolute',
  zIndex: 1,
  // backgroundColor: 'red',
  
},
})
