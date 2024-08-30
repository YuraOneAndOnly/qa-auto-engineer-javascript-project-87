import compareFiles from '../src/compareFiles.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';

const resultOfComparePath = '__fixtures__/compareYAMLFiles/resultOfCompare.txt';
const yaml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yaml';
const yaml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yaml';
const yml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yml';
const yml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yml';
let referenceResult;

beforeAll(() => {
  referenceResult = importExampleFile(resultOfComparePath);
});

test('two flat YAML files (.yaml)', () => {
  const result = compareFiles(yaml1FilePath, yaml2FilePath).trim();
  expect(result).toMatch(referenceResult);
});

test('two flat YAML files (.yml)', () => {
  const result = compareFiles(yml1FilePath, yml2FilePath).trim();
  expect(result).toMatch(referenceResult);
});
