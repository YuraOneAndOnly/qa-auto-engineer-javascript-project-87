import gendiff from '../bin/index.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';
import JSONReferenceResult from '../__fixtures__/comparisonResult/JSONOutput.json';

const stylishOutputResultPath = '__fixtures__/comparisonResult/stylishOutput.txt';
const plainOutputResultPath = '__fixtures__/comparisonResult/plainOutput.txt';
const yaml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yaml';
const yaml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yaml';
const yml1FilePath = '__fixtures__/exampleYAMLFiles/file1.yml';
const yml2FilePath = '__fixtures__/exampleYAMLFiles/file2.yml';
let stylishReferenceResult;
let plainReferenceResult;

beforeAll(() => {
  stylishReferenceResult = importExampleFile(stylishOutputResultPath);
  plainReferenceResult = importExampleFile(plainOutputResultPath);
});

test('two flat YAML files (.yaml) (output format - default (stylish))', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath);
  expect(result).toMatch(stylishReferenceResult);
});

test('two flat YAML files (.yml) (output format - default (stylish))', () => {
  const result = gendiff(yml1FilePath, yml2FilePath);
  expect(result).toMatch(stylishReferenceResult);
});

test('two flat YAML files (.yaml) (output format - stylish)', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath, 'stylish');
  expect(result).toMatch(stylishReferenceResult);
});

test('two flat YAML files (.yml) (output format - stylish)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'stylish');
  expect(result).toMatch(stylishReferenceResult);
});

test('two flat YAML files (.yaml) (output format - plain)', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath, 'plain');
  expect(result).toMatch(plainReferenceResult);
});

test('two flat YAML files (.yml) (output format - plain)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'plain');
  expect(result).toMatch(plainReferenceResult);
});

test('two flat YAML files (.yaml) (output format - JSON)', () => {
  const result = gendiff(yaml1FilePath, yaml2FilePath, 'JSON');
  expect(result).toMatchObject(JSONReferenceResult);
});

test('two flat YAML files (.yml) (output format - JSON)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'JSON');
  expect(result).toMatchObject(JSONReferenceResult);
});

test('two flat YAML files (.yml) (output format - stylish, but like object from commander-js)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'stylish' });
  expect(result).toMatch(stylishReferenceResult);
});

test('two flat YAML files (.yml) (output format - plain, but like object from commander-js)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'plain' });
  expect(result).toMatch(plainReferenceResult);
});

test('two flat YAML files (.yml) (output format - JSON, but like object from commander-js)', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'JSON' });
  expect(result).toMatchObject(JSONReferenceResult);
});

test('incorrect output format', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, 'asdf');
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});

test('incorrect output format like object from commander-js options', () => {
  const result = gendiff(yml1FilePath, yml2FilePath, { format: 'asdf' });
  expect(result).toMatch(/Incorrect output format, list of available output formats: .*/);
});
