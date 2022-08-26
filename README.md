# google-drive-cli

A simple helper cli to interact with google drive.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/google-drive-cli.svg)](https://npmjs.org/package/@quangvinh2080/google-drive-cli)
[![Downloads/week](https://img.shields.io/npm/dw/google-drive-cli.svg)](https://npmjs.org/package/@quangvinh2080/google-drive-cli)
[![License](https://img.shields.io/npm/l/google-drive-cli.svg)](https://github.com/quangvinh2080/google-drive-cli/blob/master/package.json)

[![CodeQL](https://github.com/quangvinh2080/google-drive-cli/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/quangvinh2080/google-drive-cli/actions/workflows/codeql-analysis.yml)
[![Test version](https://github.com/quangvinh2080/google-drive-cli/actions/workflows/test.yml/badge.svg)](https://github.com/quangvinh2080/google-drive-cli/actions/workflows/test.yml)

- [google-drive-cli](#google-drive-cli)
  - [Usage as CLI](#usage-as-cli)
  - [Usage as library](#usage-as-library)
- [Command Topics](#command-topics)
- [Info](#info)
  - [Build with](#build-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [License](#license)
  - [TODO](#todo)

## Usage as CLI
<!-- usage -->
```sh-session
$ npm install -g @quangvinh2080/google-drive-cli
$ google-drive COMMAND
running command...
$ google-drive (-v|--version|version)
@quangvinh2080/google-drive-cli/0.0.1 linux-x64 node-v14.15.5
$ google-drive --help [COMMAND]
USAGE
  $ google-drive COMMAND
...
```
<!-- usagestop -->

## Usage as library

You can import the GoogleDrive class as a module and use it without the cli functionality.
_See code: [src/lib/google-drive.ts](https://github.com/quangvinh2080/google-drive-cli/blob/master/src/lib/google-drive.ts)_

<!-- commands -->
# Command Topics

* [`google-drive about`](docs/about.md) - About your drive
* [`google-drive drives`](docs/drives.md) - Manage drives
* [`google-drive files`](docs/files.md) - Manage files
* [`google-drive help`](docs/help.md) - display help for google-drive

<!-- commandsstop -->

# Info

## Build with

- [googleapis](https://github.com/googleapis/googleapis) - The node module used for manipulating the google drive
- [oclif](https://oclif.io) - The node module used to create the cli
- [semantic-release](https://github.com/semantic-release/semantic-release) - for releasing new versions
- [typescript](https://www.typescriptlang.org)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## TODO

- [x] documentation
- [ ] more tests
- [ ] add prettier
