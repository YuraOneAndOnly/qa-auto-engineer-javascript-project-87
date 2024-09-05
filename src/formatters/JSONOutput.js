import generateDifference from '../generateDifference.js';

export default function JSONOutput(obj1, obj2) {
  const difference = generateDifference(obj1, obj2);
  const result = difference.reduce((acc, checkedKey) => {
    const { key, type } = checkedKey;
    switch (type) {
      case 'added':
        return { ...acc, ...{ [key]: obj2[key] } };
      case 'deleted':
        return { ...acc, ...{ [key]: obj1[key] } };
      case 'changed':
        return { ...acc, ...{ [key]: obj2[key] } };
      default:
        return { ...acc, ...{ [key]: obj1[key] } };
      // meant 'unchanged' to be default
    }
  }, []);
  return result;
}
