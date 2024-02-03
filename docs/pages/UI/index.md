# 移动端UI组件库(Vue)  

## [Vant4](https://vant-contrib.gitee.io/vant/#/zh-CN/icon)  
- **安装**  
```bash
#通过 npm 安装
npm i vant

# 通过 yarn 安装
yarn add vant

# 通过 pnpm 安装
pnpm add vant

# 通过 Bun 安装
bun add vant
```  
- **用法**  
1. 常规用法  
```ts
// main.ts
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp();

// 3. 注册你需要的组件
app.use(Button);
```  
2. 按需引入组件样式  
```bash
npm i @vant/auto-import-resolver unplugin-vue-components -D
```
:::code-group 
```ts [Vite]
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```
```ts [vue-cli]
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({ resolvers: [VantResolver()] }), // 当 unplugin-vue-components 版本小于 0.26.0
      ComponentsPlugin.default({ resolvers: [VantResolver()] }), //当 unplugin-vue-components 版本大于等于 0.26.0
    ],
  },
};
```
```ts [Webpack] 
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  plugins: [
    ComponentsPlugin({ resolvers: [VantResolver()] }), // 当 unplugin-vue-components 版本小于 0.26.0
    ComponentsPlugin.default({ resolvers: [VantResolver()] }), //当 unplugin-vue-components 版本大于等于 0.26.0
  ],
};
```

:::  

## [NutUI](https://nutui.jd.com/#/)  
- **安装**  
```bash
# pnpm
pnpm add @nutui/nutui

# npm
npm i @nutui/nutui

# yarn
yarn add @nutui/nutui
```  
- **用法**  
1. 全局全量引入  
```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");
```  
2. 全局部分引入  
```ts
import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).mount("#app");
```  
3. 自动按需引入  
```bash
# pnpm
pnpm add @nutui/auto-import-resolver unplugin-vue-components -D

# npm
npm i @nutui/auto-import-resolver unplugin-vue-components -D

# yarn
yarn add @nutui/auto-import-resolver unplugin-vue-components -D
```  

:::code-group
```ts [Vite]
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 NutUI 组件
    Components({
      resolvers: [NutUIResolver()],
    }),
  ]
})
```
```ts [Vue-cli]  
// vue.config.ts
const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const NutUIResolver = require('@nutui/auto-import-resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components.default({ resolvers: [NutUIResolver()] }), // unplugin-vue-components >= 0.26.0
      // Components({ resolvers: [NutUIResolver()] }), // unplugin-vue-components < 0.26.0
    ],
  }
})
```
```ts [Webpack]  
// webpack.config.js
const Components = require('unplugin-vue-components/webpack')
const NutUIResolver = require('@nutui/auto-import-resolver')

module.exports = {
  plugins: [
    // 开启 unplugin 插件，自动引入 NutUI 组件
    Components.default({ resolvers: [NutUIResolver()] }), // unplugin-vue-components >= 0.26.0
    // Components({ resolvers: [NutUIResolver()] }), // unplugin-vue-components < 0.26.0
  ]
}
```
:::