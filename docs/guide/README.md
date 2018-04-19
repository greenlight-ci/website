# Introduction

Maintaining quality is hard, maintaining quality across a matrix of projects, teams, and technology stacks is even harder.

We have many tools and libraries at our disposal that can be used to keep our fingers on the pulse of a project's technical health, from inception to sunset. However these tools do not share any commonality in either format nor operation.

This is the purpose of Greenlight, to act as The Modern Platform for Auditing, weaving a common operating model and data format between existing tool, and be the framework for building new auditing & quality checks with minimal effort.

## How it Works

Greenlight is distributed as a binary or a Docker image, which in turn orchestrates running any number of Docker images _(referred to as "plugins" in this context)_ against your Project.

Each plugin is a Docker image that expects a pre-defined execution pattern, and produces a stream of Issues that gets aggregated into Reports with simple actionable view to tackle found issues.

Greenlight and Plugins are configured through a `greenlight.yml` file in your project's root.

<div class="mermaid">
sequenceDiagram
  participant IF as Interface
  participant GL as Greenlight
  participant PR as Your Project
  participant PL as Plugin
  participant DR as Docker
  IF->>GL: trigger
  GL->>PR: read config
  GL->>DR: pull plugin image
  DR-->>PL: create container
  GL->>PL: execute plugin
  PR-->>DR: mount as volume
  PL->>DR: run container
  PL-->>GL: stream results
  GL-->>IF: generate report
</div>

### TL;DR

#### Your Project:

```plain
project/
├── src
│   ├── module.js
│   ├── module.spec.js
│   └── foo.js
├── .eslintrc
├── .greenlight.yml
├── index.js
└── README.md
```

#### `.greenlight.yml`

```yaml
version: 1.0.0

plugins:
  redlight/eslint:
    exclude: node_modules/**
    include:
      - src
      - test
    options:
      fix: true
```

if your `foo.js` contains any broken ESLint rules, then Greenlight will output the following:

```plain
⏺ redlight/eslint found 1 issues

⏺ redlight/eslint issues: 1

src/foo.js

1:7  major  'my-var' is assigned a value but never used.  no-unused-vars
```
