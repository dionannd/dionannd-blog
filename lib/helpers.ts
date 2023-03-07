/**
 * Generates time to AM PM automatically
 */
export const formatTime = (date: Date) => {
  const currentTime = date;
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const newHours = hours % 12;
  const customHours = newHours ? newHours : 12;
  const newMinutes = minutes < 10 ? "0" + minutes : minutes;
  const time = customHours + ":" + newMinutes + " " + ampm;
  return time;
};
