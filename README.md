Crave
=================

A project starter CLI

[![Version](https://img.shields.io/npm/v/@motionhungry/crave.svg)](https://npmjs.org/package/@motionhungry/crave)
[![License](https://img.shields.io/npm/l/@motionhungry/crave.svg)](https://github.com/motionhungry/crave/blob/master/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @motionhungry/crave
$ crave COMMAND
running command...
$ crave (--version)
@motionhungry/crave/0.2.1 darwin-arm64 node-v17.5.0
$ crave --help [COMMAND]
USAGE
  $ crave COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crave help [COMMAND]`](#crave-help-command)
* [`crave list [FILE]`](#crave-list-file)
* [`crave start TEMPLATE NAME`](#crave-start-template-name)

## `crave help [COMMAND]`

Display help for crave.

```
USAGE
  $ crave help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for crave.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `crave list [FILE]`

List the available templates.

```
USAGE
  $ crave list [FILE]

DESCRIPTION
  List the available templates.

EXAMPLES
  $ crave list
```

_See code: [dist/commands/list.ts](https://github.com/motionhungry/crave.git/crave/blob/v0.2.1/dist/commands/list.ts)_

## `crave start TEMPLATE NAME`

Create a new project.

```
USAGE
  $ crave start [TEMPLATE] [NAME]

ARGUMENTS
  TEMPLATE  The starter template to use.
  NAME      The name of the project.

DESCRIPTION
  Create a new project.

EXAMPLES
  $ crave start rn-design-system my-project
```

_See code: [dist/commands/start.ts](https://github.com/motionhungry/crave.git/crave/blob/v0.2.1/dist/commands/start.ts)_
<!-- commandsstop -->
