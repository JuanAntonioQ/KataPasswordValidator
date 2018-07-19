import password from '../src/password'

describe('The password', () => {

    it('cannot be empty', () => {
        expect(password()).toBe(undefined);
    })

    it('shouldnt have less than 8 characters', () => {
        const value = "A1bbb";
        expect(password(value)).toBe(false);
    });

    it('is not valid when do not have any uppercase letter', () => {
        const value = "c1cdlsdnsdnskldn";
        expect(password(value)).toBe(false);
    })

    it('is not valid when do not have any number', () => {
        const value= "cAdosndosndooo";
        expect(password(value)).toBe(false);
    })

    it('is not valid when do not have any lowercase letter', () => {
        const value = "BBBBBBBDDDDD11111CCCC";
        expect(password(value)).toBe(false);
    })
    
    
});