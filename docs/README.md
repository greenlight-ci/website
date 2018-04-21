---
home: true
heroImage: https://gitcdn.link/cdn/greenlight/brand/master/logo/horizontal.svg
actionText: Get Started →
actionLink: /guide/

features:
- title: Language Agnostic
  details: Greenlight uses Docker Engine under the hood to allow for scalable operations and language agnostic plugins.

- title: Plugin Powered
  details: Choose your own auditing adventure by using official and community created plugins, as well as your own custom private plugins.

- title: Performant
  details: Use your own scalable infrastructure configuration locally or in the cloud, with tools such as Docker Swarm to run audits in parallel.

- title: Runs Anywhere
  details: Run locally as part of your TDD, throw into Git hooks to prevent mistakes, or run as part of your CI/CD platform for ultimate gating of team mistakes.

- title: Cloud Reports
  details: (coming soon) Track issues over time and share with your team through a simple and easy to use Dashboard.

- title: GitHub App
  details: (coming soon) Remove the guessing work from reviewing Pull Requests, provide a helpful and detailed change requests for contributors.

footer: ISC Licensed | Copyright © 2018-present Ahmad Nassri
---

## Easy and fast setup

```bash
$ curl -L https://github.com/greenlight/cli/archive/master.tar.gz | tar xvz
cd greenlight-* && sudo make install

# start running audits
$ greenlight
```

## Clean and simple reports

Reports are generated in `text`, `html`, and `json` allowing you to further customize by creating your own custom dashboards.

```plain
● audits/demo found 10 issues
● audits/dummy found 0 issues

● audits/demo issues: 10

/src/child.js

54:25  major  Unexpected clef with a volumed goose       theater
71:12  info   Unexpected use with a floodlit berry       eggplant
76:57  info   Unexpected cracker with a praising weapon  sidecar
17:36  info   Unexpected kite with a brindle sidecar     cafe

/src/damage.js

39:17  info      Unexpected pimple with a freaky size        wasp
25:29  critical  Unexpected collar with a cissoid cloakroom  branch
20:45  info      Unexpected coat with a felsic ferryboat     dancer
84:75  major     Unexpected wealth with a hottish crowd      baseball

/src/truck.js

37:43  minor  Unexpected seed with a choky bite          mail
49:42  minor  Unexpected second with a ratlike handicap  dredger
```

> _output from `audits/demo` plugin, which as you can tell, is totally meaningless mumbo jump, checkout some [real plugins](/plugins/) instead_
