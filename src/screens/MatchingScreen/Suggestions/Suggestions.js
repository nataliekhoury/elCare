import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text,Alert ,Image} from 'react-native';
import { Cards } from './Cards';
import { firebase } from '../../../../config';
import { styles } from '../styles/suggestions';
import { getChatCompletion, getSortedCaregivers } from './openAI';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
export const Suggestions = ({ suggestedRole,currUserData}) => {
	
	const navigation = useNavigation();
	const [users, setUsers] = useState([]);
	const [usersFB, setUsersFB] = useState([]);

	const [openAIMessage, setOpenAIMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const getSuggestions = async (inpUsers) => {
		setOpenAIMessage('Getting suggestions ..');
		try {
			const res = suggestedRole && await getSortedCaregivers(currUserData, inpUsers,suggestedRole);
			res && setUsers(prevState =>{
				return [...res]
			})
			setOpenAIMessage('here is your suggestions');
			
		} catch (error) {
			console.error('errrSuggis',error);
			setOpenAIMessage('error ' + error);

		}
	};
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const db = firebase.firestore();
				const userCollection = db.collection('user');
				const userDataCollection = db.collection('userData');

				const userSnapshot = await userCollection
					.where('role', '!=', suggestedRole)
					.get();

				const emailAddresses = userSnapshot.docs.map((doc) =>
					doc.data().email.toLowerCase()
				);

				const userDataSnapshot = await userDataCollection
				.where('userId', 'in', emailAddresses)
				.get();

				const usersFromFB = userDataSnapshot.docs
				.map((doc) => doc.data())
				// .filter((userData) => emailAddresses.includes(userData.userId));
			  return usersFromFB;
			} catch (error) {
			  console.error('Error fetching users:', error);
			  return [];
			}
		  
		};
		const usersRes =  fetchUsers();
		usersRes.then((res)=>{
			// console.log('getSugestionInput',res.length)
			res && getSuggestions(res)
		})
	}, [],);
	


	const removeUser = (id) => {
		const filteredUsers = users.filter((careGiver) => careGiver.userId !== id);
		setUsers(filteredUsers);
	};
	const alertUserMatcher = (description,profileInfo) =>{
		navigation.navigate('SelectedUserProfileScreen',profileInfo);
		Alert.alert(description);
	}

	return (
		<ScrollView>
		<SafeAreaView style={styles.container}>
	 <Image
		source={require("../../../images/userBack.png")}
		style={{ left: -20, top: -130, resizeMode: "contain" }}
	  />		
			<Text
				style={styles.title}
			>{`Your matching ${suggestedRole.toLowerCase()=='elderly'?'Caregiver':'Elderly'}`}</Text>
			<Text style={styles.tagline}>{`Here you can see your matching ${suggestedRole.toLowerCase()=='elderly'?'Caregiver':'Elderly'}`}</Text>
			<Cards 
			users={users} 
			role={suggestedRole} 
			removeUser={removeUser} 
			alertUserMatcher = {alertUserMatcher}
			/>

			<Text>{openAIMessage}</Text>
		</SafeAreaView></ScrollView>
	);
};
