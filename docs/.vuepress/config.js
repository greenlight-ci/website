module.exports = {
  title: 'Greenlight',
  description: 'Modern Auditing Platform',

  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // ['script', { src: 'https://unpkg.com/mermaid/dist/mermaid.min.js' }],
  ],

  serviceWorker: false,
  themeConfig: {
    repo: 'greenlight/website',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Plugins',
        link: '/plugins/'
      },
      {
        text: 'Contribute',
        link: '/oss/'
      }
    ],
    sidebar: {
      '/': [{
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/installation',
          '/guide/usage'
        ]
      },
      {
        title: 'Plugins',
        collapsable: false,
        children: [
          '/plugins/',
          '/plugins/community',
          '/plugins/custom'
        ]
      },
      {
        title: 'Open Source',
        collapsable: false,
        children: [
          '/oss/',
          '/oss/license',
          '/oss/conduct',
          '/oss/contributing',
          '/oss/commits'
        ]
      }]
    }
  }
}
