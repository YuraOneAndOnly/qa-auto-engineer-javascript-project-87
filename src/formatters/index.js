import stylishOutput from './stylishOutput.js';
import plainOutput from './plainOutput.js';

const availableFormats = ['stylish', 'plain'];

export default function compareFiles(json1, json2, formatName) {
  let result;
  if (availableFormats.includes(formatName.toLowerCase())) {
    switch (formatName.toLowerCase()) {
      case 'plain': {
        result = plainOutput(json1, json2);
        break;
      }
      default: {
        // meant to be stylish-like output format as default
        result = stylishOutput(json1, json2);
        break;
      }
    }
  } else {
    throw new Error(`Incorrect output format, list of available output formats: ${availableFormats}`);
  }
  return result;
}
