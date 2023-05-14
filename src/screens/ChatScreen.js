
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

  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerleft:()=>(
  //       <View style={{marginLeft:20}}>

  //          {/* <Avatar rounded 
  //            source ={{uri:auth?.currentUser?.photoURL}}      
                   
                   
                   
  //                  /> */}
            
  

  //       </View>
  //     )s
  //   })
  // })

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
