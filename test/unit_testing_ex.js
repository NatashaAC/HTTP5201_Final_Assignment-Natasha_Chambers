import { strictEqual } from 'assert';
 
const noNines = [1, 2, 3, 5];
 
describe('noNines', () => {
    it('should not contain the number 9', () => {
      strictEqual(noNines.indexOf(9), -1);
  });
});