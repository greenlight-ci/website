# Installation

[[toc]]

## Docker

::: tip Reccomended
This is the reccomended and most tested method
:::

Uses a Docker [wrapper script][wrapper] to execute [`@greenlight/cli`][cli] inside a Docker container 

#### Requirements

name   | min version
------ | -----------
Docker | `1.13`     

```bash
curl -L https://github.com/greenlight/installer/archive/master.tar.gz | tar xvz
cd installer-master && sudo make install
```

## Binary

::: warning
This method is not thoroughtly tested
:::

Download and install a pre-compiled Node.js binary of [`@greenlight/cli`][cli] using [nexe][].

#### Requirements

name   | min version
------ | -----------
Docker | `1.13`     

```bash
curl -L https://github.com/greenlight/installer/archive/master.tar.gz | tar xvz
cd installer-master && sudo make binary
```

## NPM Package

#### Requirements

name    | min version
------- | -----------
Docker  | `1.13`     
Node.js | `9.x`      

```bash
npm install --prod --global @greenlight/cli
```

## Source

#### Requirements

name    | min version
------- | -----------
Git     | `*`        
Docker  | `1.13`     
Node.js | `9.x`      

```bash
# clone 
git clone git@github.com:greenlight/cli.git && cd cli

# install dependencies
npm install --prod

# creates `greenlight` alias
npm link 
```

## Uninstall

```bash
curl -L https://github.com/greenlight/installer/archive/master.tar.gz | tar xvz
cd installer-master && sudo make uninstall
```


[wrapper]: https://github.com/greenlight/installer/blob/master/wrapper

[cli]: https://www.npmjs.com/package/@greenlight/cli

[nexe]: https://github.com/nexe/nexe
