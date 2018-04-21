---
home: true
heroImage: https://gitcdn.link/cdn/greenlight/brand/master/logo/horizontal.svg
actionText: Get Started →
actionLink: /guide/

features:
- title: 🗣 Language Agnostic
  details: Greenlight uses Docker Engine under the hood to allow for scalable operations and language agnostic plugins.

- title: 🔧 Plugin Powered
  details: Choose your own auditing adventure by using official and community created plugins, as well as your own custom private plugins.

- title: ⚡ Performant
  details: Use your own scalable infrastructure configuration locally or in the cloud, with tools such as Docker Swarm to run audits in parallel.

- title: 🌩️ Runs Anywhere
  details: Run locally as part of your TDD, throw into Git hooks to prevent mistakes, or run as part of your CI/CD platform for ultimate gating of team mistakes.

- title: 🚧 Cloud Reports
  details: (coming soon) Track issues over time and share with your team through a simple and easy to use Dashboard.

- title: 🚧 GitHub App
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

<div class="demo" id="demo"></div>

<script>
export default {
  mounted () {
    const demo = document.querySelector('#demo')
    let script = document.createElement('script')
    script.async = true
    script.dataset.size = 'small'
    script.dataset.cols = 150
    script.dataset.rows = 28
    script.id = "asciicast-Zy8rKRIfWqzbDiCZGLD86YIsW"
    script.src = 'https://asciinema.org/a/Zy8rKRIfWqzbDiCZGLD86YIsW.js'
    demo.appendChild(script)
  }
}
</script>

> _output from `audits/demo` plugin, which as you can tell, is totally meaningless mumbo jump, checkout some [real plugins](/plugins/) instead_
