import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import path from 'node:path';
import yaml from 'js-yaml';

const supportedFormats = ['.json', '.yaml', '.yml'];

function importJSONFile(pathToFile) {
  try {
    const fileHexContent = readFileSync(pathToFile);
    const detectedEncoding = jschardet.detect(fileHexContent);
    const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
    const json = JSON.parse(fileContent);
    return json;
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return '';
  }
}

function importYAMLFile(pathToFile) {
  try {
    const fileHexContent = readFileSync(pathToFile);
    const detectedEncoding = jschardet.detect(fileHexContent);
    const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
    const json = yaml.load(fileContent);
    return json;
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return '';
  }
}

export default function importFile(rawPathToFile) {
  const pathToFile = path.resolve(rawPathToFile.trim());
  const fileExtension = path.extname(pathToFile);
  let result;
  if (supportedFormats.includes(fileExtension.toLowerCase())) {
    /*
    if (fileExtension.toLowerCase() === '.json') {
      result = importJSONFile(pathToFile);
    } else if (fileExtension.toLowerCase() === '.yaml' || fileExtension.toLowerCase() === '.yml') {
      result = importYAMLFile(pathToFile);
    }
    */
    switch (fileExtension.toLowerCase()) {
      case '.yaml': {
        result = importYAMLFile(pathToFile);
        break;
      }
      case '.yml': {
        result = importYAMLFile(pathToFile);
        break;
      }
      default: {
        // meant to be .json format
        result = importJSONFile(pathToFile);
        break;
      }
    }
  } else {
    console.log('\nWarning!\n');
    console.log(
      "You haven't specified the file format or the file of this format is not supported.",
    );
    console.log(`List of supported formats: ${supportedFormats}\n`);
    result = '';
  }
  return result;
}
