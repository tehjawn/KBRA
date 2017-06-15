// === Helper Functions ===

/** 
 * Sanitizes time input string, including removing colon from time string and checking if the number is a
 * valid time between 0 - 2400, and converts it to an integer.
 * @function  parseTimeString
 * @param     {Date} timeDate
 */
export function parseTime(timeDate) {
  let hours = timeDate.getHours();
  let minutes = timeDate.getMinutes();

  if (minutes < 10) minutes = '0' + minutes

  return parseInt(hours + '' + minutes)
}

/**
 * Gets the number of chimes for a particular hour.
 * @function  getBellCount
 * @param     {number} time
 */
export function getBellCount(time) {
  if (time == 2400) return 0
  else if (((time / 100) % 12) == 0) return 12
  return (time / 100) % 12
}

/**
 * Gets the number of times the clock tower will ring between two times within a day.
 * @function  getBellCountAll
 * @param     {Date} startTime
 * @param     {Date} endTime
 */
export function getBellCountAll(startTime, endTime) {
  let totalBellCount = 0;
  let pStartTime = parseTime(startTime)
  let pEndTime = parseTime(endTime)

  if (pStartTime < pEndTime) {
    while (pStartTime <= pEndTime) {
      if (pStartTime % 100 == 0)
        totalBellCount += getBellCount(pStartTime);
      pStartTime++;
    }
    // 2300 - 100
  } else if (pStartTime > pEndTime) {
    while (pStartTime < 2400) {
      if (pStartTime % 100 == 0)
        totalBellCount += getBellCount(pStartTime);
      pStartTime++;
    }

    let i = 0;
    while (i <= pEndTime) {
      if (i % 100 == 0)
        totalBellCount += getBellCount(i);
      i++;
    }
  } else {
    totalBellCount = 78;
  }

  return totalBellCount;
}