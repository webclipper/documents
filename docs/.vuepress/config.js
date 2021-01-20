module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Web Clipper',
      description: 'Save anything on the web to anywhere。'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '剪藏',
      description: '保存一切。'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        navbar: true,
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [{ text: 'Home', link: '/' }, { text: 'Contribute', link: '/contribute' }]
      },
      '/zh/': {
        navbar: true,
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [{ text: '首页', link: '/' }, { text: '贡献', link: '/contribute' }]
      }
    }
  },
  dest: 'public'
};
