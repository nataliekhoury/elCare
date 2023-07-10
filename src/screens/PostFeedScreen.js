import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView ,ActivityIndicator} from 'react-native';
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
          style={{ width: 30, height: 30, resizeMode: 'contain',tintColor: liked ? '#943ADA' : 'black' }}
        />
        <Text style={styles.likesCount}>{likesCount} likes</Text>
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
    setTimeout(() => {

    const fetchPosts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('posts').orderBy('createdAt', 'desc').get();
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
    setIsLoading(false); // Set loading state to false after data is fetched
  }, 3000);
  }, []);


  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const handleCaptionLoad = () => {
    setIsCaptionLoaded(true);
  };

  if (isLoading) {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (

    <SafeAreaView>
      
      <Image source={require('../images/rectangleBackground.png')} style={styles.topImage} />
      <Text style={styles.title}>Post Feed</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddPostFeedScreen')}>
        <Image style={styles.addPost} source={require('../images/addPost.png')} />
      </TouchableOpacity>
      <ScrollView style={{ top: -800, maxHeight: 620 }}>
       
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
    // textAlign: 'flex-start',
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
    fontSize: 25,
    bottom: 790,
    alignSelf: 'center',
  },
  addPost: {
    bottom: 825,
    left: 350,
    height: 40,
    width: 40,
  },
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesCount: {
    marginLeft: 5,
    bottom: -5,
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
