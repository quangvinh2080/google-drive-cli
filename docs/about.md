`google-drive about`
====================

About your drive

* [`google-drive about:get`](#google-drive-aboutget)

## `google-drive about:get`

Gets information about the user, the user's Drive, and system capabilities

```
USAGE
  $ google-drive about:get

OPTIONS
  -h, --help       show CLI help
  -r, --rawOutput  Get the raw output as a JSON string

  --fields=fields  [default: *] The paths of the fields you want included in the response. For development you can use
                   the special value * to return all fields, but you'll achieve greater performance by only selecting
                   the fields you need. For more information

EXAMPLE
  $ gdrive about:get'
```

_See code: [src/commands/about/get.ts](https://github.com/quangvinh2080/google-drive-cli/blob/v0.0.2/src/commands/about/get.ts)_
