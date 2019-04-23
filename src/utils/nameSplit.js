/**
 * @description This function returns the first name in a full name
 * @param {string} name Full name
 * @returns {string} First name
 */

export default function nameSplit(name) {
  const array = name.split(" ", 2);
  return array[0];
}
