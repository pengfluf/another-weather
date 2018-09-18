import weekDaysDB from './data/weekDays';

export default function getWeekDay(timestamp, weekDays = weekDaysDB) {
  const weekDayIndex = new Date(timestamp * 1000).getDay();
  return weekDays[weekDayIndex];
}
