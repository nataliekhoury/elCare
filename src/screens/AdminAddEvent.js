import { View, Text,StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { firebase } from "../../config";


 // const [type, setType] = useState("");
  // try {
  //   const docRef = await addDoc (collection (db, "events"), {
  //     type: type,

  //   });
  //   console.log ("Document written with ID: ", docRef.id); 
  //   setType("");
  // } catch(e) {
  //   console.error("Error adding document: ", e);

  // }

const AdminAddEvent = () => {
  const navigation = useNavigation();
  const addEvent =firebase.firestore().collection('events');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const addInfo = async () => {
    if (date > 0) {
      const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        title: title,
        description: description,
        date: date,
        time: time,
        location: location,
        imageUrl: imageUrl.uri, 
        isSaved: isSaved, 
        createdAt:timeStamp,
      };
      addEvent.add(data).then (() => {
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
      // setImageUrl('');
      setIsSaved(false);
      } ).then (() =>{
        Alert.alert ("your information has been updated!");
      })
      .catch((error) => {
        alert(error)
      })
      .then(() => {
        navigation.replace('EventScreen');
      })

    }
  }

  // const pickImage =async()=>{
  //   let result =await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes:ImagePicker.MediaTypeOptions.All,
  //     allowsEditing:true,
  //     aspect :[4,3],
  //     quality:1,
  //     borderRadius:1800,
  //   });
  //   const source ={uri:result.assets[0].uri};
  //   setImageUrl(source);
  // };
  
  //  const uploadImage =async()=>{
  //   setUploading(true);
  //   const responseUploading =await fetch(imageUrl.uri);
  //   const blob =await responseUploading.blob();
  //   const filename=imageUrl.uri.substring(imageUrl.uri.lastIndexOf('/')+1);
  //   var ref =firebase.storage().ref().child(filename).put(blob);
  //   try{
  //     await ref ;
  //   }catch (e){
  //     console.log(e);
  //   }
  //   setUploading(false);
  //   // Alert.alert('photo uploaded');
  //   setImageUrl(null);
  //  }



  

  // const docRef = firebase.firestore().collection('events');
  // useEffect (() => {
  //   docRef.onSnapshot (querySnapshot => {
  //     const title = []
  //     querySnapshot.forEach ((doc) => {
  //       const {
  //         description,
  //         date,
  //         time,
  //         location, 
  //         imageUrl,
  //         isSaved,
  //       } = doc.data()

  //       title.push ({
  //         id: doc.id,
  //         description,
  //         date,
  //         time,
  //         location, 
  //         imageUrl,
  //         isSaved,
  //       })
  //     })
  //     setTitle (title)
  //   } )
  // },[])
  // const docRef = await addDoc (collection (db, "events")

  // try {
  //   const docRef = firebase.firestore().collection(( 'events'), {
  //       title: title,
  //       description: description,
  //       date: date,
  //       time: time,
  //       location: location,
  //       imageUrl: imageUrl, 
  //       isSaved: isSaved, 
        
  //     });
  //     console.log ("Document written with ID: ", docRef.id); 
  //     // setType("");
  //   } catch(e) {
  //     console.error("Error adding document: ", e);
  
  //   }


  // const handleTextChange = (fieldName, inputText) => {
  //   switch (fieldName) {
  //     case 'title':
  //       setTitle(inputText);
  //       break;
  //     case 'description':
  //       setDescription(inputText);
  //       break;
  //     case 'date':
  //       setDate(inputText);
  //       break;
  //     case 'time':
  //       setTime(inputText);
  //       break;
  //     case 'location':
  //       setLocation(inputText);
  //       break;
  //     case 'imageUrl':
  //       setImageUrl(inputText);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const checkTextInput = () => {
  //   //Check for the Name TextInput
  //   if (age.trim()==0 || language.trim() ==0 || hobbies.trim() ==0 || avaiDay.trim() == 0 || experience.trim()==0 || city.trim()) {
  //     Alert.alert('Please enter the empty fill ');
  //     return;
  //   }
    
  
  // };

  const handleSave = () => {
    console.log('Saved:',  title, description, date, time, location, imageUrl);
    // Save the user input to a database or perform any other necessary action
    setIsSaved(true);
  };

  useEffect(() => {
    if (isSaved) {
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
      setImageUrl('');
      setIsSaved(false);
    }
  }, [isSaved]);


  const functionCombined=()=>{
    // checkTextInput(); 
    // uploadImage();
    handleSave();
    addInfo();

    
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style = {{display: 'flex'}}>
     <SafeAreaView> 
      <View style={{position: 'relative'}}>
     <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
        </TouchableOpacity>


    <Image source={require('../images/Ellipse.png')} 
            style = {styles.topImage}/>
</View>
      <Text style ={styles.title}>Fill Information to Add Event: </Text>
      <View  >
      <NativeViewGestureHandler>
        <ScrollView style = {{margin: -370}} > 
      <View >

        <Text style={styles.fields}>Title: </Text>
        <TextInput
          style={styles.textBox}
          placeholder="Title"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          rules={{
            required: "Title is required",
          }}
          onChangeText={(title)=>setTitle(title)}
          value={title}
          multiline={false}
          underlineColorAndroid='transparent'
          // onChangeText={(text) => handleTextChange('title', text)}
          // value={title}
          // onSubmitEditing={AdminAddEvent}
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
          // onChangeText={(text) => handleTextChange('description', text)}
          // value={description}
          // onSubmitEditing={AdminAddEvent}
        />

        <Text style={styles.fields}>Date: </Text>
        <TextInput
          style={styles.textBox}
          // onChangeText={(text) => handleTextChange('date', text)}
          // value={date}
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
          // onSubmitEditing={AdminAddEvent}
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

        <Text style={styles.fields}>Image URL: </Text>
        <TextInput
          style={styles.textBox}
          placeholder="Image"
          placeholderTextColor={'grey'}
          utoCorrect="true"
          onChangeText={(imageUrl)=>setImageUrl(imageUrl)}
          value={imageUrl}
          multiline={false}
          underlineColorAndroid='transparent'
          // {/* // onChangeText={(text) => handleTextChange('imageUrl', text)}
          // // value={imageUrl}
          // // onSubmitEditing={AdminAddEvent} */}
        />
      <View style = {styles.saveButton}>
      <Button title="Save" onPress={functionCombined}/>
      
      </View>
     </View> 
     </ScrollView>
     </NativeViewGestureHandler>
      </View>
     
    </SafeAreaView>  
    
    </View>  
    </GestureHandlerRootView> 
  )
}

export default AdminAddEvent


const styles = StyleSheet.create ({
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

  // bottom: 610,
  top: 10,
  left: 20,
  position: 'absolute',
  zIndex: 1,
  // backgroundColor: 'red',
  
},
})
