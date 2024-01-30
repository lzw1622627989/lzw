# [pinia](https://pinia.vuejs.org/zh/) 

## 安装  
```bash
yarn add pinia
# 或者使用 npm
npm install pinia
```
  
## 环境配置  
- `Store`是一个保存：**状态**、**业务逻辑** 的实体，每个组件都可以**读取**、**写入**它。  
- 它有三个概念：`state`、`getter`、`action`，相当于组件中的： `data`、 `computed` 和 `methods`。  

:::code-group 
```ts [count.ts]
// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{...},
  // 状态
  state(){
    return {...}
  },
  // 计算
  getters:{...}
})
```  

```ts [main.ts]
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```
:::  

## 存储+读取数据  
:::code-group 
```ts [count.ts]
// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{},
  // 状态
  state(){
    return {
      count:6
    }
  },
  // 计算
  getters:{
    doubleCount():number{
        return this.count*2
    }
  }
})
```

```vue [count.vue]
<template>
<div>count:{{countStore.count}}</div>
<div>doubleCount:{{countStore.doubleCount}}</div>
</template>
<script lang="ts" setup>
import {useCountStore} from './count.ts'
const  countStore =useCountStore();

</script>

```
:::  

## 修改数据  
1. 直接修改  
```ts
countStore.count=10;
```  
2. 批量修改  
```ts
countStore.$patch({
  count:100,
})
```  
3. 借助`action`修改  
:::code-group 
```ts [count.ts]
import {defineStore} from 'pinia'
export const useCountStore = defineStore('count',{
  // 动作
  actions:{
    increment(value:number){
        this.count+=value;
    }
  },
  // 状态
  state(){
    return {
      count:6
    }
  },
  // 计算
  getters:{
    doubleCount():number{
        return this.count*2
    }
  }
})
```

```vue [count.vue]
<template>
<div>count:{{countStore.count}}</div>
<div>doubleCount:{{countStore.doubleCount}}</div>
<button @click="addCount" >count+2</button>
</template>
<script lang="ts" setup>
import {useCountStore} from './count.ts'
const  countStore =useCountStore();

function addCount(){
    countStore.increment(2);
}
</script>
```
:::  

## storeToRefs  
- 借助`storeToRefs`将`store`中的数据转为`ref`对象，方便在模板中使用。  
- 注意：`pinia`提供的`storeToRefs`只会将数据做转换，而`Vue`的`toRefs`会转换`store`中数据。  
:::code-group 
```ts [count.ts]
// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{},
  // 状态
  state(){
    return {
      count:6
    }
  },
  // 计算
  getters:{
    doubleCount():number{
        return this.count*2
    }
  }
})
```

```vue [count.vue]
<template>
<div>count:{{count}}</div>
<div>doubleCount:{{doubleCount}}</div>
</template>
<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import {useCountStore} from './count.ts'
const  countStore =useCountStore(); 
let {count,doubleCount} =storeToRefs(countStore);

</script>

```
:::  

## getters  
:::code-group 
```ts [count.ts]
// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{},
  // 状态
  state(){
    return {
      count:6
    }
  },
  // 计算
  getters:{
    doubleCount():number{
        return this.count*2
    }
  }
})
```

```vue [count.vue]
<template>
<div>count:{{count}}</div>
<div>doubleCount:{{doubleCount}}</div>
</template>
<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import {useCountStore} from './count.ts'
const  countStore =useCountStore(); 
let {count,doubleCount} =storeToRefs(countStore);

</script>

```
:::   

## $subscribe  
- 通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化  
```ts
  import {useCountStore} from './count.ts'
const  countStore =useCountStore(); 
countStore.$subscribe((mutate,state)=>{
    console.log(mutate,state)
})

```  

## store组合式写法  
- reactive() 就是 state 属性  
- computed() 就是 getters  
- function() 就是 actions  
```ts [count.ts]
import {defineStore} from 'pinia'
import {reactive,ref} from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```