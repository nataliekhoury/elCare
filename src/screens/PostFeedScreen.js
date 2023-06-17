// import React from "react";
// import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
// import Images from "../images";
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import {firebase } from "../../config";
// import EventInfoScreen from "./EventInfoScreen";
// // import EventListScreen from "./EventListScreen";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { NavigationContai, SafeAreaView } from "react-navigation";
// // import { useNavigation } from "@react-navigation/native";
// // import { NavigationAction } from "@react-navigation/native";



// function LikeButton() {
//     const [liked, setLiked] = useState(false);
  
//     const handlePress = () => {
//       setLiked(!liked);
//     };
  
//     return (
//       <TouchableOpacity onPress={handlePress}>
//         <Image
//           source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//           style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//         />
//       </TouchableOpacity>
//     );
//   }
  


// const PostFeedScreen= () => {

//     const navigation = useNavigation();
//     return (
//         <View>
          
//             <Image source={require('../images/postTop.png')} 
//             style = {styles.topImage}/>
            
//             <Text style = {styles.title}>Post Feed</Text>
//             <View>
//             <TouchableOpacity onPress={() => navigation.navigate ('AddPostFeedScreen')}>
//             <Image style = {styles.addPost} source={require('../images/addPost.png')}/>
            
//         </TouchableOpacity>

//             </View>
//             <View style ={{bottom: 80, left: 100}}>
//                 <LikeButton></LikeButton>
//             </View>

//         </View>
//     )


// }
// export default PostFeedScreen



// const styles = StyleSheet.create ({
//     topImage: {
//         left: -5,
//         bottom: 200,
//         resizeMode: 'contain',
//        width: 400,
//        height: 500,
//     },
//     title: {
//         // fontStyle: 'italic',
//         fontWeight: 'bold',
//         fontSize: 19,
//         // paddingStart: 20,
//         bottom: 440,
//         alignSelf: 'center',
        
        
//     },
//     addPost: {
//         bottom: 475, 
//         // right: -120,
//         left: 330,
//         height: 40,
//         width: 40,
//         // left: -20,
//     }

// })

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';

// function LikeButton() {
//     const [liked, setLiked] = useState(false);
  
//     const handlePress = () => {
//       setLiked(!liked);
//     };
  
//     return (
//       <TouchableOpacity onPress={handlePress}>
//         <Image
//           source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//           style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//         />
//       </TouchableOpacity>
//     );
//   }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     <SafeAreaView>
//     <View style={styles.container}>
//           <Image source={require('../images/postTop.png')} 
//             style = {styles.topImage}/>
            
//             <Text style = {styles.title}>Post Feed</Text>
//             <View>
//             <TouchableOpacity onPress={() => navigation.navigate ('AddPostFeedScreen')}>
//             <Image style = {styles.addPost} source={require('../images/addPost.png')}/>
            
//         </TouchableOpacity>
//             </View>
//             <View style ={{bottom: 80, left: 100}}>
//                 <LikeButton></LikeButton>
//             </View>
//             <ScrollView>
//       {posts.map((post, index) => (
//         <View key={index} style={styles.postContainer}>
//           <Text style={styles.caption}>{post.caption}</Text>
//           <Image source={{ uri: post.imageUrl }} style={styles.image} />
//           <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//           {/* Render other post data */}
//         </View>
      
//       ))}
//         </ScrollView>
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     marginVertical: 5,
//   },
//   caption: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//   },
//   createdAt: {
//     color: 'gray',
//     fontSize: 12,
//   },
//       topImage: {
//         left: -5,
//         bottom: 182,
//         resizeMode: 'contain',
//        width: 400,
//        height: 500,
//     },
//     title: {
//         // fontStyle: 'italic',
//         fontWeight: 'bold',
//         fontSize: 19,
//         // paddingStart: 20,
//         bottom: 420,
//         alignSelf: 'center',
        
        
//     },
//     addPost: {
//         bottom: 460, 
//         // right: -120,
//         left: 158,
//         height: 40,
//         width: 40,
//         // left: -20,
       
//     }
// });

// export default PostFeedScreen;


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { shadow } from 'react-native-paper';

// function LikeButton() {
//   const [liked, setLiked] = useState(false);

//   const handlePress = () => {
//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     // <SafeAreaView style={styles.container}>
//       <View>
//       <View style = {{bottom: -45}} >
//         <Image source={require('../images/postTop.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <SafeAreaView>
//       <ScrollView style = {{top: -500}}>
//         {posts.map((post, index) => (
//           <View key={index} style={styles.postContainer}>
//             {/* <Text style={styles.caption}>{post.caption}</Text> */}
//             <Image source={{ uri: post.imageUrl }} style={styles.image} />
//             <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//             <View style={styles.likeButtonContainer}>
//               <LikeButton />
//             </View>
//             {/* Render other post data */}
//           </View>
//         ))}
//       </ScrollView>
//       </SafeAreaView>
//       </View>
//     // </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   postContainer: {
//     borderWidth: 1,
//     backgroundColor: '#EBECF0',
//     borderColor: '#EBECF0',
//     padding: 10,
//     marginVertical: 5,
    
   
//         alignSelf: 'center',
//         width: 360,
//         height: 260,
//         borderRadius: 15,
//         marginTop: 30,
       
        

      
//     // margin: 20,
//     // alignSelf: 'center',
//     // width: 330,
//     // height: 180,
//     // borderRadius: 15,
//   },
//   caption: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     left: 50,
//     top: -10,

//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     // margin: 20,
//         alignSelf: 'center',
//         width: 330,
//         height: 180,
//         borderRadius: 15,
        
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -51,
//     bottom: 210,

//   },
//   topImage: {
//     left: -5,
//     bottom: 246,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 480,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 520,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: 10,
//     right: 300,
//   },
// });

// export default PostFeedScreen;


// import React from "react";
// import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
// import Images from "../images";
// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import {firebase } from "../../config";
// import EventInfoScreen from "./EventInfoScreen";
// // import EventListScreen from "./EventListScreen";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { NavigationContai, SafeAreaView } from "react-navigation";
// // import { useNavigation } from "@react-navigation/native";
// // import { NavigationAction } from "@react-navigation/native";



// function LikeButton() {
//     const [liked, setLiked] = useState(false);
  
//     const handlePress = () => {
//       setLiked(!liked);
//     };
  
//     return (
//       <TouchableOpacity onPress={handlePress}>
//         <Image
//           source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//           style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//         />
//       </TouchableOpacity>
//     );
//   }
  


// const PostFeedScreen= () => {

//     const navigation = useNavigation();
//     return (
//         <View>
          
//             <Image source={require('../images/postTop.png')} 
//             style = {styles.topImage}/>
            
//             <Text style = {styles.title}>Post Feed</Text>
//             <View>
//             <TouchableOpacity onPress={() => navigation.navigate ('AddPostFeedScreen')}>
//             <Image style = {styles.addPost} source={require('../images/addPost.png')}/>
            
//         </TouchableOpacity>

//             </View>
//             <View style ={{bottom: 80, left: 100}}>
//                 <LikeButton></LikeButton>
//             </View>

//         </View>
//     )


// }
// export default PostFeedScreen



// const styles = StyleSheet.create ({
//     topImage: {
//         left: -5,
//         bottom: 200,
//         resizeMode: 'contain',
//        width: 400,
//        height: 500,
//     },
//     title: {
//         // fontStyle: 'italic',
//         fontWeight: 'bold',
//         fontSize: 19,
//         // paddingStart: 20,
//         bottom: 440,
//         alignSelf: 'center',
        
        
//     },
//     addPost: {
//         bottom: 475, 
//         // right: -120,
//         left: 330,
//         height: 40,
//         width: 40,
//         // left: -20,
//     }

// })

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Keyboard} from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';

// function LikeButton() {
//     const [liked, setLiked] = useState(false);
  
//     const handlePress = () => {
//       setLiked(!liked);
//     };
  
//     return (
//       <TouchableOpacity onPress={handlePress}>
//         <Image
//           source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//           style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//         />
//       </TouchableOpacity>
//     );
//   }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     <SafeAreaView>
//     <View style={styles.container}>
//           <Image source={require('../images/postTop.png')} 
//             style = {styles.topImage}/>
            
//             <Text style = {styles.title}>Post Feed</Text>
//             <View>
//             <TouchableOpacity onPress={() => navigation.navigate ('AddPostFeedScreen')}>
//             <Image style = {styles.addPost} source={require('../images/addPost.png')}/>
            
//         </TouchableOpacity>
//             </View>
//             <View style ={{bottom: 80, left: 100}}>
//                 <LikeButton></LikeButton>
//             </View>
//             <ScrollView>
//       {posts.map((post, index) => (
//         <View key={index} style={styles.postContainer}>
//           <Text style={styles.caption}>{post.caption}</Text>
//           <Image source={{ uri: post.imageUrl }} style={styles.image} />
//           <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//           {/* Render other post data */}
//         </View>
      
//       ))}
//         </ScrollView>
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     marginVertical: 5,
//   },
//   caption: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//   },
//   createdAt: {
//     color: 'gray',
//     fontSize: 12,
//   },
//       topImage: {
//         left: -5,
//         bottom: 182,
//         resizeMode: 'contain',
//        width: 400,
//        height: 500,
//     },
//     title: {
//         // fontStyle: 'italic',
//         fontWeight: 'bold',
//         fontSize: 19,
//         // paddingStart: 20,
//         bottom: 420,
//         alignSelf: 'center',
        
        
//     },
//     addPost: {
//         bottom: 460, 
//         // right: -120,
//         left: 158,
//         height: 40,
//         width: 40,
//         // left: -20,
       
//     }
// });

// export default PostFeedScreen;


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { shadow } from 'react-native-paper';

// function LikeButton() {
//   const [liked, setLiked] = useState(false);

//   const handlePress = () => {
//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     // <SafeAreaView style={styles.container}>
//       <View>
//       <View style = {{bottom: -45}} >
//         <Image source={require('../images/postTop.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <SafeAreaView>
//       <ScrollView style = {{top: -500}}>
//         {posts.map((post, index) => (
//           <View key={index} style={styles.postContainer}>
//             <Text>{post.userName}</Text>
//             {/* <Image source ={{uri: post.userImage}} style={styles.userImage}/> */}
//             <Text style={styles.caption}>{post.caption}</Text>
//             <Image source={{ uri: post.imageUrl }} style={styles.image} />
//             <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//             <View style={styles.likeButtonContainer}>
//               <LikeButton />
//             </View>

//             {/* Render other post data */}
//           </View>
//         ))}
//       </ScrollView>
      
//       </SafeAreaView>
//       </View>
//     // </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   postContainer: {
//     borderWidth: 1,
//     backgroundColor: '#EBECF0',
//     borderColor: '#EBECF0',
//     padding: 10,
//     marginVertical: 5,
    
   
//         alignSelf: 'center',
//         width: 360,
//         height: 260,
//         borderRadius: 15,
//         marginTop: 30,
       
        

      
//     // margin: 20,
//     // alignSelf: 'center',
//     // width: 330,
//     // height: 180,
//     // borderRadius: 15,
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     left: 60,
//     top: 215,
    

//   },
//   userImage:{
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//     // backgroundColor: 'red',



//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     // margin: 20,
//         alignSelf: 'center',
//         width: 330,
//         height: 180,
//         borderRadius: 15,
        
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -51,
//     bottom: 210,

//   },
//   topImage: {
//     left: -5,
//     bottom: 246,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 480,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 520,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: 10,
//     right: 300,
//   },
// });

// export default PostFeedScreen;

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';

// const handleLikePress = async (postId, currentLikes) => {
//   try {
//     const postRef = firebase.firestore().collection('posts').doc(postId);
//     const newLikesCount = currentLikes + 1;
//     await postRef.update({ likesCount: newLikesCount });
//   } catch (error) {
//     console.log(error);
//   }
// };

// function LikeButton({ postId, initialLikes }) {
//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(initialLikes);

//   const handlePress = async () => {
//     try {
//       const postRef = firebase.firestore().collection('posts').doc(postId);

//       if (liked) {
//         // Decrease the likes count
//         await postRef.update({ likesCount: firebase.firestore.FieldValue.increment(-1) });
//         setLikesCount((prevCount) => prevCount - 1);
//       } else {
//         // Increase the likes count
//         await postRef.update({ likesCount: firebase.firestore.FieldValue.increment(1) });
//         setLikesCount((prevCount) => prevCount + 1);
//       }

//       setLiked(!liked);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     setLikesCount(initialLikes);
//   }, [initialLikes]);

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//       <Text>{likesCount}</Text>
//     </TouchableOpacity>
//   );
// }





// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => {
//           const postData = doc.data();
//           return {
//             ...postData,
//             postId: doc.id,
//           };
//         });
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     <View>
//       <View style={{ bottom: -45 }}>
//         <Image source={require('../images/postTop.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <SafeAreaView>
//         <ScrollView style={{ top: -500 }}>
//           {posts.map((post, index) => (
//             <View key={index} style={styles.postContainer}>
//               <Text style={styles.userName}>{post.userName}</Text>
//               <Text style={styles.caption}>{post.caption}</Text>
//               <Image source={{ uri: post.imageUrl }} style={styles.image} />
//               <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//               <View style={styles.likeButtonContainer}>
//                 <LikeButton postId={post.postId} initialLikes={post.likesCount} />
//               </View>
//               <View style={styles.postLine} />
//             </View>
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// const formatDate = (date) => {
//   return date.toLocaleDateString();
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#EBECF0',
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     left: 60,
//     top: 215,
//   },
//   userName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingStart: 20,
//   },
//   userImage: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     alignSelf: 'center',
//     width: 330,
//     height: 180,
//     borderRadius: 15,
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -280,
//     bottom: 235,
//   },
//   topImage: {
//     left: -5,
//     bottom: 246,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 480,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 520,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -15,
//     right: 300,
//   },
//   postLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E4E4E4',
//     marginTop: 20,
//     width: 1300,
//     alignSelf: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 21,
//   },
// });

// export default PostFeedScreen;
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';

// function LikeButton({ postId, initialLikes }) {
//   const [likesCount, setLikesCount] = useState(initialLikes);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection('posts')
//       .doc(postId)
//       .onSnapshot((snapshot) => {
//         const post = snapshot.data();
//         setLikesCount(post.likesCount || 0); // Default to 0 if likesCount field is undefined
//       });

//     return () => unsubscribe();
//   }, [postId]);

//   const handlePress = () => {
//     if (liked) {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(-1),
//       });
//       setLikesCount(likesCount - 1);
//     } else {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(1),
//       });
//       setLikesCount(likesCount + 1);
//     }

//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//       <Text>{likesCount}</Text>
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     <View>
//       <View style={{ bottom: -45 }}>
//         <Image source={require('../images/postTop.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <SafeAreaView>
//         <ScrollView style={{ top: -500 }}>
//           {posts.map((post, index) => (
//             <View key={index} style={styles.postContainer}>
//               <Text style={styles.userName}>{post.userName}</Text>
//               {/* <Image source={{ uri: post.userImage }} style={styles.userImage} /> */}
//               <Text style={styles.caption}>{post.caption}</Text>
//               <Image source={{ uri: post.imageUrl }} style={styles.image} />
//               <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//               <View style={styles.likeButtonContainer}>
//                 <LikeButton postId={post.id} initialLikes={post.likesCount} />
//               </View>
//               <View style={styles.postLine} />
//             </View>
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     // borderWidth: 1,
//     // backgroundColor: '#EBECF0',
//     // borderColor: '#EBECF0',
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'center',
//     width: 360,
//     height: 260,
//     borderRadius: 15,
//     marginTop: 30,
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     left: 60,
//     top: 215,
//   },
//   userName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingStart: 20,
//   },
//   userImage: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     alignSelf: 'center',
//     width: 330,
//     height: 180,
//     borderRadius: 15,
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -280,
//     bottom: 235,
//   },
//   topImage: {
//     left: -5,
//     bottom: 246,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 480,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 520,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -15,
//     right: 300,
//   },
//   postLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E4E4E4',
//     marginTop: 20,
//     width: 1300,
//     alignSelf: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 21,
//     // borderColor: '#EBECF0',
//   },
// });

// export default PostFeedScreen;
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { firebase } from '../../config';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// function LikeButton({ postId, initialLikes }) {
//   const [likesCount, setLikesCount] = useState(initialLikes);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection('posts')
//       .doc(postId)
//       .onSnapshot((snapshot) => {
//         const post = snapshot.data();
//         setLikesCount(post.likesCount || 0);
//       });

//     return () => unsubscribe();
//   }, [postId]);

//   const handlePress = () => {
//     if (liked) {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(-1),
//       });
//       setLikesCount((prevCount) => prevCount - 1);
//     } else {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(1),
//       });
//       setLikesCount((prevCount) => prevCount + 1);
//     }

//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//       <Text>{likesCount}</Text>
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
    
//     <View>
//       <View style={{ bottom: -45 }}>
//         <Image source={require('../images/rectangleBackground.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={{ top: -800, maxHeight: 2000}}>
//       <SafeAreaView>
        
//           {posts.map((post) => (
//             <View key={post.id} style={styles.postContainer}>
//               <Text style={styles.userName}>{post.userName}</Text>
//               {/* <Image source={{ uri: post.userImage }} style={styles.userImage} /> */}
//               <Text style={styles.caption}>{post.caption}</Text>
//               {post.imageUrl ? (
//                 <Image source={{ uri: post.imageUrl }} style={styles.image} />
//               ) : null}
//               <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//               <View style={styles.likeButtonContainer}>
//                 <LikeButton postId={post.id} initialLikes={post.likesCount} />
//               </View>
//               <View style={styles.postLine} />
//             </View>
//           ))}
//          </SafeAreaView> 
//         </ScrollView>

      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     // borderWidth: 1,
//     // backgroundColor: '#EBECF0',
//     // borderColor: '#EBECF0',
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'center',
//     width: 360,
//     height: 260,
//     borderRadius: 15,
//     marginTop: 30,
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     left: 60,
//     top: 215,
//   },
//   userName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingStart: 20,
//   },
//   userImage: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//   },
//   image: {
//     width: 330,
//     height: 180,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     alignSelf: 'center',
//     borderRadius: 15,
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -280,
//     bottom: 235,
//   },
//   topImage: {
//     left: -5,
//     bottom: 400,
//     resizeMode: 'contain',
//     width: 600,
//     height: 800,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 780,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 820,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -35,
//     right: 300,
//   },
//   postLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E4E4E4',
//     marginTop: 20,
//     width: 1300,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 21,
//     // borderColor: '#EBECF0',
//   },
// });

// export default PostFeedScreen;


// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { firebase } from '../../config';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// function LikeButton({ postId, initialLikes }) {
//   const [likesCount, setLikesCount] = useState(initialLikes);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection('posts')
//       .doc(postId)
//       .onSnapshot((snapshot) => {
//         const post = snapshot.data();
//         setLikesCount(post.likesCount || 0);
//       });

//     return () => unsubscribe();
//   }, [postId]);

//   useEffect(() => {
//     const userId = firebase.auth().currentUser.uid;
//     const likesRef = firebase.firestore().collection('likes').doc(postId).collection('userLikes').doc(userId);

//     likesRef.get().then((doc) => {
//       if (doc.exists) {
//         setLiked(true);
//       }
//     });
//   }, [postId]);

//   const handlePress = () => {
//     const userId = firebase.auth().currentUser.uid;
//     const likesRef = firebase.firestore().collection('likes').doc(postId).collection('userLikes').doc(userId);

//     if (liked) {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(-1),
//       });
//       likesRef.delete();
//       setLikesCount((prevCount) => prevCount - 1);
//     } else {
//       firebase.firestore().collection('posts').doc(postId).update({
//         likesCount: firebase.firestore.FieldValue.increment(1),
//       });
//       likesRef.set({ liked: true });
//       setLikesCount((prevCount) => prevCount + 1);
//     }

//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <View style={styles.likeButtonContainer}>
//         <Image
//           source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//           style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//         />
//         <Text style={styles.likesCount}>{likesCount}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isCaptionLoaded, setIsCaptionLoaded] = useState(false);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setPosts(fetchedPosts);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   const handleCaptionLoad = () => {
//     setIsCaptionLoaded(true);
//   };

//   return (
//     <SafeAreaView>
//       <Text style={styles.title}>Post Feed</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//         <Image style={styles.addPost} source={require('../images/addPost.png')} />
//       </TouchableOpacity>
//       <ScrollView>
//         {!isLoading &&
//           posts.map((post) => (
//             <React.Fragment key={post.id}>
//               <View style={[styles.postContainer, !post.imageUrl && styles.noImageContainer]}>
//                 <Text style={styles.userName}>{post.userName}</Text>
//                 {post.imageUrl && (
//                   <Image
//                     source={{ uri: post.imageUrl }}
//                     style={styles.image}
//                     onLoad={handleCaptionLoad}
//                   />
//                 )}
//                 <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//                 <View style={styles.likeButtonContainer}>
//                   <LikeButton postId={post.id} initialLikes={post.likesCount || 0} />
//                 </View>
//                 <Text style={[styles.caption, isCaptionLoaded && { marginTop: 10 }]}>
//                   {post.caption}
//                 </Text>
//               </View>
//               {isCaptionLoaded && <View style={styles.postLine} />}
//             </React.Fragment>
//           ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   addPost: {
//     height: 40,
//     width: 40,
//     alignSelf: 'flex-end',
//     marginRight: 10,
//   },
//   postContainer: {
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'center',
//     width: 360,
//     borderRadius: 15,
//   },
//   noImageContainer: {
//     height: 150,
//   },
//   userName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingStart: 20,
//   },
//   image: {
//     width: 330,
//     height: 180,
//     marginVertical: 10,
//     alignSelf: 'center',
//     borderRadius: 15,
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     position: 'absolute',
//     right: 10,
//     bottom: 10,
//   },
//   likeButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   likesCount: {
//     marginLeft: 5,
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'flex-start',
//     marginTop: 10,
//   },
//   postLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E4E4E4',
//     marginTop: 20,
//     width: 1300,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 21,
//   },
// });

// export default PostFeedScreen;




import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LikeButton({ postId, initialLikes }) {
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .onSnapshot((snapshot) => {
        const post = snapshot.data();
        setLikesCount(post.likesCount || 0);
      });

    return () => unsubscribe();
  }, [postId]);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    const likesRef = firebase.firestore().collection('likes').doc(postId).collection('userLikes').doc(userId);

    likesRef.get().then((doc) => {
      if (doc.exists) {
        setLiked(true);
      }
    });
  }, [postId]);

  const handlePress = () => {
    const userId = firebase.auth().currentUser.uid;
    const likesRef = firebase.firestore().collection('likes').doc(postId).collection('userLikes').doc(userId);

    if (liked) {
      firebase.firestore().collection('posts').doc(postId).update({
        likesCount: firebase.firestore.FieldValue.increment(-1),
      });
      likesRef.delete();
      setLikesCount((prevCount) => prevCount - 1);
    } else {
      firebase.firestore().collection('posts').doc(postId).update({
        likesCount: firebase.firestore.FieldValue.increment(1),
      });
      likesRef.set({ liked: true });
      setLikesCount((prevCount) => prevCount + 1);
    }

    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.likeButtonContainer}>
        <Image
          source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
          style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
        />
        <Text style={styles.likesCount}>{likesCount}</Text>
      </View>
    </TouchableOpacity>
  );
}


const PostFeedScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCaptionLoaded, setIsCaptionLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('posts').get();
        const fetchedPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const handleCaptionLoad = () => {
    setIsCaptionLoaded(true);
  };

  return (

    <SafeAreaView>
      <Image source={require('../images/rectangleBackground.png')} style={styles.topImage} />
      <Text style={styles.title}>Post Feed</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
        <Image style={styles.addPost} source={require('../images/addPost.png')} />
      </TouchableOpacity>
      <ScrollView style={{ top: -800, maxHeight: 700 }}>
       
          {!isLoading &&
            posts.map((post) => (
              <React.Fragment key={post.id}>
                <View style={[styles.postContainer, !post.imageUrl && styles.noImageContainer]}>
                  <Text style={styles.userName}>{post.userName}</Text>
                  {post.imageUrl && (
                    <Image
                      source={{ uri: post.imageUrl }}
                      style={styles.image}
                      onLoad={handleCaptionLoad}
                    />
                  )}
                  <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
                  <View style={styles.likeButtonContainer}>
                    <LikeButton postId={post.id} initialLikes={post.likesCount} />
                  </View>
                  <Text style={[styles.caption, isCaptionLoaded && { marginTop: 10 }]} onLayout={handleCaptionLoad}>
                    {post.caption}
                  </Text>
                </View>
                {isCaptionLoaded && (
                  <View style={styles.postLine} />
                )}
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
    // backgroundColor: 'white',
  },
  noImageContainer: {
    height: 150,
  },
  caption: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'flex-start',
    marginTop: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingStart: 20,
  },
  image: {
    width: 330,
    height: 180,
    resizeMode: 'cover',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 15,
  },
  createdAt: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 12,
    right: -270,
    bottom: 220,
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
    fontSize: 19,
    bottom: 780,
    alignSelf: 'center',
  },
  addPost: {
    bottom: 820,
    left: 340,
    height: 40,
    width: 40,
  },
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesCount: {
    marginLeft: 5,
  },
  postLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
    marginTop: 20,
    width: 1300,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 21,
  },
});

export default PostFeedScreen;




// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
// import { firebase } from "../../config";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { shadow } from 'react-native-paper';

// function LikeButton() {
//   const [liked, setLiked] = useState(false);

//   const handlePress = () => {
//     setLiked(!liked);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
//         style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
//       />
//     </TouchableOpacity>
//   );
// }

// const PostFeedScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firebase.firestore().collection('posts').get();
//         const fetchedPosts = snapshot.docs.map((doc) => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString();
//   };

//   return (
//     <View>
//       <View style={{ bottom: -45 }}>
//         <Image source={require('../images/postTop.png')} style={styles.topImage} />
//         <Text style={styles.title}>Post Feed</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
//           <Image style={styles.addPost} source={require('../images/addPost.png')} />
//         </TouchableOpacity>
//       </View>
//       <SafeAreaView>
//         <ScrollView style={{ top: -500 }}>
//           {posts.map((post, index) => (
//             <View key={index} style={styles.postContainer}>
//               <Text style ={styles.userName}>{post.userName}</Text>
//               {/* <Image source ={{uri: post.userImage}} style={styles.userImage}/> */}
//               <Text style={styles.caption}>{post.caption}</Text>
//               <Image source={{ uri: post.imageUrl }} style={styles.image} />
//               <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
//               <View style={styles.likeButtonContainer}>
//                 <LikeButton />
//               </View>
//               <View style={styles.postLine} /> 
//             </View>
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     // borderWidth: 1,
//     // backgroundColor: '#EBECF0',
//     // borderColor: '#EBECF0',
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'center',
//     width: 360,
//     height: 260,
//     borderRadius: 15,
//     marginTop: 30,
//   },
//   caption: {
//     fontWeight: '500',
//     fontSize: 16,
//     left: 60,
//     top: 215,
//   },

//   userName: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingStart: 20,

//   },

//   userImage: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 10,
//     alignSelf: 'center',
//     width: 330,
//     height: 180,
//     borderRadius: 15,
//   },
//   createdAt: {
//     color: '#808080',
//     fontWeight: 'bold',
//     fontSize: 12,
//     right: -280,
//     bottom: 235,
//   },
//   topImage: {
//     left: -5,
//     bottom: 246,
//     resizeMode: 'contain',
//     width: 400,
//     height: 500,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 19,
//     bottom: 480,
//     alignSelf: 'center',
//   },
//   addPost: {
//     bottom: 520,
//     left: 340,
//     height: 40,
//     width: 40,
//   },
//   likeButtonContainer: {
//     alignSelf: 'flex-end',
//     position: 'absolute',
//     bottom: -15,
//     right: 300,
//   },
//   postLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E4E4E4',
//     marginTop: 20,
//     width: 1300,
//     alignSelf: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.36,
//     shadowRadius: 10.0,
//     elevation: 21,
//     // borderColor: '#EBECF0',
//   },
// });

// export default PostFeedScreen;
