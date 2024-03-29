
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
 
} from "react-native";
// import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

import React, { useState,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Images from "../images";
import { firebase } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard } from "react-native";
import { ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import MultiSelect from 'react-native-multiple-select';

const DetailScreen = () => {
  const currentUser = firebase.auth().currentUser;
  const navigation = useNavigation();
  const uploadDta = firebase.firestore().collection("userData")
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [language,setLanguage]=useState('');
  const [skill,setSkill]=useState([])
  const [gender, setGender] = useState('');
  const [city,setCity]=useState('');
  const [hobbies,setHobbies]=useState('');
  const [avaiDay,setAvaiDay]=useState('');
  const [experience,setExperience]=useState('');
  const [payment,setPayment]=useState('');
  const [image,setImage]=useState(null);
  const [uploading,setUploading]=useState(false);
  const [selectedItems, setSelectedItems] = useState('');
  const [otherSkill, setOtherSkill] = useState('');
  const [showOtherTextInput, setShowOtherTextInput] = useState(false);


  const addInfo = async () => {
    if (age > 19) {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const user = firebase.auth()?.currentUser?.email;
      const data = {
        userName: name,
        userAge: age,
        userGender: gender,
        userLanguage: language,
        userSkill: selectedItems,
        userOtherSkill: otherSkill,
        userCity: city,
        userHobbies: hobbies,
        userAvai: avaiDay,
        userPay: payment,
        userExperience: experience,
        createdAt: timeStamp,
        userId: user,
        userImage: null, // Update to null initially
      };
  
      try {
        const docRef = await uploadDta.add(data);
        const imageId = docRef.id;
        if (image) {
          const imageRef = firebase.storage().ref().child(`images/${imageId}`);
          const response = await fetch(image);
          const blob = await response.blob();
          await imageRef.put(blob);
          const downloadURL = await imageRef.getDownloadURL();
          await docRef.update({ userImage: downloadURL }); // Update the field to 'userImage'
        }
  
        setName('');
        setGender('');
        setAge('');
        setLanguage('');
        setSelectedItems('');
        setCity('');
        setOtherSkill('');
        setHobbies('');
        setAvaiDay('');
        setPayment('');
        setExperience('');
        setImage(null);
        Keyboard.dismiss();
        Alert.alert('Your information has been updated!');
        navigation.navigate('UserProfileScreen');
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
    });
  
    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setImage(selectedAsset.uri);
    }
  };
  
  
  const uploadImage = async () => {
    if (image) {
      try {
        const responseUploading = await fetch(image);
        const blob = await responseUploading.blob();
        const filename = image.substring(image.lastIndexOf('/') + 1);
  
        const ref = firebase.storage().ref().child(filename);
        const snapshot = await ref.put(blob);
  
        const downloadURL = await snapshot.ref.getDownloadURL();
        console.log('Download URL:', downloadURL);
  
        setImage(downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };
  



 // checks if the text input is empty or not 
const checkTextInput = () => {
  if (age.trim()==0 ) {
    Alert.alert('Please enter the empty fill ');
    return;
  }
  

};
const functionCombined=()=>{
  checkTextInput(); 
  uploadImage();
  addInfo();
  handleSaveSkill();

  
}
const options = [
  { id: 'Disability Support Worker', name: 'Disability Support Worker' },
  { id: 'Special Needs Caregiver', name: 'Special Needs Caregiver' },
  { id: 'Alzheimer Caregiver', name: 'Alzheimer Caregiver' },
  { id: 'Nutritionist/Dietitian', name: 'Nutritionist/Dietitian' },
  { id: 'Home Care Nurse', name: 'Home Care Nurse' },
  { id: 'Physical Therapist', name: 'Physical Therapist' },
  { id: 'Home Health Aide', name: 'Home Health Aide' },
  { id: 'Elderly Care Assistant', name: 'Elderly Care Assistant' },
  { id: 'Household chores', name: 'Household chores' },
  { id: 'Transportation assistance', name: 'Transportation assistance' },
  { id: 'Medication management', name: 'Medication management' },
  { id: 'Travel assistant', name: 'Travel assistant' },

  { id: 'other', name: 'Other' },
];

const handleSkillChange = (selectedItems) => {
  setSelectedItems(selectedItems);

  const isOtherSelected = selectedItems.find((item) => item.id === 'other');
  setShowOtherTextInput(!!isOtherSelected);
};

const handleOtherSkillChange = (text) => {
  setOtherSkill(text);
};

const handleSaveSkill = () => {
  // Save selected items and other skill to your state or do something else with them
  console.log('Selected Items:', selectedItems);
  console.log('Other Skill:', otherSkill);
};
  
  return (
   
 
     <ScrollView>
       <SafeAreaView> 
          <Image
              source={require("../images/rectangleBackground.png")}
              style={{ left: -70, top: -45, resizeMode: "contain" }} />
                <Text style={styles.bigInfoStyle}>Info</Text>
         
       <Text style={styles.infoStyle}>
          {"\n"} Fill the info to continue register</Text>        
            <View>
            <TouchableOpacity onPress={pickImage}>
              <Image
             source={require("../images/addphoto.png")}
             style={{ left:170, top:10, resizeMode: "contain" }} />

      
  </TouchableOpacity>
  {/* <View style={styles.imageContainer}>
  {image && <Image source={{uri:image.uri}} style ={{width:300,height:300,borderRadius:200/2}}/>}




  </View> */}
  <View style={styles.imageContainer}>
  {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, borderRadius: 150, left: 50 }} />}
</View>
<View style = {{top: -30}}>
  <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
         Full name
        </Text>
          <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
      
         placeholder="Enter your fill name please"
        placeholderTextColor={'grey'}
        utoCorrect="true"

        onChangeText={(userName)=>setName(userName)}
       
        value={name}
        multiline={false}
        underlineColorAndroid='transparent'
        ></TextInput>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
          Age
        </Text>
          <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
            keyboardType="numeric"
      
         placeholder="Your age"

        placeholderTextColor={'grey'}


        onChangeText={(userAge)=>setAge(userAge)}
        value={age}
        multiline={false}
        underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
         gender
        </Text>
        
     <RNPickerSelect
    style={pickerSelectStyles}
      value={gender}
      onValueChange={(itemValue) => setGender(itemValue)}
      items={[
        
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ]}
    />
 <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
          City
        </Text>
          <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
      
         placeholder="City"
        placeholderTextColor={'grey'}
        utoCorrect="true"

        rules={{
          required: "city is required",
        }}
        onChangeText={(userCity)=>setCity(userCity)}
       
        value={city}
        multiline={false}
        underlineColorAndroid='transparent'
        ></TextInput>
        <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
          Languages
        </Text>
      
        <TextInput
        style={{
          borderRadius: 30,
          color: "grey",
          width: "80%",
          backgroundColor: "white",
          borderColor: "#D5D5D5",
          paddingHorizontal: 30,
          paddingVertical: 18,
          marginBottom: 20,
          borderBottomColor: "#D5D5D5",
          marginVertical: 20,
          shadowColor: "#000",
          marginLeft: 40,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.36,
          shadowRadius: 10.0,
          elevation: 11,}}

placeholder="english,hebrew,...."
placeholderTextColor={'grey'}
onChangeText={(userLanguage) => setLanguage(userLanguage)}
value={language}
multiline={false}
underlineColorAndroid='transparent'
onBlur={() => {
  const languages = language.split(',').map(lang => lang.trim());
  setLanguage(languages.join(','));
}}
/>
 <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
          Hobbies
        </Text>
          <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
         placeholder="Dance,running..."
         placeholderTextColor={'grey'}
        onChangeText={(userHobbies)=>setHobbies(userHobbies)}
        onch
        value={hobbies}
        rules={{
          required: "hobbies is required",
        }}      
       
         underlineColorAndroid='transparent'
        ></TextInput>

<Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
        Experience
        </Text>
         <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
            keyboardType="numeric"
            type="number" pattern="[0-9]*"
         placeholder="Experience"
         placeholderTextColor={'grey'}
        onChangeText={(userExperience)=>setExperience(userExperience)}
        onch
        value={experience}
        

        multiline={false}
        underlineColorAndroid='transparent'
        rules={{
          required: "Experience days is required",
        }}
        ></TextInput>



<Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
Available
        </Text>
        <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
         placeholder="Available working day"
         placeholderTextColor={'grey'}
        onChangeText={(userAvai)=>setAvaiDay(userAvai)}
        onch
        value={avaiDay}
    
        underlineColorAndroid='transparent'
     
        ></TextInput>
        <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19}}>
           Payment
        </Text>
        <TextInput  style={{
            borderRadius: 30,
            color: "grey",
            width: "80%",
            backgroundColor: "white",
            borderColor: "#D5D5D5",
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 20,
            borderBottomColor: "#D5D5D5",
            marginVertical: 20,
            shadowColor: "#000",
            marginLeft: 40,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,}}
         placeholder="How would like to get payed ?"
         placeholderTextColor={'grey'}
        onChangeText={(userPay)=>setPayment(userPay)}
        onch
        value={payment}
    
        underlineColorAndroid='transparent'
     
        ></TextInput>
             <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
         skills 
        </Text>
        
        <View style={styles.container}>
<MultiSelect
  style={multiSelectStyles}
  items={options}
  uniqueKey="id"
  onSelectedItemsChange={handleSkillChange}
  selectedItems={selectedItems}
  selectText="Select skills"
  searchInputPlaceholderText="Search skills..."
  tagRemoveIconColor="#CCC"
  tagBorderColor="#6A61CF"
  tagTextColor="#CCC"
  selectedItemTextColor="#CCC"
  selectedItemIconColor="#CCC"
  itemTextColor="#000"
  displayKey="name"
  searchInputStyle={{ color: '#CCC' }}
  submitButtonColor="#CCC"
  submitButtonStyle={multiSelectStyles.submitButton}
/>
</View>

    {/* {showOtherTextInput && (
      <TextInput
        placeholder="Enter other skill"
        onChangeText={handleOtherSkillChange}
        value={otherSkill}
        style={{
          borderWidth: 1,
          borderColor: '#CCC',
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
        }}
      />
    )} */}
      </View>
      <TouchableOpacity style={styles.buttonLoginStyle}    onPress={functionCombined}>
        <Text style={styles.logInStyle}
        >
          continue</Text>
      </TouchableOpacity>
      </View>

      </SafeAreaView>
      </ScrollView>

    
  );
};

export default DetailScreen;

const styles = StyleSheet.create({

  buttonMessageStyle: {
  //   left: 180,
  //   bottom: -50,
    backgroundColor: "#ffff",
    borderRadius: 40,
    paddingHorizontal: 50,
    justifyContent: "center",
    // alignItem: "center",
    paddingVertical: 20,
    marginRight: 230,
    marginBottom: 40,
   borderBottomColor:"#6A61CF"      
  
  },
  infoStyle: {
      
      fontSize:25,
      color: "#9E9E9E",
      // fontWeight: "bold",
      textAlign: "center",
      marginVertical: 10,
      marginTop: -30,
      right:10,
    },
    bigInfoStyle: {
      
      fontSize:30,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 10,
      marginTop: -90,
      right: 10,
    },
    buttonLoginStyle: {
      backgroundColor: "#6A61CF",
      borderRadius: 40,
      paddingHorizontal: 60,
      justifyContent: "center",
      // alignItem: "center",
      paddingVertical: 15,
      marginLeft: 220,
      right:40,
      top: -30,
      width: 188,
      marginBottom: -50,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 10.0,
      elevation: 11,
    },
    logInStyle: {
      fontWeight: "bold",
      fontSize: 17,
      color: "#1DFFD6",
    },
    uploadButton:{
     borderRadius:5,
     width:150,
     height:50,
     justifyContent:'center',

    },
    imageContainer:{
      overflow: 'hidden',
      marginTop :30,
      marginBottom:50,
      // alignItems:'center',
      borderRadius: 1400,
    }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width:335,
    alignSelf:'center',
    backgroundColor:'white',
    paddingVertical: 15,
    paddingHorizontal:60,
    // borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 30,
    // color: 'black',
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11, // To ensure the text is not obscured by the icon
  },
  inputAndroid: {
    fontSize: 16,
    width:335,
    alignSelf:'center',
    paddingHorizontal: 60,
    paddingVertical: 8,
    // borderWidth: 1,
    // // borderColor: 'gray',
    borderRadius: 30,
    // color: 'black',
    paddingRight: 30, 
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,// To ensure the text is not obscured by the icon
  },
});



const multiSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: '#CCC',
    paddingRight: 30, // To ensure the text is not obscured by the icon
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: '#CCC',
    paddingRight: 30, // To ensure the text is not obscured by the icon
  },
  selectedItem: {
    backgroundColor: '#CCC',
    borderRadius: 20,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#CCC',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  rowItem: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 16,
    color: '#000',
  },
});