import { google, drive_v3 } from 'googleapis';
import path from 'path';
import mime from 'mime-types';
import fs from 'fs';

export namespace GoogleDriveCli {
  export interface Credentials {
    client_email: string;
    private_key: string;
  }

  export type RawData = (string | number | boolean | null)[][];

  export interface QueryOptions {
    fields?: string;
  }

  export interface FormattedData {
    [name: string]: string;
  }

  export interface FileOptions {
    path: string;
    name?: string;
    mimeType?: string;
  }
}

const GOOGLE_DRIVE_URL = 'https://www.googleapis.com/auth/drive';

/**
 * GoogleDrive helper class for CRUD operations
 *
 * @export
 * @class GoogleDrive
 */
export default class GoogleDrive {
  private drive!: drive_v3.Drive;

  /**
   * Creates an instance of GoogleDrive.
   * @memberof GoogleDrive
   */
  constructor() {}

  /**
   * Authorize with credentials
   *
   * @param {GoogleDriveCli.Credentials} credentials
   * @returns {Promise<void>}
   * @memberof GoogleDrive
   */
  async authorize(credentials: GoogleDriveCli.Credentials): Promise<void> {
    credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    // Create the JWT client
    const auth = await google.auth.getClient({ credentials, scopes: [GOOGLE_DRIVE_URL] });
    this.drive = google.drive({ version: 'v3', auth });
  }

  /**
   * Get information about the drive.
   *
   * @param {GoogleDriveCli.QueryOptions} [options={}]
   * @returns {Promise<drive_v3.Schema$About>}
   * @memberof GoogleDrive
   */
  async getAbout(options: GoogleDriveCli.QueryOptions = {}): Promise<drive_v3.Schema$About> {
    const { data: drive } = await this.drive.about.get(options);
    if (!drive) throw `Can not get about`;
    return drive;
  }

  // TODO: add comment
  async listFiles(driveId: string | undefined, options: GoogleDriveCli.QueryOptions = {}): Promise<drive_v3.Schema$FileList> {
    const { data: drive } = await this.drive.files.list({
      driveId,
      ...options,
    });
    if (!drive) throw `Can not list files`;
    return drive;
  }

  // TODO: add comment
  async deleteFile(fileId: string, options: GoogleDriveCli.QueryOptions = {}) {
    await this.drive.files.delete({
      fileId,
      ...options,
    });
  }

  // TODO: add comment
  async listDrives(options: GoogleDriveCli.QueryOptions = {}): Promise<drive_v3.Schema$DriveList> {
    const { data: drive } = await this.drive.drives.list(options);
    if (!drive) throw `Can not list drives`;
    return drive;
  }

  // TODO: add comment
  async emptyTrash() {
    await this.drive.files.emptyTrash();
    return;
  }

  async createFile(file: GoogleDriveCli.FileOptions, options: GoogleDriveCli.QueryOptions = {}): Promise<drive_v3.Schema$File> {
    const fileName = file.name || path.basename(file.path);
    let mimeType: string = ''
    const mimeLookup = mime.lookup(fileName);

    if (mimeLookup) {
      mimeType = mimeLookup;
    }

    const { data: drive } = await this.drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: file.mimeType || mimeType,
      },
      media: {
        mimeType: file.mimeType,
        body: fs.createReadStream(file.path)
      }
    });
    if (!drive) throw `Can not create file`;

    return drive;
  }
}
