import { View, Text,StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";



const AdminEditEvent = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleTextChange = (fieldName, inputText) => {
    switch (fieldName) {
      case 'title':
        setTitle(inputText);
        break;
      case 'description':
        setDescription(inputText);
        break;
      case 'date':
        setDate(inputText);
        break;
      case 'time':
        setTime(inputText);
        break;
      case 'location':
        setLocation(inputText);
        break;
      case 'imageUrl':
        setImageUrl(inputText);
        break;
      default:
        break;
    }
  };

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



  return (

    <View style = {{display: 'flex'}}>
     <SafeAreaView> 
      <View style={{position: 'relative'}}>
     <TouchableOpacity onPress={() => navigation.navigate ('EventScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
        </TouchableOpacity>
    <Image source={require('../images/Ellipse.png')} 
            style = {styles.topImage}/>
</View>
      <Text style ={styles.title}>Edit Desired Event Field: </Text>
      <View  >
        <ScrollView style = {{margin: -370}} > 
      <View >

        <Text style={styles.fields}>Title: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('title', text)}
          value={title}
        />

        <Text style={styles.fields}>Description: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('description', text)}
          value={description}
        />

        <Text style={styles.fields}>Date: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('date', text)}
          value={date}
          keyboardType='numeric'
        />

        <Text style={styles.fields}>Time: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('time', text)}
          value={time}
          keyboardType='numeric'
        />

        <Text style={styles.fields}>Location: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('location', text)}
          value={location}
        />

        <Text style={styles.fields}>Image URL: </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => handleTextChange('imageUrl', text)}
          value={imageUrl}
        />
      <View style = {styles.saveButton}>
      <Button title="Save" onPress={handleSave} />
      </View>
     </View> 
     </ScrollView>
      </View>
     
    </SafeAreaView>  
    
    </View>   
  )
}

export default AdminEditEvent


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
