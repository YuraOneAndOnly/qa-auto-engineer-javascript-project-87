import path from 'node:path';
import importFile from './importFile.js';

export default function compareJSONFiles(rawPathToFile1, rawPathToFile2) {
  const pathToFile1 = path.resolve(rawPathToFile1);
  const fileContent1 = importFile(pathToFile1);
  const pathToFile2 = path.resolve(rawPathToFile2);
  const fileContent2 = importFile(pathToFile2);
  const json1 = JSON.parse(fileContent1);
  const json2 = JSON.parse(fileContent2);
  let sumArray = [];
  let existingInBothFiles = [];
  let result = ['{'];
  Object.entries(json1).map((pair) => sumArray.push(pair));
  Object.entries(json2).map((pair) => sumArray.push(pair));

  sumArray.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
  sumArray.forEach((element) => {
    if (!existingInBothFiles.includes(element.toString())) {
      if (Object.hasOwn(json1, element[0]) && Object.hasOwn(json2, element[0])) {
        if (
          Object.values(json1).includes(element[1]) &&
          !Object.values(json2).includes(element[1])
        ) {
          result.push(`  - ${element[0]}: ${element[1]}`);
        } else if (
          Object.values(json2).includes(element[1]) &&
          !Object.values(json1).includes(element[1])
        ) {
          result.push(`  + ${element[0]}: ${element[1]}`);
        } else {
          result.push(`    ${element[0]}: ${element[1]}`);
        }
        existingInBothFiles.push(element.toString());
      } else {
        if (!Object.hasOwn(json2, element[0])) {
          result.push(`  - ${element[0]}: ${element[1]}`);
        } else {
          result.push(`  + ${element[0]}: ${element[1]}`);
        }
      }
    }
  });
  result.push('}');
  result.join('\n');
  console.log(result.join('\n'));
  return result.join('\n');
}
