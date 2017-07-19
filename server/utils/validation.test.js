const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString', () => {
	it('should reject nonstring values', () => {
		const result = isRealString({hey: 'there'});
		expect(result).toBeFalsy;
	});

	it('should reject string with only spaces', () => {
		const result = isRealString('    ');
		expect(result).toBeFalsy;
	});

	it('should allow strings with nonspace characters', () => {
		const result = isRealString('hey');
		expect(result).toBeTruthy;
	});
});