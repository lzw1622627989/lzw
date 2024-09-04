# [Tailwind CSS](https://tailwind.nodejs.cn/docs/installation)

## 安装
1.  PostCSS 安装
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
2. 创建postcss.config文件
```js
//postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```
3. 创建tailwind.config
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
4. 将 Tailwind 指令添加到你的 CSS `2选一`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```
```scss
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';
```

## 官网
```txt
https://tailwind.nodejs.cn/docs/installation
```

## [小程序weapp-tailwindcss](https://weapp-tw.icebreaker.top/)
- 官网教程
```txt
https://weapp-tw.icebreaker.top/
```


## vite 配置
`vite内置postcss 可以省略第2步`
- 单位转换
```bash
npm install postcss-px-to-viewport --save-dev
```
```js
// vite.config.js
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import PxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        PxToViewport({
          viewportWidth: 375,
        })
      ]
    }
  }
})


```




