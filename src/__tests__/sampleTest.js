/* eslint-env jest */
const addNumbers = (a, b) => a + b;

describe('Add numbers test', () => {
  it('should return 4', () => {
    const result = addNumbers(2, 2);
    expect(result).toBe(4);
  });
});
