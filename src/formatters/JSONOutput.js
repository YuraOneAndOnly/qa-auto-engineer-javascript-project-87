import twoFilesIntoOneArray from '../twoFilesIntoOneArray.js';

export default function JSONOutput(json1, json2) {
  const existingInBothFiles = [];
  const result = {};
  const sumArray = twoFilesIntoOneArray(json1, json2);
  sumArray.forEach((element) => {
    const [key, value] = element;
    if (!existingInBothFiles.includes(element.toString())) {
      if (Object.hasOwn(json1, key) && Object.values(json1).includes(value)) {
        if (Object.values(json2).includes(value)) {
          result[key] = value;
        } else {
          result[key] = value;
        }
        existingInBothFiles.push(element.toString());
      } else {
        result[key] = value;
      }
    }
  });
  return JSON.stringify(result);
}
