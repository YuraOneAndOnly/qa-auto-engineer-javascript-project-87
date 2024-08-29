import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import importFile from '../src/importFile.js';

test('import JSON file with correct path', () => {
  const fileHexContent = readFileSync(
    '__fixtures__/compareJSONFiles/importFileTests/correctJSONImport.json',
  );
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/compareJSONFiles/importFileTests/correctJSONImport.json',
    detectedEncoding.encoding,
  );
  const result = importFile('__fixtures__/compareJSONFiles/file1.json');
  expect(result).toMatchObject(JSON.parse(referenceResult));
});

test('import JSON file with incorrect path and without extension', () => {
  const result = importFile('/incorrect/path');
  console.log(result);
  expect(result).toMatch('');
});

test('import JSON file with incorrect path but with supported extension', () => {
  const result = importFile('/incorrect/path.json');
  console.log(result);
  expect(result).toMatch('');
});
