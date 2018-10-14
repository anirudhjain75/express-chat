const expect = require('expect');

//import is real string
let {isRealString} =  require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(102)).toBe(false)
    });

    it('should reject all-space values', () => {
        expect(isRealString('      ')).toBe(false);
    });

    it('should allow strings with non-space value', () => {
        expect(isRealString('Chocolate')).toBe(true);
    });

});

//isRealString
    //should reject non-string values
    //should reject all-space string
    //should allow strings with non-space value