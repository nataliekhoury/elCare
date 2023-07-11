import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	image: {
		height: 180,
		width: 120,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 24,
		borderRadius:10,
		borderColor:'black'
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		gap: 14,
	},
	action: {
		width: 24,
		height: 24,
		// borderRadius: 9999,
	},
});
