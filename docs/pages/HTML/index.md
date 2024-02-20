# HTML

## 初识 HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body></body>
</html>
```

1. `<!doctype>`  
   网页的第一个标签通常是<!doctype>，表示文档类型，告诉浏览器如何解析网页。
   一般来说，只要像下面这样，简单声明 doctype 为 html 即可。浏览器就会按照 HTML5 的规则处理网页。
   有时，该标签采用完全大写的形式，以便区别于正常的 HTML 标签。因为<!doctype>本质上不是标签，更像一个处理指令。

```html
<!DOCTYPE html>
```

2.  `<html>`  
    `<html>`标签是网页的顶层容器，也称为根元素（root element），其他元素都是它的子元素。一个网页只能有一个`<html>`标签。
    该标签的 lang 属性，表示网页内容默认的语言。

```html
<html lang="en"></html>
```

3. `<head>`  
   `<head>`标签是一个容器标签，用于放置网页的元信息。它的内容不会出现在网页上，而是为网页渲染做准备。
   `<head>`是`<html>`的第一个子元素。如果网页不包含`<head>`，浏览器会自动创建一个。  
   `<head>`的子元素一般有七个
   > - `<meta>`：设置网页的元数据。
   > - `<link>`：连接外部样式表。
   > - `<title>`：设置网页标题。
   > - `<style>`：放置内嵌的样式表。
   > - `<script>`：引入脚本。
   > - `<noscript>`：浏览器不支持脚本时，所要显示的内容。
   > - `<base>`：设置网页内部相对 URL 的计算基准。

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
  <style>
     {
      ...;
    }
  </style>
  <script src="..."></script>
</head>
```

4. `<body>`  
   `<body>`标签是一个容器标签，用于放置网页的主体内容。浏览器显示的页面内容，都是放置在它的内部。它是`<html>`的第二个子元素，紧跟在`<head>`后面。

```html
<html>
  <head>
    <title>网页标题</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
```

## 常用标签

- `<header>` 页眉
- `<footer>` 页尾
- `<main>` 主体内容
- `<article>` 一篇文章
- `<aside>` 侧边栏
- `<section>` 主题的独立部分
- `<nav>` 导航栏
- `<h1>~<h6>` 标题

## 文本标签

- `<div>`
- `<span>`
- `<p>`
- `<br>`
- `<hr>`
- `<em>`
- `<strong>`

## 列表标签

- `<ol>`
- `<ul>`
- `<li>`
- `<dl>`
- `<dt>`
- `<dd>`

## 图像标签

- `<img>`

## 链接标签

- `<a>`
- `<link>`
- `<script>`

## 多媒体标签

- `<video>`  
  |属性|值|描述|  
  |:---:|:---:|:---:|  
  |`src`|URL 地址|视频地址|  
  |`width`|像素值|设置视频播放器的宽度|  
  |`height`|像素值|设置视频播放器的高度|  
  |`controls`|-|向用户显示视频控件（比如播放/暂停按钮）|  
  |`muted`|-|视频静音|  
  |`autoplay`|-|视频自动播放|  
  |`loop`|-|循环播放|  
  |`poster`|URL地址|视频封面|  
  |`preload`|auto / metadata / none|none : 不预加载视频 metadata : 仅预先获取视频的元数据（例如长度）。auto : 可以下载整个视频文件，即使用户不希望使用它。|

- `<audio>`  
|属性|值|描述|  
  |:---:|:---:|:---:|  
  |`src`|URL 地址|音频地址|  
  |`controls`|-|向用户显示音频控件（比如播放/暂停按钮）|  
  |`muted`|-|音频静音|   
  |`loop`|-|循环播放|  
  |`preload`|auto / metadata / none|none : 不预音频视频 metadata : 仅预先获取音频的元数据（例如长度）。auto : 可以下载整个音频文件，即使用户不希望使用它。|

## 表单标签

- `<form>`
- `<label>`
- `<input>`
- `<button>`
- `<select>`
- `<option>`
- `<textarea>`
- `<progress>`

## 表格标签

- `<table>`
- `<caption>`
- `<thead>`
- `<tbody>`
- `<tfoot>`
- `<tr>`
- `<th>`
- `<td>`
- `<table>`

## 全局属性

- id
- class
- style
- dir
- title
- lang
