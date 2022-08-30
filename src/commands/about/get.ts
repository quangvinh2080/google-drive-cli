import { flags } from '@oclif/command';
import Command from '../../lib/base-class'

export default class Get extends Command {
  static description = 'Gets information about the user, the user\'s Drive, and system capabilities';

  static examples = [
    `$ gdrive about:get'`,
  ];

  static flags = {
    ...Command.flags,
    fields: flags.string({ description: 'The paths of the fields you want included in the response. For development you can use the special value * to return all fields, but you\'ll achieve greater performance by only selecting the fields you need. For more information', default: '*', required: false }),
  };

  static args = [];

  async run() {
    const {
      flags: { fields }
    } = this.parse(Get);

    this.start('Fetch about');

    console.log();

    const res = await this.gdrive.getAbout({ fields });
    this.stop();
    this.logRaw('Add option --rawOutput to view full response', { operation: this.id, ...res });
  }
}
