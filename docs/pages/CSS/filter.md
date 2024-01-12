# css图像滤镜

## 无滤镜 (none)
::: info filter:none
<Filter :styleObj="{filter:'none'}" ></Filter>
:::

## 模糊滤镜 (blur)  
模糊图像。传入值单位为px
::: info filter: blur(10px)
<Filter :styleObj="{filter:'blur(10px)'}" ></Filter>
:::  

## 对比度滤镜 (contrast)  
增加或减少图像的对比度，值是0%图像全灰图像，没有对比度。100% 展示原图，大于100%展示对比度更高的图片效果。
::: info filter: contrast(150%)
<Filter :styleObj="{filter:'contrast(150%)'}" ></Filter>
::: 

## 亮度滤镜 (brightness)  
让图像更明亮或更暗淡，0% 将创建全黑图像，100% 展示原图，大于100%展示更明亮的图片效果。
::: info filter: brightness(150%)
<Filter :styleObj="{filter:'brightness(150%)'}" ></Filter>
::: 

## 灰度滤镜 (grayscale)  
 改变图像灰度，值在 0% 到 100% 之间，值为0%展示原图，值为100% 则完全转为灰度图像。
::: info filter: grayscale(100%)
<Filter :styleObj="{filter:'grayscale(100%)'}" ></Filter>
::: 

## 色相旋转滤镜 (hue-rotate)  
改变图整体色调，angle设定图像会被调整的色环角度值。值为0deg展示原图，大于360deg相当于又绕一圈。
::: info filter: hue-rotate(90deg)
<Filter :styleObj="{filter:'hue-rotate(90deg)'}" ></Filter>
::: 

## 饱和度滤镜 (saturate)  
超饱和或去饱和输入的图像，值为0% 则是完全不饱和，完全转为灰度图像，100% 展示原图，大于100% 则有更高的饱和度。
::: info filter: saturate(50%)
<Filter :styleObj="{filter:'saturate(50%)'}" ></Filter>
::: 

## 反向滤镜 (invert)  
 反转图像颜色,值在 0% 和 100% 之间,100% 的价值是完全反转。值为 0% 则图像无变化。
::: info filter: invert(100%)
<Filter :styleObj="{filter:'invert(100%)'}" ></Filter>
::: 

## 透明度滤镜 (opacity)  
改变图像透明度，值在 0% 和 100% 之间，值为 0% 则是完全透明，值为 100% 则图像无变化。
::: info filter: opacity(50%)
<Filter :styleObj="{filter:'opacity(50%)'}" ></Filter>
:::

## sepia滤镜  (sepia)
将图像转为棕褐色，值在 0% 到 100% 之间，值为 100% 则完全是深褐色的，值为 0% 图像无变化。  
::: info filter: sepia(100%)
<Filter :styleObj="{filter:'sepia(100%)'}" ></Filter>
:::  
 
## drop-shadow滤镜 (drop-shadow)  
为元素添加阴影效果  
::: info filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5)) 
  <Filter :styleObj="{filter:'drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5))'}" ></Filter>  
:::






<script setup>
     import Filter from './components/filter.vue'
</script>