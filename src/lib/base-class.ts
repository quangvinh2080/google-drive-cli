import Command, { flags } from '@oclif/command';
import cli from 'cli-ux';
import GoogleDrive from './google-drive';

export const driveId = flags.string({
  char: 's',
  description: 'ID of the shared drive to search',
  required: false,
  env: 'DRIVE_ID',
});

export const fileId = flags.string({
  char: 's',
  description: 'The ID of the file',
  required: true,
});

export default abstract class extends Command {
  private rawLogs: boolean = false;
  public gdrive!: GoogleDrive;

  static flags = {
    help: flags.help({ char: 'h' }),
    rawOutput: flags.boolean({
      char: 'r',
      description: 'Get the raw output as a JSON string',
      default: false,
      required: false,
    }),
  };

  async start(message: string) {
    if (!this.rawLogs) {
      cli.action.start(message);
    }
  }

  async stop(message?: string) {
    if (!this.rawLogs) {
      cli.action.stop(message);
    }
  }

  async logRaw(message: string, raw?: any) {
    if (this.rawLogs) {
      this.log(JSON.stringify(raw, null, 2));
    } else {
      this.log(message);
    }
  }

  async init() {
    // do some initialization
    const { flags } = this.parse(<any>this.constructor);
    this.rawLogs = flags && (flags as any).rawOutput;

    const {
      GDRIVE_CLIENT_EMAIL = await cli.prompt('What is your client email?', { type: 'hide' }),
      GDRIVE_PRIVATE_KEY = await cli.prompt('What is your private key?', { type: 'hide' }),
    } = process.env;

    const gdrive = new GoogleDrive();
    await gdrive.authorize({
      client_email: GDRIVE_CLIENT_EMAIL,
      private_key: GDRIVE_PRIVATE_KEY,
    });

    this.gdrive = gdrive;
  }

  async catch(err: Error) {
    this.error(err, { exit: 1 });
    // handle any error from the command
  }
}
