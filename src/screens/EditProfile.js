// // 


// import { firebase } from "../../config";
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';

// const AdminEditEvent = ({ route: eventRoute }) => {
//   const [uploading, setUploading] = useState(false);

//   const eventsRef = firebase.firestore().collection('events');
//   const navigation = useNavigation();
//   const { event } = eventRoute.params; // Retrieve the event from the route parameter
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [location, setLocation] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     if (event) {
//       setTitle(event.title);
//       setDescription(event.description);
//       setDate(event.date);
//       setTime(event.time);
//       setLocation(event.location);
//       setImageUrl(event.imageUrl);
//     }
//   }, [event]);

//   const updateEvent = async () => {
//     if (event && title && description && date && time && location && imageUrl) {
//       try {
//         const eventData = {
//           title: title,
//           description: description,
//           date: date,
//           time: time,
//           location: location,
//           imageUrl: imageUrl,
//         };
  
//         await eventsRef.doc(event.id).update(eventData);
//         setIsSaved(true);
//         Alert.alert('Event updated successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error updating event:', error);
//         Alert.alert('Error updating event');
//       }
//     } else {
//       Alert.alert('Please fill in all fields');
//     }
//   };

//   const deleteEvent = async () => {
//     if (event) {
//       try {
//         await eventsRef.doc(event.id).delete();
//         Alert.alert('Event deleted successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error deleting event:', error);
//         Alert.alert('Error deleting event');
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

//   const handleInputChange = (field, value) => {
//     switch (field) {
//       case 'title':
//         setTitle(value);
//         break;
//       case 'description':
//         setDescription(value);
//         break;
//       case 'date':
//         setDate(value);
//         break;
//       case 'time':
//         setTime(value);
//         break;
//       case 'location':
//         setLocation(value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topImageContainer}>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.title}>Edit Event</Text>

//       <ScrollView style={styles.scrollContainer}>
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Event Title"
//             value={title}
//             onChangeText={(text) => handleInputChange('title', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Description"
//             value={description}
//             onChangeText={(text) => handleInputChange('description', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Date"
//             value={date}
//             onChangeText={(text) => handleInputChange('date', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Time"
//             value={time}
//             onChangeText={(text) => handleInputChange('time', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Location"
//             value={location}
//             onChangeText={(text) => handleInputChange('location', text)}
//           />

//           <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//             <Text style={styles.imagePickerButtonText}>Select Image</Text>
//           </TouchableOpacity>
//           {imageUrl && (
//             <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
//           )}

//           <Button title="Update Event" onPress={updateEvent} disabled={uploading} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: -130,
//   },
//   topImageContainer: {
//     position: 'relative',
//   },
//   topImage: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: 400,
//   },
//   backIcon: {
//     position: 'absolute',
//     top: -220,
//     left: 10,
//     // width: 24,
//     // height: 24,
//     zIndex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//     marginTop: 16,
//     marginBottom: 8,
//     top: -120,
//   },
//   scrollContainer: {
//     flex: 1,
//     top: -90,
//     minHeight: '100%',
//   },
//   formContainer: {
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     alignItems: 'center',
//   width: 335, 
//   borderWidth: 2, 
//   paddingStart: 20,
//   alignSelf: 'center',
//   borderRadius: 20,
//   borderColor: '#943ADA',
//   fontWeight: 'bold',
//   fontSize: 15,
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
//     borderRadius: 15,
//   },
// });

// export default AdminEditEvent;




// import { firebase } from "../../config";
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';

// const EditProfile = ({ route: profiletRoute }) => {
//   const [uploading, setUploading] = useState(false);

//   const eventsRef = firebase.firestore().collection('userData');
//   const navigation = useNavigation();
//   const { profile } = profiletRoute.params; // Retrieve the event from the route parameter
//   const [userAge, setUserAge] = useState('');
//   const [userAvai, setUserAvai] = useState('');
//   const [userCity, setUserCity] = useState('');
//   const [userExperience, setUserExperience] = useState('');
//   const [userHobbies, setUserHobbies] = useState('');
//   const [userId, setUserId] = useState('');
//   const [userLanguage, setUserLanguage] = useState('');
//   const [userPay, setUserPay] = useState('');
//   const [userImage, setUserImage] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     if (profile) {
//       setUserAge (profile.userAge);
//       setUserAvai (profile.userAvai);
//       setUserCity (profile.userCity);
//       setUserExperience (profile.userExperience);
//       setUserHobbies (profile.userHobbies);
//       setUserId (profile.userId);
//       setUserLanguage (profile.userLanguage);
//       setUserPay (profile.userPay);
//       setUserImage (profile.userImage);
//     }
//   }, [profile]);

//   const updateProfile = async () => {
//     if (profile && userAge && userAvai && userCity && userExperience && userHobbies && userId && userLanguage && userPay && userImage) {
//       try {
//         const profileData = {
//           userAge: userAge,
//           userAvai: userAvai,
//           userCity: userCity,
//           userExperience: userExperience,
//           userHobbies: userHobbies,
//           userId: userId,
//           userLanguage: userLanguage,
//           userPay: userPay,
//           userImage: userImage,
//         };
  
//         await userDataRef.doc(profile.id).update(profileData);
//         setIsSaved(true);
//         Alert.alert('Event updated successfully!');
//         navigation.goBack();
//       } catch (error) {
//         console.error('Error updating event:', error);
//         Alert.alert('Error updating event');
//       }
//     } else {
//       Alert.alert('Please fill in all fields');
//     }
//   };

//   // const deleteEvent = async () => {
//   //   if (event) {
//   //     try {
//   //       await eventsRef.doc(event.id).delete();
//   //       Alert.alert('Event deleted successfully!');
//   //       navigation.goBack();
//   //     } catch (error) {
//   //       console.error('Error deleting event:', error);
//   //       Alert.alert('Error deleting event');
//   //     }
//   //   }
//   // };

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

//   const handleInputChange = (field, value) => {
//     switch (field) {
//       case 'userAge':
//         setUserAge(value);
//         break;
//       case 'userAvai':
//         setUserAvai(value);
//         break;
//       case 'userCity':
//         setUserCity(value);
//         break;
//       case 'userExperience':
//         setUserExperience(value);
//         break;
//       case 'userHobbies':
//         setUserHobbies(value);
//         break;
//         case 'userLanguage':
//         setUserLanguage(value);
//         break;
//         case 'userPay':
//         setUserPay(value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topImageContainer}>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <TouchableOpacity onPress={() => navigation.navigate('UserProfileScreen')}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.title}>Edit Profile</Text>

//       <ScrollView style={styles.scrollContainer}>
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Event Title"
//             value={userAge}
//             onChangeText={(text) => handleInputChange('userAge', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Description"
//             value={userAvai}
//             onChangeText={(text) => handleInputChange('userAvai', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Date"
//             value={userCity}
//             onChangeText={(text) => handleInputChange('userCity', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Time"
//             value={userExperience}
//             onChangeText={(text) => handleInputChange('userExperience', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Event Location"
//             value={userHobbies}
//             onChangeText={(text) => handleInputChange('userHobbies', text)}
//           />
//            <TextInput
//             style={styles.input}
//             placeholder="Event Location"
//             value={userLanguage}
//             onChangeText={(text) => handleInputChange('userLanguage', text)}
//           />
//            <TextInput
//             style={styles.input}
//             placeholder="Event Location"
//             value={userPay}
//             onChangeText={(text) => handleInputChange('userPay', text)}
//           />

//           <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//             <Text style={styles.imagePickerButtonText}>Select Image</Text>
//           </TouchableOpacity>
//           {userImage && (
//             <Image source={{ uri: userImage }} style={styles.imagePreview} />
//           )}

//           <Button title="Update Event" onPress={updateProfile} disabled={uploading} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: -130,
//   },
//   topImageContainer: {
//     position: 'relative',
//   },
//   topImage: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: 400,
//   },
//   backIcon: {
//     position: 'absolute',
//     top: -220,
//     left: 10,
//     // width: 24,
//     // height: 24,
//     zIndex: 1,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//     marginTop: 16,
//     marginBottom: 8,
//     top: -120,
//   },
//   scrollContainer: {
//     flex: 1,
//     top: -90,
//     minHeight: '100%',
//   },
//   formContainer: {
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     alignItems: 'center',
//   width: 335, 
//   borderWidth: 2, 
//   paddingStart: 20,
//   alignSelf: 'center',
//   borderRadius: 20,
//   borderColor: '#943ADA',
//   fontWeight: 'bold',
//   fontSize: 15,
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
//     borderRadius: 15,
//   },
// });

// export default EditProfile;




import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../../config";

const EditProfile = ({ route: profileRoute }) => {
  const [uploading, setUploading] = useState(false);

  const eventsRef = firebase.firestore().collection('userData');
  const navigation = useNavigation();
  const { profile } = profileRoute.params; // Retrieve the event from the route parameter
  const [userAge, setUserAge] = useState('');
  const [userAvai, setUserAvai] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [userHobbies, setUserHobbies] = useState('');
  const [userId, setUserId] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPay, setUserPay] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (profile) {
      setUserAge(profile.userAge);
      setUserAvai(profile.userAvai);
      setUserCity(profile.userCity);
      setUserExperience(profile.userExperience);
      setUserHobbies(profile.userHobbies);
      setUserId(profile.userId);
      setUserLanguage(profile.userLanguage);
      setUserPay(profile.userPay);
      setUserImage(profile.userImage);
    }
  }, [profile]);

  const updateProfile = async () => {
    if (profile && userAge && userAvai && userCity && userExperience && userHobbies && userId && userLanguage && userPay && userImage) {
      try {
        const profileData = {
          userAge: userAge,
          userAvai: userAvai,
          userCity: userCity,
          userExperience: userExperience,
          userHobbies: userHobbies,
          userId: userId,
          userLanguage: userLanguage,
          userPay: userPay,
          userImage: userImage,
        };

        await eventsRef.doc(profile.id).update(profileData);
        setIsSaved(true);
        Alert.alert('Profile updated successfully!');
        navigation.goBack();
      } catch (error) {
        console.error('Error updating profile:', error);
        Alert.alert('Error updating profile');
      }
    } else {
      Alert.alert('Please fill in all fields');
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
      setUserImage(result.uri);
    }
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'userAge':
        setUserAge(value);
        break;
      case 'userAvai':
        setUserAvai(value);
        break;
      case 'userCity':
        setUserCity(value);
        break;
      case 'userExperience':
        setUserExperience(value);
        break;
      case 'userHobbies':
        setUserHobbies(value);
        break;
      case 'userLanguage':
        setUserLanguage(value);
        break;
      case 'userPay':
        setUserPay(value);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
        <TouchableOpacity onPress={() => navigation.navigate('UserProfileScreen')}>
          <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Edit Profile</Text>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Age"
            value={userAge}
            onChangeText={(text) => handleInputChange('userAge', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User Availability"
            value={userAvai}
            onChangeText={(text) => handleInputChange('userAvai', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User City"
            value={userCity}
            onChangeText={(text) => handleInputChange('userCity', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User Experience"
            value={userExperience}
            onChangeText={(text) => handleInputChange('userExperience', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User Hobbies"
            value={userHobbies}
            onChangeText={(text) => handleInputChange('userHobbies', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User Language"
            value={userLanguage}
            onChangeText={(text) => handleInputChange('userLanguage', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="User Pay"
            value={userPay}
            onChangeText={(text) => handleInputChange('userPay', text)}
          />

          <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
            <Text style={styles.imagePickerButtonText}>Select Image</Text>
          </TouchableOpacity>
          {userImage && (
            <Image source={{ uri: userImage }} style={styles.imagePreview} />
          )}

          <Button title="Update Profile" onPress={updateProfile} disabled={uploading} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -130,
  },
  topImageContainer: {
    position: 'relative',
  },
  topImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 400,
  },
  backIcon: {
    position: 'absolute',
    top: -220,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    top: -120,
  },
  scrollContainer: {
    flex: 1,
    top: -90,
    minHeight: '100%',
  },
  formContainer: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    width: 335,
    borderWidth: 2,
    paddingStart: 20,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#943ADA',
    fontWeight: 'bold',
  },
  imagePickerButton: {
    backgroundColor: '#943ADA',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  imagePickerButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default EditProfile;
