#!/usr/bin/env node

// import { Command } from 'commander';
import genDiff from '../src/gendiff.js';

export default (rawPathToFile1, rawPathToFile2, formatRawName = 'stylish') => genDiff(rawPathToFile1, rawPathToFile2, formatRawName);

/*
const program = new Command();
program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish');
program.action(gendiff);
program.parse();
*/
