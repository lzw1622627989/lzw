# [Vue3](https://cn.vuejs.org/)
## 创建vue3工程
- [基于 vue-cli 创建](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
::: details vue-cli创建
 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上  
vue --version  

安装或者升级你的@vue/cli   
npm install -g @vue/cli  

执行创建命令  
vue create [projectName]  

随后选择3.x  
\>3.x  
   2.x  


启动  
cd [projectName]  
npm install  
npm run serve
:::  

- [基于 vite 创建](https://vitejs.cn)   
:::details vite创建 
1. 创建命令
npm create vue@latest  
2. 配置项目名称  
Project name: [projectName]  
3. 是否添加TypeScript支持  
Add TypeScript?  Yes/NO 
4. 是否添加JSX支持  
 Add JSX Support?  Yes/No  
5. 是否添加路由环境  
Add Vue Router for Single Page Application development?  Yes/No  
6. 是否添加pinia环境  
Add Pinia for state management?  Yes/No  
7. 是否添加单元测试  
Add Vitest for Unit Testing?  Yes/No  
8. 是否添加端到端测试方案  
Add an End-to-End Testing Solution? Yes/No  
9. 是否添加ESLint语法检查  
Add ESLint for code quality?  Yes/No  
10. 是否添加Prettiert代码格式化  
Add Prettier for code formatting?  Yes/No
:::  

# vue3 核心语法  
## OptionsAPI (选项是API、基于vue2)  
> Options类型的API，数据、方法、计算属性等，是分散在：`data`、`methods`、`computed`、`watch`中的，若想新增或者修改一个需求，就需要分别修改：`data`、`methods`、`computed`、`watch`，不便于维护和复用。  
```vue 
<template>...</template>
<script>
    export default {
        data(){...},
        methods:{...},
        computed:{...},
        watch:{...}
    }
</script>  
```  
## CompositionAPI(组合式API,基于vue3)  
> 可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。  
```vue 
<template>...</template>
<script lang="ts">
import {watch,computed} from 'vue'
    export default {
        name:'...',
        setup(){
            //data 1  
             const data={...}  
            //  方法
            function(){...}
            // watch
            watch(()=>data,()=>{...})
            // computed
            const name = computed(() => {return ... }) 

            //data 2 
             const data2={...}  
            //  方法
            function(){...}
            // watch
            watch(()=>data2,()=>{...})
            // computed
            const name2 = computed(() => {return ... })  

            // data3 ....


        }
    }
</script>
```  
## setup 概述  
> `setup`是`Vue3`中一个新的配置项，值是一个函数，它是 `Composition API` **“表演的舞台**_**”**_，组件中所用到的：数据、方法、计算属性、监视......等等，均配置在`setup`中。  
- `setup`函数返回的对象中的内容，可直接在模板中使用  
- `setup`中访问`this`是`undefined`  
- `setup`函数会在`beforeCreate`之前调用，它是“领先”所有钩子执行的   
- setup 与 Options API 的关系  
>1. `Vue2` 的配置（`data`、`methos`......）中**可以访问到** `setup`中的属性、方法。  
>2. 但在`setup`中**不能访问到**`Vue2`的配置（`data`、`methos`......）  
>3. 如果与`Vue2`冲突，则`setup`优先。  

```vue 
<template>
    <div>姓名：{{name}}</div> 
    <div>年龄：{{age}}</div>  
    <button @click="changeAge">修改年龄</button>
</template>
<script>
    export default {
        name:'...',
        setup(){
            console.log(this);//undefined
            console.log(sex);//sex is not defined
            let  name ='小米';
            let age=18;
            function changeAge(){
                age=20;//age发生变化 页面不会更新，age不是响应式数据
                console.log(age);//20
            }
            return {age,name,changeAge}
        },

        data(){
            return{
              sex:'男'  
            }
        },
        cerate(){
            console.log(this.name);//小米
        }
    }
</script>
```  
## setup 语法糖
```vue 
<template>
    <div>姓名：{{name}}</div> 
    <div>年龄：{{age}}</div>  
    <button @click="changeAge">修改年龄</button>
</template>
<!-- setup 语法糖  自动return数据-->
<script lang="ts" setup >
let name ="小米"
let age =18
function changeAge(){
     age=20;//age发生变化 页面不会更新，age不是响应式数据
    console.log(age);//20
}
</script>
```  
## ref() 
- **作用：** 定义响应式变量。  
- **语法：**`let xxx = ref(初始值)`。  
- **返回值：** 一个`RefImpl`的实例对象，简称`ref对象`或`ref`，`ref`对象的`value`**属性是响应式的**  
- 注意点  
>1. JS`中操作数据需要：`xxx.value`，但模板中不需要`.value`，直接使用即可。  
>2. 对于`let name = ref('小米')`来说，`name`不是响应式的，`name.value`是响应式的。   
- 若`ref`接收的是对象类型，内部其实也是调用了`reactive`函数。 
```vue 
<template>
    <div>姓名：{{name}}</div> 
    <div>年龄：{{age}}</div>  
    <div>person年龄：{{person.age}}</div>  
    <div>person姓名：{{person.name}}</div>  
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改person姓名</button>
</template>
<script lang="ts" setup >
import {ref} from 'vue'
    const name =ref('小米')
    const age =ref(18)
    const person =ref({name:'abc',age:20});
    function changeAge(){
     age.value=20;//age发生变化 视图更新，age是响应式数据
    console.log(age.value);//20
}

function changePerson(){
    person.value.name='小明';//person 发生变化，视图更新
}  

</script>
```
- 实例 
:::info  ref()实例 
  <RefTest></RefTest>
:::  

## reactive()  
- **作用：**定义一个**响应式对象**（基本类型不要用它，要用`ref`，否则报错）  
- **语法：**`let 响应式对象= reactive(源对象)`。
- **返回值：** 一个`Proxy`的实例对象，简称：响应式对象。  
- **注意点：**`reactive`定义的响应式数据是“深层次”的。   
```vue
<template>
    <div v-for="game in games" :key="game.id" >{{game}}</div>
    <button @click="changeFirstGame" >修改第一款游戏</button>
</template>
<script lang="ts" setup>
import {reactive} from 'vue'
const num =reactive(3);//报错
const games =reactive([
    {id:1,name:"王者荣耀"},
    {id:2,name:"原神"},
    {id:3,name:"星穹铁道"}
    ])

function changeFirstGame(){
    games[0].name="穿越火线";//视图更新
}
</script>
```  
- 实例  
:::info reactive()实例 
<ReactiveTest></ReactiveTest>
:::


## toRefs() && toRef()  
- **作用：** 将一个响应式对象中的每一个属性，转换为`ref`对象。
- **备注：**`toRefs`与`toRef`功能一致，但`toRefs`可以批量转换。
```vue
<template>
   <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>性别：{{person.gender}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeGender">修改性别</button>
</template>
<script lang="ts" setup>
    import {ref,reactive,toRefs,toRef} from 'vue'
    const person =reactive({name:"小米",age:20,gender:"男"})
    // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
    let {name,age}=toRefs(person);

    // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
    let gender=toRef(person,'gender')

    function changeName(){
        name.value="小明";
    }
    function changeAge(){
        age.value=25;
    }
    function changeGender(){
        gender.value='女'
    }
</script>
```  
- 实例   
:::info toRefs() && toRef()实例
<TorefsTest></TorefsTest>
:::


## computed
- **作用**：根据已有数据计算出新数据  
```vue
<template>
<input type="text" v-model="firstName"> <br>
<input type="text" v-model="lastName"> <br>
<div>{{fullName}}</div>
<button @click="changeFullName">修改全名为‘li-si’</button>
</template>
<script lang="ts" setup>
import {ref,computed} from "vue"

const firstName =ref('zhang');
const lastName =ref('san');


  // 计算属性——只读取，不修改
  const fullName =computed(()=>{
    return firstName.value+'-'+lastName.value; //zhang-san
  })
  
  // 计算属性——既读取又修改
  const fullName =computed({
    get(){
        return firstName.value+'-'+lastName.value;
    },
    set(){
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
    }
  })
  function changeFullName(){
    fullName.value='li-si';//firstName：li  lastName：si
  }
</script>
```    
- 实例   
:::info computed实例 
<ComputedTest></ComputedTest>
:::


## watch   
- **作用** ：监视数据的变化
- **特点** ：`Vue3`中的`watch`只能监视以下**四种数据**：  
> 1. `ref`定义的数据 
> 2. `reactive`定义的数据
> 3. 函数返回一个值（`getter`函数）。
> 4. 一个包含上述内容的数组。
- 用法一  
 监视`ref`定义的【基本类型】数据：直接写数据名即可，监视的是其`value`值的改变
```vue
<template>
    <div>sum：{{sum}}</div>
    <button @click="changeSum">点击sum+1</button>
</template>
<script lang="ts" setup>
import {ref,watch} from "vue"
    const sum =ref(0);

   const stopWatch=watch(sum,(newValue,oldValue)=>{
        console.log('sum发生变化',newValue,oldValue)
        if(newValue>=10){
            stopWatch();//卸载监听器
        }
    })

    function changeSum(){
        sum.value+=1;
    }
</script>
```  

- 用法二  
监视`ref`定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视。  
```vue
<template>
<div>person名字：{{person.name}}</div>
<div>person年龄：{{person.age}}</div>
<button @click="changeName">修改名字</button>
<button @click="changeAge">修改年龄</button>
<button @click="changePerson">修改person</button>
</template>
<script lang="ts" setup>
import {ref,watch} from "vue"
    const person =ref({
        name:"小米",
        age:20
    })

    // 开启深度监听
    watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },{deep:true})

  function changeName(){
    person.value.name+='~';
  }

  function changeAge(){
    person.value.age+=1;
  }

  function changePerson(){
    person.value={name:"小明",age:40}
  }
</script>
```  

- 用法三  
监视`reactive`定义的【对象类型】数据，且默认开启了深度监视  
```vue
<template>
<div>车名：{{car.name}}</div>
<div>价格：{{car.price}}w</div>
<button @click="changeCarName">修改car名字</button>
<button @click="changeCarPrice">修改car价格</button>
<button @click="changeCar">修改car</button>
</template>
<script lang="ts" setup>
    import {reactive,watch} from "vue"

    const car=reactive({
        name:"奔驰",
        price:40
    })

    // 监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
    watch(car,(newVlue,oldValue)=>{
        console.log("car发生变化",newVlue,oldValue);
    })

    function changeCarName(){
        car.name="保时捷"
    }   
    
    function changeCarPrice(){
        car.price=100
    }

    function changeCar(){
        Object.assign(car,{name:"宝马",price:35});//直接修改整个reactive定义的数据需要使用Object.assign
    }
</script>
```

- 用法四（常用）  
监视`ref`或`reactive`定义的【对象类型】数据中的**某个属性**，注意点如下：  
> 1. 若该属性值**不是**【对象类型】，需要写成函数形式。
> 2. 若该属性值是**依然**是【对象类型】，可直接编，也可写成函数，建议写成函数。    

结论：监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视。  
```vue
<template>
<div>游戏名字：{{game.name}}</div>
<div>count：{{count}}</div>
<button @click="changeGame">修改游戏</button>
<button @click="changeCount">修改count</button>
</template>
<script lang="ts" setup>
    import {reactive,watch,ref} from "vue"
    const game =reactive({name:"原神",id:01})
    const count =ref(0)

    watch(()=>count.value,(newValue,oldValue)=>{
        console.log("count发生变化",newValue,oldValue);
    })
    watch(()=>game.name,(newValue,oldValue)=>{
        console.log("游戏名字发生变化",newValue,oldValue);
    },{deep:true})

    function changeGame() {
    game.name = "王者荣耀"
    }
    function changeCount() {
    count.value += 1;
    }
</script>
```  
- 用法五  
监视多个数据 
```vue
<template>
<div>猫咪爱好：{{animal.hobby}}</div>
<div>小狗年龄：{{dogAge}}</div>
<button @click="changeAnimalHobby" >修改猫咪爱好</button>
<button @click="changeDogAge">修改小狗年龄</button>
</template>
<script lang="ts" setup>
    import {ref,reactive,watch} from "vue"

    const animal=reactive({
        name:"猫",
        hobby:"睡觉"
    })

    const dogAge=ref(2)

    watch([()=>animal.hobby,()=>dogAge.value],(newValue,oldValue)=>{
        console.log(newValue,oldValue)
    },{deep:true})

    function changeAnimalHobby(){
        animal.hobby="吃饭"
    }

    function changeDogAge(){
        dogAge.value+=1;
    }
</script>
```  
- 实例  
::: info watch实例 
<WatchTest></WatchTest>
:::



<script setup>
import '/index.css';
import RefTest from './components/ref.vue';
import ReactiveTest from './components/reactive.vue';
import TorefsTest from './components/torefs.vue';
import ComputedTest from './components/computed.vue';
import WatchTest from './components/watch.vue';
</script>

