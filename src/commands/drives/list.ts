import { flags } from '@oclif/command';
import Command, { driveId } from '../../lib/base-class'

export default class Get extends Command {
  static description = 'Lists the user\'s shared drives';

  static examples = [
    `$ gdrive drives:list`,
  ];

  static flags = {
    ...Command.flags,
    pageSize: flags.integer({ description: "Maximum number of shared drives to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)", default: 10, required: false }),
    pageToken: flags.string({ description: "Page token for shared drives", required: false }),
    q: flags.string({ description: "Query string for searching shared drives. See the \"Search for shared drives\" guide for supported syntax", required: false }),
    useDomainAdminAccess: flags.boolean({ description: "Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. (Default: false)", required: false })
  };

  static args = [];

  async run() {
    const {
      flags: { pageSize, pageToken, q, useDomainAdminAccess }
    } = this.parse(Get);

    this.start('List drives');

    console.log();

    const options: any = { pageSize, pageToken, q, useDomainAdminAccess };

    const res = await this.gdrive.listDrives(options);
    this.stop();
    this.logRaw('Listed drives', { operation: this.id, ...res });
  }
}
