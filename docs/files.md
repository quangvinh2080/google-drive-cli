`google-drive files`
====================

Manage files

* [`google-drive files:create`](#google-drive-filescreate)
* [`google-drive files:delete`](#google-drive-filesdelete)
* [`google-drive files:emptyTrash`](#google-drive-filesemptytrash)
* [`google-drive files:list`](#google-drive-fileslist)

## `google-drive files:create`

Creates a new file

```
USAGE
  $ google-drive files:create

OPTIONS
  -h, --help
      show CLI help

  -r, --rawOutput
      Get the raw output as a JSON string

  --mimeType=mimeType
      File's mime type

  --name=name
      File's name

  --path=path
      (required) The file's path

  --uploadType=uploadType
      [default: *] The type of upload request to the /upload URI. If you are uploading data (using an /upload URI), this
      field is required. If you are creating a metadata-only file, this field is not required. Additionally, this field is
      not shown in the "Try this API" widget because the widget doesn't support data uploads. Acceptable values are:
      "media" - Simple upload. Upload the media only, without any metadata.
      "multipart" - Multipart upload. Upload both the media and its metadata, in a single request.
      "resumable" - Resumable upload. Upload the file in a resumable fashion, using a series of at least two requests
      where the first request includes the metadata.

EXAMPLE
  $ gdrive files:create --path ./example --rawOutput
```

_See code: [src/commands/files/create.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v1.0.0/src/commands/files/create.ts)_

## `google-drive files:delete`

Gets information about the user, the user's Drive, and system capabilities

```
USAGE
  $ google-drive files:delete

OPTIONS
  -h, --help           show CLI help
  -r, --rawOutput      Get the raw output as a JSON string
  -s, --fileId=fileId  (required) The ID of the file

EXAMPLE
  $ gdrive files:delete --fileId=<fileId>
```

_See code: [src/commands/files/delete.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v1.0.0/src/commands/files/delete.ts)_

## `google-drive files:emptyTrash`

Permanently deletes all of the user's trashed files

```
USAGE
  $ google-drive files:emptyTrash

OPTIONS
  -h, --help       show CLI help
  -r, --rawOutput  Get the raw output as a JSON string

EXAMPLE
  $ gdrive files:emptyTrash
```

_See code: [src/commands/files/emptyTrash.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v1.0.0/src/commands/files/emptyTrash.ts)_

## `google-drive files:list`

Gets information about the user, the user's Drive, and system capabilities

```
USAGE
  $ google-drive files:list

OPTIONS
  -h, --help
      show CLI help

  -r, --rawOutput
      Get the raw output as a JSON string

  -s, --driveId=driveId
      ID of the shared drive to search

  --corpora=corpora
      Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or
      shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'),
      'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives
      where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency

  --fields=fields
      [default: *] The paths of the fields you want included in the response. If not specified, the response includes a
      default set of fields specific to this method. For development you can use the special value * to return all fields,
      but you'll achieve greater performance by only selecting the fields you need

  --includeItemsFromAllDrives
      Whether both My Drive and shared drive items should be included in results. (Default: false)

  --includeLabels=includeLabels
      A comma-separated list of IDs of labels to include in the labelInfo part of the response.

  --includePermissionsForView=includePermissionsForView
      Specifies which additional view's permissions to include in the response. Only 'published' is supported.

  --orderBy=orderBy
      A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime',
      'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key
      sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage:
      ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately
      one million files in which the requested sort order is ignored

  --pageSize=pageSize
      The maximum number of files to return per page. Partial or empty result pages are possible even before the end of
      the files list has been reached. Acceptable values are 1 to 1000, inclusive. (Default: 100)

  --pageToken=pageToken
      The token for continuing a previous list request on the next page. This should be set to the value of
      'nextPageToken' from the previous response.

  --q=q
      A query for filtering the file results. See the "Search for files" guide for the supported syntax.

  --spaces=spaces
      A comma-separated list of spaces to query within the corpus. Supported values are 'drive' and 'appDataFolder'.

  --supportsAllDrives
      Whether the requesting application supports both My Drives and shared drives. (Default: false)

EXAMPLE
  $ gdrive files:list --driveId=<driveId>
```

_See code: [src/commands/files/list.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v1.0.0/src/commands/files/list.ts)_
