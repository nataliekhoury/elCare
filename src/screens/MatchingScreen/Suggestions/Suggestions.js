import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text,Alert } from 'react-native';
import { Cards } from './Cards';
import { firebase } from '../../../../config';
import { styles } from '../styles/suggestions';
import { getChatCompletion, getSortedCaregivers } from './openAI';
import { useNavigation } from "@react-navigation/native";
export const Suggestions = ({ suggestedRole,currUserData}) => {
	
	const navigation = useNavigation();
	const [users, setUsers] = useState([]);
	const [openAIMessage, setOpenAIMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

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
				const users = userDataSnapshot.docs.map((doc) => {
					const currObj = doc.data();
					return currObj;
				});
				return users
			} catch (error) {
				console.log('Error:', error);
			}
		};

		const getSuggestions = async (users) => {
			setOpenAIMessage('Getting suggestions ..');
			try {
				const res = await getSortedCaregivers(currUserData, users);
				console.log('getSortedCaregiversRESALL ',res);
				setUsers([...res]);
				setOpenAIMessage('here is your suggestions');
			} catch (error) {
				console.error('errrSuggis',error);
			}
		};

		fetchUsers().then((res) => {
			getSuggestions(res);
		});
	}, []);

	// useEffect(() => {
	// 	console.log('openAIMessage',openAIMessage);
	// }, [openAIMessage]);

	const removeUser = (id) => {
		const filteredUsers = users.filter((careGiver) => careGiver.userId !== id);
		setUsers(filteredUsers);
	};
	const alertUserMatcher = (description,profileInfo) =>{
		navigation.navigate('SelectedUserProfileScreen',profileInfo);
		Alert.alert(description);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={styles.title}
			>{`Your matching ${suggestedRole.toLowerCase()=='elderly'?'Cargever':'Elderley'}`}</Text>
			<Text
				style={styles.tagline}
			>{`Here you can see your matching ${suggestedRole.toLowerCase()=='elderly'?'Cargever':'Elderley'}`}</Text>
			<Cards 
			users={users} 
			role={suggestedRole} 
			removeUser={removeUser} 
			alertUserMatcher = {alertUserMatcher}
			/>

			<Text>{openAIMessage}</Text>
		</SafeAreaView>
	);
};
