import { DefaultTheme } from "vitepress";
export const sidebarList: DefaultTheme.Sidebar = {
  "/VUE/": [
    // {
    //   text: "Examples",

    //   items: [
    //     { text: "Markdown Examples", link: "/markdown-examples" },
    //     { text: "test", link: "/test" },
    //   ],
    // },
    // {
    //   text: "API",
    //   items: [{ text: "Runtime API Examples", link: "/api-examples" }],
    // },

    {
      text: "VUE",
      items: [
        { text: "vue2", link: "/VUE/" },
        { text: "vue3", link: "/VUE/vue3.md" },
        { text: "vue3组件通信", link: "/VUE/communication.md" },
        { text: "router路由", link: "/VUE/router.md" },
        { text: "pinia状态管理", link: "/VUE/pinia.md" },
      ],
    },
  ],
  "/HTML": [
    {
      text: "HTML",
      items: [{ text: "html", link: "/HTML/" }],
    },
  ],
  "/CSS": [
    {
      text: "CSS",
      items: [
        { text: "css小技巧", link: "/CSS/" },
        { text: "flex布局", link: "/CSS/flex.md" },
        { text: "grid布局", link: "/CSS/grid.md" },
        { text: "图像滤镜", link: "/CSS/filter.md" },
      ],
    },
  ],
  "/JS": [
    {
      text: "JS",
      items: [
        { text: "js", link: "/JS/" },
        { text: "string对象", link: "/JS/string.md" },
        { text: "array数组对象", link: "/JS/array.md" },
        { text: "promise对象", link: "/JS/promise.md" },
      ],
    },
  ],
  "/LINK": [
    {
      text: "LINK",
      items: [{ text: "link", link: "/LINK/" }],
    },
  ],
  "/UI": [
    {
      text: "UI",
      items: [{ text: "ui", link: "/UI/" }],
    },
  ],
  "/NPM": [
    {
      text: "NPM",
      items: [{ text: "npm", link: "/NPM/" }],
    },
  ],
  "/REACT": [
    {
      text: "REACT",
      items: [{ text: "react", link: "/REACT/" }],
    },
  ],
  "/TS": [
    {
      text: "TS",
      items: [{ text: "ts", link: "/TS/" }],
    },
  ],
  "/GIT": [
    {
      text: "GIT",
      items: [{ text: "git", link: "/GIT/" }],
    },
  ],
};
