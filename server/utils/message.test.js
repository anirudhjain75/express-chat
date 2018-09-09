var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const res = generateMessage('Test@test.com','This is a test message');
        expect(res.from).toBe('Test@test.com');
        expect(res.text).toBe('This is a test message');
        expect(res.createdAt).toBeDefined();
    });
});