import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import importFile from '../src/importFile.js';

test('import JSON file with correct path', () => {
  const fileHexContent = readFileSync(
    '__fixtures__/compareJSONFiles/importFileTests/correctJSONImport.txt',
  );
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/compareJSONFiles/importFileTests/correctJSONImport.txt',
    detectedEncoding.encoding,
  ).trim();
  const result = importFile('__fixtures__/compareJSONFiles/file1.json').trim();
  expect(result).toMatch(referenceResult);
});

test('import JSON file with incorrect path', () => {
  const result = importFile('/incorrect/path');
  console.log(result);
  expect(result).toMatch('');
});
