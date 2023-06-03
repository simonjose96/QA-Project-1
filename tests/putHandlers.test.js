// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody1 =  {
	
        "productsList": [
            {
                "id": 1,
                "quantity": 2
            }
        ]}     

const requestBody2 = {
    
    "productsList": [
            {
                "id": 3,
                "quantity": 1
            }
        ]    
    
}

test('Checking the status code of the put request', async () => {

    let data, statuscode2,kid;      
	try {
		
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
		
			
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody1)
		});
		data = await response.json();
        console.log(data);
		kid = data["id"];
		console.log(kid);
		
	} catch (error) {
		console.error(error);
	}
    
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/${kid}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		data = await response.json();
        console.log(data);
		statuscode2 = response.status;
        console.log(statuscode2);
	} catch (error) {
		console.error(error);
	}
	expect(statuscode2).toBe(200);


})

test('Checking the response of the PUT Request', async () => {
    let data, kid;
    
    try {
		
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
		
			
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody1)
		});
		data = await response.json();
        console.log(data);
		kid = data["id"];
		console.log(kid);
		
	} catch (error) {
		console.error(error);
	}try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/${kid}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
			
		});
        data = await response.json();
        console.log(data);
	} catch (error) {
		console.error(error);
	}
		
        expect(data.wareHouse).toEqual("Fresh Food");
});
