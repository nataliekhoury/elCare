// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList } from 'react-native';
// import { firebase } from "../../config";

// const OtherUserProfileScreen = ({ route }) => {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userRef = firebase.firestore().collection('userData');
//         const snapshot = await userRef.get();

//         const users = snapshot.docs.map(doc => doc.data());
//         setUserList(users);
//       } catch (error) {
//         console.log('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={userList}
//         keyExtractor={(item) => item.userName}
//         renderItem={({ item }) => (
//           <View style={styles.container}>
//             <Image source={{ uri: item.userImage }} style={styles.profileImage} />
//             <Text style={styles.userName}>{item.userName}</Text>
//             <Text style={styles.userInfo}>Gender: {item.userGender}</Text>
//             <Text style={styles.userInfo}>Age: {item.userAge}</Text>
//             <Text style={styles.userInfo}>Language: {item.userLanguage}</Text>
//             <Text style={styles.userInfo}>City: {item.userCity}</Text>
//             <Text style={styles.userInfo}>Hobbies: {item.userHobbies}</Text>
//             <Text style={styles.userInfo}>Availability: {item.userAvai}</Text>
//             <Text style={styles.userInfo}>Payment Method: {item.userPay}</Text>
//             <Text style={styles.userInfo}>Experience: {item.userExperience} years</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default OtherUserProfileScreen;

// const styles = {
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     marginBottom: 16,
//   },
//   profileImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     marginBottom: 16,
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   userInfo: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
// };


// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { firebase } from "../../config";

// const OtherUserProfileScreen = ({ route }) => {
//   const [userList, setUserList] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userRef = firebase.firestore().collection('userData');
//         const snapshot = await userRef.get();

//         const users = snapshot.docs.map(doc => doc.data());
//         setUserList(users);
//       } catch (error) {
//         console.log('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const navigateToChatScreen = (userName) => {
//     navigation.navigate('ChatScreen', { userName });
//   };

//   return (
//     <View>
//       <FlatList
//         data={userList}
//         keyExtractor={(item) => item.userName}
//         renderItem={({ item }) => (
//           <View style={styles.container}>
//             <Image source={{ uri: item.userImage }} style={styles.profileImage} />
//             <Text style={styles.userName}>{item.userName}</Text>
//             <Text style={styles.userInfo}>Gender: {item.userGender}</Text>
//             <Text style={styles.userInfo}>Age: {item.userAge}</Text>
//             <Text style={styles.userInfo}>Language: {item.userLanguage}</Text>
//             <Text style={styles.userInfo}>City: {item.userCity}</Text>
//             <Text style={styles.userInfo}>Hobbies: {item.userHobbies}</Text>
//             <Text style={styles.userInfo}>Availability: {item.userAvai}</Text>
//             <Text style={styles.userInfo}>Payment Method: {item.userPay}</Text>
//             <Text style={styles.userInfo}>Experience: {item.userExperience} years</Text>

//             <TouchableOpacity style={styles.button} onPress={navigateToChatScreen}>
//         <Text style={styles.buttonText}>Message</Text>
//       </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default OtherUserProfileScreen;

// const styles = {
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     marginBottom: 16,
//   },
//   profileImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     marginBottom: 16,
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   userInfo: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   button: {
//     backgroundColor: '#42a5f5',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// };

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config';

const OtherUserProfileScreen = ({ route }) => {
  const [userList, setUserList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = firebase.firestore().collection('userData');
        const snapshot = await userRef.get();

        const users = snapshot.docs.map(doc => doc.data());
        setUserList(users);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const navigateToChatScreen = (chats) => {
    navigation.navigate('ChatScreen', { chats });
  };

  return (
    <View>
      <FlatList
        data={userList}
        keyExtractor={item => item.userName}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={{ uri: item.userImage }} style={styles.profileImage} />
            <Text style={styles.userName}>{item.userName}</Text>
            <Text style={styles.userInfo}>Gender: {item.userGender}</Text>
            <Text style={styles.userInfo}>Age: {item.userAge}</Text>
            <Text style={styles.userInfo}>Language: {item.userLanguage}</Text>
            <Text style={styles.userInfo}>City: {item.userCity}</Text>
            <Text style={styles.userInfo}>Hobbies: {item.userHobbies}</Text>
            <Text style={styles.userInfo}>Availability: {item.userAvai}</Text>
            <Text style={styles.userInfo}>Payment Method: {item.userPay}</Text>
            <Text style={styles.userInfo}>Experience: {item.userExperience} years</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigateToChatScreen(item)}>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default OtherUserProfileScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
};