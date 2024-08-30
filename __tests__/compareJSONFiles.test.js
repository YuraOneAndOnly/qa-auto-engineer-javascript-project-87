import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import compareFiles from '../src/compareFiles.js';

const resultOfComparePath = '__fixtures__/compareJSONFiles/resultOfCompare.txt';
const json1FilePath = '__fixtures__/exampleJSONFiles/file1.json';
const json2FilePath = '__fixtures__/exampleJSONFiles/file2.json';
let referenceResult;

beforeAll(() => {
  const fileHexContent = readFileSync(resultOfComparePath);
  const detectedEncoding = jschardet.detect(fileHexContent);
  referenceResult = readFileSync(resultOfComparePath, detectedEncoding.encoding).trim();
});

test('two flat JSON files in order 1 > 2', () => {
  const result = compareFiles(json1FilePath, json2FilePath).trim();
  expect(result).toMatch(referenceResult);
});
