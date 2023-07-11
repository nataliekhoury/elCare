import React from 'react';
import { View } from 'react-native';
import { Card,Image } from './Card';
import { styles } from '../styles/cards';
import { ScrollView } from 'react-native-gesture-handler';

export const Cards = ({ users, role, removeUser,alertUserMatcher,onPressSuggestedUser }) => {	
	return (
	

	  <ScrollView>
	  <View style={styles.container}>
		
			{users.map((user,key) => (
				<Card 
				
					key={user.userId +key }
					id={user.userId}
					userImage={user.userImage}
					role={role}
					removeUser={removeUser}
					alertUserMatcher = {alertUserMatcher}
					description ={user.description}
					score = {user.score}
					{...user}
					onPress = {onPressSuggestedUser}
				/>
			))}
		</View>
		</ScrollView>
	
	);
};
