import { expect } from '@oclif/test';
import { testRun } from '../helper';

const baseCommand = 'files:list';

describe(baseCommand, () => {
  testRun([baseCommand], (stdout: string) => {
    // list files, line by line, TBD
  });
});
