---
home: true
heroImage: https://gitcdn.link/cdn/greenlight/brand/master/logo/horizontal.svg
actionText: Get Started →
actionLink: /guide/
meta:
  - name: keywords
    content: greenlight audit auditing platform framework

_features:
  - title: 🗣 Language Agnostic
    description: Greenlight uses Docker Engine under the hood to allow for scalable operations and language agnostic plugin creation.

  - title: 🔧 Plugin Powered
    description: Choose your own adventure by using official and community plugins, as well as your own custom private plugins.

  - title: ⚡ High Performance
    description: Scales to support large teams and projects on your own infrastructure or in the cloud, leveraging Docker Swarm to run and scale audits in parallel.

  - title: 🌩️ Runs Anywhere
    description: Run locally as part of your TDD, throw into Git hooks to catch mistakes before you commit, or run as part of your CI/CD pipeline for ultimate gating of team mistakes.

  - title: 🚧 Centralized Reports
    description: <em>(coming soon)</em> Track issues and trends over time and share with your team through a simple and easy to use Dashboard.

  - title: 🚧 GitHub App
    description: <em>(coming soon)</em> Remove the guessing work from reviewing Pull Requests, provide a helpful and detailed change requests for contributors.
---

<div class="features">
  <div class="feature" v-for="feature in $page.frontmatter._features">
    <h2>{{ feature.title }}</h2>
    <p v-html="feature.description"></p>
  </div>
</div>

## Easy and fast setup

```bash
curl -L https://github.com/greenlight/cli/archive/master.tar.gz | tar xvz
cd greenlight-* && sudo make install

# start running audits
greenlight
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

<div class="footer">
  <router-link to="/oss/license.html">ISC Licensed</router-link> | Copyright © 2018-present Ahmad Nassri
</div>
