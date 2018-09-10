var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const res = generateMessage('Test@test.com','This is a test message');
        expect(res.from).toBe('Test@test.com');
        expect(res.text).toBe('This is a test message');
        expect(res.createdAt).toBeDefined();
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const res = generateLocationMessage('Admin', 27, 35);
        expect(res.from).toBe('Admin');
        expect(res.url).toBe('https://www.google.com/maps?q=27,35');
        expect(res.createdAt).toBeDefined();
    })
})