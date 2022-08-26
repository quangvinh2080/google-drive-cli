`google-drive drives`
=====================

Manage drives

* [`google-drive drives:list`](#google-drive-driveslist)

## `google-drive drives:list`

Lists the user's shared drives

```
USAGE
  $ google-drive drives:list

OPTIONS
  -h, --help              show CLI help
  -r, --rawOutput         Get the raw output as a JSON string

  --pageSize=pageSize     [default: 10] Maximum number of shared drives to return per page. Acceptable values are 1 to
                          100, inclusive. (Default: 10)

  --pageToken=pageToken   Page token for shared drives

  --q=q                   Query string for searching shared drives. See the "Search for shared drives" guide for
                          supported syntax

  --useDomainAdminAccess  Issue the request as a domain administrator; if set to true, then all shared drives of the
                          domain in which the requester is an administrator are returned. (Default: false)

EXAMPLE
  $ gdrive drives:list
```

_See code: [src/commands/drives/list.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v0.0.1/src/commands/drives/list.ts)_
