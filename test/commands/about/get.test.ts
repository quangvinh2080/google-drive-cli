import { expect } from '@oclif/test';
import { testRun } from '../helper';

const baseCommand = 'about:get';

describe(baseCommand, () => {
  testRun([baseCommand], (stdout: string) => {
    expect(stdout).to.contain('\nAdd option --rawOutput to view full response\n');
  });
  testRun([baseCommand, '--rawOutput'], (parsed: {}) => {
    expect(parsed).to.have.property('appInstalled');
    expect(parsed).to.have.property('canCreateDrives');
    expect(parsed).to.have.property('canCreateTeamDrives');
    expect(parsed).to.have.property('driveThemes');
    expect(parsed).to.have.property('teamDriveThemes');
    expect(parsed).to.have.property('folderColorPalette');
    expect(parsed).to.have.property('importFormats');
    expect(parsed).to.have.property('exportFormats');
    expect(parsed).to.have.property('maxImportSizes');
    expect(parsed).to.have.property('maxUploadSize');
    expect(parsed).to.have.property('storageQuota');
    expect(parsed).to.have.property('operation');
    expect(parsed).to.have.property('kind');
    expect(parsed).to.have.property('user');
  });
});
