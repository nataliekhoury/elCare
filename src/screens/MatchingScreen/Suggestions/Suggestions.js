import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Cards } from './Cards';
import { firebase } from '../../../../config';
import { styles } from '../styles/suggestions';
import { getChatCompletion, getSortedCaregivers } from './openAI';

export const Suggestions = ({ suggestedRole }) => {
	const [users, setUsers] = useState([]);
	const [openAIMessage, setOpenAIMessage] = useState('');
	
	useEffect(() => {

		const fetchUsers = async () => {
			try {
				const db = firebase.firestore();
				const userCollection = db.collection('user');
				const userDataCollection = db.collection('userData');
				const userSnapshot = await userCollection
					.where('role', '==', suggestedRole)
					.get();
				const emailAddresses = userSnapshot.docs.map((doc) =>
					doc.data().email.toLowerCase()
				);
				const userDataSnapshot = await userDataCollection
					.where('userId', 'in', emailAddresses)
					.get();
				const users = userDataSnapshot.docs.map((doc) => doc.data());

				setUsers(users);
			} catch (error) {
				console.log('Error:', error);
			}
		};

		const getSuggestions = async () => {
			// setOpenAIMessage('Getting suggestions ..');
			try {
				const res = await getSortedCaregivers(users[3], users);

				const sorted = JSON.parse(res).map((user) => {
					const { userId, description } = user;
					const _user = users.find((u) => u.uesrId === userId);
					return {
						description,
						..._user,
					};
				});

				setUsers(sorted);
				// setOpenAIMessage(res);
			} catch (error) {
				console.error(error);
				console.log('Something went wrong.');
			}
		};

		fetchUsers().then(() => {
			getSuggestions();
		});
	}, []);

	useEffect(() => {
		console.log(openAIMessage);
	}, [openAIMessage]);

	const removeUser = (id) => {
		const filteredUsers = users.filter((careGiver) => careGiver.userId !== id);
		setUsers(filteredUsers);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={styles.title}
			>{`Your matching ${suggestedRole.toLowerCase()}`}</Text>
			<Text
				style={styles.tagline}
			>{`Here you can see your matching ${suggestedRole.toLowerCase()}`}</Text>
			<Cards users={users} role={suggestedRole} removeUser={removeUser} />

			<Text>{openAIMessage}</Text>
		</SafeAreaView>
	);
};
