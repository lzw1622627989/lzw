# Flex

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
任何一个容器都可以指定为 Flex 布局。 资料参考 [阮一峰的网络日志 ](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 容器属性

- flex-direction (属性决定主轴的方向)
- flex-wrap (属性决定是否换行)
- flex-flow (属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap)
- justify-content (属性定义了项目在主轴上的对齐方式)
- align-items (属性定义项目在交叉轴上如何对齐)
- align-content (属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。)

::: info flex-direction  
`.box {
  flex-direction: row | row-reverse | column | column-reverse;
}`

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。
  :::

::: info flex-wrap

`
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}`

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。
  :::

::: info flex-flow  
`
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}`
:::

::: info justify-content
` 
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}`

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- space-evenly: 每个项目平均分布
  :::

::: info align-items
`
  .box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
 `

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。
  :::

  ::: info align-content
  `
    .box {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly |  stretch;
}
   `
- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- space-evenly: 每个项目平均分布
- stretch（默认值）：轴线占满整个交叉轴。
  :::
## 项目属性
- order (属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。)
- flex-grow (属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。)
- flex-shrink (属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。)
- flex-basis (属性定义了在分配多余空间之前，项目占据的主轴空间（main size）)
- flex (属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。)
- align-self (属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。)  
::: info  order
  ` .item {
  order: <integer>;
} `
:::

::: info flex-grow 
  `.item {
  flex-grow: <number>; /* default 0 */
} `
:::

::: info flex-shrink 
` 
.item {
  flex-shrink: <number>; /* default 1 */
}
`
:::

::: info  flex-basis 
  ` .item {
  flex-basis: <length> | auto; /* default auto */
}`
:::


::: info flex 
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。  

` .item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`
:::

::: info align-self 
` .item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`
:::

## 实例
<script setup>
  import Flex from './components/flex.vue'
</script>  
::: info flex实例
<flex></flex>
:::