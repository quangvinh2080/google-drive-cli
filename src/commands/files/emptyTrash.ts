import { flags } from '@oclif/command';
import Command from '../../lib/base-class'

export default class EmptyTrash extends Command {
  static description = 'Permanently deletes all of the user\'s trashed files';

  static examples = [
    `$ gdrive files:emptyTrash`,
  ];

  static flags = {
    ...Command.flags,
  };

  static args = [];

  async run() {
    this.start('Empty trash');

    console.log();

    await this.gdrive.emptyTrash();
    this.stop();
    this.logRaw('Finish empty trash', 'Done');
  }
}
