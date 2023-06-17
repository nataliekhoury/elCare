
// //photo 
// import {
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   Alert,
//   TextInput,
//   keyboardShouldPersistTaps,
//   Keyboard,
//   TouchableWithoutFeedback,
//   KeyboardAvoidingView
// } from "react-native";
// import{AntDesign} from '@expo/vector-icons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import React , {useLayoutEffect,useCallback,useEffect,useState}from 'react'
// import { useNavigation } from "@react-navigation/native";
// import { GiftedChat,Bubble,Send } from "react-native-gifted-chat";
// import { firebase } from "../../config";
// import { IconButton } from 'react-native-paper';




// const ChatScreen = ({}) => {
//   const navigation = useNavigation();

//   const [messages, setMessages] = useState([]);
//   useLayoutEffect(()=>{
//      const unsubscribe=firebase.firestore().collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot =>setMessages(snapshot.docs.map(doc =>({ 
//       _id:doc.data()._id,
//       createdAt:doc.data().createdAt.toDate(),
//       text:doc.data().text,
//       user:doc.data().user,
    


    
//     }))
//     ))
//     return unsubscribe;
//   },[])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//     const {
//       _id,
//       createdAt,
//       text,
//       user,
//       avatar,
//     }=messages[0]
//    firebase.firestore().collection('chats').add({
//     _id,
//     createdAt,
//     text,
//     user
//    })
//   }, [])
  
//   // useEffect(() => {
//   //   const currentUser = firebase.auth().currentUser;
//   //   if (currentUser) {
//   //     const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);

//   //     userDataRef.get().then((querySnapshot) => {
//   //       const users = [];
//   //       querySnapshot.forEach((doc) => {
//   //         const {
//   //           userGender,
//   //           userName,
//   //           userAge,
//   //           userLanguage,
//   //           userCity,
//   //           userHobbies,
//   //           userAvai,
//   //           userExperience,
//   //           userPay,
//   //           userId,
//   //           userImage,
//   //         } = doc.data();

//   //         users.push({
//   //           id: doc.id,
//   //           userName,
//   //           userGender,
//   //           userAge,
//   //           userLanguage,
//   //           userCity,
//   //           userHobbies,
//   //           userAvai,
//   //           userPay,
//   //           userExperience,
//   //           userId,
//   //           userImage,
//   //         });
//   //       });
//   //       setUsers(users);
//   //     });
//   //   }
//   // }, []);
//   function renderBubble(props) {
  
    
//     return (
//       <KeyboardAvoidingView> 
//       <TouchableWithoutFeedback onPress={dismissKeyboard}>
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           left: {
//             TextInput:'black',

//             backgroundColor: '#FFF',
//             shadowColor: "#000",
//             marginLeft: 4,
//             shadowOffset: {
//               width: 0,
//               height: 10,
//             },
//             shadowOpacity: 0.12,
//             shadowRadius: 10.0,
//             elevation: 11,
//           },
//           right : {
//             backgroundColor:" rgba(158, 158, 158, 0.17)",
//             shadowColor: "#000",
//             marginLeft: 4,
//             shadowOffset: {
//               width: 0,
//               height: 10,
//             },
//             shadowOpacity: 0.10,
//             shadowRadius: 10.0,
//             elevation: 11,
//             TextInput:'black',
//           }
//         }}
//         textStyle={
//           {
//             right: {
//               color:'black',
  
//           }}
//         }
        
//       />
//        </TouchableWithoutFeedback>
//        </KeyboardAvoidingView>
//     );
//   }
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
//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };
//   function scrollToBottomComponent() {
//     return (
//       <View style={styles.bottomComponentContainer}>
//         <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
//       </View>
//     );
//   }

//   return (
    
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View>
//   {users.map((item, index) => (
//     <Image key={index} style={styles.userImage} source={{ uri: item.userImage }} />
//   ))}
// </View>
//      <GiftedChat
//        //  <Image
//     //   source={require("../images/chatBackGround.png")}
//     //   style={{ left: -80, top: -3, resizeMode: "contain" }}
//     // />
//       messages={messages}
//       showAvatarForEveryMessage={true}
//       onSend={messages => onSend(messages)}

//       user={{
//         _id: firebase.auth()?.currentUser?.email,
//         name:firebase.auth()?.currentUser?.displayName,
//         // avatar:firebase.firestore().collection("userData").get({userImage}),
//       }}
//       renderBubble={renderBubble}

//       renderSend={renderSend}
//       // keyboardShouldPersistTaps
//       placeholder='Type your message here...'
//       alwaysShowSend="always"
//       scrollToBottomComponent={scrollToBottomComponent}
//       scrollToBottom

//       messagesContainerStyle={{
//               backgroundColor: "#fff",
//                }}
//                messageView={ {backgroundColor: "#fff",}}

             
//     />   
     
// </TouchableWithoutFeedback>

//   )
  
// }

// export default ChatScreen

// const styles = StyleSheet.create({
//   sendingContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bottomComponentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })







// // import React, {useState, useEffect, useCallback} from 'react';
// // import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
// // import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';

// // const ChatScreen = () => {
// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     setMessages([
// //       {
// //         _id: 1,
// //         text: 'Hello developer',
// //         createdAt: new Date(),
// //         user: {
// //           _id: 2,
// //           name: 'React Native',
// //           avatar: 'https://placeimg.com/140/140/any',
// //         },
// //       },
// //       {
// //         _id: 2,
// //         text: 'Hello world',
// //         createdAt: new Date(),
// //         user: {
// //           _id: 1,
// //           name: 'React Native',
// //           avatar: 'https://placeimg.com/140/140/any',
// //         },
// //       },
// //     ]);
// //   }, []);

// //   const onSend = useCallback((messages = []) => {
// //     setMessages((previousMessages) =>
// //       GiftedChat.append(previousMessages, messages),
// //     );
// //   }, []);

// //   const renderSend = (props) => {
// //     return (
// //       <Send {...props}>
// //         <View>
// //           <MaterialCommunityIcons
// //             name="send-circle"
// //             style={{marginBottom: 5, marginRight: 5}}
// //             size={32}
// //             color="#2e64e5"
// //           />
// //         </View>
// //       </Send>
// //     );
// //   };

// //   const renderBubble = (props) => {
// //     return (
// //       <Bubble
// //         {...props}
// //         wrapperStyle={{
// //           right: {
// //             backgroundColor: '#2e64e5',
// //           },
// //         }}
// //         textStyle={{
// //           right: {
// //             color: '#fff',
// //           },
// //         }}
// //       />
// //     );
// //   };

// //   const scrollToBottomComponent = () => {
// //     return(
// //       <FontAwesome name='angle-double-down' size={22} color='#333' />
// //     );
// //   }

// //   return (
// //     <GiftedChat
// //       messages={messages}
// //       onSend={(messages) => onSend(messages)}
// //       user={{
// //         _id: 1,
// //       }}
// //       renderBubble={renderBubble}
// //       alwaysShowSend
// //       renderSend={renderSend}
// //       scrollToBottom
// //       scrollToBottomComponent={scrollToBottomComponent}
// //     />
// //   );
// // };

// // export default ChatScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TextInput, Button } from 'react-native';
// import { firebase } from '../../config';




// // Create a new chat document
// const createChatDocument = async (senderId, receiverId) => {
//   const chatRef = firebase.firestore().collection('chats').doc();
//   await chatRef.set({
//     senderId: senderId,
//     receiverId: receiverId,
//     messages: []
//   });
//   return chatRef.id;
// };

// // Add a new message to the chat document
// const addMessageToChat = async (chatId, senderId, receiverId, message) => {
//   const chatRef = firebase.firestore().collection('chats').doc(chatId);
//   const newMessage = {
//     senderId: senderId,
//     receiverId: receiverId,
//     message: message,
//     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   };
//   await chatRef.update({
//     messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
//   });
// };


// // Retrieve the list of chats for the currently logged-in user
// const getUserChats = async (userId) => {
//   const snapshot = await firebase.firestore().collection('chats')
//     .where('senderId', '==', userId)
//     .orderBy('timestamp', 'desc')
//     .get();
//   const chats = snapshot.docs.map((doc) => {
//     return {
//       id: doc.id,
//       receiverId: doc.data().receiverId
//     };
//   });
//   return chats;
// };

// const ChatScreen = ({ chatId }) => {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');

//   useEffect(() => {
//     const chatRef = firebase.firestore().collection('chats').doc(chatId);
//     const unsubscribe = chatRef.onSnapshot((snapshot) => {
//       const data = snapshot.data();
//       if (data) {
//         setMessages(data.messages);
//       }
//     });
//     return () => unsubscribe();
//   }, [chatId]);

//   const sendChatMessage = async (message, senderId, receiverId) => {
//     await addMessageToChat(chatId, senderId, receiverId, message);
//   };

//   const handleSendMessage = async () => {
//     const senderId = firebase.auth().currentUser.uid;
//     const receiverId = 'RECEIVER_USER_ID'; // Replace with the actual receiver user ID
//     if (senderId && receiverId && messageInput.trim() !== '') {
//       await sendChatMessage(messageInput, senderId, receiverId);
//       setMessageInput('');
//     }
//   };

  
//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => <Text>{item.message}</Text>}
//       />
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TextInput
//           style={{ flex: 1, bottom: 300 }}
//           value={messageInput}
//           onChangeText={setMessageInput}
//           placeholder="Type a message..."
//         />
//         <Button title="Send" onPress={handleSendMessage} />
//       </View>
//     </View>
//   );
// };

// export default ChatScreen;


// import {
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   Alert,
//   TextInput,
//   Keyboard,
//   TouchableWithoutFeedback,
//   KeyboardAvoidingView
// } from "react-native";
// import { AntDesign } from '@expo/vector-icons';
// import React, { useLayoutEffect, useCallback, useState } from 'react';
// import { useNavigation } from "@react-navigation/native";
// import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
// import { firebase } from "../../config";
// import { IconButton } from 'react-native-paper';

// const ChatScreen = ({}) => {
//   const navigation = useNavigation();
//   const [messages, setMessages] = useState([]);

//   useLayoutEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection('chats')
//       .where('users', 'array-contains', firebase.auth()?.currentUser?.email)
//       .orderBy('createdAt', 'desc')
//       .orderBy('__name__', 'desc')
//       .onSnapshot(snapshot =>
//         setMessages(
//           snapshot.docs.map(doc => ({
//             _id: doc.id,
//             createdAt: doc.data().createdAt.toDate(),
//             text: doc.data().text,
//             user: doc.data().user
//           }))
//         )
//       );

//     return unsubscribe;
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     const {
//       _id,
//       createdAt,
//       text,
//       user
//     } = messages[0];

//     firebase.firestore().collection('chats').add({
//       users: [firebase.auth()?.currentUser?.email],
//       _id,
//       createdAt,
//       text,
//       user
//     });
//   }, []);

//   function renderBubble(props) {
//     return (
//       <KeyboardAvoidingView>
//         <TouchableWithoutFeedback onPress={dismissKeyboard}>
//           <Bubble
//             {...props}
//             wrapperStyle={{
//               left: {
//                 TextInput: 'black',
//                 backgroundColor: '#FFF',
//                 shadowColor: "#000",
//                 marginLeft: 4,
//                 shadowOffset: {
//                   width: 0,
//                   height: 10,
//                 },
//                 shadowOpacity: 0.12,
//                 shadowRadius: 10.0,
//                 elevation: 11,
//               },
//               right: {
//                 backgroundColor: "rgba(158, 158, 158, 0.17)",
//                 shadowColor: "#000",
//                 marginLeft: 4,
//                 shadowOffset: {
//                   width: 0,
//                   height: 10,
//                 },
//                 shadowOpacity: 0.10,
//                 shadowRadius: 10.0,
//                 elevation: 11,
//                 TextInput: 'black',
//               }
//             }}
//             textStyle={
//               {
//                 right: {
//                   color: 'black',
//                 }
//               }
//             }
//           />
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     );
//   }

//   function renderSend(props) {
//     return (
//       <Send {...props}>
//         <View style={styles.sendingContainer}>
//           <IconButton icon='send-circle' size={32} color='#6646ee' />
//         </View>
//       </Send>
//     );
//   }

//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };

//   function scrollToBottomComponent() {
//     return (
//       <View style={styles.bottomComponentContainer}>
//         <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
//       </View>
//     );
//   }

//   return (
//     <>
//       <Image
//         source={require("../images/rectangleBackground.png")}
//         style={{ left: -70, top: -1, resizeMode: "contain" }}
//       />
//       <Text style={styles.bigInfoStyle}>chat</Text>

//       <TouchableOpacity onPress={() => navigation.navigate('ChatHistoryListScreen')}>
//         <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//       </TouchableOpacity>

//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         <GiftedChat
//           messages={messages}
//           showAvatarForEveryMessage={true}
//           onSend={messages => onSend(messages)}
//           user={{
//             _id: firebase.auth()?.currentUser?.email,
//             name: firebase.auth()?.currentUser?.displayName,
//             // avatar:firebase.storage().ref(),
//           }}
//           renderBubble={renderBubble}
//           renderSend={renderSend}
//           placeholder='Type your message here...'
//           alwaysShowSend
//           scrollToBottomComponent={scrollToBottomComponent}
//           scrollToBottom
//           messagesContainerStyle={{
//             backgroundColor: "#fff",
//           }}
//           messageView={{ backgroundColor: "#fff", }}
//         />
//       </TouchableWithoutFeedback>
//     </>
//   );
// }

// export default ChatScreen;

// const styles = StyleSheet.create({
//   sendingContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bottomComponentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   icon: {
//     left: 100,
//     bottom: 30,
//   },
//   bigInfoStyle: {
//     fontSize: 30,
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//     marginTop: -50,
//     right: 10,
//   },
//   backIcon: {
//     right: -15,
//     bottom: 50,
//   },
// });

// import {
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   Alert,
//   TextInput,
//   keyboardShouldPersistTaps,
//   Keyboard,
//   TouchableWithoutFeedback,
//   KeyboardAvoidingView
// } from "react-native";
// import{AntDesign} from '@expo/vector-icons'
// import React , {useLayoutEffect,useCallback,useEffect,useState}from 'react'
// import { useNavigation } from "@react-navigation/native";
// import { GiftedChat,Bubble,Send } from "react-native-gifted-chat";
// import { firebase } from "../../config";
// import { IconButton } from 'react-native-paper';




// const ChatScreen = ({}) => {
//   const navigation = useNavigation();

//   const [messages, setMessages] = useState([]);
//   useLayoutEffect(()=>{
//      const unsubscribe=firebase.firestore().collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot =>setMessages(snapshot.docs.map(doc =>({ 
//       // _id:doc.data()._id,
//       createdAt:doc.data().createdAt.toDate(),
//       text:doc.data().text,
//       user:doc.data().user,
//     }))
//     ))
//     return unsubscribe;9
//   },[])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//     const {
//       _id,
//       createdAt,
//       text,
//       user
//     }=messages[0]
//    firebase.firestore().collection('chats').add({
//     _id,
//     createdAt,
//     text,
//     user
//    })
//   }, [])

//   function renderBubble(props) {


//     return (
//       <KeyboardAvoidingView> 
//       <TouchableWithoutFeedback onPress={dismissKeyboard}>
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           left: {
//             TextInput:'black',

//             backgroundColor: '#FFF',
//             shadowColor: "#000",
//             marginLeft: 4,
//             shadowOffset: {
//               width: 0,
//               height: 10,
//             },
//             shadowOpacity: 0.12,
//             shadowRadius: 10.0,
//             elevation: 11,
//           },
//           right : {
//             backgroundColor:" rgba(158, 158, 158, 0.17)",
//             shadowColor: "#000",
//             marginLeft: 4,
//             shadowOffset: {
//               width: 0,
//               height: 10,
//             },
//             shadowOpacity: 0.10,
//             shadowRadius: 10.0,
//             elevation: 11,
//             TextInput:'black',
//           }
//         }}
//         textStyle={
//           {
//             right: {
//               color:'black',

//           }}
//         }

//       />
//        </TouchableWithoutFeedback>
//        </KeyboardAvoidingView>
//     );
//   }
//   function renderSend(props) {


//     return (
//       <Send {...props}>

//         <View style={styles.sendingContainer}>
//           <IconButton icon='send-circle' size={32} color='#6646ee' />
//         </View>
//       </Send>
//     );

//   }
//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };
//   function scrollToBottomComponent() {
//     return (
//       <View style={styles.bottomComponentContainer}>
//         <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
//       </View>
//     );
//   }

//   return (
//     <>
//         <Image
//                 source={require("../images/rectangleBackground.png")}
//                 style={{ left: -70, top: -1, resizeMode: "contain" }} />
//                             <Text style={styles.bigInfoStyle}>chat</Text>

//         <TouchableOpacity onPress={() => navigation.navigate('ChatHistoryListScreen')}>
//           <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
//         </TouchableOpacity>

//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//      <GiftedChat
 
//       messages={messages}
//       showAvatarForEveryMessage={true}
//       onSend={messages => onSend(messages)}

//       user={{
//         _id: firebase.auth()?.currentUser?.email,
//         name:firebase.auth()?.currentUser?.displayName,
//       //  avatar:firebase.storage().ref(),
//       }}
//       renderBubble={renderBubble}

//       renderSend={renderSend}
//       placeholder='Type your message here...'
//       alwaysShowSend="always"
//       scrollToBottomComponent={scrollToBottomComponent}
//       scrollToBottom

//       messagesContainerStyle={{
//               backgroundColor: "#fff",
//                }}
//                messageView={ {backgroundColor: "#fff",}}


//     />   

// </TouchableWithoutFeedback>
// </>
//   )

// }

// export default ChatScreen

// const styles = StyleSheet.create({
//   sendingContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bottomComponentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   icon: {
//     left: 100,
//     bottom: 30,
//   },
//     bigInfoStyle: {
        
//     fontSize:30,
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//     marginTop: -50,
//     right: 10,
//   },
//   backIcon: {
//     right: -15,
//     bottom: 50,
//   },

// })








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
      user
    }=messages[0]
   firebase.firestore().collection('chats').add({
    _id,
    createdAt,
    text,
    user
   })
  }, [])


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
  function renderSend(props) {


    return (
      <Send {...props}>

        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );

  }
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
    <>
       <Image
                source={require("../images/rectangleBackground.png")}
                style={{ left: -70, top: -1, resizeMode: "contain" }} />
{/* <Icon name="arrow-left" size={26} iconStyle={styles.yourStyle} color="#27AE60" /> */}

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
      //  avatar:firebase.storage().ref(),
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
</>
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
  },
  icon: {
    left: 100,
    bottom: 30,
  },
})