// OpenWeather API can give you cities with the same ID.
// It's obviously not what we want.
export default function normalizeSearched(list) {
  const result = [];
  const ids = [];

  list.forEach(item => {
    if (!ids.includes(item.id)) {
      ids.push(item.id);
      result.push(item);
    }
  });

  return result;
}
