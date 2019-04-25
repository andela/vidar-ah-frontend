/* eslint-disable import/prefer-default-export */
const validateArticle = (articleData) => {
  const fieldsArr = Object.entries(articleData);
  const errors = [];
  fieldsArr.forEach((field) => {
    if (field[0] !== 'image') {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
      } else if (field[1].length < 10) {
        errors.push(`${field[0]} should not be less than 10 characters long.`);
      }
    }
  });
  return errors;
};

const validateUserProfile = (userData) => {
  const fieldsArr = Object.entries(userData);
  const errors = [];
  fieldsArr.forEach((field) => {
    if (!field[1]) {
      errors.push(`${field[0]} is required.`);
    } else if (typeof field[1] !== 'string') {
      errors.push(`${field[0]} is invalid`);
    } else if (field[1].length > 255) {
      errors.push(`${field[0]} should not be more than 255 characters long`);
    }
  });
  return errors;
};

module.exports = {
  validateArticle, validateUserProfile
};
