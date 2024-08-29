import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import compareJSONFiles from '../src/compareJSONFiles.js';

test('two flat JSON files in order 1 > 2', () => {
  const fileHexContent = readFileSync('__fixtures__/compareJSONFiles/resultOfCompare.txt');
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/compareJSONFiles/resultOfCompare.txt',
    detectedEncoding.encoding,
  ).trim();
  const result = compareJSONFiles(
    '__fixtures__/exampleJSONFiles/file1.json',
    '__fixtures__/exampleJSONFiles/file2.json',
  ).trim();
  expect(result).toMatch(referenceResult);
});
