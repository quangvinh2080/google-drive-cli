import { expect } from '@oclif/test';
import { testRun } from '../helper';

const baseCommand = 'files:emptyTrash';

describe(baseCommand, () => {
  testRun([baseCommand], (stdout: string) => {
    expect(stdout).to.contain('\nDone\n');
  });
});
