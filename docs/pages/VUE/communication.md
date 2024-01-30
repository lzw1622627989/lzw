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
- 概述：`props`是使用频率最高的一种通信方式，常用与 ：**父 ↔ 子**
::: code-group 
```vue [father.vue]
<template>
<child :car="car" ></child>
</template>
<script lang="ts" setup>
    import child from './child.vue'
    import {ref} from 'vue'
    const car =ref('保时捷');//传给子组件的数据
</script>

```

```vue [child.vue]
<template>
<div>从父组件接收的数据：{{props.car}}</div>
</template>
<script lang="ts" setup>

    // 第一种写法：仅接收
// const props = defineProps(['car'])

// 第二种写法：接收+限制类型
// defineProps<{car:String}>()

// 第三种写法：接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{car?:String}>(),{
  car:()=>'宝马'
})
</script>

```
:::

## 自定义事件  
- 概述：自定义事件常用于：**子 => 父。**   
:::code-group 
```vue [father.vue]
<template>
<child :car="car"  @changeCar="changeCar" ></child>
</template>
<script lang="ts" setup>
    import child from './child.vue'
    import {ref} from 'vue'
    const car =ref('保时捷');//传给子组件的数据

    function changeCar(){
        car.value="特斯拉";
    }
</script>
```

```vue [child.vue]
<template>
<div>从父组件接收的数据：{{props.car}}</div>
<button @click="changeCar">更换数据</button>
</template>
<script lang="ts" setup>

    // 第一种写法：仅接收
const props = defineProps(['car']);
const emit =defineEmits(['changeCar']);

function changeCar(){
    emit('changeCar');//通知父组件更换数据
}

</script>
```
:::


## mitt  
- [npm链接](https://www.npmjs.com/package/mitt)
- 概述：与消息订阅与发布（`pubsub`）功能类似，可以实现任意组件间通信。  
- 安装mitt    
```shell 
    npm install --save mitt
```  
:::code-group 

```ts [emitter.ts] 
// 引入mitt 
import mitt from "mitt";
// 创建emitter
const emitter = mitt();
// 暴露emitter
export default emitter
```

```vue [app.vue]
<template>
<div>car:{{car}}</div>
<button @click="emitCar" >点击传递数据</button>
</template>
<script lang="ts" setup>
    import person from './person.vue'
    import {ref} from 'vue'
    import emitter from "./emitter.ts";

    const car =ref('保时捷');//传递出去的数据

    function emitCar(){
        emitter.emit('send-car',car.value);//把数据car传递出去
    }
</script>

```
```vue [person.vue]
<template>
<div>app传递的数据：{{car}}</div>
</template>
<script lang="ts" setup>
    import {onUnmounted} from 'vue' 
    import emitter from "./emitter.ts";

    const car ='';

    // 接收app传递的数据
    emitter.on('send-car',(value)=>{
        car=value;
    })

    // 组件卸载解绑事件
    onUnmounted(()=>{
        emitter.off('send-car');
    })

</script>

```
:::


## v-model  
- 概述：实现 **父↔子** 之间相互通信。  
:::code-group 
```vue [father.vue] 
<template>
    <Child v-model="inpValue"  v-model:show="showValue"></Child>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from './child.vue';
const inpValue = ref('123456');
const showValue = ref(true);
</script>

```
```vue [child.vue]
<template>
    <div>
        <input type="text" class="inputs" 
            :value="modelValue" 
           @input="emit('update:model-value', ($event.target as HTMLInputElement ).value)"
        />
        <div>v-model:show:{{ show }}</div>
        <button  @click="emit('update:show',!show)" >点击修改show</button>
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue','show']);
// 声明事件
const emit = defineEmits(['update:model-value','update:show'])

</script>

```

:::

:::info v-model实例
<vModel></vModel>
:::


## $attrs  
- 概述：`$attrs`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）。  
::: code-group 
```vue [father.vue]
<template>
<child :a="a" :b="b" :c="c"  v-bind={x:10,y:20}  :updateA="updateA"></child>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import child from './child.vue'

const a=ref(0);
const b=ref(1);
const c=ref(2);

function updateA(value){
    a.value=value;
}
</script>

```
```vue [child.vue]

<template>
		<GrandChild v-bind="$attrs"/>
</template>

<script setup lang="ts" >
	import GrandChild from './grandChild.vue'
</script>
```
```vue [grandChild.vue]
    <template>
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="updateA(5)">点我更新A</button>
</template>

<script setup lang="ts" >
	defineProps(['a','b','c','x','y','updateA'])
</script>

```

::: 

## $refs、$parent  
- `$refs`用于 ：**父→子。**  
- `$parent`用于：**子→父。**     

::: code-group 

```vue [father.vue]
<template>
<div>子组件数据：{{childData}}</div>
<button @click="getChildData($refs)">获取子组件数据</button>
</template>
<script lang="ts" setup>

import {ref} from 'vue'

const childData =ref('');
const person =ref({name:"abc",age:14})

function getChildData(refs:{[key:string]:any}){
    console.log(refs[key]);
    childData.value=refs[key].count;
}

defineExpose({ person });
</script>
```
```vue [child.vue]
<template>
<div>父组件数据：{{fatherData}}</div>
<button @click="getFatherData($parent)">获取父组件数据</button>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    const count =ref(10);
    const fatherData =ref({});
    function getFatherData(parent:any){
          fatherData.value=parent['person']  
    }
    defineExpose({ count });
</script>
```

:::

## provide、inject  
- 概述：实现**祖孙组件**直接通信  

:::code-group 
```vue [father.vue]
<template>
<div>银子：{{money}}</div>
<div>车子：一辆{{car.brand}},价值{{car.price}}万</div>
<child></child>
</template>
<script lang="ts" setup>
import {ref,provide,reactive} from 'vue'
 import child from './child.vue'

const money =ref(10000);
const car =reactive({brand:"保时捷",price:100});

function updateMoney(value:number){
    money.value-=value;
}

// 向后代传输数据
provide('moneyContext',{money,updateMoney})
provide('car',{car})

</script>

```


```vue [child.vue]
<template>
<grandChild></grandChild>
</template>
<script lang="ts" setup>
 import grandChild from './grandChild.vue'
</script>
```

```vue [grandChild.vue]
<template>
<div>银子：{{money}}</div>
<div>车子：一辆{{car.brand}},价值{{car.price}}万</div>
<button @click="updateMoney(6)">花钱</button>
</template>
<script lang="ts" setup>
import { inject } from "vue";

// 接收祖辈传递的数据
let {money,updateMoney} =inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
let {car} =inject('car',{brand:"未知",price:0})

</script>

```

:::

## pinia  
详情[pinia](/VUE/pinia.md)

## slot  
- 默认插槽
> - 概述：父→子  

:::code-group 
```vue [father.vue]
<template>
<child title="热门游戏">
     <ul>
         <li v-for="item in games" :key="item.id">{{ item.name }}</li>
      </ul>
</child>
<child title="热门影剧">
     <ul>
         <li v-for="item in videos" :key="item.id">{{ item.name }}</li>
      </ul>
</child>
<child title="今日图片">
     <img  src="/avatar.jpg" alt="">
</child>
</template>
<script lang="ts" setup>
import child from './child.vue'
import { reactive } from 'vue'

const games = reactive([{ id: 1, name: "原神" }, { id: 2, name: "王者" }, { id: 3, name: "崩铁" }]);
const videos = reactive([{ id: 10, name: "大话西游" }, { id: 11, name: "百变星君" }, {id:12,name:"大圣娶亲"}])
</script>
```

```vue [child.vue]
    <template>
        <div class="title">{{ title }}</div>
        <slot></slot>
    </template>
    <script lang="ts" setup>
        defineProps(['title'])
    </script>
```
:::   

- 具名插槽 
> -  概述：父→子  
:::code-group 
```vue [father.vue]
<template>
<child >
      <template #content>
            <ul>
               <li v-for="item in games" :key="item.id">{{ item.name }}</li>
            </ul>
      </template>
        <template #title>
               <div class="title">热门游戏</div>
        </template>
</child>
<child >
      <template #content>
            <ul>
               <li v-for="item in videos" :key="item.id">{{ item.name }}</li>
            </ul>
      </template>
        <template #title>
               <div class="title">热门影剧</div>
        </template>
</child>
<child >
      <template #content>
           <img  src="/avatar.jpg" alt="">
      </template>
        <template #title>
               <div class="title">今日图片</div>
        </template>
</child>

</template>
<script lang="ts" setup>
import child from './child.vue'
import { reactive } from 'vue'

const games = reactive([{ id: 1, name: "原神" }, { id: 2, name: "王者" }, { id: 3, name: "崩铁" }]);
const videos = reactive([{ id: 10, name: "大话西游" }, { id: 11, name: "百变星君" }, {id:12,name:"大圣娶亲"}])
</script>
```

```vue [child.vue]
    <template>
       <slot name="title"></slot>
        <slot name="content"></slot>
    </template>
```
:::   

- 作用域插槽  
> - 概述：子→父  
:::code-group 
```vue [father.vue]
<template>
<child >
 <template v-slot="param">
         <ul>
            <li v-for="item in param.game" :key="item.id">{{ item.name }}</li>
         </ul>
      </template>
</child>      
<child >
 <template v-slot="param">
         <ol>
            <li v-for="item in param.game" :key="item.id">{{ item.name }}</li>
         </ol>
      </template>
</child>      
<child >
 <template #default="{game}">
         <ul>
            <li v-for="item in game" :key="item.id">{{ item.name }}</li>
         </ul>
      </template>
</child>      
</template>
<script lang="ts" setup>
import child from './child.vue'
</script>
```

```vue [child.vue]
    <template>
       <div class="title">热门游戏</div>
        <slot :game="games" ></slot>
    </template>
    <script lang="ts" setup>
        import { reactive } from 'vue'
        const games = reactive([{ id: 1, name: "原神" }, { id: 2, name: "王者" }, { id: 3, name: "崩铁" }]);
    </script>
```
:::

- 实例  
::: info slot默认插槽 
<SoltTest type="default"></SoltTest>
:::  

::: info slot具名插槽  
<SoltTest type="sign"></SoltTest>
:::  

::: info slot作用域插槽 
<SoltTest type="action"></SoltTest>
:::

<script setup>
    import '/index.css';
    import vModel from './components/vModel.vue'
    import SoltTest from './components/slot.vue'

</script>