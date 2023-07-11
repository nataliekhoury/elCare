import React, { useLayoutEffect, useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { firebase } from '../../config';
import { IconButton } from 'react-native-paper';

const ChatScreen = ({ route }) => {
  const { userId, currUserId } = route.params;
  const currUserArr = userId && userId.split('@');
  const otherUserId = currUserArr && currUserArr[0];

  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const chatRef = firebase.firestore().collection('chats');

    const query = chatRef
      .where('user._id', 'in', [currUserId, otherUserId])
      .where('user2._id', 'in', [currUserId, otherUserId])
      .orderBy('createdAt', 'desc');

    const unsubscribe = query.onSnapshot((snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }));
      setMessages(updatedMessages);
    });

    return () => {
      unsubscribe();
    };
  }, [currUserId, otherUserId]);

  useEffect(() => {
    if (userId) {
      const unsubscribe = firebase
        .firestore()
        .collection('userData')
        .where('userId', '==', userId)
        .onSnapshot((querySnapshot) => {
          if (!querySnapshot.empty) {
            setUser(querySnapshot.docs[0].data());
          } else {
            console.log('No such document!');
          }
        });

      return () => unsubscribe();
    }
  }, [userId]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const newMessage = messages[0];
    firebase.firestore().collection('chats').add({
      _id: newMessage._id,
      createdAt: newMessage.createdAt,
      text: newMessage.text,
      user: newMessage.user,
      user2: {
        _id: otherUserId,
      },
    });
  }, []);

  function renderBubble(props) {
    return (
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                TextInput: 'black',
                backgroundColor: '#D4D4D4',
                shadowColor: '#000',
                marginLeft: 4,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.12,
                shadowRadius: 10.0,
              },
              right: { 
                backgroundColor: '#9E9E9E',
                // backgroundColor: 'rgba(158, 158, 158, 0.17)',
                shadowColor: '#000',
                marginLeft: 4,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10.0,
                borderRadius: 15,
                marginRight: 0,
              },
            }}
            textStyle={{
              right: {
                color: 'black', 
              },
            }}
          />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton
            icon="send"
            color="#0084FF"
            size={28}
            onPress={() => {
              if (props.text.trim().length > 0) {
                props.onSend({ text: props.text.trim() }, true);
              } else {
                Alert.alert('Message is empty!');
              }
            }}
          />
        </View>
      </Send>
    );
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          {user && <Text style={styles.headerText}>{user.name}</Text>}
        </View>
        
      </View> */}
      <Image
        source={require("../images/rectangleBackground.png")}
        style={{ left: -70, top: -1, resizeMode: "contain" }} />
              <View>

{user && <Text  style ={{ fontWeight: '600', fontSize: 20, bottom: 50,left:90}}>{user.userName}</Text>}


 </View> 
 <TouchableOpacity onPress={() => navigation.navigate ('ChatListScreen')}>
            <Image style = {styles.backIcon} source={require('../images/backIcon.png')}/>
            
        </TouchableOpacity>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: currUserId,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        alwaysShowSend
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#0084FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 10,
  },
    backIcon:{
    left: 25,
    bottom:80,
  }
});
