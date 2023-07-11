import { View, Text, TouchableOpacity, Button, Image, Alert, StyleSheet, SafeAreaView, TextInput, ImageBackground, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../config";
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;



const ContactUs = () => {
  const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async () => {
      try {
        // Save the contact us message in Firestore
        await firebase.firestore().collection('contact_us_messages').add({
          name,
          email,
          message,
        });
  
        // Send email to the specified address
        await sendEmail('elcare2023@gmail.com');
  
        Alert.alert('Success', 'Your message has been sent.');
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        Alert.alert('Error', 'Failed to send message. Please try again later.');
      }
    };
  
    const sendEmail = async (emailAddress) => {
      // Implement the email sending logic here, using the provided email address
      // You can use a third-party email service or client-side email sending solution
    };


  // useEffect(() => {
  //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     Keyboard.dismiss();
  //   });

  //   return () => {
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  
    return (
      
        <SafeAreaView>
      
      <View>
        <Image
          source={require('../images/rectangleBackground.png')}
          style={{ left: -70, top: -50, resizeMode: 'contain' }}
        />
        <Text style={styles.title}>Contact Us</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfileScreen')}>
          <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
        </TouchableOpacity>
      </View>
            <View style = {styles.container}>
            

           
            </View>
            
     {/* <View>
        
    <View style = {{bottom: 1300}}>
      <Text style = {styles.name}>Your Name</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.nameTextBox}
        />
</View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.EmailTextBox}
        />
        <TextInput
          placeholder="Enter your message"
          value={message}
          onChangeText={setMessage}
          multiline
          style={styles.MessageTextBox}
        />
        <View style = {styles.submitButton} >
        <Button title="Submit" color ={'white'} onPress={handleSubmit} />
        </View>
      </View> */}
      <View style={{ top: -650 }}>
          <Text style={{ marginLeft: 50, color: "black", fontSize: 20}}>
            Name
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              height: 50,
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
              elevation: 11,
            }}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            // autoCorrect="none"
          ></TextInput>

<Text style={{ marginLeft: 50, color: "black", fontSize: 20 }}>
            Email
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              height: 50,
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
              elevation: 11,
            }}
            placeholder="Email"
          value={email}
          onChangeText={setEmail}
            // autoCorrect={false}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          ></TextInput>

<Text style={{ marginLeft: 50, color: "black", fontSize: 20}}>
            Enter Your Message
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              height: 150,
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
              paddingTop: 15,
              alignContent: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            placeholder="Message"
          value={message}
          onChangeText={setMessage}
          // multiline

          // autoCorrect={false}
          ></TextInput>
          
          </View>
          <View style = {styles.submitButton} >
        <Button title="Submit" color ={'#6A61CF'} onPress={handleSubmit}/>
        </View>
      
      </SafeAreaView>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        width: 355,
        height: 600,
        bottom: 730,
        borderRadius: 20,
        alignSelf: 'center',
        // backgroundColor: 'white',
        

    },
    backIcon: {
      width: 40,
      height: 40,
      position: 'absolute',
      top: -130,
      left: 20,
      zIndex: 1,
  
    },
    topImage: {
        // left: -5,
        bottom: 50,
        // alignContent: 'center',
        // alignSelf: 'center',
        // resizeMode: 'contain',
        // width: 400,
        height: 1500,
        maxHeight: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // resizeMode: 'cover',
      },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      bottom: 90,
      alignContent: 'center',
      alignSelf: 'center',
    },
    // subTitle: {
    //     // bottom: 150,
    //     fontWeight: 'bold',
    //   fontSize: 19,
    //   color: 'red',
    //   top: 440,
    //   alignSelf: 'center',

    // },
    name: {

    },
    nameTextBox: {
        height: 40, 
        width: 230, 
        borderWidth: 2, 
        // left: 50,
        alignItems: 'center',
        paddingStart: 20,
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#943ADA',
        fontWeight: 'bold',
        fontSize: 15,
        // bottom: 1300,
    
      },
      EmailTextBox: {
        height: 40, 
        width: 235, 
        borderWidth: 2, 
        // left: 50,
        alignItems: 'center',
        paddingStart: 20,
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#943ADA',
        fontWeight: 'bold',
        fontSize: 15,
        bottom: 850,

      },
      MessageTextBox: {
        height: 150, 
        width: 235, 
        borderWidth: 2, 
        // left: 50,
        alignItems: 'center',
        paddingStart: 20,
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#943ADA',
        fontWeight: 'bold',
        fontSize: 15,
        bottom: 800,

      },
      submitButton: {
        top: -600,
        justifyContent: "center",
        alignItem: "center",
        width: 150,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#6A61CF',
      },
 
  });
export default ContactUs;