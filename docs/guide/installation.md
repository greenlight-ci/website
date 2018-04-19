# Installation

## Binary

#### Requirements

- Docker `>= v17.x`

```sh
$ curl -L https://github.com/greenlight/cli/archive/master.tar.gz | tar xvz
cd greenlight-* && sudo make install
```

## NPM Package

#### Requirements

- Docker `>= v17.x`
- Node.js `>= v9.x`

```sh
npm install --global @greenlight/cli
```

## Source

#### Requirements

- Git
- Docker `vX.x`
- Node.js `v9`

```sh
git clone git@github.com:greenlight/cli.git
cd cli
npm install
npm link
```
