import { DefaultTheme } from "vitepress";
export const navList: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  { text: "每日一学", link: "/Study/2025/03/" },
  {
    text: "导航页",
    items: [
      // { text: "Markdown Examples", link: "/markdown-examples" },
      // { text: "Runtime API Examples", link: "/api-examples" },
      // { text: "test", link: "/test" },
      { text: "css", link: "/CSS/" },
      { text: "html", link: "/HTML/" },
      { text: "js", link: "/JS/" },
      { text: "ts", link: "/TS/" },
      { text: "vue", link: "/VUE/" },
      { text: "react", link: "/REACT/" },
      { text: "ui", link: "/UI/" },
      { text: "npm", link: "/NPM/" },
      { text: "link", link: "/LINK/" },
      { text: "git", link: "/GIT/" },
      { text: "python", link: "/Python/" },
      { text: "leet-code", link: "/LeetCode/" },
    ],
  },
];

