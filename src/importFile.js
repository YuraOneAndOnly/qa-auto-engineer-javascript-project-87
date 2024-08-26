import { readFileSync } from 'node:fs';
import jschardet from 'jschardet'

export default function importFile(pathToFile) {
  try {
    const fileHexContent = readFileSync(pathToFile);
    const detectedEncoding = jschardet.detect(fileHexContent);
    const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
    return fileContent;
  } catch (err) {
    console.log('Error!');
    console.log(err);
  }
}
