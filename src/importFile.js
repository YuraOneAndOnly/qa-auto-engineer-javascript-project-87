import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import path from 'node:path';

export default function importFile(rawPathToFile) {
  try {
    const pathToFile = path.resolve(rawPathToFile);
    const fileHexContent = readFileSync(pathToFile);
    const detectedEncoding = jschardet.detect(fileHexContent);
    const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
    return fileContent;
  } catch (err) {
    console.log('Error!');
    console.log(err);
    return '';
  }
}
