import path from "node:path";
import importFile from "./importFile.js";
import compareTwoFlatJSON from "./compareTwoFlatJSON.js";

export default function compareJSONFiles(rawPathToFile1, rawPathToFile2) {
  const fileContent1 = importFile(path.resolve(rawPathToFile1));
  const fileContent2 = importFile(path.resolve(rawPathToFile2));
  const json1 = JSON.parse(fileContent1);
  const json2 = JSON.parse(fileContent2);
  const result = compareTwoFlatJSON(json1, json2);
  console.log(result);
  return result;
}
