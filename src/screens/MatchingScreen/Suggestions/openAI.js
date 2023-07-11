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



export const getSortedCaregivers = async (elder, caregivers,suggestedRole) => {
	console.log('=====getSortedCaregivers=elder',elder);
	console.log('=====getSortedCaregivers=caregivers.length',caregivers.length)
	console.log('=====getSortedCaregivers=suggestedRole',suggestedRole)

	const currUser = elder;
	const originalUsersCopy = [...caregivers];
	const MAX_GROUP_LEN = 5;
	let GROUP_SIZE = caregivers.length<MAX_GROUP_LEN?caregivers.length :MAX_GROUP_LEN;
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

	const intialMarkupQuestion = `Given an ${suggestedRole} object suggestedRole= ${JSON.stringify(currUser)} and other users array of objects, 
	I want to return a new array containing scoring range 0 to 1 that is based of the elements object that best fits the givern suggestedRole, according
	to the requirements and needs registered, same language, city, etc. 
	Please note that you are giving priorityOfAttr = ${priorityOfAttr}. 
	This array is ordered according to the priority of explaining how much each attribute is important, where priorityOfAttr[0] is the most important.
	Output score = {userId, userRole, description: 'match reason in details how much does it fit to the requirements of the needs of elder object', score: }.
	No explaination of the scores is needed, just a more detailed explantion for the rest criterias in case the score bellow 0.6 say why, store the output in the RESULT_ARRAY_OF_SCORES 
	elder: ${filteredElder} caregiversArr:`;
	if(suggestedRole == "Elderly"){

		// const intialMarkupQuestion = `Given an ${suggestedRole} object suggestedRole= ${JSON.stringify(currUser)} and other users array of objects, 
		// I want to return a new array containing scroing range 0 to 1 that is based of the elements object that best fits the givern suggestedRole, according
		// to the requirements and needs registered, same language, city, etc. 
		// Please note that you are giving priorityOfAttr = ${priorityOfAttr}. 
		// This array is ordered according to the priority of explaining how much each attribute is important, where priorityOfAttr[0] is the most important.
		// Output score = {userId, userRole, description: 'match reason in details how much does it fit to the requirements of the needs of elder object', score: }.
		// No explaination of the scores is needed, just a more detailed explantion for the rest criterias in case the score bellow 0.6 say why, store the output in the RESULT_ARRAY_OF_SCORES 
		// elder: ${filteredElder} caregiversArr:`;
	}else{

	}

	const promises = groups.map(async (array) => {
		const markupQuestion = `${intialMarkupQuestion}${JSON.stringify(array)} RESULT_ARRAY_OF_SCORES`;
		// console.log('testMarkup',markupQuestion)
		const openAiRes = await getChatCompletion(markupQuestion);
		// console.log('openAiRes',openAiRes)
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
 
