import path from 'node:path';
import importFile from '../src/importFile.js'

export default function compareFiles(rawPathToFile1, rawPathToFile2) {
  const pathToFile1 = path.resolve(rawPathToFile1);
  const fileContent1 = importFile(pathToFile1);
  const pathToFile2 = path.resolve(rawPathToFile2);
  const fileContent2 = importFile(pathToFile2);
  console.log('File №1:\n');
  console.log(typeof(fileContent1), '\n')
  console.log(fileContent1, '\n');
  console.log('File №2:\n');
  console.log(typeof(fileContent2), '\n')
  console.log(fileContent2, '\n');
}
