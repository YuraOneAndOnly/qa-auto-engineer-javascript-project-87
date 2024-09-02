import importFile from './importFile.js';
import compareFiles from './formatters/index.js';

export default function gendiff(rawPathToFile1, rawPathToFile2, formatRawName = 'json') {
  let formatName;
  if (typeof formatRawName !== 'string') {
    formatName = formatRawName.format;
  } else {
    formatName = formatRawName;
  }
  const fileContent1 = importFile(rawPathToFile1);
  const fileContent2 = importFile(rawPathToFile2);
  let result;
  try {
    result = compareFiles(fileContent1, fileContent2, formatName);
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return err.message; // if any error occured during file import - return empty string
  }
  console.log(''); // added one empty line to console output
  console.log(result, '\n');
  return result;
}
