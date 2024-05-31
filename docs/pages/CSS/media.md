# 媒体查询

## 根据屏幕宽度应用不同样式
```css
/* 在屏幕宽度小于等于768像素时应用的样式 */
@media screen and (max-width: 768px){
    body{
        font-size:30px
    }
}
```

## 根据设备方向应用不同的样式

```css
/* 竖屏样式 */
@media (orientation: portrait) {
 
}

/* 横屏样式 */
@media (orientation: landscape) {

}
```

## 根据分辨率应用不同的样式
```css
@media screen and (min-resolution: 192dpi) {
  /* 在分辨率大于等于192dpi的设备上应用的样式 */
  body {
    background-image: url('high-res-background.jpg');
  }
}
```

## 使用逻辑运算符组合多个媒体特性
```css
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 在屏幕宽度介于768像素和1024像素之间的设备上应用的样式 */
  .container {
    padding: 20px;
  }
}
```

## 使用not关键字排除特定的媒体查询
```css
@media not print {
  /* 在非打印设备上应用的样式 */
  body {
    background-color: #f0f0f0;
  }
}
```