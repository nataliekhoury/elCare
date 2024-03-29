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
