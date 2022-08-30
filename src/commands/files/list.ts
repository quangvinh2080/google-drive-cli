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
    includeLabels: flags.string({ description: 'A comma-separated list of IDs of labels to include in the labelInfo part of the response.', required: false }),
    includePermissionsForView: flags.string({ description: 'Specifies which additional view\'s permissions to include in the response. Only \'published\' is supported.', required: false }),
    orderBy: flags.string({ description: "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored", required: false }),
    pageSize: flags.integer({ description: 'The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. Acceptable values are 1 to 1000, inclusive. (Default: 100)', required: false }),
    pageToken: flags.string({ description: 'The token for continuing a previous list request on the next page. This should be set to the value of \'nextPageToken\' from the previous response.', required: false }),
    q: flags.string({ description: 'A query for filtering the file results. See the "Search for files" guide for the supported syntax.', required: false }),
    spaces: flags.string({ description: 'A comma-separated list of spaces to query within the corpus. Supported values are \'drive\' and \'appDataFolder\'.', required: false }),
    supportsAllDrives: flags.boolean({ description: "Whether the requesting application supports both My Drives and shared drives. (Default: false)", required: false }),
  };

  static args = [];

  async run() {
    const {
      flags: { driveId, fields, corpora, includeItemsFromAllDrives, supportsAllDrives, orderBy, rawOutput }
    } = this.parse(Get);

    this.start('List files');

    console.log();

    const options: any = { fields, corpora, includeItemsFromAllDrives, supportsAllDrives, orderBy };

    const res = await this.gdrive.listFiles(driveId, options);
    this.stop();
    if (rawOutput) {
      this.logRaw('Listed files: ', { operation: this.id, ...res });
    } else {
      res?.files?.forEach(file => {
        this.logRaw(`${file.id}\t${file.name}\t${file.mimeType}\t${file.size ? file.size : '0' }`);
      });
    }
  }
}
