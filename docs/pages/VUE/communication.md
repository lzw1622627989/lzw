# 组件通信  
**`Vue3`组件通信和`Vue2`的区别：**  
- 移出事件总线，使用`mitt`代替。  
- `vuex`换成了`pinia`。  
- 把`.sync`优化到了`v-model`里面了。  
- 把`$listeners`所有的东西，合并到`$attrs`中了。  
- `$children`被砍掉了。   

**常见搭配形式：**   

<table >
    <tr>
        <th>组件关系</th><th>传递关系</th>
    </tr>
    <tr>
        <td rowspan="4">父传子</td><td>1.props</td>
    </tr>
    <tr>
        <td>2.v-model</td>
    </tr>
    <tr>
        <td>3.$refs</td>
    </tr>
    <tr>
        <td>4.默认插槽,具名插槽</td>
    </tr>
    <tr>
        <td rowspan="5">子传父</td><td>1.props</td>
    </tr>
    <tr>
        <td>2.自定义事件</td>
    </tr>
    <tr>
        <td>3.v-model</td>
    </tr>
    <tr>
        <td>4.$parent</td>
    </tr>
    <tr>
        <td>5.作用域插槽</td>
    </tr>
     <tr>
        <td rowspan="2">祖传孙、孙传祖</td><td>1.attrs</td>
    </tr>
     <tr>
        <td>2.provide、inject</td>
    </tr>
     <tr>
        <td rowspan="2">兄弟间、任意间</td><td>1.mitt</td>
    </tr>
     <tr>
        <td>2.pinia</td>
    </tr>
</table>



## props

## 自定义事件

## mitt  

## v-model  

## $attrs  

## $refs、$parent  

## provide、inject  

## pinia  

## slot