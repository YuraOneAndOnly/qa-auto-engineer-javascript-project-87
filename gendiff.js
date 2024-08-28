#!/usr/bin/env node

import { Command } from 'commander';
import compareJSONFiles from '../src/compareJSONFiles.js';

const program = new Command();
program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');
program.action(compareJSONFiles);
program.parse();
