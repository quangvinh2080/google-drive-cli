import { expect } from '@oclif/test';
import { testRun } from '../helper';

const baseCommand = 'drives:list';

describe(baseCommand, () => {
  testRun([baseCommand], (stdout: string) => {
    // it will print all drives, line-by-line
  });
  testRun([baseCommand, '--rawOutput'], (parsed: {}) => {
    expect(parsed).to.have.property('drives');
    expect((parsed as any).kind).to.be.eq('drive#driveList');
    expect((parsed as any).operation).to.be.eq('drives:list');
  });
});
