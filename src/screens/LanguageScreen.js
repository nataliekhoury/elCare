import { NavigationContainer } from "@react-navigation/native";
import React, { useTransition } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Images from "../images";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from "react-native-switch-selector";
import { firebase } from "../../config";
import { useTranslation, UseTranslation } from "react-i18next";
const options = [
  { label: "English", value: "en" },
  { label: "Hebrew", value: "he" },
];
const LanguageScreen = () => {
  const navigation = useNavigation();
  //convert the language
  const { t, i18n } = useTranslation();

  return (
    <View>
      <View>
        <Image
          source={require("../images/languageScreenBackground.png")}
          style={{ top: -170, width: -110, height: 700, resizeMode: "contain" }}
        />
      </View>

      <View>
        <Text style={styles.Text}>{t("text1")}</Text>
      </View>
      <View>
        <SwitchSelector
          style={{ top: -200, width: "80%", left: 30 }}
          textColor="grey"
          selectedColor="white"
          buttonColor="rgba(106, 97, 207, 0.84)"
          borderColor="#7a44cf"
          hasPadding
          options={[
            { label: "English", value: "en" },
            {
              label: "Hebrew",
              value: "he",
            },
          ]}
          onPress={(language) => {
            i18n.changeLanguage(language);
          }}
        />
      </View>
      <View style={{ bottom: 180 }}>
        <TouchableOpacity
          style={styles.continuetButtonStyle}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "25",
              color: "white",
              textAlign: "center",
            }}
          >
            {t("continue")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: "#9E9E9E",
    marginTop: -300,
  },
  continuetButtonStyle: {
    bottom: -100,
    width: "60%",
    backgroundColor: "rgba(106, 97, 207, 0.84)",
    borderRadius: "50",
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItem: "center",
    paddingVertical: 20,
    marginLeft: 90,
    // marginBottom:-59,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 10.0,
    elevation: 11,
  },
  continueStyleStyle: {
    fontWeight: "bold",
    fontSize: "25",
    color: "white",
    textAlign: "center",
  },
  Hebrew: {
    left: 300,
    bottom: 300,
  },
});
