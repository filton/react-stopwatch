export function formatTime(timeInCentiSeconds) {
  let hours = Math.floor(timeInCentiSeconds / 3600000);
  let minutes = Math.floor(timeInCentiSeconds / 6000);
  let seconds = Math.floor((timeInCentiSeconds % 6000) / 100);
  let centiSeconds = timeInCentiSeconds % 100;

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (centiSeconds < 10) {
    centiSeconds = `0${centiSeconds}`;
  }

  if (minutes < 59.59) {
    return `${minutes}:${seconds}.${centiSeconds}`;
  } else {
    return `${hours}:${minutes}:${seconds}.${centiSeconds}`;
  }
}
