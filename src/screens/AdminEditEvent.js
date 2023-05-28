// import { View, Text,StyleSheet, TextInput, Button, Alert, SafeAreaView, Image, TouchableOpacity} from 'react-native';
// import { useState } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import { useNavigation, useRoute } from '@react-navigation/native';




// const AdminEditEvent = () => {
//   const navigation = useNavigation();
//   const [eventId, setEventId] = useState(null); // State to store the event ID
//   const [event, setEvent] = useState(null); // State to store the current event
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
//     // Fetch the event ID from Firestore
//     const fetchEventId = async () => {
//       try {
//         // Perform a Firestore query to get the event ID
//         const querySnapshot = await eventsRef.get();
//         if (!querySnapshot.empty) {
//           // Get the first event ID from the query result
//           const firstEvent = querySnapshot.docs[0];
//           setEventId(firstEvent.id);
//         } else {
//           // No events found in Firestore
//           Alert.alert('No events found');
//           navigation.goBack();
//         }
//       } catch (error) {
//         console.error('Error fetching event ID:', error);
//         Alert.alert('Error fetching event ID');
//         navigation.goBack();
//       }
//     };

//     fetchEventId();
//   }, [eventsRef, navigation]);

//   useEffect(() => {
//     // Fetch the current event from Firestore
//     const fetchEvent = async () => {
//       try {
//         if (eventId) {
//           const snapshot = await eventsRef.doc(eventId).get();
//           if (snapshot.exists) {
//             const eventData = snapshot.data();
//             setEvent(eventData);
//             setTitle(eventData.title);
//             setDescription(eventData.description);
//             setDate(eventData.date);
//             setTime(eventData.time);
//             setLocation(eventData.location);
//             setImageUrl(eventData.imageUrl);
//           } else {
//             // Event with the specified ID does not exist
//             Alert.alert('Event not found');
//             navigation.goBack();
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching event:', error);
//         Alert.alert('Error fetching event');
//         navigation.goBack();
//       }
//     };

//     fetchEvent();
//   }, [eventId, eventsRef, navigation]);

//   const updateEvent = async () => {
//     if (eventId && title.length > 0) {
//       try {
//         await eventsRef.doc(eventId).update({
//           title: title,
//           description: description,
//           date: date,
//           time: time,
//           location: location,
//           imageUrl: imageUrl,
//         });
//         setIsSaved(true);
//         Alert.alert('Event updated successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error updating event:', error);
//         Alert.alert('Error updating event');
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
//       console.error('Error uploading image:', error);
//       Alert.alert('Error uploading image');
//     }
//     setUploading(false);
//   };

//   const handleSave = () => {
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     updateEvent();
//     uploadImage();
//     handleSave();
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <SafeAreaView>
//         {/* Rest of the code */}
//       </SafeAreaView>
//     </View>
//   );
// };

// export default AdminEditEvent;




// // const AdminEditEvent = ({ eventId }) => {
// //   const navigation = useNavigation();

// //   const eventsRef = firebase.firestore().collection('events');
// //   const [event, setEvent] = useState(null); // State to store the current event
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [imageUrl, setImageUrl] = useState(null);
// //   const [isSaved, setIsSaved] = useState(false);
// //   const [uploading, setUploading] = useState(false);

// //   useEffect(() => {
// //     // Fetch the current event from Firebase when the component mounts
// //     const fetchEvent = async () => {
// //       try {
// //         const snapshot = await eventsRef.doc(eventId).get();
// //         if (snapshot.exists) {
// //           const eventData = snapshot.data();
// //           setEvent(eventData);
// //           setTitle(eventData.title);
// //           setDescription(eventData.description);
// //           setDate(eventData.date);
// //           setTime(eventData.time);
// //           setLocation(eventData.location);
// //           setImageUrl(eventData.imageUrl);
// //         } else {
// //           // Event with the specified ID does not exist
// //           Alert.alert('Event not found');
// //           navigation.goBack();
// //         }
// //       } catch (error) {
// //         console.error('Error fetching event:', error);
// //         Alert.alert('Error fetching event');
// //         navigation.goBack();
// //       }
// //     };

// //     fetchEvent();
// //   }, [eventId, eventsRef, navigation]);

// //   const updateEvent = async () => {
// //     if (title.length > 0) {
// //       try {
// //         await eventsRef.doc(eventId).update({
// //           title: title,
// //           description: description,
// //           date: date,
// //           time: time,
// //           location: location,
// //           imageUrl: imageUrl,
// //         });
// //         setIsSaved(true);
// //         Alert.alert('Event updated successfully!');
// //         navigation.goBack();
// //       } catch (error) {
// //         console.error('Error updating event:', error);
// //         Alert.alert('Error updating event');
// //       }
// //     }
// //   };

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //       borderRadius: 1800,
// //     });
// //     if (!result.cancelled) {
// //       setImageUrl(result.uri);
// //     }
// //   };

// //   const uploadImage = async () => {
// //     setUploading(true);
// //     try {
// //       const responseUploading = await fetch(imageUrl);
// //       const blob = await responseUploading.blob();
// //       const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
// //       const ref = firebase.storage().ref().child(filename);
// //       await ref.put(blob);
// //       Alert.alert('Photo uploaded');
// //       setImageUrl(null);
// //     } catch (error) {
// //       console.error('Error uploading image:', error);
// //       Alert.alert('Error uploading image');
// //     }
// //     setUploading(false);
// //   };

// //   const handleSave = () => {
// //     setIsSaved(true);
// //   };

// //   useEffect(() => {
// //     if (isSaved) {
// //       setIsSaved(false);
// //     }
// //   }, [isSaved]);

// //   const functionCombined = () => {
// //     updateEvent();
// //     uploadImage();
// //     handleSave();
// //   };

// //   return (
// //     <View style={{ flex: 1 }}>
// //       <SafeAreaView>
// //         {/* Rest of the code */}
// //       </SafeAreaView>
// //     </View>
// //   );
// // };

// // export default AdminEditEvent;






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
//   top: -20,
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



// // const AdminEditEvent = () => {
// //   const navigation = useNavigation();
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [isSaved, setIsSaved] = useState(false);

// //   const handleTextChange = (fieldName, inputText) => {
// //     switch (fieldName) {
// //       case 'title':
// //         setTitle(inputText);
// //         break;
// //       case 'description':
// //         setDescription(inputText);
// //         break;
// //       case 'date':
// //         setDate(inputText);
// //         break;
// //       case 'time':
// //         setTime(inputText);
// //         break;
// //       case 'location':
// //         setLocation(inputText);
// //         break;
// //       case 'imageUrl':
// //         setImageUrl(inputText);
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   const handleSave = () => {
// //     console.log('Saved:',  title, description, date, time, location, imageUrl);
// //     // Save the user input to a database or perform any other necessary action
// //     setIsSaved(true);
// //   };

// //   useEffect(() => {
// //     if (isSaved) {
// //       setTitle('');
// //       setDescription('');
// //       setDate('');
// //       setTime('');
// //       setLocation('');
// //       setImageUrl('');
// //       setIsSaved(false);
// //     }
// //   }, [isSaved]);



// //   return (
// //     <GestureHandlerRootView style={{ flex: 1 }}>
// //     <View style = {{display: 'flex'}}>
// //      <SafeAreaView> 
// //       <View style={{position: 'relative'}}>
// //      <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
// //             <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
// //         </TouchableOpacity>
// //     <Image source={require('../images/Ellipse.png')} 
// //             style = {styles.topImage}/>
// // </View>
// //       <Text style ={styles.title}>Edit Desired Event Field: </Text>
// //       <View  >
// //         <ScrollView style = {{margin: -370}} > 
// //       <View >

// //         <Text style={styles.fields}>Title: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('title', text)}
// //           value={title}
// //         />

// //         <Text style={styles.fields}>Description: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('description', text)}
// //           value={description}
// //         />

// //         <Text style={styles.fields}>Date: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('date', text)}
// //           value={date}
// //           keyboardType='numeric'
// //         />

// //         <Text style={styles.fields}>Time: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('time', text)}
// //           value={time}
// //           keyboardType='numeric'
// //         />

// //         <Text style={styles.fields}>Location: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('location', text)}
// //           value={location}
// //         />

// //         <Text style={styles.fields}>Image URL: </Text>
// //         <TextInput
// //           style={styles.textBox}
// //           onChangeText={(text) => handleTextChange('imageUrl', text)}
// //           value={imageUrl}
// //         />
// //       <View style = {styles.saveButton}>
// //       <Button title="Save" onPress={handleSave} />
// //       </View>
// //      </View> 
// //      </ScrollView>
// //       </View>
     
// //     </SafeAreaView>  
    
// //     </View>   
// //     </GestureHandlerRootView>
// //   )
// // }

// // export default AdminEditEvent


// // const styles = StyleSheet.create ({
// //   topImage: {
// //     left: -5,
// //     top: -226,
// //     resizeMode: 'contain',
// //    width: 400,
// //    height: 500,
// //    position: 'relative',
// //    zIndex: -1,
// // },

// //   title: {
// //     fontStyle: 'italic',
// //     fontWeight: 'bold',
// //     fontSize: 19,
// //     paddingStart: 20,
// //     bottom: 350,
    
// // },

// // textBox: {
// //   height: 40, 
// //   width: 235, 
// //   borderWidth: 2, 
// //   left: 50,
// //   paddingStart: 20,
// //   alignSelf: 'center',
// //   borderRadius: 20,
// //   borderColor: '#943ADA',
// //   fontWeight: 'bold',
// //   fontSize: 15,
// // },

// // saveButton: {
// //   bottom: -15,
// //   alignSelf: 'center',
// // },

// // fields: {
// //   top: 50, 
// //   right: 130,
// //   alignSelf: 'center',
// //   fontWeight: 'bold',
// //   fontSize: 17,
// //   margin: 20,
// // },

// // backIcon: {    

// //   // bottom: 610,
// //   top: 10,
// //   left: 20,
// //   position: 'absolute',
// //   zIndex: 1,
// //   // backgroundColor: 'red',
  
// // },
// // })

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Alert, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import { useNavigation } from '@react-navigation/native';

// const AdminEditEvent = () => {
//   const navigation = useNavigation();
//   const [event, setEvent] = useState(null); // State to store the current event
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
//           const firstEvent = querySnapshot.docs[0];
//           const eventData = firstEvent.data();
//           setEvent(firstEvent);
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
//   }, [eventsRef, navigation]);

//   const updateEvent = async () => {
//     if (event && title.length > 0) {
//       try {
//         await event.ref.update({
//           title: title,
//           description: description,
//           date: date,
//           time: time,
//           location: location,
//           imageUrl: imageUrl,
//         });
//         setIsSaved(true);
//         Alert.alert('Event updated successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error updating event:', error);
//         Alert.alert('Error updating event');
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
//       console.error('Error uploading image:', error);
//       Alert.alert('Error uploading image');
//     }
//     setUploading(false);
//   };

//   const handleSave = () => {
//     setIsSaved(true);
//   };

//   useEffect(() => {
//     if (isSaved) {
//       setIsSaved(false);
//     }
//   }, [isSaved]);

//   const functionCombined = () => {
//     pickImage();
//     uploadImage();
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>

//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View>
//           <Text style={styles.title}>Edit Event</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Event Title"
//             value={title}
//             onChangeText={(text) => setTitle(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Description"
//             value={description}
//             onChangeText={(text) => setDescription(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Date"
//             value={date}
//             onChangeText={(text) => setDate(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Time"
//             value={time}
//             onChangeText={(text) => setTime(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Location"
//             value={location}
//             onChangeText={(text) => setLocation(text)}
//           />
//           <TouchableOpacity style={styles.imagePickerButton} onPress={functionCombined}>
//             <Text style={styles.imagePickerButtonText}>Select Image</Text>
//           </TouchableOpacity>
//           {imageUrl && (
//             <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
//           )}
//           <Button title="Save Event" onPress={updateEvent} disabled={uploading} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   imagePickerButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginBottom: 16,
//   },
//   imagePickerButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 16,
//   },
// });

// export default AdminEditEvent;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Alert, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { firebase } from "../../config";
// import { useNavigation } from '@react-navigation/native';

// const AdminEditEvent = () => {
//   const navigation = useNavigation();
//   const [event, setEvent] = useState(null); // State to store the current event
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
//           const firstEvent = querySnapshot.docs[0];
//           const eventData = firstEvent.data();
//           setEvent(firstEvent);
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
//   }, [eventsRef, navigation]);

//   const updateEvent = async () => {
//     if (event && title.length > 0) {
//       try {
//         await event.ref.update({
//           title: title,
//           description: description,
//           date: date,
//           time: time,
//           location: location,
//           imageUrl: imageUrl,
//         });
//         setIsSaved(true);
//         Alert.alert('Event updated successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error updating event:', error);
//         Alert.alert('Error updating event');
//       }
//     }
//   };

//   const pickImage = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access media library denied');
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImageUrl(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     if (imageUrl) {
//       setUploading(true);
//       try {
//         const responseUploading = await fetch(imageUrl);
//         const blob = await responseUploading.blob();
//         const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//         const ref = firebase.storage().ref().child(filename);
//         await ref.put(blob);
//         Alert.alert('Photo uploaded');
//         setImageUrl(null);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         Alert.alert('Error uploading image');
//       }
//       setUploading(false);
//     }
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <ScrollView>
//           <View>
//             <Text style={styles.title}>Edit Event</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Event Title"
//               value={title}
//               onChangeText={(text) => setTitle(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Event Description"
//               value={description}
//               onChangeText={(text) => setDescription(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Event Date"
//               value={date}
//               onChangeText={(text) => setDate(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Event Time"
//               value={time}
//               onChangeText={(text) => setTime(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Event Location"
//               value={location}
//               onChangeText={(text) => setLocation(text)}
//             />
//             <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//               <Text style={styles.imagePickerButtonText}>Select Image</Text>
//             </TouchableOpacity>
//             {imageUrl && (
//               <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
//             )}
//             <Button title="Update Event" onPress={updateEvent} disabled={uploading} />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   imagePickerButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginBottom: 16,
//   },
//   imagePickerButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 16,
//   },
// });

// export default AdminEditEvent;






import { firebase } from "../../config";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const AdminEditEvent = () => {
  const navigation = useNavigation();
  const [event, setEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  const eventsRef = firebase.firestore().collection('events');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const querySnapshot = await eventsRef.get();
        if (!querySnapshot.empty) {
          const firstEvent = querySnapshot.docs[0];
          const eventData = firstEvent.data();
          setEvent({ id: firstEvent.id, ref: firstEvent.ref }); // Store document ID and reference
          setTitle(eventData.title);
          setDescription(eventData.description);
          setDate(eventData.date);
          setTime(eventData.time);
          setLocation(eventData.location);
          setImageUrl(eventData.imageUrl);
        } else {
          Alert.alert('No events found');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error fetching event:', error);
        Alert.alert('Error fetching event');
        navigation.goBack();
      }
    };

    fetchEvent();
  }, []);

  const updateEvent = async () => {
    if (event && title.length > 0) {
      try {
        const eventData = {
          title: title,
          description: description,
          date: date,
          time: time,
          location: location,
          imageUrl: imageUrl,
        };

        await event.ref.update(eventData); // Update the event using event.ref
        setIsSaved(true);
        Alert.alert('Event updated successfully!');
        navigation.goBack();
      } catch (error) {
        console.error('Error updating event:', error);
        Alert.alert('Error updating event');
      }
    }
  };

  // const updateEvent = async () => {
  //   if (event && title.length > 0) {
  //     try {
  //       const eventQuerySnapshot = await eventsRef.where('title', '==', title).get();
  //       if (!eventQuerySnapshot.empty) {
  //         Alert.alert('Title already exists');
  //         return;
  //       }
  
  //       const eventData = {
  //         title: title,
  //         description: description,
  //         date: date,
  //         time: time,
  //         location: location,
  //         imageUrl: imageUrl,
  //       };
  
  //       await event.ref.update(eventData); // Update the event using event.ref
  //       setIsSaved(true);
  //       Alert.alert('Event updated successfully!');
  //       navigation.goBack();
  //     } catch (error) {
  //       console.error('Error updating event:', error);
  //       Alert.alert('Error updating event');
  //     }
  //   }
  // };
  

  const deleteEvent = async () => {
    if (event) {
      try {
        await eventsRef.doc(event.id).delete();
        Alert.alert('Event deleted successfully!');
        navigation.goBack();
      } catch (error) {
        console.error('Error deleting event:', error);
        Alert.alert('Error deleting event');
      }
    }
  };
  
  
  
  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access media library denied');
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };
  
  const uploadImage = async () => {
    if (imageUrl) {
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
        console.error('Error uploading image:', error);
        Alert.alert('Error uploading image');
      }
      setUploading(false);
    }
  };
  

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Event</Text>
        <TextInput
          style={styles.input}
          placeholder="Event Title"
          value={title}
          onChangeText={(text) => handleInputChange('title', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Description"
          value={description}
          onChangeText={(text) => handleInputChange('description', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Date"
          value={date}
          onChangeText={(text) => handleInputChange('date', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Time"
          value={time}
          onChangeText={(text) => handleInputChange('time', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Location"
          value={location}
          onChangeText={(text) => handleInputChange('location', text)}
        />

        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
          <Text style={styles.imagePickerButtonText}>Select Image</Text>
        </TouchableOpacity>
        {imageUrl && (
          <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
        )}
        <Button title="Update Event" onPress={updateEvent} disabled={uploading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  imagePickerButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
});

export default AdminEditEvent;
