/* eslint-disable import/prefer-default-export */
export const validateArticle = (articleData) => {
  const fieldsArr = Object.entries(articleData);
  const errors = [];
  fieldsArr.forEach((field) => {
    if (!field[1]) {
      errors.push(`${field[0]} is required.`);
    } else if (field[1].length < 10) {
      errors.push(`${field[0]} should not be less than 10 characters long.`);
    }
  });
  return errors;
};
