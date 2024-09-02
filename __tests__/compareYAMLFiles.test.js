import gendiff from '../bin/index.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';

const JSONOutputResultPath = '__fixtures__/comparisonResult/JSONOutput.txt';
const plainOutputResultPath = '__fixtures__/comparisonResult/plainOutput.txt';
const yaml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yaml';
const yaml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yaml';
const yml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yml';
const yml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yml';
let JSONReferenceResult;
let plainReferenceResult;

beforeAll(() => {
  JSONReferenceResult = importExampleFile(JSONOutputResultPath);
  plainReferenceResult = importExampleFile(plainOutputResultPath);
});

test('two flat YAML files (.yaml) (output format - default (JSON))', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath);
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat YAML files (.yml) (output format - default (JSON))', () => {
  const result = gendiff(yml1FilePath, yml2FilePath);
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat YAML files (.yaml) (output format - JSON)', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath, 'json');
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat YAML files (.yml) (output format - JSON)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'json');
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat YAML files (.yaml) (output format - plain)', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath, 'plain');
  expect(result).toMatch(plainReferenceResult);
});

test('two flat YAML files (.yml) (output format - plain)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'plain');
  expect(result).toMatch(plainReferenceResult);
});

test('two flat YAML files (.yml) (output format - JSON, but like object from commander-js)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'json' });
  expect(result).toMatch(JSONReferenceResult);
});

test('two flat YAML files (.yml) (output format - plain, but like object from commander-js)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'plain' });
  expect(result).toMatch(plainReferenceResult);
});

test('incorrect output format', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'asdf');
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});

test('incorrect output format like object from commander-js options', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'asdf' });
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});
