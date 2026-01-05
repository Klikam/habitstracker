export const generateDatesInRange = (start, end) => {
  const dates = [];
  const day = new Date(start);

  while (day <= end) {
    dates.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }

  return dates;
};

export const formatDate = date => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
