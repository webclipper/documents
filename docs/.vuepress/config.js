module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Web Clipper",
      description: "Save anything on the web to anywhere。",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "剪藏",
      description: "保存一切。",
    },
  },
  themeConfig: {
    locales: {
      "/": {
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: {
          "/contribute/": [
            "",
            "/contribute/note-taking-service",
            "/contribute/image-hosting",
          ],
        },
        navbar: true,
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Home", link: "/" },
          { text: "Contribute", link: "/contribute/" },
        ],
      },
      "/zh/": {
        sidebar: {
          "/zh/contribute": [
            "/zh/contribute/how-to-contribute",
            "/zh/contribute/localization",
          ],
          "/zh/help": [
            {
              title: "安装",
              sidebarDepth: 2,
              collapsable: false,
              children: [
                "/zh/help/install/chrome",
                "/zh/help/install/edge",
                "/zh/help/install/firefox",
              ],
            },
            {
              title: "账户",
              sidebarDepth: 2,
              collapsable: false,
              children: [
                "/zh/help/account/yuque",
                "/zh/help/account/github-issue",
                "/zh/help/account/github-repository",
                "/zh/help/account/webdav",
                "/zh/help/account/flomo",
                {
                  title: "加强包",
                  collapsable: false,
                  children: [
                    "/zh/help/account/powerpack/email",
                    "/zh/help/account/powerpack/send-to-kindle",
                  ],
                },
              ],
            },
            {
              title: "图床",
              sidebarDepth: 2,
              collapsable: false,
              children: ["/zh/help/image-hosting/github-repository"],
            },
            "/zh/help/changelog",
            "/zh/help/privacy-policy",
          ],
        },
        navbar: true,
        sidebarDepth: 3,
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "贡献", link: "/zh/contribute/how-to-contribute" },
          { text: "帮助中心", link: "/zh/help/" },
        ],
      },
    },
  },
  dest: "public",
};
