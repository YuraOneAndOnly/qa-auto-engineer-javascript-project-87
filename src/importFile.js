import { readFileSync } from 'node:fs';
import jschardet from 'jschardet';
import path from 'node:path';
import yaml from 'js-yaml';

const supportedFormats = ['.json', '.yaml', '.yml'];

function importFileWithEncoding(pathToFile) {
  try {
    const fileHexContent = readFileSync(pathToFile);
    const detectedEncoding = jschardet.detect(fileHexContent);
    const fileContent = readFileSync(pathToFile, detectedEncoding.encoding);
    return fileContent;
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return ''; // if any error occured during file import - return empty string
  }
}

function importJSONFile(pathToFile) {
  try {
    const fileContent = importFileWithEncoding(pathToFile);
    return JSON.parse(fileContent);
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return '';
  }
}

function importYAMLFile(pathToFile) {
  try {
    const fileContent = importFileWithEncoding(pathToFile);
    const yamlConvertedToJson = yaml.load(fileContent);
    if (typeof yamlConvertedToJson === 'undefined') {
      // as yaml.load cant throw error by itself, i made this by my own
      throw new Error('Unexpected end of YAML input');
    }
    return yamlConvertedToJson;
  } catch (err) {
    console.log('\nError!\n');
    console.log(err.message, '\n');
    return '';
  }
}

function incorrectFormatError() {
  console.log('\nWarning!\n');
  console.log("You haven't specified the file format or the file of this format is not supported.");
  console.log(`List of supported formats: ${supportedFormats}\n`);
  return '';
}

export default function importFile(rawPathToFile) {
  const pathToFile = path.resolve(rawPathToFile.trim());
  const fileExtension = path.extname(pathToFile);
  if (supportedFormats.includes(fileExtension.toLowerCase())) {
    switch (fileExtension.toLowerCase()) {
      case '.yaml': {
        return importYAMLFile(pathToFile);
      }
      case '.yml': {
        return importYAMLFile(pathToFile);
      }
      default: {
        // meant to be .json format as default
        return importJSONFile(pathToFile);
      }
    }
  } else {
    return incorrectFormatError();
  }
}
