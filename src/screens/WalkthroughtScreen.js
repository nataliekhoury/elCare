import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../images";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// import OnboardingScreen from './OnboardingScreen';

const WalkthroughtScreen = ({ navigation }) => {
  const WalkthroughtList = [
    {
      id: 1,
      title: "Find the best match",
      desription: "find,Contact,meet people by matching no need for searching",
      image: Images.Group41,
    },
    {
      id: 2,
      title: "Enjoy events",
      desription:
        "Now you can go to the events that you want,meet people,enjoy and share",
      image: Images.eventsWalk,
    },
    {
      id: 3,
      title: "Easy to use",
      desription: "NO need to get more complicated easy, more efficientley",
      image: Images.Group39,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        //swiper style
        paginationStyle={{
          position: "absolute",
          bottom: 20,
        }}
        activeDotColor="#6A61CF"
        activeDotStyle={{ width: 20, height: 9 }}
      >
        {WalkthroughtList.map((i) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image source={i.image} style={styles.imageContainer} />
              <Text style={styles.textStyle}>
                {i.title}
                {"\n"}
              </Text>
              <Text style={styles.desriptionStyle}>{i.desription}</Text>
            </View>
          );
        })}
      </Swiper>
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonLoginStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.logInStyle}>Log in </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonJoinNowStyle}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.joinStyle}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WalkthroughtScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    width: "90%",
    textAlign: "center",
  },

  imageContainer: {
    height: "30%",
    width: "90%",
    resizeMode: "contain",
    marginHorizontal: 15,
    // marginBottom:100,
  },
  desriptionStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "90%",
    color: "#9E9E9E",
  },
  buttonLoginStyle: {
    backgroundColor: "#6A61CF",
    borderRadius: 40,
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginLeft: 190,
    marginBottom: -65,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  buttonJoinNowStyle: {
    backgroundColor: "#D4D4D4",
    borderRadius: 40,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginRight: 180,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  joinStyle: {
    // fontSize:'12',
    fontWeight: "bold",
    fontSize: 17,
    color: "#6A61CF",
  },
  logInStyle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#1DFFD6",
  },
});
