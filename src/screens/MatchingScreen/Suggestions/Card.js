import { useNavigation } from '@react-navigation/native';
import {React,useState,useEffect} from 'react';
import { Button, ImageBackground, View ,Image,TouchableOpacity} from 'react-native';
import { styles } from '../styles/card';

const BASE_URL = '/BASE_URL';

export const Card = ({ 
	id,
	userExperience, 
	type,
	removeUser,
	alertUserMatcher,
	description,
	score,
	userGender,
	userName,
	userAge,
	userSkill,
	userLanguage,
	userCity,
	userHobbies,
	userAvai,
	userPay,
	userId,
	userImage,

}) => {
	const navigation = useNavigation()
	const [currUserDescrption,setCurrUserDiscrption] = useState(description);
	useEffect(()=>{
		setCurrUserDiscrption(description)
	},[])

	const url = BASE_URL + type === 'elder' ? '/ELDER_PAGE' : '/CARE_GIVER_PAGE';

	const onSelect = () => {
		navigation.replace(url + `/${id}`);
	};

	const onRemove = () => {
		removeUser(id);
	};
	const onAlert = ()=>{
		const profileInfo = {
			id,
	userExperience, 
	type,
	removeUser,
	alertUserMatcher,
	description,
	score,
	userGender,
	userName,
	userAge,
	userSkill,
	userLanguage,
	userCity,
	userHobbies,
	userAvai,
	userPay,
	userId,
	userImage,
		}
		alertUserMatcher('' + (score * 100) +'% ' +description , profileInfo)
	}
	


	return (
		<ImageBackground
			source={{ uri: userImage }}
			resizeMode="cover"
			style={styles.image}
		>
			<View style={styles.actions}>
				{/* <Button onPress={onRemove} title="X" style={styles.action} >
					
					</Button> */}
					       <TouchableOpacity onPress={onRemove} style={styles.action}>
          <Image source={require('../../../images/ignoreIcon.png')} style={styles.imageButton} />
        </TouchableOpacity>
		<TouchableOpacity onPress={onAlert} style={styles.button}>
          <Image source={require('../../../images/likeIcon.png')} style={styles.imageButton} />
        </TouchableOpacity>

			</View>
		</ImageBackground>
	);
};
