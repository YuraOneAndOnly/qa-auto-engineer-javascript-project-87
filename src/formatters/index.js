import JSONOutput from './JSONOutput.js';
import plainOutput from './plainOutput.js';

const availableFormats = ['json', 'plain'];

export default function compareFiles(json1, json2, formatName) {
  let result;
  if (availableFormats.includes(formatName.toLowerCase())) {
    switch (formatName.toLowerCase()) {
      case 'plain': {
        result = plainOutput(json1, json2);
        break;
      }
      default: {
        // meant to be JSON-like output format as default
        result = JSONOutput(json1, json2);
        break;
      }
    }
  } else {
    throw new Error(`Incorrect output format, list of available output formats: ${availableFormats}`);
  }
  return result;
}
