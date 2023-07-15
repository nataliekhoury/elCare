import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { Checkbox } from "react-native-paper";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const PHONE_REGEX=/^05\d([-]{0,1})\d{7}$/;
const SignupScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

 

  SignupUser = async (email, password,phone,role) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://elcare-bb10b.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
            navigation.navigate('DetailScreen');

          })
          .catch((error) => {
            Alert.alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("user")
              .doc(firebase.auth().currentUser.uid) 
              .set({
              
                email,
                phone,
                role,
              })
              navigation.replace('DetailScreen');
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });

  };
  const onTermsOfUsePressed = () => {
    alert(`elCare Team built the elCare app as a Free app. This SERVICE is provided by elCare Team at no cost and is intended for use as is.

    This form is used to inform visitors regarding the policies with the collection, use, and disclosure of Personal Information if anyone decides to use the Service.
    
    If you choose to use the Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
    
    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at elCare unless otherwise defined in this Privacy Policy.
    
    Information Collection and Use
    
    For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to:
    
    Accounts and membership: If you create an account in the Mobile Application, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
    Images: Our app allows you to upload images. By using our app and uploading images, you understand and agree that we will access, collect, store, and process the images you upload. We may use these images for the intended functionality of the app, such as displaying them within the app or sharing them with other users as specified by you.
    The information that we request will be retained on your device.
    
    Third-Party Services
    
    The app does use the following third-party services that may collect information used to identify you:
    
    Google Play Services
    Google Analytics for Firebase
    Firebase Crashlytics
    Please refer to the privacy policies of these third-party service providers to understand how they handle your personal information.
    
    Service Providers
    
    We may employ third-party companies and individuals due to the following reasons:
    
    To facilitate our Service
    To provide the Service on our behalf
    To perform Service-related services
    To assist us in analyzing how our Service is used
    We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
    
    Security
    
    We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
    
    Privacy Policy in Play Distributed App
    
    For users who download and use our app from sources other than the Google Play Store, we want to inform you that the app collects and processes users' images. We do not provide a separate privacy policy within the app for Play Distributed App. However, the same privacy policy mentioned here applies to the app, including the collection, use, and disclosure of personal information and images.
    
    Links to Other Sites
    
    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
    
    Changes to This Privacy Policy
    
    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
    
    This policy is effective as of 2024-07-11.
    
    Contact Us
    
    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at elcare2023@gmail.com.
    
    Note: This updated privacy policy includes the necessary disclosure about uploading users' images and mentions the lack of a separate privacy policy in the Play Distributed App.`);
  };

  const onPrivacyPressed = () => {
    alert(`Terms and conditions
    These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the mobile application (“Mobile Application” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and this Mobile Application developer (“Operator”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Mobile Application and Services. By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Mobile Application and Services.
    
    Accounts and membership
    If you create an account in the Mobile Application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
    
    Links to other resources
    Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.
    
    Dispute resolution
    The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Israel without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of Israel. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Israel, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.
    
    Changes and amendments
    We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
    
    An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.
    
    Acceptance of these terms
    You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services. This terms and conditions policy was created with the terms and conditions generator.
    
   
    
    This document was last updated on January, 2023`);
  };
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
            left: 130,
            bottom: -20,
            shadowOffset: {
              width: 6,
              height: 10,
            },
            shadowOpacity: 0.6,
            shadowRadius: 10.0,
            elevation: 111,
          }}
        >
          Registration
        </Text>

        <View>

            <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={handleChange}
          />
          <Text    style={{
              color: "black",
              left: 22,
              bottom: -35,
              fontSize: 20,
              fontWeight: "bold",
            }}>I am a</Text>
          <Text   style={{
              color: "black",
              left: 29,
              bottom: -40,
              fontSize: 25,
              fontWeight: "bold",
            }}>Caregiver</Text>
        </View>

        <View style={styles.checkboxContainer2}>
          <Checkbox
            status={!checked ? "checked" : "unchecked"}
            onPress={handleChange}
          />
          <Text  style={{ left: 22, bottom: -35, fontSize: 20, fontWeight: "bold", color: "white" }}>I am an</Text>
          <Text   style={{ left: 29, bottom: -40, fontSize: 25, fontWeight: "bold", color: "white" }}>Elderly</Text>
        </View>

        </View>
        <View style={{ top: -120 }}>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
            Email
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              color: "grey",
              width: "80%",
              backgroundColor: "white",
              borderColor: "#D5D5D5",
              paddingHorizontal: 30,
              paddingVertical: 18,
              marginBottom: 20,
              borderBottomColor: "#D5D5D5",
              marginVertical: 20,
              shadowColor: "#000",
              marginLeft: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            // autoCorrect={false}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          ></TextInput>
          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
            password
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              color: "grey",
              width: "80%",
              backgroundColor: "white",
              borderColor: "#D5D5D5",
              paddingHorizontal: 30,
              paddingVertical: 18,
              marginBottom: 20,
              borderBottomColor: "#D5D5D5",
              marginVertical: 20,
              shadowColor: "#000",
              marginLeft: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            placeholder="password"
            onChangeText={(password) => setPassword(password)}
            // autoCorrect={false}
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          ></TextInput>

          <Text style={{ marginLeft: 50, color: "#9E9E9E", fontSize: 19 }}>
            phone
          </Text>
          <TextInput
            style={{
              borderRadius: 30,
              color: "grey",
              width: "80%",
              backgroundColor: "white",
              borderColor: "#D5D5D5",
              paddingHorizontal: 30,
              paddingVertical: 18,
              marginBottom: 20,
              borderBottomColor: "#D5D5D5",
              marginVertical: 20,
              shadowColor: "#000",
              marginLeft: 40,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
            rules={{
              required: "Phone number required",
              pattern: { value:PHONE_REGEX, message: "Phone is invalid" },
              
            }}
               keyboardType="numeric"
            placeholder="phone number"
            onChangeText={(phone) => setPhone(phone)}
          ></TextInput>

        </View>

        <Text style={styles.text}>
          By registering, you confirm that you accept our{"\n"}{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <TouchableOpacity
          style={{
            width: "60%",
            top: -140,
            backgroundColor: "rgba(106, 97, 207, 0.84)",
            borderRadius: 50,
            borderRadius: 50,
            paddingHorizontal: 60,
            justifyContent: "center",
            alignItem: "center",
            paddingVertical: 20,
            marginLeft: 78,
            // marginBottom:-59,
            marginTop: 50,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.36,
            shadowRadius: 10.0,
            elevation: 11,
          }}
          onPress={() => SignupUser(email, password,phone,checked ? "Caregiver" :"Elderly")}
          
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "white",
              textAlign: "center",
            }}
          >
            Create account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonJoinNowStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.joinStyle}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: 18,
              marginRight: 240,
              bottom: 240,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.36,
              shadowRadius: 10.0,
              elevation: 11,
            }}
          >
            {"\n"}
            {"\n"}
            {"\n"} already a User?{""}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
  buttonJoinNowStyle: {
    left: 200,
    bottom: 100,
    backgroundColor: "#D4D4D4",
    borderRadius: 40,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItem: "center",

    paddingVertical: 20,
    marginRight: 230,
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
    right: -20,
    justifyContent: "center",
    alignItem: "center",
  },
  text: {
    color: "gray",
    marginVertical: 10,
    left: 53,
    top: -100,
  },
  link: {
    color: "rgba(106, 97, 207, 0.84)",
    fontWeight: "bold",
  },
  checkboxContainer: {
    backgroundColor: "rgba(212, 212, 212, 0.35)",
            width: 170,
            height: 170,
            borderRadius: 20,
            left: 220,
            top: 40,
  },
  checkboxContainer2: {
    bottom: 130,
    backgroundColor: "rgba(93, 86, 180, 0.84)",
    width: 170,
    height: 170,
    borderRadius: 20,
    left: 12,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
  },

});
