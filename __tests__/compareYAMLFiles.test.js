import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import compareFiles from '../src/compareFiles.js';

test('two flat YAML files (.yaml)', () => {
  const fileHexContent = readFileSync('__fixtures__/compareYAMLFiles/resultOfCompare.txt');
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/compareYAMLFiles/resultOfCompare.txt',
    detectedEncoding.encoding,
  ).trim();
  const result = compareFiles(
    '__fixtures__/exampleYAMLFiles/file1.yaml',
    '__fixtures__/exampleYAMLFiles/file2.yaml',
  ).trim();
  expect(result).toMatch(referenceResult);
});

test('two flat YAML files (.yml)', () => {
  const fileHexContent = readFileSync('__fixtures__/compareYAMLFiles/resultOfCompare.txt');
  const detectedEncoding = jschardet.detect(fileHexContent);
  const referenceResult = readFileSync(
    '__fixtures__/compareYAMLFiles/resultOfCompare.txt',
    detectedEncoding.encoding,
  ).trim();
  const result = compareFiles(
    '__fixtures__/exampleYAMLFiles/file1.yaml',
    '__fixtures__/exampleYAMLFiles/file2.yaml',
  ).trim();
  expect(result).toMatch(referenceResult);
});
