import { DefaultTheme } from "vitepress";
export const sidebarList: DefaultTheme.Sidebar = {
  "/VUE/": [
    {
      text: "VUE",
      items: [
        { text: "vue2", link: "/VUE/" },
        { text: "vue3", link: "/VUE/vue3.md" },
        { text: "vue3组件通信", link: "/VUE/communication.md" },
        { text: "router路由", link: "/VUE/router.md" },
        { text: "pinia状态管理", link: "/VUE/pinia.md" },
        { text: "axios请求", link: "/VUE/axios.md" },
        { text: "vite-press文档", link: "/VUE/vitepress.md" },
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
        { text: "媒体查询", link: "/CSS/media.md" },
        { text: "图像滤镜", link: "/CSS/filter.md" },
        { text: "TailwindCSS", link: "/CSS/TailwindCSS.md" },
        { text: "CSS可视化开源库", link: "/CSS/ui.md" },
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
        { text: "js简写技巧", link: "/JS/simplify.md" },
      ],
    },
    {
      text: "Radash",
      items: [
        { text: "安装", link: "/JS/Radash/" },
        { text: "Array数组", link: "/JS/Radash/array.md" },
        { text: "Object对象", link: "/JS/Radash/object.md" },
        { text: "Curry 柯里化", link: "/JS/Radash/curry.md" },
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
      items: [
        { text: "移动端UI库", link: "/UI/" },
        { text: "PC端UI库", link: "/UI/pc.md" },
        { text: "跨端UI库", link: "/UI/all.md" },
        { text: "自适应布局", link: "/UI/layout.md" },
      ],
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
      items: [
        { text: "react", link: "/REACT/" },
        { text: "react-hooks", link: "/REACT/hooks.md" },
        { text: "react-router", link: "/REACT/router.md" },
      ],
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
  "/Python": [
    {
      text: "Python",
      items: [{ text: "python", link: "/Python/" }],
    },
  ],
  "/LeetCode": [
    {
      text: "LeetCode",
      items: [
        { text: "LeetCode入门", link: "/LeetCode/" },
        { text: "数组算法", link: "/LeetCode/array" },
        { text: "2024-03", link: "/LeetCode/2024-03" },
      ],
    },
  ],
  "/Study": [
    {
      text: "2025",
      items: [{ text: "03", link: "/Study/2025/03/" }],
    },
  ],
};
