import stylishOutput from './stylishOutput.js';
import plainOutput from './plainOutput.js';
import JSONOutput from './JSONOutput.js';

const availableFormats = ['stylish', 'plain', 'json'];

export default function compareFiles(json1, json2, formatName) {
  const result = {};
  if (availableFormats.includes(formatName.toLowerCase())) {
    switch (formatName.toLowerCase()) {
      case 'plain': {
        result.output = plainOutput(json1, json2);
        break;
      }
      case 'json': {
        result.output = JSONOutput(json1, json2);
        break;
      }
      default: {
        // meant to be stylish-like output format as default
        result.output = stylishOutput(json1, json2);
        break;
      }
    }
  } else {
    throw new Error(`Incorrect output format, list of available output formats: ${availableFormats}`);
  }
  return result.output;
}
