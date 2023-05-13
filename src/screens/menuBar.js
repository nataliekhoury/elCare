import react from "react";
import { useState,useRef} from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView, Animated} from "react-native";
import profileImage from '../images/profileImage.png';
//tab icons
import menuBarIcon from '../images/menuBarIcon.png';
import chatIcon from '../images/chatIcon.png';
import emergencyIcon from '../images/emergencyIcon.png';
import eventIcon from '../images/eventIcon.png';
import logoutIcon from '../images/logoutIcon.png';
import mapIcon from '../images/mapIcon.png';
import matchIcon from '../images/matchIcon.png';
import homeIcon from '../images/homeIcon.png';

export default function menuBar() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profileImage} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Jenna Ezarik</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton (currentTab, setCurrentTab, "homeIcon", homeIcon)};
           {TabButton (currentTab, setCurrentTab, "chatIcon", chatIcon)};
           {TabButton (currentTab, setCurrentTab, "menuBarIcon", menuBarIcon)};
           {TabButton (currentTab, setCurrentTab, "emergencyIcon", emergencyIcon)};
          {TabButton (currentTab, setCurrentTab, "eventIcon", eventIcon)};
          {TabButton (currentTab, setCurrentTab, "mapIcon", mapIcon)};
          {TabButton (currentTab, setCurrentTab, "matchIcon", matchIcon)};

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "logoutIcon", logoutIcon)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menuBarIcon} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>

          </TouchableOpacity>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

          <Image source={profileImage} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25
          }}></Image>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
            , paddingTop: 15,
            paddingBottom: 5
          }}>Jenna Ezarik</Text>

          <Text style={{
          }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

// export default function menuBar() {
//   const [currentTab, setCurrentTab] = useState("Home");
// //to get the current status of the menu
//   // const [showMenu, setShowMenu] = useState(false);

// //animated properties 
//   const offsetValue = useRef(new Animated.Value(0)).current;
//   const scaleValue = useRef (new Animated.Value(1)).current;
//   const closeButtonOffset = useRef (new Animated.Value(0)).current;


//   return (
//     <SafeAreaView style = {styles.container}>
//       <View style = {{justifyContent:'flex-start', padding:25}}>
//         <Image style = {styles.profile} source = {profileImage}/>
//         <TouchableOpacity>
//           <Text style = {styles.profileText}>View Profile</Text>
//         </TouchableOpacity>
//         {/* <View style = {{flexGrow:1, marginTop:50}}> */}
//           {/* menu bar buttons  */}
//           {TabButton (currentTab, setCurrentTab, "homeIcon", homeIcon)};
//           {TabButton (currentTab, setCurrentTab, "chatIcon", chatIcon)};
//           {TabButton (currentTab, setCurrentTab, "menuBarIcon", menuBarIcon)};
//           {TabButton (currentTab, setCurrentTab, "emergencyIcon", emergencyIcon)};
//           {TabButton (currentTab, setCurrentTab, "eventIcon", eventIcon)};
//           {TabButton (currentTab, setCurrentTab, "mapIcon", mapIcon)};
//           {TabButton (currentTab, setCurrentTab, "matchIcon", matchIcon)};
//         </View>
//         <View>
//         {TabButton (currentTab, setCurrentTab, "logoutIcon", logoutIcon)};
//         </View>
//       {/* </View> */}

//       {/* over lay view  */}
//       <Animated.View style= {styles.overLay}>
//         {/* menu button  */}
        
//       </Animated.View>


//     </SafeAreaView>
   
//   )
// }
// {/* <Text style={{
//   marginTop: 6,
//   color: 'white'
// }}>View Profile</Text> */}

// const styles = StyleSheet.create ({
//   container:{
//     flex:1,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     backgroundColor: 'violet',
//   },
//   profile:{
//     width: 70,
//     height: 70,
//      borderRadius: 20,
//      marginTop: 20, 
//   },
//   profileText:{
//     marginTop: 6, 
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   overLay:{
//     flexGrow:1,
//     backgroundColor:'white',
//     position: 'absolute',
//     top:0,
//     bottom:0,
//     left:0,
//     right:0,
//     paddingHorizontal:15,
//     paddingVertical:20,
//     borderRadius: showMenu ? 15:0,
//     transform:[{scale:scaleValue}, {translateX:offsetValue}],
//   },

// });
