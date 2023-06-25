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



const ChatScreen = ({ route }) => {
  const { userId } = route.params;
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    if (userId) {
      const unsubscribe = firebase.firestore()
        .collection('userData')
        .where("userId", "==", userId)
        .onSnapshot((querySnapshot) => {
          if (!querySnapshot.empty) {
            setUser(querySnapshot.docs[0].data());
          } else {
            console.log("No such document!");
          }
        });

      return () => unsubscribe();
    }
  }, [userId]);

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
       <View>

{user && <Text  style ={{ fontWeight: '600', fontSize: 20, bottom: 55,left:90}}>{user.userName}</Text>}


</View> 
<TouchableOpacity onPress={() => navigation.navigate ('ChatListScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
        </TouchableOpacity>

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}

      user={{
        _id: firebase.auth()?.currentUser?.email,
        name:firebase.auth()?.currentUser?.displayName,
      }}
      renderBubble={renderBubble}

      renderSend={renderSend}
      placeholder='Type your message here...'
      alwaysShowSend={true}
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
  // bottomComponentContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  icon: {
    left: 100,
    bottom: 30,
  },
  backIcon:{
    left: 35,
    bottom:85,
  }
})