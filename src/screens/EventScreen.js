// // // import React from "react";
// // // import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard, FlatList} from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { useState } from "react";
// // // // import { SafeAreaView } from "react-navigation";
// // // import { SafeAreaView} from "react-native";
// // // import AdminAddEvent from "./AdminAddEvent";
// // // import { useEffect } from 'react';
// // // import { firebase } from "../../config";



// // // const { eventId } = route.params;
// // // const [event, setEvent] = useState(null);

// // // useEffect(() => {
// // //   // Fetch the event with the specified ID from the "events" node in the database
// // //   const eventRef = firebase.database().ref(`events/${eventId}`);
// // //   eventRef.on('value', (snapshot) => {
// // //     const data = snapshot.val();
// // //     if (data) {
// // //       setEvent(data);
// // //     }
// // //   });

// // //   // Stop listening for updates when the component unmounts
// // //   return () => eventRef.off();
// // // }, [eventId]);

// // // if (!event) {
// // //   // Render a loading indicator until the event data is fetched
// // //   return (
// // //     <View>
// // //       <Text>Loading...</Text>
// // //     </View>
// // //   );
// // // }

// // // const getEvents = () => {
// // //   const navigation = useNavigation();
// // //   // const [title,setTitle] = useState([]);
// // //   const [event, setEvent] = useState(null);
// // //   const { eventId } = route.params;
// // //   // const eventData = firebase.firestore().collection('events');
// // //   const eventRef = firebase.database().ref(`events/${eventId}`);
// // //     useEffect(() => {
// // //   // Fetch the event with the specified ID from the "events" node in the database
// // //   const eventRef = firebase.database().ref(`events/${eventId}`);
// // //   eventRef.on('value', (snapshot) => {
// // //     const data = snapshot.val();
// // //     if (data) {
// // //       setEvent(data);
// // //     }
// // //   });

// // //   // Stop listening for updates when the component unmounts
// // //   return () => eventRef.off();
// // // }, [eventId]);

// // // if (!event) {
// // //   // Render a loading indicator until the event data is fetched
// // //   return (
// // //     <View>
// // //       <Text>Loading...</Text>
// // //     </View>
// // //   );
// // // } }
    
     



// //   // useEffect (() => {
// //   //   eventData.onSnapshot (querySnapshot => {
// //   //     const title =[]
// //   //     querySnapshot.forEach((doc) => {
// //   //       const {description, date, time, location, imageUrl } =doc.data()
// //   //       title.push ({
// //   //         id: doc.id, 
// //   //         description, 
// //   //         date, 
// //   //         time, 
// //   //         location, 
// //   //         imageUrl,
// //   //       })
// //   //     })
// //   //     setTitle(title)
// //   //   })
// //   // }, [])


// //   // const getEvents = () => {
// // //     const db = firebase.firestore();
// // //     const collectionRef = db.collection('events');
// // // collectionRef.get()
// // //   .then((querySnapshot) => {
// // //     querySnapshot.forEach((doc) => {
// // //       const data = doc.data();
// // //       // Process the retrieved data
// // //       const myVariable = data;
// // // myArray.push(data);
// // //       console.log(data)
// // //     });
// // //   })
// // //   .catch((error) => {
// // //     // Handle any errors
// // //     console.log(error)
// // //   });


  
// //   import React from "react";
// // import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard, FlatList} from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { useState } from "react";
// // // import { SafeAreaView } from "react-navigation";
// // import { SafeAreaView} from "react-native";
// // import AdminAddEvent from "./AdminAddEvent";
// // import { useEffect } from 'react';
// // import { firebase } from "../../config";
// //   const renderItems = (label) => {
// //     const navigation = useNavigation();
// //     const renderedItems = [];
// //     // console.log(label);
// //     for (let i = 0; i < label.length; i++) {
// //       const item = label[i];

// //       renderedItems.push(
// //         //  <TouchableOpacity onPress={ImgOptionItem}>
// //         // onPress={() => {ImgOptionItem}}
// //         // onPress={ImgOptionItem}
// //         <TouchableOpacity>
// //           <Text style = {styles.designText}>{item}</Text>
          
    
// //           {/* {filteredLabels.id == label.id &&
// //           <View style={{ alignItems: 'center'}}>
// //           <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue'}}></View>
// //       </View> */}
// //           </TouchableOpacity>


   
// //       );
// //     }

// //     return renderedItems;
// //   };

// //  const OptionItem = ({}) => {
// //   const [data, setData] = useState([]);
// //   const [filteredLabels, setFilteredLabels] = useState([]);
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const db = firebase.firestore();
// //       const collectionRef = db.collection('events');
// //       try {
// //         const querySnapshot = await collectionRef.get();
// //         const retrievedData = querySnapshot.docs.map((doc) => doc.data());
// //         setData(retrievedData);

// //         const allLabels = retrievedData.map((lab) => lab.title);
// //         const uniqueLabels = [...new Set(allLabels)];
// //         setFilteredLabels(uniqueLabels);
// //       } catch (error) {
// //         console.error('Error getting documents: ', error);
// //       }
// //     };
// //     fetchData();
// //   }, []);
// //   return (
// //     <View>
// //       <ScrollView horizontal={true}>
// //         {renderItems(filteredLabels)}
// //       </ScrollView>
// //     </View>
// //   );
   

// //     // const allLabels = fakeData.event.map(lab => lab.title)
// //     // const filteredLabels = [... new Set(allLabels)];
// //     // return (
// //     //     <View>
// //     //         <ScrollView horizontal ={true}>
// //     //         {renderItems(filteredLabels)}
// //     //         </ScrollView>   
// //     //     </View>
// //     //   );
// // }



// // // const renderFilteredImgs = (imgs) => {
// // //     const navigation = useNavigation();
// // //     const renderedFilteredImgs = [];
// // //     // console.log(label);
// // //     for (let i = 0; i < imgs.length; i++) {
// // //       const item = imgs[i];

// // //       renderedFilteredImgs.push(
// // //         // <Text style = {styles.designText}>{item}</Text>
// // //         <View>
// // //         <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
// // //            <Image
// // //              source={{ uri: item.imgURL }}
// // //              style={styles.designImages}
// // //            />
// // //            </TouchableOpacity>
          
// // //            </View>
           
// // //       );
// // //     }
// // //     return renderedFilteredImgs;


// // // };

// // // const ImgOptionItem = () => {
// // //     const navigation = useNavigation();
// // //     const [data, setData] = useState([]);
// // //     // const [imageUrl, setImageUrl] = useState('');
// // //     const [isDeleted, setIsDeleted] = useState(false);
// // //   const [filteredLabels, setFilteredLabels] = useState([]);
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const db = firebase.firestore();
// // //       const collectionRef = db.collection('events');
// // //       try {
// // //         const querySnapshot = await collectionRef.get();
// // //         const retrievedData = querySnapshot.docs.map((doc) => doc.data());
// // //         setData(retrievedData);

// // //         const allLabels = retrievedData.map((lab) => lab.description);
// // //         const uniqueLabels = [...new Set(allLabels)];
// // //         setFilteredLabels(uniqueLabels);
// // //       } catch (error) {
// // //         console.error('Error getting documents: ', error);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

 
// // //     const handleDelete = (index) => {
// // //       const allData = filteredLabels;
// // //       allData.splice(index,1);
// // //       setIsDeleted(true);
// // //       // setFakeData (allData);
      
// // //   // const newItems = [...items];
// // //   // newItems.splice(index, 1);
// // //   // setItems(newItems);
// // // };

// // // useEffect(() => {
// // //   if (isDeleted) {1
// // //     // setId('');
// // //     // setTitle('');
// // //     // setDescription('');
// // //     // setDate('');
// // //     // setTime('');
// // //     // setLocation('');
// // //     setImageUrl('');
// // //     setIsDeleted(false);
// // //   }
// // // }, [isDeleted]);

// // //   return (
// // // //     return (
// // //       <View>
// // //       <ScrollView >
  
// // // {filteredLabels.map((item, index) => (
// // //   <View key={[... new Set(item.id)]}>
    
   
// // //       <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
// // //     <Image
// // //       source={{ uri: item.imageUrl }}
// // //       style={styles.designImages}
// // //     />
// // //     </TouchableOpacity>
// // //     <TouchableOpacity onPress={() => handleDelete(index)}>
// // //        <Image source={require('../images/adminDelete.png')} 
// // //       style = {styles.deleteInfo}/>   
// // //       </TouchableOpacity>

// // //       <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
// // //        <Image source={require('../images/adminEdit.png')} 
// // //       style = {styles.editInfo}/>   
// // //       </TouchableOpacity>
// // //   </View>
// // // ))}
// // // </ScrollView>
// // // </View>
// // // // )
// // //     // <View>
// // //     //   <ScrollView>
// // //     //     {renderItems(filteredLabels)}
// // //     //   </ScrollView>
// // //     // </View>
// // //   );
    
// //     // const allLabels = fakeData.event.map(lab => lab.title)
// //     // const filteredLabels = [... new Set(allLabels)];
// //     // const allImgs = fakeData.event.map(img => img.imgURL)
// //     // const allIds = fakeData.event.map(ids => ids.id);
// //     // const filteredIds = fakeData.filter(item => ids.includes(item.id));
// //     // const allIds = fakeData.event.map (ids => ids.id)
// //     // const filteredIds = [... new Set (allIds)];
// //     // const [fakeData, setFakeData] = useState('initial data');
// //     // const [id, setId] = useState('');
// //     // const [title, setTitle] = useState('');
// //     // const [imageUrl, setImageUrl] = useState('');
// //     // const [isDeleted, setIsDeleted] = useState(false);



// // //     const handleDelete = (index) => {
// // //       const allData = fakeData.event;
// // //       allData.splice(index,1);
// // //       setIsDeleted(true);
// // //       // setFakeData (allData);
      
// // //   // const newItems = [...items];
// // //   // newItems.splice(index, 1);
// // //   // setItems(newItems);
// // // };

// // // useEffect(() => {
// // //   if (isDeleted) {1
// // //     // setId('');
// // //     // setTitle('');
// // //     // setDescription('');
// // //     // setDate('');
// // //     // setTime('');
// // //     // setLocation('');
// // //     setImageUrl('');
// // //     setIsDeleted(false);
// // //   }
// // // }, [isDeleted]);
// // // const [myData, setMyData] = useState(fakeData.event);

// // // const updateData = (allData) => {
// // //   const newData = {...allData};
// // //   setMyData (newData);

// // // };

// //   //   return (
// //   //         <View>
// //   //         <ScrollView>
// //   //   {fakeData.event.map((item, index) => (
// //   //     <View key={[... new Set(item.id)]}>
       
// //   //         <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
// //   //       <Image
// //   //         source={{ uri: item.imgURL }}
// //   //         style={styles.designImages}
// //   //       />
// //   //       </TouchableOpacity>
// //   //       <TouchableOpacity onPress={() => handleDelete(index)}>
// //   //          <Image source={require('../images/adminDelete.png')} 
// //   //         style = {styles.deleteInfo}/>   
// //   //         </TouchableOpacity>

// //   //         <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
// //   //          <Image source={require('../images/adminEdit.png')} 
// //   //         style = {styles.editInfo}/>   
// //   //         </TouchableOpacity>
// //   //     </View>
// //   //   ))}
// //   //   </ScrollView>
// //   // </View>
// //   //   )
       
// // // }

// // // const ImgOptionItem = () => {
// // //   const navigation = useNavigation();
// // //   const [data, setData] = useState([]);
// // //   const [isDeleted, setIsDeleted] = useState(false);
// // //   const [filteredLabels, setFilteredLabels] = useState([]);
// // //   const [imageUrl, setImageUrl] = useState('');

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const db = firebase.firestore();
// // //       const collectionRef = db.collection('events');
// // //       try {
// // //         const querySnapshot = await collectionRef.get();
// // //         const retrievedData = querySnapshot.docs.map((doc) => doc.data());
// // //         setData(retrievedData);

// // //         const allLabels = retrievedData.map((lab) => lab.imageUrl);
// // //         const uniqueLabels = [...new Set(allLabels)];
// // //         setFilteredLabels(uniqueLabels);
// // //       } catch (error) {
// // //         console.error('Error getting documents: ', error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);



// // //   const handleDelete = (index) => {
// // //     const allData = filteredLabels;
// // //     allData.splice(index, 1);
// // //     setIsDeleted(true);
// // //   };

// // //   useEffect(() => {
// // //     if (isDeleted) {
// // //       setImageUrl('');
// // //       setIsDeleted(false);
// // //     }
// // //   }, [isDeleted]);

// // //   return (
// // //     <View>
// // //       <ScrollView>
// // //         {filteredLabels.map((item, index) => (
// // //           <View key={item}>
// // //             <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
// // //               <Image source={{ uri: item}} style={styles.designImages} />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => handleDelete(index)}>
// // //               <Image source={require('../images/adminDelete.png')} style={styles.deleteInfo} />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
// // //               <Image source={require('../images/adminEdit.png')} style={styles.editInfo} />
// // //             </TouchableOpacity>
// // //           </View>
// // //         ))}
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // };

// // // const ImgOptionItem = () => {
// // //   const navigation = useNavigation();
// // //   const [data, setData] = useState([]);
// // //   const [isDeleted, setIsDeleted] = useState(false);
// // //   const [filteredLabels, setFilteredLabels] = useState([]);
// // //   const [imageUrls, setImageUrls] = useState([]);
// // //   const [events, setEvents] = useState([]);

// // //   const handleDelete = (index) => {
// // //     const allData = filteredLabels;
// // //     allData.splice(index, 1);
// // //     setIsDeleted(true);
// // //     setFilteredLabels(allData);
// // //   };
  

// // //   useEffect(() => {
// // //     if (isDeleted) {
// // //       setImageUrls([]);
// // //       setIsDeleted(false);
// // //     }
// // //   }, [isDeleted]);  

// // //   useEffect(() => {
// // //     const fetchEvents = async () => {
// // //       try {
// // //         const snapshot = await firebase.firestore().collection('events').get();
// // //         const fetchEvents = snapshot.docs.map((doc) => doc.data());
// // //         setEvents(fetchEvents);
// // //       } catch (error) {
// // //         console.log(error);
// // //       }
// // //     };

// // //     fetchEvents();
// // //   }, []);

// // //   const formatDate = (date) => {
// // //     return date.toLocaleDateString();
// // //   };

// // //   return (
// // //     <SafeAreaView>
// // //       <ScrollView style = {{bottom: 450}}>
// // //         {events.map((event, index) => (
// // //           <View key={index} style={styles.postContainer}>
// // //             <Image source={{ uri: event.imageUrl }} style={styles.designImages} />
// // //             <TouchableOpacity onPress={() => handleDelete(index)}>
// // //               <Image source={require('../images/adminDelete.png')} style={styles.deleteInfo} />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
// // //               <Image source={require('../images/adminEdit.png')} style={styles.editInfo} />
// // //             </TouchableOpacity>
// // //           </View>
// // //         ))}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const ImgOptionItem = () => {
// // //   const navigation = useNavigation();
// // // const [events, setEvents] = useState([]);

// // // useEffect(() => {
// // //   const fetchEvents = async () => {
// // //     try {
// // //       const snapshot = await firebase.firestore().collection('events').get();
// // //       const fetchedEvents = snapshot.docs.map((doc) => doc.data());
// // //       setEvents(fetchedEvents);
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   fetchEvents();
// // // }, []);

// // // const formatDate = (date) => {
// // //   return date.toLocaleDateString();
// // // };

// // // return (
// // //   <SafeAreaView style={styles.container}>
   
// // //     <ScrollView style={{ bottom: 450 }}>
// // //       {events.map((event, index) => (
// // //         <View key={index} style={styles.postContainer}>
// // //           <Text style={styles.caption}>{event.caption}</Text>
// // //           <Image source={{ uri: event.imageUrl }} style={styles.image} />
// // //           <Text style={styles.createdAt}>{formatDate(event.createdAt.toDate())}</Text>
// // //           {/* <View style={styles.likeButtonContainer}>
// // //             <LikeButton />
// // //           </View> */}
// // //           {/* Render other event data */}
// // //         </View>
// // //       ))}
// // //     </ScrollView>
// // //   </SafeAreaView>
// // // );

  
 
// // // };
// // function LikeButton() {
// //   const [liked, setLiked] = useState(false);

// //   const handlePress = () => {
// //     setLiked(!liked);
// //   };

// //   return (
// //     <TouchableOpacity onPress={handlePress}>
// //       <Image
// //         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
// //         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
// //       />
// //     </TouchableOpacity>
// //   );
// // }
// // const ImgOptionItem = () => {
// //   const navigation = useNavigation();
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     const fetchEvents = async () => {
// //       try {
// //         const snapshot = await firebase.firestore().collection('events').get();
// //         const fetchedEvents = snapshot.docs.map((doc) => doc.data());
// //         setEvents(fetchedEvents);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchEvents();
// //   }, []);

// //   return (
// //     <SafeAreaView>
// //       <ScrollView style={{ bottom: 450 }}>
// //         {events.map((event, index) => (
// //           <View key={`${index}-${event.id}`} style={styles.postContainer}>
// //             <Text>{event.title}</Text>
// //             <Image source={{ uri: event.imageUrl }} style={styles.image} />
// //             <View>
// //               <LikeButton />
// //             </View>
// //             {/* Render other post data */}
// //           </View>
// //         ))}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };



// // // const ImgOptionItem = () => {
// // //   const navigation = useNavigation();
// // //   const [events, setEvents] = useState([]);

// // //   useEffect(() => {
// // //     const fetchEvents = async () => {
// // //       try {
// // //         const snapshot = await firebase.firestore().collection('events').get();
// // //         const fetchedEvents = snapshot.docs.map((doc) => doc.data());
// // //         setEvents(fetchedEvents);
// // //       } catch (error) {
// // //         console.log(error);
// // //       }
// // //     };

// // //     fetchEvents();
// // //   }, []);


// // //   return (
// // //     <SafeAreaView>
// // //       <ScrollView style = {{bottom: 450}}>
// // //         {events.map((event, index) => (
// // //           <View key={index} style={styles.postContainer}>
// // //             <Text>{event.title}</Text>
// // //             <Image source={{ uri: event.imageUrl }} style={styles.image} />
// // //             <View>
// // //               <LikeButton />
// // //             </View>
// // //             {/* Render other post data */}
// // //           </View>
// // //         ))}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };


// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     const db = firebase.firestore();
// //   //     const collectionRef = db.collection('events');
// //   //     try {
// //   //       const querySnapshot = await collectionRef.get();
// //   //       const retrievedData = querySnapshot.docs.map((doc) => doc.data());
// //   //       setData(retrievedData);

// //   //       const allLabels = retrievedData.map((lab) => lab.imageUrl);
// //   //       const uniqueLabels = [...new Set(allLabels)];
// //   //       setFilteredLabels(uniqueLabels);

// //   //       // Fetch image URLs from Firebase Storage
// //   //       const storageRef = firebase.storage().ref();
// //   //       const urls = await Promise.all(
// //   //         uniqueLabels.map(async (label) => {
// //   //           if (typeof label === 'string') {
// //   //             try {
// //   //               const imageRef = storageRef.child(label);
// //   //               const url = await imageRef.getDownloadURL();
// //   //               return url;
// //   //             } catch (error) {
// //   //               console.error('Error getting image URL:', error);
// //   //               return null;
// //   //             }
// //   //           } else {
// //   //             return null;
// //   //           }
// //   //         })
// //   //       );
// //   //       setImageUrls(urls);
// //   //     } catch (error) {
// //   //       console.error('Error getting documents:', error);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, []);
  
// //   // useEffect(() => {
// //   //   // Fetch events from Firestore
// //   //   const fetchEvents = async () => {
// //   //     const eventsCollection = firebase.firestore().collection('events');
// //   //     const snapshot = await eventsCollection.get();
    
// //   //     const eventsData = snapshot.docs.map((doc) => {
// //   //       const data = doc.data();
// //   //       return {
// //   //         id: doc.id,
// //   //         ...data,
// //   //         imageUrl: data.imageUrl.uri, // Access the direct download URL from the imageUrl object
// //   //       };
// //   //     });
    
// //   //     console.log('Events Data:', eventsData);
// //   //     setEvents(eventsData);
// //   //   };
// //   //   fetchEvents();
// //   // }, []);


// //   // const handleDelete = (index) => {
// //   //   const allData = filteredLabels;
// //   //   allData.splice(index, 1);
// //   //   setIsDeleted(true);
// //   // };

// //   // useEffect(() => {
// //   //   if (isDeleted) {
// //   //     setImageUrls([]);
// //   //     setIsDeleted(false);
// //   //   }
// //   // }, [isDeleted]);


// //   // return (
// //   //   <View>
// //   //      <FlatList
// //   //       data={events}
// //   //       keyExtractor={(item) => item.id}
// //   //       renderItem={({ item }) => (
// //   //         <View>
// //   //           {/* <Text>{item.imageUrl}</Text> */}
// //   //         {item.imageUrl.uri}
// //             {/* <Image source={{ uri: item.imageUrl.uri }} /> */}

   

// //   {/* <Image
// //     style={{ width: 200, height: 200}}
// //     source={{ uri: encodeURIComponent(item.imageUrl) }}
// //   /> */}
// //             {/* Render event details and image */}
      
// //       {/* <ScrollView>
// //         {imageUrls.map((url, index) => (
// //           <View key={filteredLabels[index]}>
// //             <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen')}>
// //               <Image source={{ uri: url }} style={styles.designImages} />
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => handleDelete(index)}>
// //               <Image source={require('../images/adminDelete.png')} style={styles.deleteInfo} />
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent')}>
// //               <Image source={require('../images/adminEdit.png')} style={styles.editInfo} />
// //             </TouchableOpacity>
// //           </View>
// //         ))}
// //       </ScrollView> */}







// //  const EventScreen = () => {
// //     const navigation = useNavigation();
// //     return (
      
// //         <View style = {{display: 'flex', flexDirection: 'row'}}>
// //             <SafeAreaView >
        
// //             <Image source={require('../images/Ellipse.png')} 
// //             style = {styles.topImage}/>
// //             <Text style = {styles.title}>Events for You</Text> 

// //             <TouchableOpacity onPress={() => navigation.navigate('AdminAddEvent')}>
// //              <Image source={require('../images/adminAddInfo.png')} 
// //             style = {styles.addInfo}/>   
// //             </TouchableOpacity>
          

// //             <View style = {{bottom: 230}}>
// //             <TouchableOpacity onPress={() => navigation.navigate ('DrawerNav')}>
// //             <Image style = {styles.drawer} source={require('../images/menuBarIcon.png')}/> 
// //         </TouchableOpacity>
        

// //            </View>
// //            <View style = {{bottom: 290}}> 
// //            <OptionItem></OptionItem>  
// //            </View>
          

// //            <View style = {{bottom: 300}}>
// //             {/* <ScrollView> */}
               
// //                 <ImgOptionItem></ImgOptionItem>
// //             {/* </ScrollView> */}
// //            </View>
           
         

// //            </SafeAreaView>
// //            </View>
// //     )
// // } 

// // export default EventScreen 

// // const styles = StyleSheet.create ({

// //     topImage: {
// //         left: -5,
// //         top: -226,
// //         resizeMode: 'contain',
// //        width: 400,
// //        height: 500,
// //     },
    
// //     title: {
// //         fontStyle: 'italic',
// //         fontWeight: 'bold',
// //         fontSize: 19,
// //         paddingStart: 20,
// //         bottom: 290,
// //     },

// //     designText: {
// //         fontSize: 16, 
// //         color:'#9E9E9E',
// //         fontWeight:'semibold',
// //         padding: 20,        
// //     },

// //     designImages: {
// //         margin: 20,
// //         alignSelf: 'center',
// //         width: 330,
// //         height: 180,
// //         borderRadius: 15,
// //     },

// //     addInfo: {
// //         bottom: 490, 
// //         left: 340,
// //         height: 20,
// //         width: 20,
// //     },

// //     deleteInfo: {
// //       left: 280,
// //     },

// //     editInfo: {
// //       left: 325,
// //       bottom: 27,
// //     },

// //     drawer: {
// //          left: 15,
// //         bottom: 260,
// //         position: 'absolute',
// //     }
// // })

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { firebase } from "../../config";

// const renderItems = (filteredLabels, handlePress) => {
//   return filteredLabels.map((item, index) => (
//     <TouchableOpacity key={index} onPress={() => handlePress(item)}>
//       <Text style={styles.designText}>{item}</Text>
//     </TouchableOpacity>
//   ));
// };

// const OptionItem = ({ setSelectedLabel }) => {
//   const [filteredLabels, setFilteredLabels] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const collectionRef = db.collection('events');
//       try {
//         const querySnapshot = await collectionRef.get();
//         const retrievedData = querySnapshot.docs.map((doc) => doc.data());
//         const allLabels = retrievedData.map((lab) => lab.title);
//         const uniqueLabels = [...new Set(allLabels)];
//         setFilteredLabels(uniqueLabels);
//       } catch (error) {
//         console.error('Error getting documents: ', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handlePress = (label) => {
//     setSelectedLabel(label);
//   };

//   return (
//     <View>
//       <ScrollView horizontal={true}>
//         {renderItems(filteredLabels, handlePress)}
//       </ScrollView>
//     </View>
//   );
// };

// const DeleteButton = ({ handleDelete }) => {
//   return (
//     <TouchableOpacity onPress={handleDelete}>
//       <Image source={require('../images/adminDelete.png')} style={{ width: 30, height: 30 }} />
//     </TouchableOpacity>
//   );
// };

// const ImgOptionItem = ({ selectedLabel, userEmail }) => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('events').get();
//         const fetchedEvents = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return { ...data, id: doc.id };
//         });
//         setEvents(fetchedEvents);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     if (selectedLabel) {
//       const filtered = events.filter((event) => event.title === selectedLabel);
//       setFilteredEvents(filtered);
//     } else {
//       setFilteredEvents(events);
//     }
//   }, [selectedLabel, events]);

    
//     // const userDataRef=firebase.firestore().collection('userData');

//     // useEffect(()=>{
//     //   const currentUser = firebase.auth().currentUser;
//     // if (currentUser) {
//     //   const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);
//     // }};

//   const handleDelete = async (event) => {
//     try {
//       const db = firebase.firestore();
//       await db.collection('events').doc(event.id).delete();
//       setEvents(events.filter((e) => e.id !== event.id));
//     } catch (error) {
//       console.error('Error deleting event: ', error);
//     }
//   };

//   const navigation = useNavigation();
//   return (
//     <SafeAreaView>
//       <ScrollView style={{ bottom: 450, minHeight: '100%' }}>
//         {filteredEvents.map((event, index) => (
//           <View key={`${index}-${event.id}`}>
//             <TouchableOpacity onPress={() => navigation.navigate('EventInfoScreen', { event })}>
//               <Image source={{ uri: event.imageUrl }} style={styles.image} />
//             </TouchableOpacity>
//             {userEmail === 'elcare2023@gmail.com' && (
//             <View style={styles.deleteInfo}>
//               <DeleteButton handleDelete={() => handleDelete(event)} />
//             </View>
//             )}
//             {userEmail === 'elcare2023@gmail.com' && (
//             <TouchableOpacity onPress={() => navigation.navigate('AdminEditEvent', { event})}>
//               <Image source={require('../images/adminEdit.png')} style={styles.editInfo} />
//             </TouchableOpacity>
//             )}
//             {/* Render other post data */}
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default function EventScreen({ navigation }) {
//   const [selectedLabel, setSelectedLabel] = useState(null);
//   const [userEmail, setUserEmail] = useState(null);


//   useEffect(() => {
//     const checkUserEmail = async () => {
//       const user = firebase.auth().currentUser;
//       if (user) {
//         setUserEmail(user.email);
//       }
//     };

//     checkUserEmail();
//   }, []);

//   return (
//     <View style={{ display: 'flex', flexDirection: 'row' }}>
//       <SafeAreaView>
//         <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
//         <Text style={styles.title}>Events for You</Text>

//         {userEmail === 'elcare2023@gmail.com' && (
//         <TouchableOpacity onPress={() => navigation.navigate('AdminAddEvent')}>
//           <Image source={require('../images/adminAddInfo.png')} style={styles.addInfo} />
//         </TouchableOpacity>
//         )}

//         <View style={{ bottom: 230 }}>
//           <TouchableOpacity onPress={() => navigation.navigate('DrawerNav')}>
//             <Image style={styles.drawer} source={require('../images/menuBarIcon.png')} />
//           </TouchableOpacity>
//         </View>

//         <View style={{ bottom: 290 }}>
//           <OptionItem setSelectedLabel={setSelectedLabel} />
//         </View>

//         {selectedLabel && (
//           <View style={{ top: 180, alignItems: 'center', alignSelf: 'center', alignContent: 'center'}}>
//             <ImgOptionItem selectedLabel={selectedLabel} userEmail={userEmail} />
//           </View>
//         )}

//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   designText: {
//     fontSize: 16, 
//     color:'#9E9E9E',
//     fontWeight:'bold',
//     padding: 20,
//   },
//   image: {
//         alignItems: 'center',
//         alignSelf: 'center',
//         width: 330,
//         height: 180,
//         margin: 20,
//         // left: -5,
//         borderRadius: 15,
//   },
//   topImage: {
//     left: -5,
//     top: -226,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontStyle: 'italic',
//     fontWeight: '800',
//     fontSize: 19,
//     paddingStart: 20,
//     bottom: 290,
//   },
//   addInfo: {
//     bottom: 490,
//     left: 340,
//     height: 20,
//     width: 20,
//   },
//   deleteInfo: {
//     left: 280,
//   },
//   editInfo: {
//     left: 325,
//     bottom: 27,
//   },
//   drawer: {
//     left: 15,
//     bottom: 260,
//     position: 'absolute',
//   },
// });

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
        const allLabels = retrievedData.map((lab) => lab.title);
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const snapshot = await firebase.firestore().collection('events').get();
        const fetchedEvents = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { ...data, id: doc.id };
        });
        setEvents(fetchedEvents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedLabel) {
      const filtered = events.filter((event) => event.title === selectedLabel);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [selectedLabel, events]);

  useEffect(() => {
    const searchEvents = () => {
      const filtered = events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filtered);
    };

    searchEvents();
  }, [searchQuery, events]);

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
      <Image source={require('../images/searchIcon.png')} style={styles.searchIcon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search for Events"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <ScrollView style={{ bottom: 530, minHeight: '100%' }}>
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
  const [selectedLabel, setSelectedLabel] = useState(null);
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
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <SafeAreaView>
        <Image source={require('../images/Ellipse.png')} style={styles.topImage} />
        <Text style={styles.title}>Events for You</Text>

        {userEmail === 'elcare2023@gmail.com' && (
          <TouchableOpacity onPress={() => navigation.navigate('AdminAddEvent')}>
            <Image source={require('../images/adminAddInfo.png')} style={styles.addInfo} />
          </TouchableOpacity>
        )}
{/* 
        <View style={{ bottom: 230 }}>
          <TouchableOpacity onPress={() => navigation.navigate('TabBar')}>
            <Image style={styles.drawer} source={require('../images/menuBarIcon.png')} />
          </TouchableOpacity>
        </View> */}

        <View style={{ bottom: 290 }}>
          <OptionItem setSelectedLabel={setSelectedLabel} />
        </View>

        {selectedLabel && (
          <View style={{ top: 180, alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>
            <ImgOptionItem selectedLabel={selectedLabel} userEmail={userEmail} />
          </View>
        )}

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  designText: {
    fontSize: 16,
    color: '#9E9E9E',
    fontWeight: 'bold',
    padding: 20,
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
    left: -5,
    top: -226,
    resizeMode: 'contain',
    width: 400,
    height: 500,
  },
  title: {
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 25,
    paddingStart: 20,
    bottom: 280,
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
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    width:350,
    bottom: 650,
    fontSize: 19,
    fontWeight: '700',
    // margin: 10,
    padding: 20,
    paddingLeft: 30,
    // backgroundColor: '#D9D9D9',
  },
  searchIcon: {
    bottom: 620,
    // padding: 10,
    paddingLeft: 20,
    left: 10,
    // backgroundColor: 'red',
    

  }
});
