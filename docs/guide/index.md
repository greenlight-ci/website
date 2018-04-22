# Introduction

Maintaining quality is hard, maintaining quality across a matrix of projects, teams, and technology stacks is even harder.

We have many tools and libraries at our disposal that can be used to keep our fingers on the pulse of a project's technical health, from inception to sunset. However these tools do not share any commonality in either format nor operation.

## What is Greenlight

The purpose of Greenlight, is to act as The Modern Platform for Auditing, weaving a common operating model and data format between any existing tool, and be the framework for building new auditing & quality checks with minimal effort.

## Features

- **Language Agnostic**  
  Greenlight uses Docker Engine under the hood to allow for scalable operations and language agnostic plugin creation.

- **Plugin Powered**  
  Choose your own adventure by using [official](/plugins/) and [community plugins](/plugins/community.html), as well as your own [custom private plugins](/plugins/custom.html).

- **High Performance**  
  Scales to support large teams and projects on your own infrastructure or in the cloud, leveraging Docker Swarm to run and scale audits in parallel.

- **Runs Anywhere**  
  Run locally as part of your TDD, throw into Git hooks to catch mistakes before you commit, or run as part of your CI/CD pipeline for ultimate gating of team mistakes.

- **Centralized Reports**  
  _(coming soon)_ Track issues and trends over time and share with your team through a simple and easy to use Dashboard.

- **GitHub App**  
  _(coming soon)_ Remove the guessing work from reviewing Pull Requests, provide a helpful and detailed change requests for contributors.

## How it Works

Greenlight is distributed as a binary or a Docker image, which in turn orchestrates running any number of Docker images _(referred to as "plugins" in this context)_ against your Project.

Each plugin is a Docker image that expects a pre-defined execution pattern, and produces a stream of Issues that gets aggregated into Reports with simple actionable view to tackle found issues.

Greenlight and Plugins are configured through a `greenlight.yml` file in your project's root.

![](/diagram.svg)

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
  audits/eslint:
    exclude: node_modules/**
    include:
      - src
      - test
    options:
      fix: true
```

if your `foo.js` contains any broken ESLint rules, then Greenlight will output the following:

```plain
● audits/eslint found 1 issues

● audits/eslint issues: 1

src/foo.js

1:7  major  'my-var' is assigned a value but never used.  no-unused-vars
```
