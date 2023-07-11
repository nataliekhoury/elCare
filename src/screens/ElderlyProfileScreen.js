import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ChatScreen from "./ChatScreen";


const ElderlyProfileScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFlexContainerStyle = (skillArray) => {
    const numberOfSkills = skillArray.length;
    return {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: numberOfSkills > 4 ? 'flex-start' : 'center',
      marginTop: 76,
    };
  };

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);

      userDataRef.get().then((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const {
            userGender,
            userName,
            userAge,
            userSkill,
            userLanguage,
            userCity,
            userHobbies,
            userAvai,
            userExperience,
            userPay,
            userId,
            userImage,
          } = doc.data();

          users.push({
            id: doc.id,
            userName,
            userGender,
            userAge,
            userSkill,
            userLanguage,
            userCity,
            userHobbies,
            userAvai,
            userPay,
            userExperience,
            userId,
            userImage,
          });
        });
        setUsers(users);
        setLoading(false); // Set loading to false once data is fetched
      });
    }

  }, []);

  useEffect(() => {
    if (!loading) {
      // Check if user data is empty
      if (users.length === 0) {
        // Navigate to DetailScreen if user data is not found
        navigation.replace('DetailScreen');
      }
    }
  }, [loading, users]);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
  
      <SafeAreaView>
        <View>
          <Image
            source={require("../images/userBack.png")}
            style={{ left: -70, top: -90, resizeMode: "contain" }}
          />


          <Image
            source={require("../images/userBack2.png")}
            style={{ left: 50, top: -200, resizeMode: "contain" }}
          />

<TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <Image style={styles.help} source={require('../images/contactUsIcon.png')} />
          </TouchableOpacity>

          <View>
            {/* <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <Image
                source={require("../images/messageBack.png")}
                style={{ left: 240, top: -250, resizeMode: "contain" }}
              />

              <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 249, top: -283, width: 90, height: 25, textAlign: 'center' }}> message</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.userInfoContainer}>
            {users.map((item, index) => (
              <View key={index} style={styles.userInfo}>
                <Image
                  style={styles.userImage}
                  source={{ uri: item.userImage }}
                />
                <Text style={styles.userName}>{item.userName}</Text>
                {item.userGender === 'male' ? (
                  <FontAwesome name="male" style={styles.icon} size={30} color="#1B92D6" />
                ) : item.userGender === 'female' ? (
                  <FontAwesome name="female" style={styles.icon} size={30} color="#943ADA" />
                ) : null}
                <Text style={styles.userAge}>age: {item.userAge}</Text>
                <View style={styles.userLocation}>
                  <Image
                    source={require("../images/locationIcon.png")}
                    style={styles.locationIcon}
                  />
                  <Text style={styles.userInfoCity}>{item.userCity}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.userDetailsContainer}>
          <ScrollView style = {{ width: '100%'}}>

            {users.map((item, index) => (
              <View key={index} style={styles.userDetails}>
                <View style={styles.userDetailsSection}>

                  <Text style={styles.sectionTitle}>Spoken languages</Text>
                  <View style={styles.languageContainer}>
                    {item.userLanguage.split(",").map((language, index) => (
                      <Text key={index} style={styles.language}>{language.trim()}</Text>
                    ))}
                  </View>
                </View>

                <View style={styles.userDetailsSection}>
                  <Text style={styles.sectionTitle}>Hobbies</Text>
                  <View style={styles.hobbiesContainer}>
                    {item.userHobbies.split(",").map((hobby, index) => (
                      <Text key={index} style={styles.hobby}>{hobby.trim()}</Text>
                    ))}
                  </View>
                </View>

                <View>
                  <Image
                    source={require("../images/userInfoBottomBox.png")}
                    style={{ top: 30, resizeMode: "contain" }}
                  />

                  <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: -55, left: 8 }}>Desired days</Text>
                  <Text style={[styles.userInfonnnnname, { textAlign: 'center', color: "#000000", fontSize: 17, marginTop: 15, width: 90, height: 25 }]}>
                    {item.userAvai}
                  </Text>

                  <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: -58, left: 125 }}>   Expertise</Text>
                    <Text style={[styles.userInfonnnnname, { textAlign: 'center', color: "#000000", fontSize: 17, marginTop: 15, width: 90, height: 25, marginTop: 13, left: 120 }]}>
                      {item.userExperience + '  year(s)'}
                    </Text>
                  </View>

                  <View style={{ marginTop: -66 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', left: 250, marginTop: 10 }}>Payment</Text>
                    <Text style={[styles.userInfonnnnname, { textAlign: 'center', color: "#000000", fontSize: 17, marginTop: 4, marginTop: 13, left: 105 }]}>
                      {item.userPay}
                    </Text>
                  </View>
                </View>

                <View style={[styles.skillsContainer, getFlexContainerStyle(item.userSkill)]}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', right: -85, marginTop: 10 }}>Searching for:</Text>
                  {item.userSkill.map((skill, index) => (
                    <Text key={index} style={styles.skillText}>{skill}</Text>
                  ))}
                </View>
              </View>
            ))}
             </ScrollView>
          </View>

        </View>
      </SafeAreaView>
   
  );
};

export default ElderlyProfileScreen;

const styles = StyleSheet.create({
  userInfoContainer: {
    bottom: 500,
    alignSelf: 'center',
    // paddingBottom: -20,
  },
  help:{
    bottom: 510,
    left: 310,
    height: 40,
    width: 40,
  },
  userInfo: {
    // alignItems: 'center',
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 75,
  },
  userName: {
    textAlign: 'center',
    color: "#000000",
    fontSize: 17,
    marginTop: 15,
    fontWeight: 'bold',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  icon: {
    left: -65,
    bottom: 210,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
  },
  userAge: {
    textAlign: 'center',
    marginTop: -20,
    marginBottom: 10,
    color: "#9E9E9E",
    fontSize: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  userLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  locationIcon: {
    resizeMode: "contain",
    marginRight: 4,
    marginTop: -8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  userInfoCity: {
    textAlign: 'center',
    color: "#9E9E9E",
    fontSize: 17,
    marginTop: -8,
    marginRight: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  userDetailsContainer: {
    bottom: 430,
    left: 120,
    height: 350,
    alignSelf: 'center',
    marginRight: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  userDetails: {
    // alignItems: 'left',
    marginRight: 120,
    marginTop: -10,    
  },
  userDetailsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    bottom: -25,
    paddingBottom: 20,
    
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    
    
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'left',
    left: -80,
  },
  language: {
    height:35,
    textAlign: 'center',
    color: "#000000",
    marginTop: 9,
    borderWidth: 10,
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: 'rgba(148, 58, 218, 0.83)',
    width: 90,
    marginRight: 10, // Added margin to create space between the language items
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  hobby: {
    height:35,
    textAlign: 'center',
    color: "#000000",
    marginTop: 9,
    borderWidth: 10,
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: 'rgba(148, 58, 218, 0.83)',
    width: 90,
    marginRight: 10, // Added margin to create space between the language items
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  bottomBox: {
    left: -10,
    top: 60,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  userDetailsText: {
    textAlign: 'center',
    color: "#000000",
    fontSize: 17,
    marginTop: 15,
    width: 90,
    height: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    // elevation: 11,
  },
  skillText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: 'rgba(148, 58, 218, 0.83)',
    left: 92,
    height: 35,
  },
  
});