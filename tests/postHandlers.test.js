// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"products": [
		{
			"id": 5,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 5
		}
	]
}


test('Checking the respnse code of the post request', async () => {
let data, statuscode1;   
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
		
			
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
        console.log(data);
		statuscode1 = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(statuscode1).toBe(200);
});   
	test('Checking the actual response of the Post request', async () => {
		let data;  
			try {
				const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
				
					
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify(requestBody)
				});
				data = await response.json();
				console.log(data);
				
			} catch (error) {
				console.error(error);
			}
	
	
	expect(data).toEqual({
		"Everything You Need": {
			"Sprite Soft Drink": true,
			"Fruit Power Juice - Litchi": false
		},
		"Food City": {
			"Sprite Soft Drink": true,
			"Fruit Power Juice - Litchi": true
		},
		"Big World": {
			"Fruit Power Juice - Litchi": false,
			"Sprite Soft Drink": false
		},
		"Fresh Food": {
			"Sprite Soft Drink": true,
			"Fruit Power Juice - Litchi": true
		}
	})
});
