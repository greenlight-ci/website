# Custom Plugins

Create a custom plugin in 5 easy steps:

## 1. Create a Docker Image

Use you preferred base image & programming language, your docker file should declare at least 3 `LABEL` fields that **must** validate against the [plugin info schema](https://github.com/greenlight/schema-plugin)

#### Example

```docker
FROM node:9.11-alpine
LABEL version="1.0.0"
LABEL greenlight.version="1.0.0"
LABEL greenlight.name="acme/my-awesome-plugin"
LABEL greenlight.description="it does awesome things"

COPY index.js /app/

ENTRYPOINT ["/app/index.js"]
```

## 2. Process Mounted Volumes

The Docker container is executed with read-only volumes mounted at pre-defined locations, providing data to scan and configuration to use in your plugin:

volume           | description                                  
---------------- | ---------------------------------------------
`/source`        | application souce code                       
`/settings.json` | configration for your plugin in `JSON` format

## 3. Do your magic and report results

A typical plugin operation would scan through the `/source`, find any issues to flag, and create an [Issue Object](#issue-object) _(must validate against the [Report Spec](https://github.com/greenlight/schema-report))_.

Each issue should be emitted to `STDOUT` in `JSON` as soon as they are found _(streamed, not buffered)_ followed by the [null character `\0`](https://en.wikipedia.org/wiki/Null_character)

Plugins **must** exit with a `zero` exit code unless they encouter an error.

### Constraints

Plugins are executed with the following constraints in Docker:

- `--cap-drop all`  minimal set of Linux capabilities
- `--memory 1g` 1GB memory limit
- `--net none` no networks

plugins are always run as a user app with UID and GID of 9000, and never root.

### Issue Object

```json
{
  "id": "123456",
  "name": "issue-name",
  "description": "issue description",
  "severity": "info",
  "context": {}
}
```
> Review the [Report Spec](https://github.com/greenlight/schema-report) for more details

#### Example

Here's a simple plugin that just checks if a `README` file exists in the root of `/source`:

```js
const glob = require('fast-glob')
const settings = require('/settings.json')

const cwd = '/source'

const issue = {
  name: 'missing-readme',
  description: 'README.md file is missing',
  severity: 'warn',
  context: {
    type: 'file',
    path: 'readme.md'
  }
}

const options = Object.assign(settings, { cwd })

glob('./readme.md', options)
  .then(files => {
    if (files.length === 0) {
      process.stdout.write(JSON.stringify(issue))
      process.stdout.write('\0')
    }
  })
  .catch(error => {
    process.stderr.write(JSON.stringify(error))
    process.stdout.write('\0')
  })

```

## 4. Deploy

You can deploy your plugins to be used with Greenlight, either by building the Docker image locally on the same system that Greenlight is running in, or by publishing to a Docker registry _(Docker Hub will be checked by default)_

## 5. Use

In your [Greenlight configuration](/guide/usage.html#configuration), add your fancy new plugin:

```yaml
version: 2.0.0

plugins:
  acme/my-awesome-plugin:
    settings:
      nocase: true
```
