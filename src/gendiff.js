import importFile from './importFile.js';
import compareFiles from './formatters/index.js';

const getFormatName = (formatRawName) => {
  if (typeof formatRawName !== 'string') return formatRawName.format;
  return formatRawName;
};

export default function genDiff(rawPathToFile1, rawPathToFile2, formatRawName) {
  const formatName = getFormatName(formatRawName);
  const fileContent1 = importFile(rawPathToFile1);
  const fileContent2 = importFile(rawPathToFile2);
  try {
    console.log(''); // added one empty line to console output
    const result = compareFiles(fileContent1, fileContent2, formatName);
    console.log(result, '\n');
    return result;
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return err.message; // if any error occured during file import - return empty string
  }
}
