# TypeScript Node Express Starter

![thumb](https://user-images.githubusercontent.com/20326000/146277095-ace5c15b-f77d-4387-bab9-e045221afb0e.jpg)

[![TypeScript version][ts-badge]][typescript-4-5]
[![Node.js version][nodejs-badge]][nodejs]
[![MTI][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

All basic 🛠 included and configured:

-   [TypeScript][typescript] [4.5][typescript-4-5]
-   [Express][express], fast,unopinionated, minimalist web framework for [Nodejs][nodejs]
-   [Mongoose 6.1.1][mongoose] to work with [MongoDB][mongodb]
-   [Swagger][swagger] documentation also available via [swagger-ui-express][swagger-ui] pakage
-   [ESLint][eslint] with some initial rules recommendation
-   [Jest][jest] for fast unit testing and code coverage
-   Logging functionality with [Winston Logger][winston] and [Morgan Logger][morgan] from network requests
-   Type definitions for Node.js, Express and Jest
-   [Prettier][prettier] to enforce consistent code style
-   NPM [scripts](#available-scripts) for common operations
-   Simple example of TypeScript code and unit test
-   Also includes .prettierrc for consistent file format
-   Improve your commits and more thanks to [Husky][husky]
-   Pre-added hook for pre-commit that runs prettier, lint and your test before commit
-   Contains also a light wrapper over [Axios][axios] as a sigleton class called HttpClient
-   Example configuration for [GitHub Actions][gh-actions]
-   Example configuration for [Travis CI][travis-ci]
-   Example code for mongodb connection
-   Example code for [Express][express] routes, controllers and middlewares
-   Example of api versioning

🆓 Free for all and forever: available under the MIT license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Use as a repository template

To start, just click the **[Use template][repo-template-action]** link (or the green button). Start adding your code in the `src` and unit tests in the `test` directories.

<!-- ### Clone repository

To clone the repository, use the following commands:

```sh
git clone git@github.com:atheodosiou/TypeScript-Node-Express-Starter.git ./my-cool-project
cd my-cool-project
npm install
```

### Download latest release

Download and unzip the current **main** branch or one of the tags:

```sh
wget https://github.com/jsynowiec/node-typescript-boilerplate/archive/main.zip -O node-typescript-boilerplate.zip
unzip node-typescript-boilerplate.zip && rm node-typescript-boilerplate.zip
```-->

## Available Scripts

-   `clear` - remove coverage data and transpiled files,
-   `prebuild` - lint source files and tests before building,
-   `build` - transpile TypeScript to ES6,
-   `dev` - interactive watch mode to automatically transpile source files,
-   `start`- starting server from transpiled files (no watch mode),
-   `lint` - lint source files and tests by indicating errors and warnings,
-   `lint-fix` - lin source file and test by fixing erros and warnings where possible,
-   `test` - run tests,
-   `format-check` - run format check for source files and tests,
-   `format` - formating source files and tests
-   `test:watch` - interactive watch mode to automatically re-run tests
-   `prepare` - husky install

## Additional Informations

Documetation provided by [swagger-ui-express][swagger-ui], can be accessed under `/api-docs`

### Writing tests in JavaScript **optional**

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

## License

Licensed under the MIT. See the [LICENSE](https://github.com/atheodosiou/TypeScript-Node-Express-Starter/blob/master/LICENCE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.5-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node-%3E%3D10-green
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[express]: https://expressjs.com
[mongoose]: https://mongoosejs.com/docs/guide.html
[mongodb]: https://www.mongodb.com/
[swagger]: https://swagger.io/
[husky]: https://typicode.github.io/husky/#/
[axios]: https://axios-http.com/
[swagger-ui]: https://www.npmjs.com/package/swagger-ui-express
[winston]: https://github.com/winstonjs/winston
[morgan]: https://www.npmjs.com/package/morgan
[gha-badge]: https://github.com/atheodosiou/TypeScript-Node-Express-Starter/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/atheodosiou/TypeScript-Node-Express-Starter/actions/workflows/nodejs.yml/badge.svg
[typescript]: https://www.typescriptlang.org/
[typescript-4-5]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/atheodosiou/TypeScript-Node-Express-Starter/blob/master/LICENCE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/atheodosiou/TypeScript-Node-Express-Starter/generate
