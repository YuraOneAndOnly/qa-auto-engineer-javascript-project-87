import gendiff from '../src/gendiff.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';

const JSONOutputResultPath = '__fixtures__/comparisonResult/JSONOutput.txt';
const plainOutputResultPath = '__fixtures__/comparisonResult/plainOutput.txt';
const json1FilePath = '__fixtures__/exampleJSONFiles/file1.json';
const json2FilePath = '__fixtures__/exampleJSONFiles/file2.json';
let JSONReferenceResult;
let plainReferenceResult;

beforeAll(() => {
  JSONReferenceResult = importExampleFile(JSONOutputResultPath);
  plainReferenceResult = importExampleFile(plainOutputResultPath);
});

test('two flat JSON files (output format - default (JSON))', () => {
  const result = gendiff(json1FilePath, json2FilePath);
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat JSON files (output format - JSON)', () => {
  const result = gendiff(json1FilePath, json2FilePath, 'json');
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat JSON files (output format - plain)', () => {
  const result = gendiff(json1FilePath, json2FilePath, 'plain');
  expect(result).toMatch(plainReferenceResult);
});

test('two flat JSON files (output format - JSON)', () => {
  const result = gendiff(json1FilePath, json2FilePath, 'json');
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat JSON files (output format - JSON, but like object from commander-js)', () => {
  const result = gendiff(json1FilePath, json2FilePath, { format: 'json' });
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat JSON files (output format - plain, but like object from commander-js)', () => {
  const result = gendiff(json1FilePath, json2FilePath, { format: 'plain' });
  expect(result).toMatch(plainReferenceResult);
});

test('incorrect output format', () => {
  expect(gendiff(json1FilePath, json2FilePath, 'asdq')).toMatch(
    /Incorrect output format, list of available output formats: .*/,
  );
});

test('incorrect output format like object from commander-js options', () => {
  const result = gendiff(json1FilePath, json2FilePath, { format: 'asdf' });
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});
