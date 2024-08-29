import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import importFile from '../src/importFile.js';

test('import JSON file with correct path', () => {
  const fileHexContent = readFileSync(
    '__fixtures__/importFileTests/correctJSONImport.json',
  );
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/importFileTests/correctJSONImport.json',
    detectedEncoding.encoding,
  );
  const result = importFile('__fixtures__/exampleJSONFiles/file1.json');
  expect(result).toMatchObject(JSON.parse(referenceResult));
});

test('import JSON file with incorrect path and without extension', () => {
  expect(importFile('/incorrect/path')).toMatch('');
});

test('import JSON file with incorrect path but with supported extension', () => {
  expect(importFile('D://////TEST/PATH/FFFF.json')).toMatch('');
});
