# typedoc-type-coverage-plugin

This repo is forked from [typescript-coverage-report](https://github.com/alexcanessa/typescript-coverage-report)

A plugin for TypeDoc to generate type coverage report and type coverage badge.

This plugin will create a `type-coverage` directory inside your output directory when generating HTML documentation using typedoc.
`type-coverage` directory includes the detailed type coverage report and it will also create a badge `type-coverage.svg` when you run the typedoc.

## install

```bash

  yarn add -D @mohalla-tech/typedoc-type-coverage-plugin

```

## Screenshots

<img width="596" alt="image" src="https://user-images.githubusercontent.com/100559209/173741931-d6c1ca17-8f35-45e9-b637-1d0810c576a2.png">
<img width="1454" alt="image" src="https://user-images.githubusercontent.com/100559209/173743128-79464483-017d-4462-8674-3b55091fc043.png">
<img width="610" alt="image" src="https://user-images.githubusercontent.com/100559209/173752580-b46cc92c-3f64-4924-b2ab-5c323cbc1573.png">




## Options

| Option                          | Description                                                                            | Default value |
| ------------------------------- | -------------------------------------------------------------------------------------- | ------------- |
| `threshold [number]`            | The minimum percentage of coverage required.                                           | 90            |
