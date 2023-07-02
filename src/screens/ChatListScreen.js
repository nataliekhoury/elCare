import { firebase } from "../../config";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatScreen from "./ChatScreen";

const ChatListScreen = () => {
  const [users, setUsers] = useState([]);
  const [currUserKey, setUserKey] = useState('');

  const [search, setSearch] = useState('');
  const currentUser = firebase.auth().currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    console.log('ChatListScreencurrentUser',currentUser.email)
    // this is the userKey to use in the chatGroupId 
    const currUserArr = currentUser.email && currentUser.email.split("@")
    const currUserId = currUserArr && currUserArr[0];
    console.log('ChatListScreencurrentUser',currUserId);
    setUserKey(currUserId)
    const unsubscribe = firebase.firestore()
      .collection('userData').where("userId", "!=", currentUser.email)
      .onSnapshot((querySnapshot) => {
        const usersData = [];
        querySnapshot.forEach((documentSnapshot) => {
          const userData = documentSnapshot.data();
          usersData.push(userData);
        });
        setUsers(usersData);
      });

    return () => unsubscribe();
  }, []);
  const renderItem = ({ item }) => {
    if (item.userName && !item.userName.toLowerCase().includes(search.toLowerCase())) {
      return null;
    }
  
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('ChatScreen', { userId: item.userId,currUserId:currUserKey})}
      style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
      >
        <Image
          source={{ uri: item.userImage }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={{ marginLeft: 15,marginBottom:10, fontWeight:'bold' }}>{item.userName}</Text>
      </TouchableOpacity>
    )
  };
  return (
    <>
      <Image
        source={require("../images/rectangleBackground.png")}
        style={{ left: -70, top: -1, resizeMode: "contain" }} />
      <Text style ={{ fontWeight: 'bold', fontSize: 25, bottom: 50, alignSelf: 'center'}}>messages </Text>
      <TextInput 
        style={{
          height: 40,
          width:350,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 10,
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.6,
          shadowRadius: 3,
          elevation: 11, // Android elevation
        }}
        
        placeholder=" 🔍Search Contact"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.userId}
      />
    </>
  );
};

export default ChatListScreen;