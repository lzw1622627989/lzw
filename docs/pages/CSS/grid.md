# Grid

Grid 布局是一种强大的 CSS 布局方案，它将网页划分为一个个网格，可以任意组合不同的网格，做出各种各样的布局。
Grid 布局采用“行”和“列”的概念，将容器划分为行和列，然后指定元素所在的单元格。与 Flex 布局不同，Grid 布局是一种二维布局，可以同时控制元素在行和列方向上的对齐、间距等属性。
资料参考 [阮一峰的网络日志 ](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 容器属性

- grid-template-columns (属性定义每一列的列宽)
  ::: info grid-template-columns: (100px 100px 100px)
  <Grid :styleObj="{gridTemplateColumns:'100px 100px 100px'}" ></Grid>
  :::

- grid-template-rows (属性定义每一行的行高)
  ::: info grid-template-rows: (100px 100px 100px) && grid-template-columns: (100px 100px 100px)
  <Grid :styleObj="{gridTemplateRows:'100px 100px 100px',gridTemplateColumns:'100px 100px 100px'}" ></Grid>
  :::

> 1. repeat() (接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。重复某种模式也是可以的)  
>    ::: info grid-template-rows: repeat(3,100px) && grid-template-columns: repeat(3,100px)
>    <Grid :styleObj="{gridTemplateRows:'repeat(3,100px)',gridTemplateColumns:'repeat(3,100px)'}" ></Grid>
>    :::

> 2. auto-fill (单元格的大小是固定的，但是容器的大小不确定。表示自动填充 )  
>    ::: info grid-template-columns: repeat(auto-fill, 150px) && grid-template-rows:repeat(5, 100px)
>    <Grid :styleObj="{gridTemplateColumns:'repeat(auto-fill, 150px)',gridTemplateRows:'repeat(5, 100px)'}" ></Grid>
>    :::

> 3. fr 关键字 (方便表示比例关系,可以与绝对长度的单位结合使用)  
>    ::: info grid-template-columns: 1fr 50px 1fr && grid-template-rows: 1fr 2fr 1fr
>    <Grid :styleObj="{gridTemplateRows:'1fr 2fr 1fr  ',gridTemplateColumns:'1fr 50px 1fr'}" ></Grid>
>    :::

> 4. minmax() (函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。)  
>    ::: info grid-template-columns: 1fr 1fr minmax(80px,2fr)
>    <Grid :styleObj="{gridTemplateColumns:'1fr 1fr minmax(80px,2fr)'}" ></Grid>
>    :::

> 5. auto 关键字 (表示由浏览器自己决定长度)  
>    ::: info grid-template-columns: 80px auto 80px
>    <Grid :styleObj="{gridTemplateColumns:'80px  auto  80px '}" ></Grid>
>    :::

> 6. 网格线的名称 (指定每一根网格线的名字，方便以后的引用。)  
>    ::: info grid-template-columns:[c1] 100px [c2] 100px [c3] auto [c4] && grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4]
>    <Grid :styleObj="{gridTemplateColumns:'[c1] 100px [c2] 100px [c3] auto [c4]',gridTemplateRows:'[r1] 100px [r2] 100px [r3] 100px [r4]'}" ></Grid>
>    :::

- row-gap (属性设置行与行的间隔（行间距）)  
  ::: info row-gap:10px
  <Grid :styleObj="{rowGap:'10px'}" ></Grid>
  :::

- column-gap (属性设置列与列的间隔（列间距）)
  ::: info column-gap:10px && row-gap:10px && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{rowGap:'10px',columnGap:'10px',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::

- gap (属性是 column-gap 和 row-gap 的合并简写形式)  
  ::: info gap:10px 10px && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{gap:'10px 10px',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::

- grid-template-areas (网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。)
- grid-auto-flow (属性决定排列行列)  
  ::: info grid-auto-flow:row && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{gridAutoFlow:'row',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::
  ::: info grid-auto-flow:column && grid-template-rows: repeat(3,1fr)
  <Grid :styleObj="{gridAutoFlow:'column',gridTemplateRows:'repeat(3,1fr)'}" ></Grid>
  :::

- justify-items (属性设置单元格内容的水平位置（左中右）)  
  start | end | center | stretch(默认);
  ::: info justify-items:stretch && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{justifyItems:'stretch',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::  
  ::: info justify-items:start && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{justifyItems:'start',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::  
  ::: info justify-items:end && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{justifyItems:'end',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::  
  ::: info justify-items:center && grid-template-columns: repeat(3,1fr)
  <Grid :styleObj="{justifyItems:'center',gridTemplateColumns:'repeat(3,1fr)'}" ></Grid>
  :::

- align-items (属性设置单元格内容的垂直位置（上中下）)  
  start | end | center | stretch(默认);

::: info align-items:stretch && grid-template-columns: repeat(3,1fr)
<Grid :styleObj="{alignItems:'stretch',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'repeat(3,1fr)'}"  style="height:400px" ></Grid>
:::  
::: info align-items:start && grid-template-columns: repeat(3,1fr)
<Grid :styleObj="{alignItems:'start',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'repeat(3,1fr)'}" style="height:400px" ></Grid>
:::  
::: info align-items:end && grid-template-columns: repeat(3,1fr)
<Grid :styleObj="{alignItems:'end',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'repeat(3,1fr)'}" style="height:400px" ></Grid>
:::  
::: info align-items:center && grid-template-columns: repeat(3,1fr)
<Grid :styleObj="{alignItems:'center',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'repeat(3,1fr)'}" style="height:400px" ></Grid>
:::

- place-items (属性是 align-items 属性和 justify-items 属性的合并简写形式。)
- justify-content (属性是整个内容区域在容器里面的水平位置（左中右）)  
  start | end | center | stretch(默认) | space-around | space-between | space-evenly
  ::: info justify-content:stretch
  <Grid :styleObj="{justifyContent:'stretch',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:start
  <Grid :styleObj="{justifyContent:'start',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:end
  <Grid :styleObj="{justifyContent:'end',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:center
  <Grid :styleObj="{justifyContent:'center',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:space-around
  <Grid :styleObj="{justifyContent:'space-around',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:space-between
  <Grid :styleObj="{justifyContent:'space-between',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-content:space-evenly
  <Grid :styleObj="{justifyContent:'space-evenly',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::

- align-content (属性是整个内容区域的垂直位置（上中下）)  
  start | end | center | stretch(默认) | space-around | space-between | space-evenly
  ::: info align-content:stretch
  <Grid :styleObj="{alignContent:'stretch',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:start
  <Grid :styleObj="{alignContent:'start',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:end
  <Grid :styleObj="{alignContent:'end',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:center
  <Grid :styleObj="{alignContent:'center',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:space-around
  <Grid :styleObj="{alignContent:'space-around',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:space-between
  <Grid :styleObj="{alignContent:'space-between',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-content:space-evenly
  <Grid :styleObj="{alignContent:'space-evenly',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::

- place-content (属性是 align-content 属性和 justify-content 属性的合并简写形式)  
  ::: info align-content:center && justify-content:center
  <Grid :styleObj="{placeContent:'center center',gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(3,100px)'}" style="width:400px;height:400px" ></Grid>
  :::

- grid-auto-columns (属性用来设置，浏览器自动创建的多余网格的列宽)
- grid-auto-rows (属性用来设置，浏览器自动创建的多余网格的行高)  
  ::: info grid-auto-rows:150px
  <Grid :styleObj="{gridTemplateColumns:'repeat(3,100px)',gridTemplateRows:'repeat(2,100px)',gridAutoRows:'150PX'}" style="width:400px;" ></Grid>
  :::

- grid-template (属性是 grid-template-columns、grid-template-rows 和 grid-template-areas 这三个属性的合并简写形式)  
  ::: info grid-template:'a b c ' 100px 'd e f' 150px 'h i j' 100px / 100px 100px 100px(行高 /列宽)
  <Grid :styleObj="{gridTemplate:`'a b c ' 100px 'd e f' 150px 'h i j' 100px / 100px 100px 100px`}" style="width:400px;" ></Grid>
  :::

- grid (属性是 grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow 这六个属性的合并简写形式)

## 项目属性

- grid-column-start (属性：左边框所在的垂直网格线)
- grid-column-end (属性：右边框所在的垂直网格线)
- grid-row-start (属性：上边框所在的水平网格线)
- grid-row-end (属性：下边框所在的水平网格线)
- grid-column (属性是 grid-column-start 和 grid-column-end 的合并简写形式)  
  ::: info grid-column 2/4(作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{gridColumn:'2/4'}"  style="width:400px;height:400px" ></Grid>
  :::
- grid-row (属性是 grid-row-start 属性和 grid-row-end 的合并简写形式)  
  ::: info grid-row 1/3(作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{gridRow:'1/3'}"  style="width:400px;height:400px" ></Grid>
  :::

- grid-area (属性指定项目放在哪一个区域,属性还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置)  
  "row-start /column-start /row-end /column-end"  
  ::: info grid-area 1/1/3/3(作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{gridArea:'1/1/3/3'}"  style="width:400px;height:400px" ></Grid>
  :::

- justify-self (属性设置单元格内容的水平位置（左中右）)  
  start | end | center | stretch
  ::: info justify-self:stretch (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{justifySelf:'stretch'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-self:start (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{justifySelf:'start'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-self:end (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{justifySelf:'end'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info justify-self:center (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{justifySelf:'center'}"  style="width:400px;height:400px" ></Grid>
  :::

- align-self (属性设置单元格内容的垂直位置（上中下）)
 start | end | center | stretch
  ::: info align-self:stretch (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{alignSelf:'stretch'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-self:start (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{alignSelf:'start'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-self:end (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{alignSelf:'end'}"  style="width:400px;height:400px" ></Grid>
  :::
  ::: info align-self:center (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{alignSelf:'center'}"  style="width:400px;height:400px" ></Grid>
  :::

- place-self (属性是 align-self 属性和 justify-self 属性的合并简写形式)  
::: info place-self:center (作用第五个元素)
  <Grid :styleObj="{gridTemplate:'repeat(3,100px) /repeat(3,100px)'}" :childenStyle="{placeSelf:'center'}"  style="width:400px;height:400px" ></Grid>
  :::

<script setup>
import Grid from './components/grid.vue'

</script>
