# 配置自适应布局  

## postcss-px-to-viewport   
> 将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件 
- **安装**  
```bash
#npm
npm install postcss-px-to-viewport --save-dev


#yarn
yarn add -D postcss-px-to-viewport
```  
- **配置**  
1. PostCSS  
```ts
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```  
2. vite  
```ts
// vite.config.ts
import PxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        PxToViewport({
          viewportWidth: 375,
        })
      ]
    }
  }
})
```