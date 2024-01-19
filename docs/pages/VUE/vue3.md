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
    <div>年龄：{{age}}</div>  
    <div>person年龄：{{person.age}}</div>  
    <div>person姓名：{{person.name}}</div>  
    <button @click="changeAge">修改年龄</button>
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
