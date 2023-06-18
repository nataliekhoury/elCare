import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ImageBackground, View } from 'react-native';
import { styles } from '../styles/card';

const BASE_URL = '/BASE_URL';

export const Card = ({ id, userImage, type, removeUser }) => {
	const navigation = useNavigation();

	const url = BASE_URL + type === 'elder' ? '/ELDER_PAGE' : '/CARE_GIVER_PAGE';

	const onSelect = () => {
		navigation.replace(url + `/${id}`);
	};

	const onRemove = () => {
		removeUser(id);
	};

	return (
		<ImageBackground
			source={{ uri: userImage }}
			resizeMode="cover"
			style={styles.image}
		>
			<View style={styles.actions}>
				<Button onPress={onRemove} title="X" style={styles.action} />
				<Button onPress={onSelect} title="V" style={styles.button} />
			</View>
		</ImageBackground>
	);
};
