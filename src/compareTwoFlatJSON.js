import twoFilesIntoOneArray from './twoFilesIntoOneArray.js';

export default function compareTwoFlatJSON(json1, json2) {
  let existingInBothFiles = [];
  let result = ['{'];
  const sumArray = twoFilesIntoOneArray(json1, json2);
  sumArray.forEach((element) => {
    if (!existingInBothFiles.includes(element.toString())) {
      if (Object.hasOwn(json1, element[0]) && Object.values(json1).includes(element[1])) {
        if (Object.values(json2).includes(element[1])) {
          result.push(`    ${element[0]}: ${element[1]}`);
        } else {
          result.push(`  - ${element[0]}: ${element[1]}`);
        }
        existingInBothFiles.push(element.toString());
      } else {
        result.push(`  + ${element[0]}: ${element[1]}`);
      }
    }
  });
  result.push('}');
  return result.join('\n');
}
