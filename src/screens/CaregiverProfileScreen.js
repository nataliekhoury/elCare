import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import ChatScreen from "./ChatScreen";
const CaregiverProfileScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const getFlexContainerStyle = (skillArray) => {
    const numberOfSkills = skillArray?.length || 0;
    return {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: numberOfSkills > 4 ? 'flex-start' : 'center',
      alignItems: 'center',
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
      });
    }
  }, []);

  return (
   <ScrollView>
      <SafeAreaView>
        
        <View>
          <Image
            source={require("../images/userBack.png")}
            style={{ left: -70, top: -90, resizeMode: "contain" }}
          />
          <Image
            source={require("../images/userBack2.png")}
            style={{ left: 50, top: -180, resizeMode: "contain" }}
          />
               {/* <TouchableOpacity onPress={() => navigation.navigate("EditProfile", {users})}>
             <Image
                source={require("../images/editIcon.png")}
                style={{ left: 320, top: -485,}}
              />
                 </TouchableOpacity>  */}
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <Image
                source={require("../images/messageBack.png")}
                style={{ left: 240, top: -250, resizeMode: "contain" }}
              />
           
              <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 249, top: -283, width: 90, height: 25, textAlign: 'center' }}> message</Text>
            </TouchableOpacity>
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
                <Image // the small rectangle back
                source={require("../images/userInfoBottomBox.png")}
                       style={{ left: -10, top:30, resizeMode: "contain" }} />
                         



   <Text style={{fontSize:15,fontWeight:'bold', marginTop: -55}}>Available days</Text>

      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 15,width:90,height:25}]}>
        {item.userAvai}
      </Text>


      <View>
        <Text style={{fontSize:15,fontWeight:'bold', marginTop: -58,left:120}}>Experience</Text>

      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 15,width:90,height:25, marginTop: 13,left:120}]}>
      {item.userExperience +'  year(s)'}
      </Text></View>


      <View style={{marginTop: -66}}>
      <Text style={{fontSize:15,fontWeight:'bold',left:250, marginTop: 10}}>Payment</Text>
      <Text style={[styles.userInfonnnnname, {textAlign: 'center', color :"#000000", fontSize: 17,marginTop: 4, marginTop: 13,left:105}]}>
          {item.userPay} 
    </Text> 
      </View>
        </View>
    <View style={[styles.skillsContainer, getFlexContainerStyle(item.userSkill)]}>
  <Text style={{fontSize:18,fontWeight:'bold',right:75, marginTop: 10}}>Skills</Text>
  {item.userSkill.map((skill, index) => (
    <Text key={index} style={styles.skillText}>{skill}</Text>
  ))}
</View>
       
              </View>
            ))}
            
          </View>
          
        </View>
        
      </SafeAreaView>
      </ScrollView>
   
  );
};

export default CaregiverProfileScreen;

const styles = StyleSheet.create({
  userInfoContainer: {
    bottom: 530,
    alignSelf: 'center',
  },
  userInfo: {
    alignItems: 'center',
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
    elevation: 11,
  },
  icon: {
    left: 100,
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
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
    elevation: 11,
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
    elevation: 11,
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
    elevation: 11,
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
    elevation: 11,
  },
  userDetailsContainer: {
    bottom: 390,
    left: 120,
    alignSelf: 'center',
    marginRight: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  userDetails: {
    alignItems: 'left',
    marginRight: 120,
    marginTop: -30,
    
  },
  userDetailsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    
    
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'left'
  },
  language: {
    textAlign: 'center',
    color: "#000000",
    fontSize: 17,
    marginTop: 9,
    borderWidth: 2,
    borderColor: 'rgba(148, 58, 218, 0.83)',
    width: 90,
    height: 25,
    borderRadius: 10,
    marginRight: 10, // Added margin to create space between the language items
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  hobby: {
    textAlign: 'center',
    color: "#000000",
    fontSize: 17,
    marginTop: 9,
    borderWidth: 2,
    borderColor: 'rgba(148, 58, 218, 0.83)',
    width: 90,
    height: 25,
    borderRadius: 10,
    marginRight: 10, 
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
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
    elevation: 11,
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
    elevation: 11,
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
  },
  
});

// import React, { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { firebase } from "../../config";
// import { SafeAreaView } from "react-native-safe-area-context";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// const CaregiverProfileScreen = () => {
//   const navigation = useNavigation();
//   const [users, setUsers] = useState([]);

//   const getFlexContainerStyle = (skillArray) => {
//     const numberOfSkills = skillArray?.length || 0;
//     return {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: numberOfSkills > 4 ? 'flex-start' : 'center',
//       alignItems: 'center',
//       marginTop: 76,
//     };
//   };

//   useEffect(() => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser) {
//       const userDataRef = firebase.firestore().collection("userData").where("userId", "==", currentUser.email);

//       userDataRef.get().then((querySnapshot) => {
//         const users = [];
//         querySnapshot.forEach((doc) => {
//           const {
//             userGender,
//             userName,
//             userAge,
//             userSkill,
//             userLanguage,
//             userCity,
//             userHobbies,
//             userAvai,
//             userExperience,
//             userPay,
//             userId,
//             userImage,
//           } = doc.data();

//           users.push({
//             id: doc.id,
//             userName,
//             userGender,
//             userAge,
//             userSkill: userSkill || [],
//             userLanguage,
//             userCity,
//             userHobbies,
//             userAvai,
//             userPay,
//             userExperience,
//             userId,
//             userImage,
//           });
//         });
//         setUsers(users);
//       });
//     }
//   }, []);

//   return (
//     <ScrollView>
//       <SafeAreaView>
//         <View>
//           <Image
//             source={require("../images/userBack.png")}
//             style={{ left: -70, top: -90, resizeMode: "contain" }}
//           />
//           <Image
//             source={require("../images/userBack2.png")}
//             style={{ left: 50, top: -180, resizeMode: "contain" }}
//           />
//           <View>
//             <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
//               <Image
//                 source={require("../images/messageBack.png")}
//                 style={{ left: 240, top: -250, resizeMode: "contain" }}
//               />
//               <Text style={{ color: "#000000", fontWeight: "bold", marginLeft: 249, top: -283, width: 90, height: 25, textAlign: 'center' }}> message</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.userInfoContainer}>
//             {users.map((item, index) => (
//               <View key={index} style={styles.userInfo}>
//                 <Image
//                   style={styles.userImage}
//                   source={{ uri: item.userImage }}
//                 />
//                 <Text style={styles.userName}>{item.userName}</Text>
//                 {item.userGender === 'male' ? (
//                   <FontAwesome name="male" style={styles.icon} size={30} color="#1B92D6" />
//                 ) : item.userGender === 'female' ? (
//                   <FontAwesome name="female" style={styles.icon} size={30} color="#943ADA" />
//                 ) : null}
//                 <Text style={styles.userAge}>age: {item.userAge}</Text>
//                 <View style={styles.userLocation}>
//                   <Image
//                     source={require("../images/locationIcon.png")}
//                     style={styles.locationIcon}
//                   />
//                   <Text style={styles.locationText}>{item.userCity}</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//           <View style={styles.skillsContainer}>
//             {users.map((item, index) => (
//               <React.Fragment key={index}>
//                 <Text style={{ fontSize: 18, fontWeight: "bold", right: 75, marginTop: 10 }}>
//                   Skills
//                 </Text>
//                 <View style={[styles.skillsContainer, getFlexContainerStyle(item.userSkill)]}>
//                   {item.userSkill?.map((skill, index) => (
//                     <Text key={index} style={styles.skillText}>{skill}</Text>
//                   ))}
//                 </View>
//               </React.Fragment>
//             ))}
//           </View>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   userInfoContainer: {
//     alignItems: "center",
//     marginTop: 30,
//   },
//   userInfo: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   userImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   icon: {
//     marginTop: 10,
//   },
//   userAge: {
//     marginTop: 5,
//   },
//   userLocation: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   locationIcon: {
//     width: 12,
//     height: 12,
//     marginRight: 5,
//   },
//   locationText: {
//     fontSize: 12,
//   },
//   skillsContainer: {
//     marginTop: 20,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   skillText: {
//     backgroundColor: "#E0E0E0",
//     color: "#333333",
//     padding: 5,
//     borderRadius: 5,
//     marginRight: 5,
//     marginBottom: 5,
//   },
// });

// export default CaregiverProfileScreen;
