const addPrefix = require("./addPrefix");

const sidebarConfig = {
  zh: {
    prefix: "/zh/",
    titles: {
      help: {
        install: "安装",
        account: "账户",
        powerpack: "加强包",
        imageHosting: "图床",
      },
      contribute: {
        developerGuide: "开发者指南",
      },
    },
  },
  en: {
    prefix: "/",
    titles: {
      help: {
        install: "Install",
        account: "Account",
        powerpack: "Powerpack",
        imageHosting: "ImageHosting",
      },
      contribute: {
        developerGuide: "Developer Guide",
      },
    },
  },
};

function contributeSidebarFactory(locales) {
  const titles = sidebarConfig[locales].titles;
  const prefix = sidebarConfig[locales].prefix;
  const contribute = addPrefix(
    [
      "how-to-contribute",
      {
        title: titles.contribute.developerGuide,
        sidebarDepth: 2,
        collapsable: false,
        path: "developer-guide",
        children: addPrefix(
          ["backend-service", "image-hosting", "html-parser"],
          "developer-guide/"
        ),
      },
      "localization-guide",
    ],
    `${prefix}contribute/`
  );
  const help = addPrefix(
    [
      {
        title: titles.help.install,
        sidebarDepth: 2,
        collapsable: false,
        children: ["install/chrome", "install/edge", "install/firefox"],
      },
      {
        title: titles.help.account,
        sidebarDepth: 2,
        collapsable: false,
        children: addPrefix(
          [
            "yuque",
            "github-issue",
            "github-repository",
            "webdav",
            "flomo",
            "leanote",
            {
              title: titles.help.powerpack,
              collapsable: false,
              children: ["powerpack/email", "powerpack/send-to-kindle"],
            },
          ],
          "account/"
        ),
      },
      {
        title: titles.help.imageHosting,
        sidebarDepth: 2,
        collapsable: false,
        children: ["image-hosting/github-repository"],
      },
      "privacy-policy",
    ],
    `${prefix}help/`
  );
  return {
    contribute,
    help,
  };
}

module.exports = contributeSidebarFactory;
