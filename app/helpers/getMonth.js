import monthsDB from './data/months';

export default function getMonth(timestamp, months = monthsDB) {
  const monthIndex = new Date(timestamp * 1000).getMonth();
  return months[monthIndex];
}
