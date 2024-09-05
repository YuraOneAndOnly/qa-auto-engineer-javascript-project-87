import generateDifference from '../generateDifference.js';

export default function plainOutput(obj1, obj2) {
  const difference = generateDifference(obj1, obj2);
  const result = difference.reduce((acc, checkedKey) => {
    switch (checkedKey.type) {
      case 'added':
        return [
          ...acc,
          `Property '${checkedKey.key}' was added with value: ${obj2[checkedKey.key]}`,
        ];
      case 'deleted':
        return [...acc, `Property '${checkedKey.key}' was removed`];
      case 'changed':
        return [
          ...acc,
          `Property '${checkedKey.key}' was updated. From ${obj1[checkedKey.key]} to ${obj2[checkedKey.key]}`,
        ];
      default:
        return acc; // meant 'unchanged' to be default
    }
  }, []);
  return result.join('\n');
}
