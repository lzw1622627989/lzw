# 跨端UI组件库（Vue）  
## [OpenTiny](https://opentiny.design/)  
- **安装**  
```bash
#yarn
yarn add @opentiny/vue@3

#npm
npm install @opentiny/vue@3
```  
- **用法**  
1. 完整引入 
```js
import { createApp } from 'vue'
import TinyVue from '@opentiny/vue'

const app = createApp(App)
app.use(TinyVue)
```  
2. 单组件引入   
> 每个组件都可以独立安装、独立使用，即只安装单个组件的依赖并单独引用该组件 
```bash
yarn add @opentiny/vue-button @opentiny/vue-alert
# 或者
npm install @opentiny/vue-button @opentiny/vue-alert
```  
```vue
<template>
  <div>
    <tiny-button>TinyVue</tiny-button>
    <tiny-alert description="TinyVue"></tiny-alert>
  </div>
</template>

<script>
  import Button from '@opentiny/vue-button'
  import Alert from '@opentiny/vue-alert'

  export default {
    components: {
      TinyButton: Button,
      TinyAlert: Alert
    }
  }
</script>
```  
3. 按需引入  
> @opentiny/vue-vite-import 插件可以按需只打包 pc 或者移动的组件，减少组件库打包后的体积  
```bash
yarn add @opentiny/vue-vite-import
# 或者
npm install @opentiny/vue-vite-import
```  
```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import importPlugin from '@opentiny/vue-vite-import'

export default {
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    vue(),
    importPlugin(
      [
        {
          libraryName: '@opentiny/vue'
        },
        {
          libraryName: `@opentiny/vue-icon`,
          customName: (name) => {
            return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
          }
        }
      ],
      'pc' // 此配置非必选，按需配置(pc|mobile|mobile-first)
    )
  ],
  define: {
    'process.env': { ...process.env }
  }
}

```