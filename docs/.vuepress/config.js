const contributeSidebarFactory = require("../../src/contributeSidebarFactory");

console.log(contributeSidebarFactory("en").help);

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
          "/contribute/": contributeSidebarFactory("en").contribute,
          "/help/": contributeSidebarFactory("en").help,
        },
        navbar: true,
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Home", link: "/" },
          { text: "Contribute", link: "/contribute/how-to-contribute" },
          { text: "Help", link: "/help/" },
        ],
      },
      "/zh/": {
        sidebar: {
          "/zh/contribute": contributeSidebarFactory("zh").contribute,
          "/zh/help": contributeSidebarFactory("zh").help,
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
