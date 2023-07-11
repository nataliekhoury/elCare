import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../config";
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

const EventInfoScreen = ({route}) => {
  const navigation = useNavigation();
  const {event} = route.params; 
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const eventsRef = firebase.firestore().collection('events');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await eventsRef.get();
        if (!querySnapshot.empty) {
          const fetchedEvents = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return { ...data, id: doc.id };
          });
          setEvents(fetchedEvents);
        } else {
          Alert.alert('No events found');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        Alert.alert('Error fetching events');
        navigation.goBack();
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading events...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView>
      <View>
        <Image source={{ uri: event.imageUrl }} style={styles.imageDesign} />
  
        <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
          <Image style={styles.backIcon} source={require('../images/backIcon.png')} />
        </TouchableOpacity>
        <Image style={styles.swipeIcon} source={require('../images/swipeIcon.png')} />

  
        <View>
       
            <ScrollView style = {{top:-50, minHeight: '100%', height: 400}}>
              <Text style={styles.title}>{event.title}</Text>

              <View style = {{top: -26}}>
                <Image style={styles.calender} source={require('../images/CalenderVector.png')} />
                <Text style={styles.calenderInfo}>{event.date}</Text>
             </View>
  
              <View style={{ top:-50, right: -250}}>
                <Image style={styles.clock} source={require('../images/ClockVector.png')} />
                <Text style={styles.clockInfo}>{event.time}</Text>
              </View>
 
  
  <View style = {{top:-80}}>
              <Text style={styles.des}>Description</Text>
              <Text style={styles.desInfo}>{event.description}</Text>
  </View>
            
  
              <View style = {{top: -80}}>
                <Text style={styles.loc}>Location</Text>
                <Text style={styles.locInfo}>{event.location}</Text>
              </View>
            </ScrollView>
          
        </View>
      </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
  
};

const styles = StyleSheet.create({
  imageDesign: {
    width: 450,
    height: 310,
    borderRadius: 50,
    alignSelf: 'center',
    top: -60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 30,
    paddingStart: 20,
    paddingBottom: 20,
  },
  calender: {
    width: 17,
    height: 15,
    marginStart: 30,
    top: 60,
  },
  calenderInfo: {
    marginStart: 70,
    color: '#9E9E9E',
    fontSize: 18,
    top: 42,
  },
  clock: {
    width: 18,
    height: 18,
    top: 45,
  },
  clockInfo: {
    right: '-10%',
    top: 27,
    bottom: '-135%',
    color: '#9E9E9E',
    fontSize: 18,
  },
  des: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 70,
    top: 30,
    paddingStart: 20,
  },
  desInfo: {
    fontSize: 18,
    top: '20%',
    color: '#9E9E9E',
    top: 50,
    marginStart: 30,
  },
  loc: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 80,
    paddingStart: 20,
  },
  locInfo: {
    fontSize: 18,
    top: '20%',
    color: '#9E9E9E',
    marginStart: 30,
  },
  backIcon: {
    right: -10,
    bottom: 280,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
  swipeIcon: {
    alignSelf: 'center',
    top: -60,
  }
});

export default EventInfoScreen;

