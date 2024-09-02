import twoFilesIntoOneArray from '../twoFilesIntoOneArray.js';

export default function plainOutput(json1, json2) {
  const result = [];
  const existingInBothFiles = [];
  const sumArray = twoFilesIntoOneArray(json1, json2);
  sumArray.forEach((element) => {
    if (Object.hasOwn(json1, element[0])) {
      if (Object.hasOwn(json2, element[0]) && !existingInBothFiles.includes(element[0])) {
        existingInBothFiles.push(element[0]);
        if (JSON.stringify(json1[element[0]]) !== JSON.stringify(json2[element[0]])) {
          result.push(`Property '${element[0]}' was updated. From ${json1[element[0]]} to ${json2[element[0]]}`);
        }
      } else if (!Object.hasOwn(json2, element[0])) {
        result.push(`Property '${element[0]}' was removed`);
      }
    } else {
      result.push(`Property '${element[0]}' was added with value: ${json2[element[0]]}`);
    }
  });
  return result.join('\n');
}
