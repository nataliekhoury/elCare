import { useState } from "react";

const OPENAI_API_KEY = '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';
const OPENAI_API_URL = 'https://api.openai.com/v1/completions';

const getChatCompletion = async (message) => {	
	const requestBody = {
		prompt: message,
		max_tokens: 2000,
		model :'text-davinci-003',
		temperature: 0.3,
	};

	const response = await fetch(OPENAI_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${OPENAI_API_KEY}`,
		},
		body: JSON.stringify(requestBody),
	});

	const responseData = await response.json();
	if(responseData.choices){
		let responseMessage = responseData.choices[0].text;
		let parsedResponse;
		try{
			const startIndex = responseMessage.indexOf("[");
			const endIndex = responseMessage.lastIndexOf("]");
			const jsonContent = responseMessage.substring(startIndex, endIndex + 1);
			parsedResponse = eval(jsonContent);
		}catch(err){
			console.error('getChatCompletioerrparsing',err)
		}
		
		return parsedResponse;
	}
	
};



export const getSortedCaregivers = async (elder, caregivers) => {
	const currUser = elder;
	console.log(' currUserResToCompare',currUser)
	const originalUsersCopy = [...caregivers];
	const GROUP_SIZE = 3;
	const arrAttr = [
		"userId",
		"userName",
		"userCity", 
		"userGender",
		 "userLanguage", 
		 "userHobbies",
		 "userSkill",
		 "userPay",
		 "userExprience",
		 "userAvai"
		];
	const priorityOfAttr = [
		"userCity",
		"userSkill",
		"userExprience",
		"userAvai",
		"userPay",
		"userHobbies"
	]
		
	let filteredCaregivers = getFillteredArray(caregivers,arrAttr);
	const groups = createGroups(filteredCaregivers,GROUP_SIZE);
	// filteredCaregivers = getRelevantUsers(filteredCaregivers,currUser);
	const filteredElder = getObjByAttr(elder,arrAttr);
	// const intialMarkupQuestion = 
	// `Given an elder object and other caregiversArr array of objects, 
	// I would like to return new  array that contains scores out of 1 how much the object are similar 
	// please note that you arr giving priorityOfAttr = ${JSON.stringify(priorityOfAttr)} this is orderd according priority of how much each attrIs important priorityOfAttr[0] is most important
 	// output score = {userId,userRole, description: 'match reason how man simliarite ',score:}.
	// i need the result of my question to be a json store it in result as json such that when i parse the result of the api to get the array already i dont need any code only the result 
	// elder: ${filteredElder} caregiversArr:`;

	const intialMarkupQuestion = `Given an elder object elder= ${JSON.stringify(currUser)} and other caregiversArr array of objects, 
	I would like to return a new array that contains scores out of range 0 to  1 the scores are based on how much each caregiversArr object  elment
	does it most sutiable to take care  to the requrment and the needs of elder object also if same city languges and so on.
	Please note that you are giving priorityOfAttr =${priorityOfAttr}. 
	This array is ordered according to the priority of how much each attribute is important, where priorityOfAttr[0] is the most important.
	Output score = {userId, userRole, description: 'match reason how much does it fit to the requrment of the needs of elder object', score: }.
	No explnation of the scores needed store the output in the RESULT_ARRAY_OF_SCORES 
	elder: ${filteredElder} caregiversArr:`
	const promises = groups.map(async (array) => {
		const markupQuestion = `${intialMarkupQuestion}${JSON.stringify(array)} RESULT_ARRAY_OF_SCORES`;
		console.log('testMarkup',markupQuestion)
		const openAiRes = await getChatCompletion(markupQuestion);
		console.log('openAiRes',openAiRes)
		return openAiRes;
	  });
	  
const results = await Promise.all(promises);
const scoresArr = results.flat();
originalUsersCopy.sort((a, b) => {
  const scoreA = scoresArr.find((score) => score.userId === a.userId)?.score || 0;
  const scoreB = scoresArr.find((score) => score.userId === b.userId)?.score || 0;
  return scoreB - scoreA;
});

// Add description from scoresArr to originalUsersCopy
originalUsersCopy.forEach((user) => {
  const scoreData = scoresArr.find((score) => score.userId === user.userId);
  if (scoreData) {
    user.description = scoreData.description;
	user.score = scoreData.score;
  
}
});

return originalUsersCopy;
};
/** helper function  */
const getRelevantUsers = (arrayUsers, currUser) => {
	const currUserLanguages = currUser.userLanguage;
	const currUserLanguagesArr = currUserLanguages?.toLowerCase().split(',');
  
	return arrayUsers.filter((user) => {
	  const userLanguages = user.userLanguage;
	  const userLanguagesArr = userLanguages.toLowerCase().split(',');
  
	  const hasCommonLanguage = userLanguagesArr.some((language) =>
		currUserLanguagesArr.includes(language.trim())
	  );
  
	  return hasCommonLanguage;
	});
};

const getFillteredArray = (array,arrAttr) =>{
 return	array.map(obj => {
		return getObjByAttr(obj,arrAttr);
	  });	  
}
const getObjByAttr = (obj,arrAttr)=>{
	try{
		const filteredObj = {};
		arrAttr.forEach(attr => {
			filteredObj[attr] = obj[attr];
		  });
		  return filteredObj
	}catch(err){
		console.error('OpenAi.getObjByAttr',err)
	}
	
}
const  createGroups = (arr, groupSize) =>{
	const groups = [];
	const length = arr.length;
	for (let i = 0; i < length; i += groupSize) {
	  groups.push(arr.slice(i, i + groupSize));
	}
	return groups;
  }
 
