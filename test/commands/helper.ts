import { test } from '@oclif/test';
import GoogleDrive from '../../src/lib/google-drive';

const { GDRIVE_CLIENT_EMAIL: client_email = '', GDRIVE_PRIVATE_KEY: private_key = '', FOLDER_ID } = process.env;

export const FILE_TITLE = 'example.txt';

const authorize = async (): Promise<GoogleDrive> => {
  const gdrive = new GoogleDrive();
  await gdrive.authorize({ client_email, private_key });
  return gdrive;
};

export const createFile = async () => {
  const gdrive = await authorize();
  const file = await gdrive.createFile({
    path: process.cwd() + '/test/data/example.txt'
  }, {
    parents: [FOLDER_ID]
  });

  console.log('Create file...done!')

  return file;
};

export const removeFile = async (fileId: string) => {
  const gdrive = await authorize();
  await gdrive.deleteFile(fileId);
  console.log('Delete file...done!')
};

export const emptyTrash = async () => {
  const gdrive = await authorize();
  await gdrive.emptyTrash();
  console.log('Empty trash...done!')
};

export const getCmd = (parts: string[]): string[] => {
  const [base, ...flags] = parts;
  return [base, ...flags].filter(Boolean);
};

export const testRun = (cmd: string[], cb: Function = () => {}) => {
  const parsedCommand = getCmd(cmd);
  const commandString = `runs "${parsedCommand.join(' ')}"`;
  test
    .stdout()
    .command(parsedCommand)
    .it(commandString, ({ stdout }) => {
      if (!commandString.includes('--rawOutput')) {
        cb(stdout);
        return;
      }
      const cleanedJSON = stdout.replace(/\r?\n|\r| /g, '');
      cb(JSON.parse(cleanedJSON));
    })
    
};
