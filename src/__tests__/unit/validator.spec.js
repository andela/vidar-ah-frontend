import { validateArticle } from '../../utils/validator';

const invalidData = {
  title: null,
  description: null,
  body: null
};

const incompleteData = {
  title: 'psif',
  description: 'wosriv',
  body: 'wvwpoirv'
};

describe('Validator', () => {
  it('should return errors if the data is null', () => {
    const errors = validateArticle(invalidData);
    expect(Array.isArray(errors)).toBe(true);
    expect(errors[0]).toBe('title is required.');
    expect(errors[1]).toBe('description is required.');
    expect(errors[2]).toBe('body is required.');
  });

  it('should return errors if the data is incomplete', () => {
    const errors = validateArticle(incompleteData);
    expect(Array.isArray(errors)).toBe(true);
    expect(errors[0]).toBe('title should not be less than 10 characters long.');
    expect(errors[1]).toBe('description should not be less than 10 characters long.');
    expect(errors[2]).toBe('body should not be less than 10 characters long.');
  });
});
