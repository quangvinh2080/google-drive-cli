import { flags } from '@oclif/command';
import Command from '../../lib/base-class'
import { GoogleDriveCli } from '../../lib/google-drive';

export default class Get extends Command {
  static description = 'Creates a new file';

  static examples = [
    `$ gdrive files:create --path ./example --rawOutput`,
  ];

  static flags = {
    ...Command.flags,
    uploadType: flags.string({ description: 'The type of upload request to the /upload URI. If you are uploading data (using an /upload URI), this field is required. If you are creating a metadata-only file, this field is not required. Additionally, this field is not shown in the "Try this API" widget because the widget doesn\'t support data uploads. Acceptable values are:\n "media" - Simple upload. Upload the media only, without any metadata. \n "multipart" - Multipart upload. Upload both the media and its metadata, in a single request.\n "resumable" - Resumable upload. Upload the file in a resumable fashion, using a series of at least two requests where the first request includes the metadata.', default: '*', required: false }),
    path: flags.string({ description: 'The file\'s path', required: true }),
    name: flags.string({ description: 'File\'s name', required: false }),
    mimeType: flags.string({ description: 'File\'s mime type', required: false }),
  };

  static args = [];

  async run() {
    const {
      flags: { uploadType, path, mimeType, name }
    } = this.parse(Get);

    this.start('Create file');

    console.log();
    const options: any = { uploadType };
    const file: GoogleDriveCli.FileOptions = {
      path,
      name,
      mimeType,
    };

    const res = await this.gdrive.createFile(file, options);
    this.stop();
    this.logRaw('Created file: ', { operation: this.id, ...res });
  }
}
