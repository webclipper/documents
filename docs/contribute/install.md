# Development Setup

## Prerequisites

In order to download necessary tools, clone the repository, and install dependencies via yarn you need network access.

You'll need the following tools:

- `Git`
- `Node.JS`, x64, version >= 10.x, <= 14.x
- `Yarn`, follow the (installation guide)[https://yarnpkg.com/en/docs/install]

## Getting the sources

First, fork the Web Clipper repository so that you can make a pull request. Then, clone your fork locally:

```bash
$ git clone https://github.com/<<<your-github-account>>>/web-clipper.git
```

## Build 

Install and build all of the dependencies using `Yarn`:

```bash
$ cd web-clipper
$ yarn
```

Then you have two options:

- If you want to build for Chrome Extension, run `yarn dev`
- If you want to build for Firefox Extension, run `yarn dev:ff`

## Run extension

> Take Chrome as an example

- First, open chrome://extensions/
- Then make sure that 开发者模式 is on.
(截图)
- Install our local extension, click the button 加载解压后的扩展程序, and choose the dist folder in web clipper repository.
(截图)

## Unit Testing

Make sure npm test passes, and if there is a new feature, please add accompanying test case.

Running all tests:

```bash
$ yarn test
```

## Development Guide

- If you want to add new backend services, you can see [developer-guide/backend-service](./developer-guide/backend-service.md)
- If you want to add new image-hosting you can see [developer-guide/image-hosting](./developer-guide/image-hosting.md)
- If some elements of the site cannot be parsed，you can see [developer-guide/html-parser](./developer-guide/html-parser.md)
