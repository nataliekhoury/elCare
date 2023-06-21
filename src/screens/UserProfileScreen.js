
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { firebase } from "../../config";
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = ({navigation}) => {
  const [userRole, setUserRole] = useState('');
  // const navigation = useNavigation();

  useEffect(() => {
    // Fetch user role from Firestore
    const fetchUserRole = async () => {
      try {
        const user = firebase.auth().currentUser;
        const userDocument = await firebase.firestore()
          .collection('user')
          .doc(user.uid)
          .get();

        setUserRole(userDocument.data().role);
      } catch (error) {
        console.log('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    // Navigate based on user role
    if (userRole === 'Elderly') {
      navigation.navigate('ElderlyProfileScreen');
    } else if (userRole === 'Caregiver') {
      navigation.navigate('CaregiverProfileScreen');
    }
  }, [userRole]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default UserProfileScreen;