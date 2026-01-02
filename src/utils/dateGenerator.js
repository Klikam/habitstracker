export const generateDatesInRange = (
  start = "2026-01-01",
  end = "2026-02-28"
) => {
  const dates = [];
  let startDate = new Date(start);
  const endDate = new Date(end);

  while (startDate <= endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
};

export const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
};
