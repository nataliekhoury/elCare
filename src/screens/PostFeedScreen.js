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


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { shadow } from 'react-native-paper';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={liked ? require('../images/heartFilled.png') : require('../images/heartOutline.png')}
        style={{ width: 30, height: 30, tintColor: liked ? '#943ADA' : 'black' }}
      />
    </TouchableOpacity>
  );
}

const PostFeedScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('posts').get();
        const fetchedPosts = snapshot.docs.map((doc) => doc.data());
        setPosts(fetchedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    // <SafeAreaView style={styles.container}>
      <View>
      <View style = {{bottom: -45}} >
        <Image source={require('../images/postTop.png')} style={styles.topImage} />
        <Text style={styles.title}>Post Feed</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
          <Image style={styles.addPost} source={require('../images/addPost.png')} />
        </TouchableOpacity>
      </View>
      <SafeAreaView>
      <ScrollView style = {{top: -500}}>
        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <Text style={styles.caption}>{post.caption}</Text>
            <Image source={{ uri: post.imageUrl }} style={styles.image} />
            <Text style={styles.createdAt}>{formatDate(post.createdAt.toDate())}</Text>
            <View style={styles.likeButtonContainer}>
              <LikeButton />
            </View>
            {/* Render other post data */}
          </View>
        ))}
      </ScrollView>
      </SafeAreaView>
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  postContainer: {
    borderWidth: 1,
    backgroundColor: '#EBECF0',
    borderColor: '#EBECF0',
    padding: 10,
    marginVertical: 5,
    
   
        alignSelf: 'center',
        width: 360,
        height: 260,
        borderRadius: 15,
        marginTop: 30,
       
        

      
    // margin: 20,
    // alignSelf: 'center',
    // width: 330,
    // height: 180,
    // borderRadius: 15,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 16,
    left: 50,
    top: -10,

  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
    // margin: 20,
        alignSelf: 'center',
        width: 330,
        height: 180,
        borderRadius: 15,
        
  },
  createdAt: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 12,
    right: -51,
    bottom: 210,

  },
  topImage: {
    left: -5,
    bottom: 246,
    resizeMode: 'contain',
    width: 400,
    height: 500,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    bottom: 480,
    alignSelf: 'center',
  },
  addPost: {
    bottom: 520,
    left: 340,
    height: 40,
    width: 40,
  },
  likeButtonContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 300,
  },
});

export default PostFeedScreen;

