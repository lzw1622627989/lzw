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

## watchEffect()  
- 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数
- `watch`对比`watchEffect`  
> 1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同  
> 2. `watch`：要明确指出监视的数据  
> 3. `watchEffect`：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）  
```vue
<template>
    <div>当水温达到80°或水位达到10</div>
    <div>水温：{{temp}}°</div>
    <div>水位：{{height}}</div>
    <div>警报是否响起：{{istrue}}</div>
    <button @click="changeTemp">温度+10</button>
    <button @click="changeHeight">水位+1</button>
</template>
<script lang="ts" setup>
  import {ref,watch,watchEffect} from "vue"

    const temp =ref(0);
    const height=ref(0);
    const istrue =ref(false);

    // watch实现
    watch([temp,height],(value)=>{
        const [newTemp,newHeight]=value;
        if(newTemp>=80 || newHeight>=10 ){
            istrue.value=true;
        }else{
            istrue.value=false;
        }
    })

    // watchEffect实现
    watchEffect(()=>{
        if(temp.value>=80 || height.value>=10){
            istrue.value=true;
        }else{
            istrue.value=false;
        }
    })
    function changeTemp(){
        temp.value+=10;
    }
    function changeHeight(){
        height.value+=1;
    }
</script>
```  
- 实例  

:::info watchEffect()实例  
<WatchEffectTest></WatchEffectTest>
:::  

## 标签上的ref属性  
- **作用**：用于注册模板引用。  
> 1. 用在普通`DOM`标签上，获取的是`DOM`节点。  
> 2. 用在组件标签上，获取的是组件实例对象。  

- 作用普通标签  
```vue
<template>
    <div ref="dom">123456</div>
    <button @click="getContent">点击获取dom内容</button>
</template>
<script lang="ts" setup>
    const dom =ref();
    
    function getContent(){
        console.log(dom.value.innerText);//123456
    }
</script>
```  
- 作用组件实例  
::: code-group 
```vue [App.vue] 
    <template>
        <Hello ref="hello"></Hello>
        <button @click="getContent">获取Hello组件内容</button>
    </template>
    <script lang="ts" setup>
        import Hello from 'Hello.vue'
        import {ref} from "vue"
        const hello =ref()

        function getContent(){
            console.log(hello.value);
            console.log(hello.value.name);//小米
            console.log(hello.value.age);//20
        }
    </script>
```

```vue [Hello.vue] 
    <template>
        <div>名字:{{name}}</div>
        <div>年龄：{{age}}</div>
    </template>
    <script lang="ts" setup>
        import {ref} from "vue"

        const name =ref('小米');
        const age =ref(20);
        // 使用defineExpose将组件中的数据交给外部
        defineExpose({name,age})
    </script>
```

:::

## 生命周期  
> 创建阶段：`setup`  
> 挂载阶段：`onBeforeMount`、`onMounted`  
> 更新阶段：`onBeforeUpdate`、`onUpdated`  
> 卸载阶段：`onBeforeUnmount`、`onUnmounted`     
```vue
<template>
    <div>sum:{{sum}}</div>
    <button @click="changeSum">sum+1</button>
</template>
<script lang="ts" setup>
    import { 
    ref, 
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate, 
    onUpdated, 
    onBeforeUnmount, 
    onUnmounted 
  } from 'vue'

  const sum=ref(0)

console.log('setup');
onBeforeMount(()=>{
    console.log('挂载之前')
  })
  onMounted(()=>{
    console.log('挂载完毕')
  })
  onBeforeUpdate(()=>{
    console.log('更新之前')
  })
  onUpdated(()=>{
    console.log('更新完毕')
  })
  onBeforeUnmount(()=>{
    console.log('卸载之前')
  })
  onUnmounted(()=>{
    console.log('卸载完毕')
  })

function changeSum(){
    sum.value+=1
}
</script>
```  

## shallowRef() && shallowReactive()   
> 通过使用 [`shallowRef()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 和 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 `API` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。 
- shallowRef()  
> **作用**：创建一个响应式数据，但只对顶层属性进行响应式处理  
> **特点**：只跟踪引用值的变化，不关心值内部的属性变化  
```vue
<template>
    <div>sum:{{ sum }}</div>
   <div>person名字：{{  person.name}}</div>
   <div>person年龄：{{  person.age}}</div>
   <button @click="changeSum"  >sum+1</button> 
   <button @click="changeName"  >修改名字</button> 
   <button @click="changeAge"  >修改年龄</button> 
   <button @click="changePerson"  >修改person</button>
</template>
<script lang="ts" setup>
import { shallowRef } from "vue"

    const sum = shallowRef(0);
    const person = shallowRef({ name: "小米", age: 15 });

function changeSum() {
        sum.value += 1;//触发更改
 }
function changeAge() {
    person.value.age += 1;//不会触发更改
    console.log(person.value)
}
function changeName() {
    person.value.name = "小明";//不会触发更改
    console.log(person.value)
}
function changePerson() {
    person.value = { name: "小红", age: 10 };//会触发更改
    console.log(person.value)
}

</script>
```


- shallowReactive()  
> **作用**：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的  
> **特点**：对象的顶层属性是响应式的，但嵌套对象的属性不是  
```vue 
<template>
    <div>车名：{{ car.name }}</div>
   <div>车价格：{{ car.options.price }}</div>
   <div>车颜色：{{ car.options.color }}</div>
   <button @click="changeCarName"  >修改车名</button> 
   <button @click="changeCarPrice"  >修改车价格</button> 
   <button @click="changeCarColor"  >修改车颜色</button> 
</template>
<script lang="ts" setup>
import {shallowReactive } from "vue"
const car = shallowReactive({
    name: "保时捷",
    options: {
        color: '白',
        price:45
    }
})
function changeCarColor() {
    car.options.color = "黑";//不会触发更改
    console.log(car)
}
function changeCarPrice() {
    car.options.price = 100;//不会触发更改
    console.log(car)
}

function changeCarName() {
    car.name = "宝马";//会触发更改
    console.log(car)
}
</script>

```


- 实例  
::: info shallowRef() && shallowReactive() 实例 

<ShallowRefTest></ShallowRefTest>
:::  

## readonly() && shallowReadonly()  
- readonly 
> 1. **作用**：用于创建一个对象的深只读副本。  
> 2. **特点**：对象的所有嵌套属性都将变为只读,任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）  
> 3. **应用场景**: 创建不可变的状态快照,保护全局状态或配置不被修改   
```vue 
<template>
    <div>sum:{{ sum }}</div>
    <div>sum1:{{ sum1 }}</div>
    <button @click="changeSum" >sum+1</button> 
    <button @click="changeSum1" >sum1+1</button>
</template>

<script setup lang="ts">
import { ref,readonly } from 'vue'

const sum = ref(0);
const sum1 = readonly(sum)

function changeSum() {
    sum.value += 1;
}
function changeSum1() {
    sum1.value += 1;//无法修改：Set operation on key "value" failed: target is readonly
}
</script>
```



- shallowReadonly  
>1. **作用**：与 `readonly` 类似，但只作用于对象的顶层属性  
>2. **特点**：只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的，适用于只需保护对象顶层属性的场景   
```vue
<template>
    <div>car1：{{ car1}}</div>
    <div>car2：{{ car2}}</div>
    <button @click="changeCarName" >修改车名（car2）</button>
    <button @click="changeCarColor" >修改车颜色（car2）</button>
    <button @click="changeCarPrice" >修改车价格（car2）</button>
</template>

<script setup lang="ts">
import { reactive,shallowReadonly } from 'vue'


const car1 = reactive({
    name: "保时捷",
    options: {
        color: "白",
        price:100
    }
})
const car2 =shallowReadonly(car1)


function changeCarName() {
    car2.name = "宝马";//无法修改 ：Set operation on key "name" failed: target is readonly
}

function changeCarColor() {
    car2.options.color = "黑";//可以修改
}

function changeCarPrice() {
    car2.options.price = 80;//可以修改
}
</script>
```

- 实例  
::: info readonly() && shallowReadonly() 实例 
<ReadonlyTest></ReadonlyTest>
:::

## toRaw() && markRaw()  
- toRaw  
> **作用**：用于获取一个响应式对象的原始对象， `toRaw` 返回的对象不再是响应式的，不会触发视图更新   
```vue 
<template>
    <div>car:{{  car}}</div>
    <div>rawCar:{{ rawCar }}</div>
    <button @click="changeRawPesonName"  >修改rawCar名字</button>
    <button @click="changerawCarPrice"  >修改rawCar价格</button>
    <button @click="changerawCar" >修改rawCar</button>
</template>

<script setup lang="ts">
import {reactive, toRaw,markRaw } from 'vue'


const car = reactive({ name: "保时捷", price: 100 });
let rawCar = toRaw(car)

function changeRawPesonName() {
    rawCar.name = "宝马";//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}

function changerawCarPrice() {
    rawCar.price = 80;//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}
function changerawCar() {
    rawCar = { name: "奔驰", price: 90 };//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}
</script>

```

- markRaw  
> **作用**：标记一个对象，使其**永远不会**变成响应式的  
``` vue 
<template>
    <div>person:{{ person }}</div>
    <div>marPerson:{{ marPerson }}</div>
    <button @click="changemarPersonName" class="buttons">修改marPerson名字</button>
    <button @click="changemarPersonAge" class="buttons">修改marPerson年龄</button>
    <button @click="changemarPerson" class="buttons">修改marPerson</button>
</template>

<script setup lang="ts">
import {reactive, toRaw,markRaw } from 'vue'

const person = markRaw({ name: '小米', age: 20 });
const marPerson =reactive(person)


function changemarPersonName() {
    marPerson.name = "小红";//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
function changemarPersonAge() {
    marPerson.age = 30;//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
function changemarPerson() {
    Object.assign(marPerson, { name: "小刚", age: 8 });//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
</script>


```

- 实例 
::: info toRaw() && markRaw() 实例
<TorawTest></TorawTest>
:::


<script setup>
import '/index.css';
import RefTest from './components/ref.vue';
import ReactiveTest from './components/reactive.vue';
import TorefsTest from './components/torefs.vue';
import ComputedTest from './components/computed.vue';
import WatchTest from './components/watch.vue';
import WatchEffectTest from './components/watchEffect.vue';
import ShallowRefTest from './components/shallowRef.vue';
import ReadonlyTest from './components/readonly.vue';
import TorawTest from './components/toraw.vue';
</script>

