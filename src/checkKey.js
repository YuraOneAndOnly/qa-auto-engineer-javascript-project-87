export default function checkKey(key, obj1, obj2) {
  const obj1Value = obj1[key];
  const obj2Value = obj2[key];
  if (typeof obj1Value === 'undefined') {
    return { key, type: 'added' };
  }
  if (typeof obj2Value === 'undefined') {
    return { key, type: 'deleted' };
  }
  if (obj1Value !== obj2Value) {
    return { key, type: 'changed' };
  }
  return { key, type: 'unchanged' };
}
