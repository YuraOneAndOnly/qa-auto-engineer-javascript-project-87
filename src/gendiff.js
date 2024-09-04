import importFile from './importFile.js';
import compareFiles from './formatters/index.js';

export default function genDiff(rawPathToFile1, rawPathToFile2, formatRawName) {
  const formatName = {};
  if (typeof formatRawName !== 'string') {
    formatName.format = formatRawName.format;
  } else {
    formatName.format = formatRawName;
  }
  const fileContent1 = importFile(rawPathToFile1);
  const fileContent2 = importFile(rawPathToFile2);
  try {
    console.log(''); // added one empty line to console output
    console.log(compareFiles(fileContent1, fileContent2, formatName.format), '\n');
    return compareFiles(fileContent1, fileContent2, formatName.format);
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return err.message; // if any error occured during file import - return empty string
  }
}
