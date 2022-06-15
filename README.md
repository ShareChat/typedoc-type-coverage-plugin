# typedoc-type-coverage-plugin

This repo is forked from [typescript-coverage-report](https://github.com/alexcanessa/typescript-coverage-report)

A plugin for TypeDoc to generate type coverage report and type coverage badge.

This plugin will create a `type-coverage` directory inside your output directory when generating HTML documentation using typedoc.
`type-coverage` directory includes the detailed type coverage report and it will also create a badge `type-coverage.svg` 

## Options

| Option                          | Description                                                                            | Default value |
| ------------------------------- | -------------------------------------------------------------------------------------- | ------------- |
| `threshold [number]`            | The minimum percentage of coverage required.                                           | 90            |
