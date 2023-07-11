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
      <Image
                source={require("../images/rectangleBackground.png")}
                style={{ left: -70, top: -50, resizeMode: "contain" }} />
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
        <Button title="POST" color= 'rgba(1, 1, 1, -0.5)' onPress={functionCombined}/>
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
    bottom:95,
    left:-10,
    resizeMode: 'contain',
    tintColor: '#666666',

  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '800',
    marginBottom: -10,
    paddingStart: 20,
    bottom:30,
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
    top:20,
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
    top:20,
    left:20
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
    top:20,

  },
  buttonContainer: {
    marginTop: -60,
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
    // elevation: 11,
    top:90,
  },
});