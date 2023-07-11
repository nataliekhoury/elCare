import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";


const renderItems = (filteredLabels, handlePress) => {
  return filteredLabels.map((item, index) => (
    <TouchableOpacity key={index} onPress={() => handlePress(item)}>
      <Text style={styles.designText}>{item}</Text>
    </TouchableOpacity>
  ));
};

const OptionItem = ({ setSelectedLabel }) => {
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const collectionRef = db.collection('events');
      try {
        const querySnapshot = await collectionRef.get();
        const retrievedData = querySnapshot.docs.map((doc) => doc.data());
        const allLabels = ['All Events', ...retrievedData.map((lab) => lab.title)]; // Include "All Events" option
        const uniqueLabels = [...new Set(allLabels)];
        setFilteredLabels(uniqueLabels);
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };
    fetchData();
  }, []);

  const handlePress = (label) => {
    setSelectedLabel(label);
  };

  return (
    <View>
      <ScrollView horizontal={true}> 
        {renderItems(filteredLabels, handlePress)}
      </ScrollView>
    </View>
  );
};

const DeleteButton = ({ handleDelete }) => {
  return (
    <TouchableOpacity onPress={handleDelete}>
      <Image source={require('../images/adminDelete.png')} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  );
};

const ImgOptionItem = ({ selectedLabel, userEmail }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchEvents = async () => {
      try {
        const snapshot = await firebase.firestore().collection('events').get();
        const fetchedEvents = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { ...data, id: doc.id };
        });
        setEvents(fetchedEvents);
        setFilteredEvents(fetchedEvents); // Initialize filteredEvents with all events
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedLabel && selectedLabel !== 'All Events') {
      const filtered = events.filter((event) => event.title === selectedLabel);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [selectedLabel, events]);

  const handleDelete = async (event) => {
    try {
      const db = firebase.firestore();
      await db.collection('events').doc(event.id).delete();
      setEvents(events.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error('Error deleting event: ', error);
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={{ bottom: 530, height: 700}}>
        
        {filteredEvents.map((event, index) => (

          <View key={`${index}-${event.id}`}>
            <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen', { event })}>
              <Image source={{ uri: event.imageUrl }} style={styles.image} />
            </TouchableOpacity>
            {userEmail === 'elcare2023@gmail.com' && (
              <View style={styles.deleteInfo}>
                <DeleteButton handleDelete={() => handleDelete(event)} />
              </View>
            )}
            {userEmail === 'elcare2023@gmail.com' && (
              <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent', { event })}>
                <Image source={require('../images/adminEdit.png')} style={styles.editInfo} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default function EventScreen({ navigation }) {
  const [selectedLabel, setSelectedLabel] = useState('All Events');
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const checkUserEmail = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        setUserEmail(user.email);
      }
    };

    checkUserEmail();
  }, []);

  return (
    <View  style ={{marginBottom:30}}>
      <SafeAreaView>
        <Image source={require('../images/userBack.png')} style={styles.topImage} />

        <TouchableOpacity
    onPress={async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.error(e);
        }
    }}
>
    <Image source={require('../images/logoutIcon.png')} style={styles.logoutIconStyle} />
</TouchableOpacity>
     <View  style ={{marginBottom:200}}>
        <Text style={styles.title}>Events for You</Text>

        {userEmail === 'elcare2023@gmail.com' && (
          <TouchableOpacity onPress={() => navigation.navigate('AdminAddEvent')}>
            <Image source={require('../images/adminAddInfo.png')} style={styles.addInfo} />
          </TouchableOpacity>
        )}

{/* {userEmail === 'elcare2023@gmail.com' && (
              <TouchableOpacity onPress={() => navigation.navigate('AdminContactUs')}>
                <Image source={require('../images/helpIcon.png')} style={styles.help} />
              </TouchableOpacity>
            )} */}

        <View style={{ bottom: 50 }}>
          <OptionItem setSelectedLabel={setSelectedLabel} />
        </View>

        {selectedLabel && (
          <View style={{ top: 530, alignItems: 'center', alignSelf: 'center', alignContent: 'center', maxHeight: 400 }}>
            <ImgOptionItem selectedLabel={selectedLabel} userEmail={userEmail} />
          </View>
        )}
        </View>
      </SafeAreaView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  designText: {
    fontSize: 18,
    color: '#9E9E9E',
    fontWeight: 'bold',
    padding: 20,
    paddingStart: 20,
  },
  help:{
    bottom: 200,
    left: 30,
    // height: 40,
    // width: 40,
  },
  image: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 330,
    height: 180,
    margin: 20,
    borderRadius: 15,
  },
  topImage: {
    alignSelf: 'center',
    top: -130,
    resizeMode: 'contain',
  },
  title: {
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 25,
    paddingStart: 20,
    bottom:60,
  },
  addInfo: {
    bottom: 260,
    left: 40,
    height: 25,
    width: 25,
  },
  deleteInfo: {
    left: 280,
  },
  editInfo: {
    left: 325,
    bottom: 27,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'red',
    top: 200,
    // backgroundColor: '#F5F5F5',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    width: 350,
    bottom: 940,
    fontSize: 19,
    fontWeight: '700',
    // margin: 10,
    padding: 20,
    paddingLeft: 15,
  },
  logoutIconStyle:{
    width:25,
    height: 25,
    bottom:210,
    left:360,
  }
});
