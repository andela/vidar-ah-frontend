/**
 * @description This function returns the date in a readable format
 * @param {Date} time Machine date
 * @returns {string} Time in readable form
 */

export default function timeStamp(time) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const converted = new Date(time);
  const date = (new Intl.DateTimeFormat('en-US', options).format(converted));
  return date;
}
