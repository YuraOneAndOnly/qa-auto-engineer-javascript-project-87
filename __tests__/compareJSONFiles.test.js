import genDiff from '../bin/index.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';
import JSONReferenceResult from '../__fixtures__/comparisonResult/JSONOutput.json';

const stylishOutputResultPath = '__fixtures__/comparisonResult/stylishOutput.txt';
const plainOutputResultPath = '__fixtures__/comparisonResult/plainOutput.txt';
const json1FilePath = '__fixtures__/exampleJSONFiles/file1.json';
const json2FilePath = '__fixtures__/exampleJSONFiles/file2.json';

test('two flat JSON files (output format - default (stylish))', () => {
  const result = genDiff(json1FilePath, json2FilePath);
  expect(result).toMatch(importExampleFile(stylishOutputResultPath));
});

test('two flat JSON files (output format - stylish)', () => {
  const result = genDiff(json1FilePath, json2FilePath, 'stylish');
  expect(result).toMatch(importExampleFile(stylishOutputResultPath));
});

test('two flat JSON files (output format - plain)', () => {
  const result = genDiff(json1FilePath, json2FilePath, 'plain');
  expect(result).toMatch(importExampleFile(plainOutputResultPath));
});

test('two flat JSON files (output format - JSON)', () => {
  const result = genDiff(json1FilePath, json2FilePath, 'JSON');
  // expect(result).toMatchObject(JSONReferenceResult);
  expect(result).toMatch(JSON.stringify(JSONReferenceResult));
});

test('two flat JSON files (output format - stylish, but like object from commander-js)', () => {
  const result = genDiff(json1FilePath, json2FilePath, { format: 'stylish' });
  expect(result).toMatch(importExampleFile(stylishOutputResultPath));
});

test('two flat JSON files (output format - plain, but like object from commander-js)', () => {
  const result = genDiff(json1FilePath, json2FilePath, { format: 'plain' });
  expect(result).toMatch(importExampleFile(plainOutputResultPath));
});

test('two flat JSON files (output format - JSON, but like object from commander-js)', () => {
  const result = genDiff(json1FilePath, json2FilePath, { format: 'JSON' });
  // expect(result).toMatchObject(JSONReferenceResult);
  expect(result).toMatch(JSON.stringify(JSONReferenceResult));
});

test('incorrect output format', () => {
  expect(genDiff(json1FilePath, json2FilePath, 'asdq')).toMatch(
    /Incorrect output format, list of available output formats: .*/,
  );
});

test('incorrect output format like object from commander-js options', () => {
  const result = genDiff(json1FilePath, json2FilePath, { format: 'asdf' });
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});
