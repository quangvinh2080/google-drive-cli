import { flags } from '@oclif/command';
import Command, { driveId } from '../../lib/base-class'

export default class Get extends Command {
  static description = 'Gets information about the user, the user\'s Drive, and system capabilities';

  static examples = [
    `$ gdrive files:list --driveId=<driveId>`,
  ];

  static flags = {
    ...Command.flags,
    driveId,
    fields: flags.string({ description: 'The paths of the fields you want included in the response. If not specified, the response includes a default set of fields specific to this method. For development you can use the special value * to return all fields, but you\'ll achieve greater performance by only selecting the fields you need', default: '*', required: false }),
    corpora: flags.string({ description: "Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'), 'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency", required: false }),
    includeItemsFromAllDrives: flags.boolean({ description: "Whether both My Drive and shared drive items should be included in results. (Default: false)", required: false }),
    supportsAllDrives: flags.boolean({ description: "Whether the requesting application supports both My Drives and shared drives. (Default: false)", required: false }),
    orderBy: flags.string({ description: "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored", required: false })
  };

  static args = [];

  async run() {
    const {
      flags: { driveId, fields, corpora, includeItemsFromAllDrives, supportsAllDrives, orderBy }
    } = this.parse(Get);

    this.start('List files');

    console.log();

    const options: any = { fields, corpora, includeItemsFromAllDrives, supportsAllDrives, orderBy };

    const res = await this.gdrive.listFiles(driveId, options);
    this.stop();
    this.logRaw('Listed files: ', { operation: this.id, ...res });
  }
}
