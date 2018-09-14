export default function sortDays(list) {
  const result = [];
  let prevDay = null;

  list.forEach(item => {
    const currentDay = +item.dt_txt.slice(8, 10);
    const currentHour = +item.dt_txt.slice(11, 13);

    if (prevDay !== currentDay) {
      result.push({
        day: currentDay,
        hours: [{ time: currentHour, ...item }],
      });
    }

    if (prevDay === currentDay) {
      const index = result.findIndex(
        resultItem => resultItem.day === currentDay,
      );
      result[index].hours.push({
        time: currentHour,
        ...item,
      });
    }

    prevDay = currentDay;
  });

  return result;
}
