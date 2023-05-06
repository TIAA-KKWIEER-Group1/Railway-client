const canBookTicket = (date, time) => {
  const [day, month, year] = date.split('/');
  const [hour, minute] = time.split(':');

  const departureDateTime = new Date(year, month - 1, day, hour, minute);
  const currentDateTime = new Date();

  const currentTimestamp = currentDateTime.getTime();
  const givenTimestamp = departureDateTime.getTime();

  const diffInMilliseconds = givenTimestamp - currentTimestamp;
  const threeHoursInMilliseconds = 3 * 60 * 60 * 1000;

  return diffInMilliseconds > threeHoursInMilliseconds;
};

export default canBookTicket;
