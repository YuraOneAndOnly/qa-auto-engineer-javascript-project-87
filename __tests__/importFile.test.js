import importFile from '../src/importFile.js';
import importExampleFile from '../src/testFunctions/importExampleFile.js';

const pathToExampleOfImport = '__fixtures__/importFileTests/correctJSONImport.json';
const jsonFilePath = '__fixtures__/exampleJSONFiles/file1.json';
const yamlFilePath = '__fixtures__/exampleYAMLFiles/file1.yaml';
const ymlFilePath = '__fixtures__/exampleYAMLFiles/file1.yml';
const referenceResult = {};

beforeAll(() => {
  referenceResult.example = importExampleFile(pathToExampleOfImport);
});

test('import JSON file with correct path', () => {
  const result = importFile(jsonFilePath);
  expect(result).toMatchObject(JSON.parse(referenceResult.example));
});

test('import YAML (.yaml) file with correct path', () => {
  const result = importFile(yamlFilePath);
  expect(result).toMatchObject(JSON.parse(referenceResult.example));
});

test('import YAML (.yml) file with correct path', () => {
  const result = importFile(ymlFilePath);
  expect(result).toMatchObject(JSON.parse(referenceResult.example));
});

test('import JSON file with incorrect path and without extension', () => {
  expect(importFile('/incorrect/path')).toMatch('');
});

test('import JSON file with incorrect path but with supported extension', () => {
  expect(importFile('D://////TEST/PATH/FFFF.json')).toMatch('');
});

test('import YAML file with incorrect path and without extension', () => {
  expect(importFile('/incorrect/path')).toMatch('');
});

test('import YAML (.yaml) file with incorrect path but with supported extension', () => {
  expect(importFile('D://////TEST/PATH/FFFF.yaml')).toMatch('');
});

test('import YAML (.yml) file with incorrect path but with supported extension', () => {
  expect(importFile('D://////TEST/PATH/FFFF.yml')).toMatch('');
});
