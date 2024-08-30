import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';

export default function importExampleFile(pathToFile) {
  const fileHexContent = readFileSync(pathToFile);
  const detectedEncoding = jschardet.detect(fileHexContent);
  return readFileSync(pathToFile, detectedEncoding.encoding).trim();
}
