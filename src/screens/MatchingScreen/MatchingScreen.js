import React, { useState, useEffect } from 'react';
import { firebase } from '../../../config';
import { Suggestions } from './Suggestions';

const MatchingScreen = () => {
	const [userRole, setUserRole] = useState('');

	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const user = firebase.auth().currentUser;

				const userDocument = await firebase
					.firestore()
					.collection('user')
					.doc(user.uid)
					.get();
					const _userRole = userDocument.data().role;

				setUserRole(_userRole);
			} catch (error) {
				console.log('Error fetching user role:', error);
			}
		};

		fetchUserRole();
	}, []);

	switch (userRole) {
		case 'Elderly':
			return <Suggestions suggestedRole="Caregiver" />;
		case 'Caregiver':
			return <Suggestions suggestedRole="Elderly" />;
		default:
			return null;
	}
};

export default MatchingScreen;
