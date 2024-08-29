import importFile from './importFile.js';
import compareTwoFlatJSON from './compareTwoFlatJSON.js';

export default function compareJSONFiles(rawPathToFile1, rawPathToFile2) {
  const fileContent1 = importFile(rawPathToFile1);
  const fileContent2 = importFile(rawPathToFile2);
  const result = compareTwoFlatJSON(fileContent1, fileContent2);
  console.log(result, '\n');
  return result;
}
