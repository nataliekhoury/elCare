import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdminContactUs = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCaptionLoaded, setIsCaptionLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchMessages = async () => {
        try {
          const snapshot = await firebase.firestore().collection('contact_us_messages').get();
          const fetchedMessages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMessages(fetchedMessages);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchMessages();
      setIsLoading(false); // Set loading state to false after data is fetched
    }, 3000);
  }, []);

  const handleCaptionLoad = () => {
    setIsCaptionLoaded(true);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Image source={require('../images/rectangleBackground.png')} style={styles.topImage} />
      <Text style={styles.title}>Contact US</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
        <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
      </TouchableOpacity> */}
      <ScrollView style={{ top: -780, maxHeight: '100%' }}>
        {!isLoading &&
          messages.map((message) => (
            <React.Fragment key={message.id}>
              <View style={styles.postContainer}>
                <Text style={styles.userName}>{message.name}</Text>
                <Text style={styles.info}>{message.email}</Text>
                <Text style={styles.info}>{message.message}</Text>
              </View>
              {isCaptionLoaded && <View style={styles.postLine} />}
            </React.Fragment>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: 360,
    borderRadius: 15,
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:'#943ADA',
    
  },
  backIcon: {
    width: 40,
    height: 40,
    marginStart: 10,
    bottom: 825,
    left: 10,
    resizeMode: 'contain',
    tintColor: '#666666',

  },

  userName: {
    fontWeight: '800',
    fontSize: 16,
    // textAlign: 'flex-start',
    marginTop: 10,

  },
  info: {
    fontWeight: '500',
    fontSize: 16,
    // textAlign: 'flex-start',
    marginTop: 10,
    marginStart: 30,
  },
  email: {
    fontWeight: "bold",
    fontSize: 20,
  },
  
  topImage: {
    left: -5,
    bottom: 400,
    resizeMode: 'contain',
    width: 600,
    height: 800,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    bottom: 790,
    alignSelf: 'center',
  },
});

export default AdminContactUs;
