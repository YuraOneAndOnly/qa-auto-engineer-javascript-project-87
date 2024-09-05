import generateDifference from '../generateDifference.js';

export default function stylishOutput(obj1, obj2) {
  const difference = generateDifference(obj1, obj2);
  const result = difference.reduce((acc, checkedKey) => {
    switch (checkedKey.type) {
      case 'added': return [...acc, `  + ${checkedKey.key}: ${obj2[checkedKey.key]}`];
      case 'deleted': return [...acc, `  - ${checkedKey.key}: ${obj1[checkedKey.key]}`];
      case 'changed': return [...acc, `  - ${checkedKey.key}: ${obj1[checkedKey.key]}`, `  + ${checkedKey.key}: ${obj2[checkedKey.key]}`];
      default: return [...acc, `    ${checkedKey.key}: ${obj1[checkedKey.key]}`]; // meant 'unchanged' to be default
    }
  }, []);
  return `{\n${result.join('\n')}\n}`;
}
