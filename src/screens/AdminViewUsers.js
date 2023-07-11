import { firebase } from "../../config";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const currentUser = firebase.auth().currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    const currUserArr = currentUser.email && currentUser.email.split("@");
    const currUserId = currUserArr && currUserArr[0];
    const unsubscribe = firebase.firestore()
      .collection('userData')
      .where("userId", "!=", currentUser.email)
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

  const navigateToUserProfile = (user) => {
    navigation.navigate('OtherUserProfileScreen', { user });
  };

  return (
    <>
    
      <Image
        source={require("../images/rectangleBackground.png")}
        style={{ left: -70, top: -1, resizeMode: "contain" }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 25, bottom: 50, alignSelf: 'center' }}>All Users</Text>
      <TextInput
        style={{
          height: 40,
          width: 350,
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
        }}
        placeholder="🔍 Search User"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      <ScrollView>
      {users.map((user) => (
        user.userName && user.userName.toLowerCase().includes(search.toLowerCase()) && (
          <TouchableOpacity
            key={user.userId}
            onPress={() => navigateToUserProfile(user)}
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
          >
            <Image
              source={{ uri: user.userImage }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text style={{ marginLeft: 15, marginBottom: 10, fontWeight: 'bold' }}>{user.userName}</Text>
          </TouchableOpacity>
        )
      ))}
      </ScrollView>
    </>
  );
};

export default AdminViewUsers;
