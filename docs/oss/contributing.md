# Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines.

- [Code of Conduct](#code-of-conduct)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Code of Conduct

This project is governed by the [Contributor Covenant version 1.4](/oss/conduct.html). All contributors and participants agree to abide by its terms. To report violations, send an email to ahmad@ahmadnassri.com.

## Issue Reporting Guidelines

Follow the provided Issue Template in each repository to ensure a fast and direct response.

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches.
- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.
- Make sure `npm test` passes **on all supported Node versions**. _(see [development setup](#development-setup))_
- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR.

## Development Setup

You will need [Node.js](http://nodejs.org), we typically target **ALL [LTS][lts] versions**, confirm this project's list of supported versions in `package.json`

### Committing Changes

Commit messages should follow the [commit message convention](/oss/commits.html) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit.

### NPM scripts

There are a few scripts available in the `scripts` section of the `package.json` file.

The default `test` script will do the following: 

* runs `tap test` with enforcement of 100% coverage

[lts]: https://github.com/nodejs/Release
