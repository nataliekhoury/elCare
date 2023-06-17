// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList
// } from "react-native";
// import React, { useState, useEffect } from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';

// import { firebase } from "../../config";
// const ChatHistoryListScreen = ({ navigation }) => {
// const [chats, setChats] = useState([]);
// const [users, setUsers] = useState([]);

// useEffect(() => {
// const subscriber = firebase.firestore()
//   .collection('userData')
//   .onSnapshot(querySnapshot => {
//     const users = [];

//     querySnapshot.forEach(documentSnapshot => {
//       users.push({
//         ...documentSnapshot.data(),
//         key: documentSnapshot.userName,
//       });
//     });

//     setUsers(users);
//   });

// return () => subscriber();
// }, []);
// useEffect(() => {
//   const unsubscribe = firebase.firestore()
//     .collection('chats')
//     .onSnapshot(querySnapshot => {
//       const chats = querySnapshot.docs.map(documentSnapshot => {
//         return {
//           _id: documentSnapshot.id,
//           name: '',
//           latestMessage: { text: '' },
//           ...documentSnapshot.data()
//         };
//       });

//       setChats(chats);
//     });

//   return () => unsubscribe();
// }, []);

// return (

//   <FlatList
  
//     data={users}
//     renderItem={({item}) => (
//       <View style={{flexDirection: 'row', padding: 10}}>
//         <Image 
//           source={{uri: item.userImage}} 
//           style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}} 
//         />
//                 <Text>{item.userName}</Text>

//           <TouchableOpacity
//        onPress={() => navigation.navigate('OtherUserProfile')}
//       >
//       <Text>{item.userName}</Text>
//       </TouchableOpacity> 
//        <View style={styles.container}>
//    {chats.map(chats => (
//       <View key={chats._id}>
//         <Text>{chats.name}</Text>
//         {/* <TouchableOpacity
//        onPress={() => navigation.navigate('ChatScreen', { chats })}
//       >
//       </TouchableOpacity> */}
//       </View>
//     ))}
//   </View>
//       </View>
//     )}
//   />
// );
// };

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   padding: 20,
// },
// });

// export default ChatHistoryListScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";

const ChatHistoryListScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('userData')
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

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
        >
            <Image
        source={{ uri: item.userImage }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <Text style={{ marginLeft: 10 }}>{item.userName}</Text>
         
        </TouchableOpacity>
      {/* <Image
        source={{ uri: item.userImage }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <Text style={{ marginLeft: 10 }}>{item.userName}</Text> */}
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.userName}
    />
  );
};
export default ChatHistoryListScreen

// import React, { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { firebase } from "../../config";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const ChatHistoryListScreen = () => {
//   const navigation = useNavigation();

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser) {
//       const userDataRef = firebase.firestore().collection("userData");

//       userDataRef.get().then((querySnapshot) => {
//         const users = [];
//         querySnapshot.forEach((doc) => {
//           const {
//             userGender,
//             userName,
//             userAge,
//             userLanguage,
//             userCity,
//             userHobbies,
//             userAvai,
//             userExperience,
//             userPay,
//             userId,
//             userImage,
//           } = doc.data();

//           users.push({
//             id: doc.id,
//             userName,
//             userGender,
//             userAge,
//             userLanguage,
//             userCity,
//             userHobbies,
//             userAvai,
//             userPay,
//             userExperience,
//             userId,
//             userImage,
//           });
//         });
//         setUsers(users);
//       });
//     }
//   }, []);

//   const navigateToOtherUserProfile = (userData) => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser && currentUser.email !== userData.userId) {
//       navigation.navigate("OtherUserProfile", { userData });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {users.map((user) => (
//         <TouchableOpacity
//           key={user.id}
//           onPress={() => navigateToOtherUserProfile(user)}
//         >
//           <Text>{user.userName}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default ChatHistoryListScreen;


// // In your React Native component
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { firebase } from "../../config";


// const ChatHistoryListScreen = ({ userId }) => {
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     const getUserChats = async (userId) => {
//       const snapshot = await firebase.firestore().collection('chats')
//         .where('senderId', '==', userId)
//         .orderBy('timestamp', 'desc')
//         .get();
//       const chats = snapshot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           receiverId: doc.data().receiverId
//         };
//       });
//       return chats;
//     };

//     const fetchUserChats = async () => {
//       const userChats = await getUserChats(userId);
//       setChats(userChats);
//     };
//     fetchUserChats();
//   }, [userId]);

//   return (
//     <View>
//       <FlatList
//         data={chats}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text>{item.receiverId}</Text>
//         )}
//       />
//     </View>
//   );
// };

// export default ChatHistoryListScreen;
