import checkKey from './checkKey.js';

export default function generateDifference(obj1, obj2) {
  const uniqueKeys = Object.keys({ ...obj1, ...obj2 });
  const unsorterResult = uniqueKeys.reduce((acc, key) => {
    const element = checkKey(key, obj1, obj2);
    return [...acc, element];
  }, []);
  // this required Node-js version >= 20
  /*
    .toSorted((a, b) => {
      if (a.key <= b.key) return -1;
      return 0;
    });
    */
  const sortedResult = unsorterResult.reduce((acc, value) => {
    const nextIndex = acc.findIndex((i) => value.key < i.key);
    const index = nextIndex > -1 ? nextIndex : acc.length;
    return [...acc.slice(0, index), value, ...acc.slice(index, acc.length)];
  }, []);
  return sortedResult;
}
