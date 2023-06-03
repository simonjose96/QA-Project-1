// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	// put your body here
	"cardId" : 1,
	"name" : "First kit"
}



test('DELETING A KIT', async () => {
	let data, kid;
	try {
		
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
		
			
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
        console.log(data);
		kid = data["id"];
		console.log(kid);
		
	} catch (error) {
		console.error(error);
	}
	let statuscode3;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kid}`, {
			method: 'DELETE',
		});
		data = await response.json();
        console.log(data);
		statuscode3 = response.status;
    } catch (error) {
        console.error(error);
    }
	expect(statuscode3).toBe(200);
	
});

test('Verifiy the response of the delete request', async () => {
	let data, kid;
	try {
		
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
		
			
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
        console.log(data);
		kid = data["id"];
		console.log(kid);
		
	} catch (error) {
		console.error(error);
	}
	
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kid}`, {
			method: 'DELETE',
		});
		data = await response.json();
        console.log(data);
		
    } catch (error) {
        console.error(error);
    }
	expect(data).toEqual({ ok: true });
	
});

