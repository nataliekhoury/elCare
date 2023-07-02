import React, { useState, useEffect } from 'react';
import { firebase } from '../../../config';
import { Suggestions } from './Suggestions';

const MatchingScreen = () => {
	const [userRole, setUserRole] = useState('');
	const [currUserData,setCurrUserData] = useState({})

	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const user = firebase.auth().currentUser;
				const userDocument = await firebase
					.firestore()
					.collection('user')
					.doc(user.uid)
					.get();
					const userDocumentData = await firebase
					.firestore()
					.collection('userData')
					.doc(user.uid)
					.get();
					const _userRole = userDocument.data().role;
					setCurrUserData({...userDocumentData.data()});
					setUserRole(_userRole);

			} catch (error) {
				console.log('Error fetching user role:', error);
			}
		};

		fetchUserRole();
	}, []);
	
		return userRole?<Suggestions suggestedRole={userRole} currUserData={currUserData}/>:null;
};

export default MatchingScreen;
