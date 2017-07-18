const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		const from = 'Hanif';
		const text = 'Hey, it\'s me, Hanif.';
		const message = generateMessage(from, text);
		
		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});

});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		const from = 'Hanif';
		const latitude = '1';
		const longitude = '2';
		const locationMessage = generateLocationMessage(from, latitude, longitude);

		expect(locationMessage).toInclude({
			from,
			url: `https://www.google.com/maps?q=${latitude},${longitude}`
		});
		expect(locationMessage.createdAt).toBeA('number');
	});
});