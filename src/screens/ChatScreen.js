
//photo 
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  keyboardShouldPersistTaps,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";
import{AntDesign} from '@expo/vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React , {useLayoutEffect,useCallback,useEffect,useState}from 'react'
import { useNavigation } from "@react-navigation/native";
import { GiftedChat,Bubble,Send } from "react-native-gifted-chat";
import { firebase } from "../../config";
import { IconButton } from 'react-native-paper';




const ChatScreen = ({}) => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  useLayoutEffect(()=>{
     const unsubscribe=firebase.firestore().collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot =>setMessages(snapshot.docs.map(doc =>({ 
      _id:doc.data()._id,
      createdAt:doc.data().createdAt.toDate(),
      text:doc.data().text,
      user:doc.data().user,
    


    
    }))
    ))
    return unsubscribe;
  },[])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user,
      avatar,
    }=messages[0]
   firebase.firestore().collection('chats').add({
    _id,
    createdAt,
    text,
    user
   })
  }, [])
  
  // useEffect(() => {
  //   const currentUser = firebase.auth().currentUser;
  //   if (currentUser) {
  //     const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);

  //     userDataRef.get().then((querySnapshot) => {
  //       const users = [];
  //       querySnapshot.forEach((doc) => {
  //         const {
  //           userGender,
  //           userName,
  //           userAge,
  //           userLanguage,
  //           userCity,
  //           userHobbies,
  //           userAvai,
  //           userExperience,
  //           userPay,
  //           userId,
  //           userImage,
  //         } = doc.data();

  //         users.push({
  //           id: doc.id,
  //           userName,
  //           userGender,
  //           userAge,
  //           userLanguage,
  //           userCity,
  //           userHobbies,
  //           userAvai,
  //           userPay,
  //           userExperience,
  //           userId,
  //           userImage,
  //         });
  //       });
  //       setUsers(users);
  //     });
  //   }
  // }, []);
  function renderBubble(props) {
  
    
    return (
      <KeyboardAvoidingView> 
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            TextInput:'black',

            backgroundColor: '#FFF',
            shadowColor: "#000",
            marginLeft: 4,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10.0,
            elevation: 11,
          },
          right : {
            backgroundColor:" rgba(158, 158, 158, 0.17)",
            shadowColor: "#000",
            marginLeft: 4,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.10,
            shadowRadius: 10.0,
            elevation: 11,
            TextInput:'black',
          }
        }}
        textStyle={
          {
            right: {
              color:'black',
  
          }}
        }
        
      />
       </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
    );
  }
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
      </View>
    );
  }

  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
  {users.map((item, index) => (
    <Image key={index} style={styles.userImage} source={{ uri: item.userImage }} />
  ))}
</View>
     <GiftedChat
       //  <Image
    //   source={require("../images/chatBackGround.png")}
    //   style={{ left: -80, top: -3, resizeMode: "contain" }}
    // />
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}

      user={{
        _id: firebase.auth()?.currentUser?.email,
        name:firebase.auth()?.currentUser?.displayName,
        // avatar:firebase.firestore().collection("userData").get({userImage}),
      }}
      renderBubble={renderBubble}

      renderSend={renderSend}
      // keyboardShouldPersistTaps
      placeholder='Type your message here...'
      alwaysShowSend="always"
      scrollToBottomComponent={scrollToBottomComponent}
      scrollToBottom

      messagesContainerStyle={{
              backgroundColor: "#fff",
               }}
               messageView={ {backgroundColor: "#fff",}}

             
    />   
     
</TouchableWithoutFeedback>

  )
  
}

export default ChatScreen

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})







// import React, {useState, useEffect, useCallback} from 'react';
// import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
// import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//       {
//         _id: 2,
//         text: 'Hello world',
//         createdAt: new Date(),
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages),
//     );
//   }, []);

//   const renderSend = (props) => {
//     return (
//       <Send {...props}>
//         <View>
//           <MaterialCommunityIcons
//             name="send-circle"
//             style={{marginBottom: 5, marginRight: 5}}
//             size={32}
//             color="#2e64e5"
//           />
//         </View>
//       </Send>
//     );
//   };

//   const renderBubble = (props) => {
//     return (
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           right: {
//             backgroundColor: '#2e64e5',
//           },
//         }}
//         textStyle={{
//           right: {
//             color: '#fff',
//           },
//         }}
//       />
//     );
//   };

//   const scrollToBottomComponent = () => {
//     return(
//       <FontAwesome name='angle-double-down' size={22} color='#333' />
//     );
//   }

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={(messages) => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//       renderBubble={renderBubble}
//       alwaysShowSend
//       renderSend={renderSend}
//       scrollToBottom
//       scrollToBottomComponent={scrollToBottomComponent}
//     />
//   );
// };

// export default ChatScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });