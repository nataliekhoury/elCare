
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { firebase } from "../../config";
// import { useNavigation } from '@react-navigation/native';

// const UserProfileScreen = ({navigation}) => {
//   const [userRole, setUserRole] = useState('');
//   // const navigation = useNavigation();

//   useEffect(() => {
//     // Fetch user role from Firestore
//     const fetchUserRole = async () => {
//       try {
//         const user = firebase.auth().currentUser;
//         const userDocument = await firebase.firestore()
//           .collection('user')
//           .doc(user.uid)
//           .get();

//         setUserRole(userDocument.data().role);
//       } catch (error) {
//         console.log('Error fetching user role:', error);
//       }
//     };

//     fetchUserRole();
//   }, []);

//   useEffect(() => {
//     // Navigate based on user role
//     if (userRole === 'Elderly') {
//       navigation.navigate('ElderlyProfileScreen');
//     } else if (userRole === 'Caregiver') {
//       navigation.navigate('CaregiverProfileScreen');
//     }
//   }, [userRole]);

//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// };

// export default UserProfileScreen;




import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { firebase } from "../../config";
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = ({navigation}) => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
  // feetching the role user 
    const fetchUserRole = async () => {
      try {
        const user = firebase.auth().currentUser;

        if (user) {
          const userDocument = await firebase.firestore()
            .collection('user')
            .doc(user.uid)
            .get();
      

          if (userDocument.exists) { // check if document exists
            const data = userDocument.data();
            if (data) { // check if data is not undefined
              setUserRole(data.role);
            }
          } else {
            console.log("No such document!");
          }
        } else {
          console.log('No user is signed in');
        }
      } catch (error) {
        console.log('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    // Navigate based on user role
    if (userRole === 'Elderly') {
      navigation.replace('ElderlyProfileScreen');
    } else if (userRole === 'Caregiver') {
      navigation.replace('CaregiverProfileScreen');
    }
  }, [userRole]);

 
};

export default UserProfileScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { firebase } from "../../config";
// import { useNavigation } from '@react-navigation/native';

// const UserProfileScreen = () => {
//   const navigation = useNavigation(); // Use the useNavigation hook to access the navigation object

//   const [userRole, setUserRole] = useState('');

//   useEffect(() => {
//     // Fetch the user role
//     const fetchUserRole = async () => {
//       try {
//         const user = firebase.auth().currentUser;

//         if (user) {
//           const userDocument = await firebase.firestore()
//             .collection('user')
//             .doc(user.uid)
//             .get();

//           if (userDocument.exists) {
//             const data = userDocument.data();
//             if (data) {
//               setUserRole(data.role);
//             }
//           } else {
//             console.log("No such document!");
//           }
//         } else {
//           console.log('No user is signed in');
//         }
//       } catch (error) {
//         console.log('Error fetching user role:', error);
//       }
//     };

//     fetchUserRole();
//   }, []);

//   useEffect(() => {
//     // Navigate based on user role
//     if (userRole === 'Elderly') {
//       navigation.replace('ElderlyProfileScreen');
//     } else if (userRole === 'Caregiver') {
//       navigation.replace('CaregiverProfileScreen');
//     } else {
//       navigation.replace('DetailScreen');
//     }
//   }, [userRole]);

//   return (
//     <View>
//       <Text>User Profile Screen</Text>
//     </View>
//   );
// };

// export default UserProfileScreen;
