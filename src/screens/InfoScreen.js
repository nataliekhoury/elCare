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
  import React, { useState,useEffect } from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { useNavigation } from "@react-navigation/native";
  import Images from "../images";
  import { firebase } from "../../config";
  import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard } from "react-native";
import { ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker'
 const InfoScreen = () => {

    const navigation = useNavigation();
    const uploadDta =firebase.firestore().collection('userData');
    const [age,setAge]=useState('');
    const [language,setLanguage]=useState('');
    const [city,setCity]=useState('');
    const [hobbies,setHobbies]=useState('');
    const [avaiDay,setAvaiDay]=useState('');
    const [experience,setExperience]=useState('');
    const [image,setImage]=useState(null);
    const [uploading,setUploading]=useState(false);


    //add a new field
    const addInfo =async () =>{
      // const currentUser = await firebase.auth()
      // _id: firebase.auth()?.currentUser?.email
      //check if we have new field data
      if (age>19){
        const timeStamp =firebase.firestore.FieldValue.serverTimestamp();
        const user= firebase.auth()?.currentUser?.email;
        const data ={
          userAge :age,
          userLanguage :language,
          userCity:city,
          userHobbies:hobbies,
          userAvai:avaiDay,
          userExperience:experience,
          createdAt:timeStamp,
          userId:user,
          userImage:image.uri,
        };
        uploadDta.add(data).then(()=>{
            setAge('');
            setLanguage('')
            setCity('')
            setHobbies('')
            setAvaiDay('')
            setExperience('')
          Keyboard.dismiss();
        }) .then(() => {
          Alert.alert("your information has been updated!");
        })
        .catch((error)=>{
          alert(error)
        })
        .then(()=>{
            navigation.replace('UserProfileScreen');
        })

      }
    }

  const pickImage =async()=>{
    let result =await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect :[4,3],
      quality:1,
      borderRadius:1800,
    });
    const source ={uri:result.assets[0].uri};
    setImage(source);
  };
  
   const uploadImage =async()=>{
    setUploading(true);
    const responseUploading =await fetch(image.uri);
    const blob =await responseUploading.blob();
    const filename=image.uri.substring(image.uri.lastIndexOf('/')+1);
    var ref =firebase.storage().ref().child(filename).put(blob);
    try{
      await ref ;
    }catch (e){
      console.log(e);
    }
    setUploading(false);
    // Alert.alert('photo uploaded');
    setImage(null);
   }



  // checks if the text input is empty or not 
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (age.trim()==0 || language.trim() ==0 || hobbies.trim() ==0 || avaiDay.trim() == 0 || experience.trim()==0 || city.trim()) {
      Alert.alert('Please enter the empty fill ');
      return;
    }
    
  
  };
  const functionCombined=()=>{
    checkTextInput(); 
    uploadImage();
    addInfo();

    
  }

    
    return (
      <ScrollView>
    <SafeAreaView> 
            <Image
                source={require("../images/rectangleBackground.png")}
                style={{ left: -70, top: -45, resizeMode: "contain" }} />
                  <Text style={styles.bigInfoStyle}>Info</Text>
           
         <Text style={styles.infoStyle}>
            {"\n"}Fill the info to continue register</Text>        
              <View>
              <TouchableOpacity onPress={pickImage}>
                <Image
               source={require("../images/addphoto.png")}
               style={{ left:170, top:10, resizeMode: "contain" }} />

        
    </TouchableOpacity>
    <View style={styles.imageContainer}>
    {image && <Image source={{uri:image.uri}} style ={{width:300,height:300,borderRadius:200/2}}/>}
    {/* <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
      <Text>
        Upload Image here
      </Text>
    </TouchableOpacity> */}



    </View>
            <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
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
              // type="number" pattern="[0-9]*"
           placeholder="Your age"
          //  rules={{
          //   required: "age is required",
          // }}
          // placeholderTextColor={'#6A61CF'}
          placeholderTextColor={'grey'}
          // onPress={checkTextInput}
          // onChange={checkTextInput}

          onChangeText={(userAge)=>setAge(userAge)}
          value={age}
          multiline={false}
          underlineColorAndroid='transparent'
          ></TextInput>
   <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
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
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
            Languages
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
              rules={{
                required: "Languages is required",
              }}
           placeholder="Languages that you speak"
           placeholderTextColor={'grey'}
         
          onChangeText={(userLanguage)=>setLanguage(userLanguage)}
          onch
          value={language}
          multiline={false}
          underlineColorAndroid='transparent'
          ></TextInput>
   <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
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
           placeholder="Hobbies"
           placeholderTextColor={'grey'}
          onChangeText={(userHobbies)=>setHobbies(userHobbies)}
          onch
          value={hobbies}
          rules={{
            required: "hobbies is required",
          }}      
         
           underlineColorAndroid='transparent'
          ></TextInput>

<Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
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



<Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: "19" }}>
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
          onPress={checkTextInput}   
      
          underlineColorAndroid='transparent'
       
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonLoginStyle}    onPress={functionCombined}>
          <Text style={styles.logInStyle}
          >
            continue</Text>
        </TouchableOpacity>
        {/* </ScrollView> */}
        
        
     </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default InfoScreen;
  
  const styles = StyleSheet.create({

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
    infoStyle: {
        
        fontSize:27,
        color: "#9E9E9E",
        // fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
        marginTop: -30,
        right:17,
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
        borderRadius: "40",
        paddingHorizontal: 60,
        justifyContent: "center",
        alignItem: "center",
        paddingVertical: 15,
        marginLeft: 220,
        right:20,
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
        fontSize: "17",
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
        alignItems:'center',
        borderRadius: 1400,
      }
  });
  