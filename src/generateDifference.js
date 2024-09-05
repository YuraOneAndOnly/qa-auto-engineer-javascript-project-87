import checkKey from './checkKey.js';

export default function generateDifference(obj1, obj2) {
  const uniqueKeys = Object.keys({ ...obj1, ...obj2 });
  const result = uniqueKeys
    .reduce((acc, key) => {
      const el = checkKey(key, obj1, obj2);
      return [...acc, el];
    }, [])
    .toSorted((a, b) => {
      if (a.key <= b.key) return -1;
      return 0;
    });
  return result;
}
