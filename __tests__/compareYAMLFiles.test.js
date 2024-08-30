import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import compareFiles from '../src/compareFiles.js';

const resultOfComparePath = '__fixtures__/compareYAMLFiles/resultOfCompare.txt';
const yaml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yaml';
const yaml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yaml';
const yml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yml';
const yml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yml';
let referenceResult;

beforeAll(() => {
  const fileHexContent = readFileSync(resultOfComparePath);
  const detectedEncoding = jschardet.detect(fileHexContent);
  referenceResult = readFileSync(resultOfComparePath, detectedEncoding.encoding).trim();
});

test('two flat YAML files (.yaml)', () => {
  const result = compareFiles(yaml1FilePath, yaml2FilePath).trim();
  expect(result).toMatch(referenceResult);
});

test('two flat YAML files (.yml)', () => {
  const result = compareFiles(yml1FilePath, yml2FilePath).trim();
  expect(result).toMatch(referenceResult);
});
