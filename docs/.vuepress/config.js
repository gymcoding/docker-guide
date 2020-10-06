const { description } = require('../../package')

module.exports = {
  base: '/docker-guide/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '도커 기본 명령어',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '홈',
        link: '/',
      },
      {
        text: '가이드',
        link: '/guide/',
      }
    ],
    sidebar: [
      '/guide',
      {
        title: '기본 운영 명령어',
        collapsable: false,
        children: [
          '/basic/remove-container.md',
          '/basic/remove-image.md',
          '/basic/docker-logs.md',
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
