# PC端UI组件库(Vue)  

## [Element Plus](https://element-plus.gitee.io/zh-CN/)  
- **安装**  
```bash
# NPM
npm install element-plus --save

# Yarn
yarn add element-plus

# pnpm
pnpm install element-plus
```  
- **用法**  
1. 完整引入  
```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```  
2. 按需导入   
> 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件 
```bash 
npm install -D unplugin-vue-components unplugin-auto-import
```  
:::code-group 
```ts [Vite]
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

```ts [Webpack]
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```
:::  

## [Ant Design Vue](https://antdv.com/docs/vue/introduce-cn/)  
- **安装**  
```bash
# Npm
npm install ant-design-vue@4.x --save  

# Yarn
yarn add ant-design-vue@4.x
```  
- **用法**  
1. 全局引入  
```ts
//main.ts  
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');
```  
2. 按需引入    
```bash
npm install unplugin-vue-components -D
 ```
::: code-group 
```ts [Vite] 
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
});
```
```ts [Webpack]
// webpack.config.js
const components = require('unplugin-vue-components/webpack')
const {AntDesignVueResolver } = require('unplugin-vue-components/resolvers')

module.exports ={
  //...
  plugins: [
    Components({
      resolvers: [
         AntDesignVueResolver(),
      ]
    })
  ]
}

```
:::  


## [ArcoVue](https://arco.design/vue/docs/start)  
- **安装**  
```bash 
# npm
npm install --save-dev @arco-design/web-vue

# yarn
yarn add --dev @arco-design/web-vue
```  
- **用法**  
1. 完整引入  
```ts
// main.ts
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
```  
2. 按需引入  
```bash 
 npm install -D unplugin-vue-components unplugin-auto-import
``` 

:::code-group 
```ts [Vite]
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const components = require('unplugin-vue-components/webpack');
const AutoImport=require('unplugin-auto-import/vite')
import { ArcoResolver } from 'unplugin-vue-components/resolvers';


export default defineConfig({
  //...
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    })
  ]
})
```
```ts [Webpack]  

// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ArcoResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [ArcoResolver({ sideEffect: true})],
    }),
  ],
}
```
:::  

## [Naive UI](https://www.naiveui.com/zh-CN/light)  
- **安装**  
```bash
npm i -D naive-ui
```  

- **用法**  
1. 全局引入  
```ts
// main.ts
import { createApp } from 'vue'
import naive from 'naive-ui'

const app = createApp(App)
app.use(naive)
```  
2. 直接引入  
```vue
<template>
  <n-button>naive-ui</n-button>
</template>

<script lang="ts" setup>
  import { NButton } from 'naive-ui'
</script>
```  
3. 按需引入   
```bash
npm install -D unplugin-vue-components unplugin-auto-import
```  
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
```  

- **字体**  
```bash
npm i -D vfonts
```  
1. 配置字体  
```ts
// main.ts 
import { createApp } from 'vue'
import naive from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp()
app.use(naive)
```  


