# [vue router](https://router.vuejs.org/zh/)

## 安装  
```bash
npm install vue-router@4
```  

## 路由器工作模式  
- `history`模式  
> 优点：`URL`更加美观，不带有`#`，更接近传统的网站`URL`。  
> 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有`404`错误。  
```ts
const router = createRouter({
	history:createWebHistory(), //history模式
	/******/
})
```  
- `hash`模式  
> 优点：兼容性更好，因为不需要服务器端处理路径。  
> 缺点：`URL`带有`#`不太美观，且在`SEO`优化方面相对较差。  
```ts
const router = createRouter({
	history:createWebHashHistory(), //hash模式
	/******/
})
``` 

## to的两种写法  
```vue
<router-link active-class="active" to="/home">主页</router-link> 

<router-link active-class="active" :to="{path:'/home'}">Home</router-link>
```  

## 路由配置  
:::code-group 
```ts [router.ts]
import {createRouter,createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import About from './views/About.vue'

const router = createRouter({
	history:createWebHistory(),
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/about',
			component:About
		}
	]
})
export default router

```
```ts [main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App) 
app.use(router)
app.mount('#app')
```
:::  

## 命名路由  
```ts
routes:[
  {
    name:'zhuye',
    path:'/home',
    component:Home
  },
  {
    name:'xinwen',
    path:'/news',
    component:News,
  },
  {
    name:'guanyu',
    path:'/about',
    component:About
  }
]
```  
- 使用  
```vue
<!--简化前：需要写完整的路径（to的字符串写法） -->
<router-link to="/news/detail">跳转</router-link>

<!--简化后：直接通过名字跳转（to的对象写法配合name属性） -->
<router-link :to="{name:'guanyu'}">跳转</router-link>
``` 

## 嵌套路由 
- 配置路由规则，使用`children`配置项 
```ts
const router = createRouter({
  history:createWebHistory(),
	routes:[
		{
			name:'zhuye',
			path:'/home',
			component:Home
		},
		{
			name:'xinwen',
			path:'/news',
			component:News,
			children:[
				{
					name:'xiang',
					path:'detail',
					component:Detail
				}
			]
		},
		{
			name:'guanyu',
			path:'/about',
			component:About
		}
	]
})
export default router
```  
- 使用  
```vue
<router-link to="/news/detail">xxxx</router-link>
<!-- 或 -->
<router-link :to="{path:'/news/detail'}">xxxx</router-link>
```  

## 路由传参  
- query参数  
```vue
<!-- 跳转并携带query参数（to的字符串写法） -->
<router-link to="/news/detail?a=1&b=2&content=欢迎你">
	跳转
</router-link>
				
<!-- 跳转并携带query参数（to的对象写法） -->
<RouterLink 
  :to="{
    //name:'xiang', //用name也可以跳转
    path:'/news/detail',
    query:{
      id:news.id,
      title:news.title,
      content:news.content
    }
  }"
>
  {{news.title}}
</RouterLink>
```  
- query接收参数 
```ts 
import {useRoute} from 'vue-router'
const route = useRoute()
// 打印query参数
console.log(route.query)
```  

- params参数   
> 传递`params`参数时，若使用`to`的对象写法，必须使用`name`配置项，不能用`path`。  
> 传递`params`参数时，需要提前在规则中占位。 
:::code-group 
```vue [news.vue]
<!-- 跳转并携带params参数（to的字符串写法） -->
<RouterLink :to="`/news/detail/001/新闻001/内容001`">{{news.title}}</RouterLink>
				
<!-- 跳转并携带params参数（to的对象写法） -->
<RouterLink 
  :to="{
    name:'xiang', //用name跳转
    params:{
      id:news.id,
      title:news.title,
      content:news.title
    }
  }"
>
  {{news.title}}
</RouterLink>
```

```ts [router.ts]
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiang',
          path:'detail/:id/:title/:content?',
          component:Detail
        }
      ]
    },
  ]
})
```
:::

  
- params接收参数  
```ts
import {useRoute} from 'vue-router'
const route = useRoute()
// 打印params参数
console.log(route.params)
```  

## 路由的props配置  
:::code-group 
```ts [router.ts]
{
	name:'xiang',
	path:'detail/:id/:title/:content',
	component:Detail,

  // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
  // props:{a:1,b:2,c:3}, 

  // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
  // props:true
  
  // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
  props(route){
    return route.query
  }
}
``` 
```vue [details.vue]
<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{title}}</li>
    <li>内容：{{content}}</li>
  </ul>
</template>

<script setup lang="ts" >
  defineProps(['id','title','content'])
</script>

```

:::  

## replace属性  
- 作用：控制路由跳转时操作浏览器历史记录的模式。  
- 浏览器的历史记录有两种写入方式：分别为```push```和```replace```：  
> ```push```是追加历史记录（默认值）。  
> `replace`是替换当前记录。  
```vue
<RouterLink replace .......>News</RouterLink>
```  

## 编程式导航  
- 路由组件的两个重要的属性：`$route`和`$router`变成了两个`hooks`  
```ts
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route.query)
console.log(route.parmas)
console.log(router.push)
console.log(router.replace)

```  

## 重定向  
- 作用：将特定的路径，重新定向到已有路由。  
```ts
{
    path:'/',
    redirect:'/about'
}
```
