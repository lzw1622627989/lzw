import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
import { navList } from '../router/nav'
import { sidebarList } from "../router/sidebar";

export default defineConfig({
  base: "/lzw/",
  title: "程序猿爱瞎逛",
  description: ".....",
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/avatar.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: navList,
    sidebar: sidebarList,
    footer: {
      message: `2024-01-02至${new Date().getFullYear()}-${
        new Date().getMonth() + 1 < 10
          ? "" + new Date().getMonth() + 1
          : new Date().getMonth() + 1
      }-${
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate()
      }`,
      copyright: "lzw(程序猿)",
    },
    search: {
      provider: "local",
    },
    outline: {
      label: "锚点导航",
    },
  },
  rewrites: {
    // 'packages/:pkg/src/(.*)': ':pkg/index.md'
    // 'pages/VUE/index.md': 'VUE/index.md',
    // "pages/:pkg/index.md": ":pkg/index.md",
    "pages/:pkg/(.*)": ":pkg/(.*)",
  },
  head: [["link", { rel: "icon", href: "/lzw/lzw.ico" }]],
  lastUpdated: true,
});
