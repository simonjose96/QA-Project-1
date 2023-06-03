// eslint-disable-next-line no-undef
const config = require('../config');
let data,statuscode;
test('Checking the status code for GET request', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = await response.json();
		statuscode=response.status;
		console.log(data)
	
	} catch (error) {
		console.error(error);
	}
    expect(statuscode).toBe(200);
});
	test('Check the actual request for GET', async () => {
		try {
			const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
			data = await response.json();
			statuscode=response.status;
			console.log(data)
		
		}
		catch (error) {
			console.error(error);
		}
	expect(data).toEqual([{"name": "Everything You Need", "workingHours": {"end": 23, "start": 7}}, {"name": "Fresh Food", "workingHours": {"end": 23, "start": 8}}, {"name": "Food City", "workingHours": {"end": 21, "start": 8}}, {"name": "Big World", "workingHours": {"end": 20, "start": 5}}]);
    
});
