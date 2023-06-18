import React from 'react';
import { View } from 'react-native';
import { Card } from './Card';
import { styles } from '../styles/cards';

export const Cards = ({ users, role, removeUser }) => {
	return (
		<View style={styles.container}>
			{users.map((user) => (
				<Card
					key={user.userId}
					id={user.userId}
					userImage={user.userImage}
					role={role}
					removeUser={removeUser}
				/>
			))}
		</View>
	);
};
