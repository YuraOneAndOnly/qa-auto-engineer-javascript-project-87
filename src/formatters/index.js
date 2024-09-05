import stylishOutput from './stylishOutput.js';
import plainOutput from './plainOutput.js';
import JSONOutput from './JSONOutput.js';

const availableFormats = ['stylish', 'plain', 'json'];

export default function compareFiles(obj1, obj2, formatName) {
  if (availableFormats.includes(formatName.toLowerCase())) {
    switch (formatName.toLowerCase()) {
      case 'plain':
        return plainOutput(obj1, obj2);
      case 'json':
        return JSONOutput(obj1, obj2);
      default:
        return stylishOutput(obj1, obj2); // meant to be stylish-like output format as default
    }
  } else {
    throw new Error(
      `Incorrect output format, list of available output formats: ${availableFormats}`,
    );
  }
}
