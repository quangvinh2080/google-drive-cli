import { flags } from '@oclif/command';
import Command, { fileId } from '../../lib/base-class'

export default class Delete extends Command {
  static description = 'Gets information about the user, the user\'s Drive, and system capabilities';

  static examples = [
    `$ gdrive files:delete --fileId=<fileId>`,
  ];

  static flags = {
    ...Command.flags,
    fileId,
  };

  static args = [];

  async run() {
    const {
      flags: { fileId }
    } = this.parse(Delete);

    this.start('Delete file');

    console.log();

    await this.gdrive.deleteFile(fileId);
    this.stop();
    this.logRaw(`File ${fileId} is deleted`);
  }
}
