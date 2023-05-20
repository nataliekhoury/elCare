import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import fakeData from '../FakeData';
// import { SafeAreaView } from "react-navigation";
import { SafeAreaView} from "react-native";
import AdminAddEvent from "./AdminAddEvent";
import { useEffect } from 'react';
import { firebase } from "../../config";
import { query } from "@my-utils/link/src/service";
import { use } from "i18next";


// const { eventId } = route.params;
// const [event, setEvent] = useState(null);

// useEffect(() => {
//   // Fetch the event with the specified ID from the "events" node in the database
//   const eventRef = firebase.database().ref(`events/${eventId}`);
//   eventRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     if (data) {
//       setEvent(data);
//     }
//   });

//   // Stop listening for updates when the component unmounts
//   return () => eventRef.off();
// }, [eventId]);

// if (!event) {
//   // Render a loading indicator until the event data is fetched
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// const getEvents = () => {
//   const navigation = useNavigation();
//   // const [title,setTitle] = useState([]);
//   const [event, setEvent] = useState(null);
//   const { eventId } = route.params;
//   // const eventData = firebase.firestore().collection('events');
//   const eventRef = firebase.database().ref(`events/${eventId}`);
//     useEffect(() => {
//   // Fetch the event with the specified ID from the "events" node in the database
//   const eventRef = firebase.database().ref(`events/${eventId}`);
//   eventRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     if (data) {
//       setEvent(data);
//     }
//   });

//   // Stop listening for updates when the component unmounts
//   return () => eventRef.off();
// }, [eventId]);

// if (!event) {
//   // Render a loading indicator until the event data is fetched
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// } }
    
     



  // useEffect (() => {
  //   eventData.onSnapshot (querySnapshot => {
  //     const title =[]
  //     querySnapshot.forEach((doc) => {
  //       const {description, date, time, location, imageUrl } =doc.data()
  //       title.push ({
  //         id: doc.id, 
  //         description, 
  //         date, 
  //         time, 
  //         location, 
  //         imageUrl,
  //       })
  //     })
  //     setTitle(title)
  //   })
  // }, [])


  const getEvents = () => {
//     const db = firebase.firestore();
//     const collectionRef = db.collection('events');
// collectionRef.get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       // Process the retrieved data
//       const myVariable = data;
// myArray.push(data);
//       console.log(data)
//     });
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log(error)
//   });


  }


 const OptionItem = ({}) => {
  const [data, setData] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const collectionRef = db.collection('events');
      try {
        const querySnapshot = await collectionRef.get();
        const retrievedData = querySnapshot.docs.map((doc) => doc.data());
        setData(retrievedData);

        const allLabels = retrievedData.map((lab) => lab.title);
        const uniqueLabels = [...new Set(allLabels)];
        setFilteredLabels(uniqueLabels);
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <ScrollView horizontal={true}>
        {renderItems(filteredLabels)}
      </ScrollView>
    </View>
  );
   

    // const allLabels = fakeData.event.map(lab => lab.title)
    // const filteredLabels = [... new Set(allLabels)];
    // return (
    //     <View>
    //         <ScrollView horizontal ={true}>
    //         {renderItems(filteredLabels)}
    //         </ScrollView>   
    //     </View>
    //   );
}

const renderItems = (label) => {
    const navigation = useNavigation();
    const renderedItems = [];
    // console.log(label);
    for (let i = 0; i < label.length; i++) {
      const item = label[i];

      renderedItems.push(
        //  <TouchableOpacity onPress={ImgOptionItem}>
        // onPress={() => {ImgOptionItem}}
        // onPress={ImgOptionItem}
        <TouchableOpacity>
          <Text style = {styles.designText}>{item}</Text>
          
    
          {/* {filteredLabels.id == label.id &&
          <View style={{ alignItems: 'center'}}>
          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue'}}></View>
      </View> */}
          </TouchableOpacity>


   
      );
    }

    return renderedItems;
  };

// const renderFilteredImgs = (imgs) => {
//     const navigation = useNavigation();
//     const renderedFilteredImgs = [];
//     // console.log(label);
//     for (let i = 0; i < imgs.length; i++) {
//       const item = imgs[i];

//       renderedFilteredImgs.push(
//         // <Text style = {styles.designText}>{item}</Text>
//         <View>
//         <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
//            <Image
//              source={{ uri: item.imgURL }}
//              style={styles.designImages}
//            />
//            </TouchableOpacity>
          
//            </View>
           
//       );
//     }
//     return renderedFilteredImgs;


// };

const ImgOptionItem = () => {
    const navigation = useNavigation();
    // const allLabels = fakeData.event.map(lab => lab.title)
    // const filteredLabels = [... new Set(allLabels)];
    // const allImgs = fakeData.event.map(img => img.imgURL)
    const allIds = fakeData.event.map(ids => ids.id);
    // const filteredIds = fakeData.filter(item => ids.includes(item.id));
    // const allIds = fakeData.event.map (ids => ids.id)
    // const filteredIds = [... new Set (allIds)];
    // const [fakeData, setFakeData] = useState('initial data');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);



    const handleDelete = (index) => {
      const allData = fakeData.event;
      allData.splice(index,1);
      setIsDeleted(true);
      // setFakeData (allData);
      
  // const newItems = [...items];
  // newItems.splice(index, 1);
  // setItems(newItems);
};

useEffect(() => {
  if (isDeleted) {
    // setId('');
    // setTitle('');
    // setDescription('');
    // setDate('');
    // setTime('');
    // setLocation('');
    setImageUrl('');
    setIsDeleted(false);
  }
}, [isDeleted]);
// const [myData, setMyData] = useState(fakeData.event);

// const updateData = (allData) => {
//   const newData = {...allData};
//   setMyData (newData);

// };

    return (
          <View>
          <ScrollView>
    {fakeData.event.map((item, index) => (
      <View key={[... new Set(item.id)]}>
       
          <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
        <Image
          source={{ uri: item.imgURL }}
          style={styles.designImages}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(index)}>
           <Image source={require('../images/adminDelete.png')} 
          style = {styles.deleteInfo}/>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
           <Image source={require('../images/adminEdit.png')} 
          style = {styles.editInfo}/>   
          </TouchableOpacity>
      </View>
    ))}
    </ScrollView>
  </View>
    )
       
}

 const EventScreen = () => {
    const navigation = useNavigation();
    return (
      
        <View style = {{display: 'flex', flexDirection: 'row'}}>
            <SafeAreaView >
        
            <Image source={require('../images/Ellipse.png')} 
            style = {styles.topImage}/>
            <Text style = {styles.title}>Events for You</Text> 

            <TouchableOpacity onPress={() => navigation.navigate('AdminAddEvent')}>
             <Image source={require('../images/adminAddInfo.png')} 
            style = {styles.addInfo}/>   
            </TouchableOpacity>
          

            <View style = {{bottom: 230}}>
            <TouchableOpacity onPress={() => navigation.navigate ('DrawerNav')}>
            <Image style = {styles.drawer} source={require('../images/menuBarIcon.png')}/> 
        </TouchableOpacity>
        

           </View>
           <View style = {{bottom: 290}}> 
           <OptionItem></OptionItem>  
           </View>
          

           <View style = {{bottom: 300}}>
            {/* <ScrollView> */}
               
                <ImgOptionItem></ImgOptionItem>
            {/* </ScrollView> */}
           </View>
           
         

           </SafeAreaView>
           </View>
    )
} 

export default EventScreen 

const styles = StyleSheet.create ({

    topImage: {
        left: -5,
        top: -226,
        resizeMode: 'contain',
       width: 400,
       height: 500,
    },
    
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 19,
        paddingStart: 20,
        bottom: 290,
    },

    designText: {
        fontSize: 16, 
        color:'#9E9E9E',
        fontWeight:'semibold',
        padding: 20,        
    },

    designImages: {
        margin: 20,
        alignSelf: 'center',
        width: 330,
        height: 180,
        borderRadius: 15,
    },

    addInfo: {
        bottom: 490, 
        left: 340,
        height: 20,
        width: 20,
    },

    deleteInfo: {
      left: 280,
    },

    editInfo: {
      left: 325,
      bottom: 27,
    },

    drawer: {
         left: 15,
        bottom: 260,
        position: 'absolute',
    }
})
