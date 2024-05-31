## css全局变量
```css
:root{
    --c-color:red;
}
[selector]{
    color:var(--c-color)
}
```

## 图片文字环绕

```css
/* 选择器 */
[selector] {
  width: 300px;
  float: left;
  shape-outside: circle(50%);
}
```

## 实现平滑滚动

```css
[selector] {
  scroll-behavior: smooth;
  overflow: scroll;
}
```

## 图像填充文字效果

```css
[selector] {
  background-image: url("???");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-color: white;
}
```

## 文字描边效果

```css
[selector] {
  color: #fff;
  font-size: 80px;
  -webkit-text-stroke: 2px crimson;
  text-stroke: 2px crimson;
}
```

## 英文文本大写或小写

```css
/* 大写 */
[selector] {
  text-transform: uppercase;
}
/* 首字母大写 */
[selector] {
  text-transform: capitalize;
}
/* 小写 */
[selector] {
  text-transform: lowercase;
}
```

## 毛玻璃特效

```css
[selector] {
  backdrop-filter: blur(5px);
}
```

## 文字书写方向

```css
[selector] {
  writing-mode: horizontal-tb; //水平方向自上而下的书写方式
  writing-mode: vertical-rl; //垂直方向自右而左的书写方式
  writing-mode: vertical-lr; //垂直方向内内容从上到下，水平方向从左到右
  writing-mode: sideways-rl; //内容垂直方向从上到下排列
  writing-mode: sideways-lr; //内容垂直方向从下到上排列
}
```

## 文字单行溢出

```css
[selector] {
  overflow: hidden; // 溢出隐藏
  text-overflow: ellipsis; // 溢出用省略号显示
  white-space: nowrap; // 规定段落中的文本不进行换行
}
```

## 文字多行溢出

```css
[selector] {
  overflow: hidden; // 溢出隐藏
  text-overflow: ellipsis; // 溢出用省略号显示
  display: -webkit-box; // 作为弹性伸缩盒子模型显示。
  -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
  -webkit-line-clamp: 3; // 显示的行数
}
```

## 内容水平垂直居中
``` css 
  [selector]{
     display: flex;  
    justify-content: center;  
    align-items: center;  
  }
```
``` css
  [selector]{
     display: flex;  
     place-items: center; 
  }
```
``` css
/* 父元素 position: relative; */
  [selector]{
   position: absolute;  
   top: 50%;  
   left: 50%;  
   transform: translate(-50%, -50%); 
  }
```
``` css
/* 父元素 position: relative; */
  [selector]{
   position: absolute;  
   top: 0;  
   left: 0;
   bottom:0;
   right:0;  
   margin:auto; 
  }
```  

## CSS复位  
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```  

## unset  
> 用all简写來指定所有元素的属性。 将该值设置为unset会将元素的属性更改为其初始值  
```css
button {
  all: unset;
}
```  

## 负的nth-child  
```css
li {
  display: none;
}
/* 选择第 1 至第 3 个元素并显示出来 */
li:nth-child(-n+3) {
  display: block;
}

/* 选择除前3个之外的所有项目，并显示它们 */
li:not(:nth-child(-n+3)) {
  display: none;
}
```


## 模拟`disabled`效果
```css
[selector]{
    cursor: not-allowed;
    opacity: .5;
    pointer-events: none;
}

```

## 媒体查询判断设备横/竖屏
```css
/* 竖屏样式 */
@media (orientation: portrait) {
 
}

/* 横屏样式 */
@media (orientation: landscape) {

}
```

