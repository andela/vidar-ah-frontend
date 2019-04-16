/**
 * @description This function calculates the difference in hours between now and the date supplied
 * @param {Date} time Reference date in past
 * @returns {integer} Time difference in hours between now and date supplied
 */

export default function timeCalc(time) {
  const date = new Date(time).getTime();
  const now = new Date().getTime();
  const hrs = Math.floor((now - date) / 1000 / 60 / 60);
  return hrs;
}
