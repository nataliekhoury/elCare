const OPENAI_API_KEY = 'sk-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';
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

const getChatCompletion = async (message) => {
	const requestBody = {
		prompt: message,
		max_tokens: 1000,
		temperature: 0.7,
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
	const responseMessage = responseData.choices[0].text;
	return responseMessage;
};

export const getSortedCaregivers = async (elder, caregivers) => {
	const stringifiedElder = JSON.stringify(elder);
	const stringifiedCaregivers = JSON.stringify(caregivers);

	const markupQuestion = `Given an elder object and a list of caregivers objects, I would like to retrieve a sorted array of caregivers that matches the elder. Each object in the sorted array should contain the caregiver's userId and a brief description of the matching reason, example: [{userId: 'the user id here', description: 'match reason'}].

    Please provide the sorted array of caregivers for the elder, ensuring that only caregivers who speak the same language as the elder are included in the sorted list. Sort the array based on the best match, with the most relevant caregivers appearing first.

    Thank you!
    
    stringifiedElder: ${stringifiedElder}
    stringifiedCaregivers: ${stringifiedCaregivers}`;

	await getChatCompletion(markupQuestion);
};

export const getSortedElderly = async (caregiver, elders) => {
	const stringifiedCaregiver = JSON.stringify(caregiver);
	const stringifiedElder = JSON.stringify(elders);

	const markupQuestion = `Given an caregiver object and a list of elders objects, I would like to retrieve a sorted array of elders that matches the caregiver. Each object in the sorted array should contain the caregiver's userId and a brief description of the matching reason, example: [{userId: 'the user id here', description: 'match reason'}].

    Please provide the sorted array of elders for the caregiver, ensuring that only elders who speak the same language as the caregiver are included in the sorted list. Sort the array based on the best match, with the most relevant caregivers appearing first.

    Thank you!
    
    stringifiedCaregiver: ${stringifiedCaregiver}
    stringifiedElder: ${stringifiedElder}`;

	await getChatCompletion(markupQuestion);
};
