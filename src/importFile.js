import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import path from 'node:path';

const supportedFormats = ['.json'];

export default function importFile(rawPathToFile) {
  const pathToFile = path.resolve(rawPathToFile.trim());
  const dotIndex = pathToFile.lastIndexOf('.');
  const fileExtension = pathToFile.slice(dotIndex, pathToFile.length);
  if (supportedFormats.includes(fileExtension.toLowerCase())) {
    try {
      const fileHexContent = readFileSync(pathToFile);
      const detectedEncoding = jschardet.detect(fileHexContent);
      const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
      const json = JSON.parse(fileContent);
      return json;
    } catch (err) {
      console.log('\nError!\n');
      console.log(err.message, '\n');
      return '';
    }
  } else {
    console.log('\nWarning!\n');
    console.log(
      "You haven't specified the file format or the file of this format is not supported.",
    );
    console.log(`List of supported formats: ${supportedFormats}\n`);
    return '';
  }
}
