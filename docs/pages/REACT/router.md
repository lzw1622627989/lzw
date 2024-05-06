# [React Router](https://baimingxuan.github.io/react-router6-doc/)

## 安装
```bash
#npm
npm install react-router-dom 

#pnpm
pnpm install react-router-dom
```

## 使用
```jsx 
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```


## Link、NavLink、Routes、Route、Outlet
::: details 一级路由用法
:::code-group


```jsx [app.jsx]
import {Link,NavLink,Routes,Route} from 'react-router-dom'
import Home from '@/views/Home'
import About from '@/views/About'
export default function App(){
    return(
        <>
        <Link to="/home" >跳转Home</Link>
        <Link to="/about" >跳转About</Link>
        
        <Routes>
          <Route path="/home" element={<Home/>} />  
          <Route peth="/about" element={<About/>} />  
        </Routes>
        </>
    )
}

```

:::

::: details 嵌套路由 `Outlet`
:::code-group
```jsx [App.jsx]
import {Routes,Route} from 'react-router-dom'
import Home from '@/views/Home'
import About from '@/views/About'
export default function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} >
                    <Route path="about" element={<About/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

```

```jsx [Home.jsx]
import {Link,Outlet} from 'react-router-dom'
export default function Home(){
    return(
        <>
            <div>Home Pages</div>
            <Link to="about" >跳转About</Link>
            {/* 子路由出口 */}
            <Outlet />
        </>
    )
}
```

```jsx [About.jsx]
import {Link} from 'react-router-dom'
export default function About(){

    return (
        <>
            <div>About Pages</div>
            <Link to="/" > 返回Home</Link>
        </>
    )
}
```

:::

## useRoutes
### 路由表

::: details 使用
::: code-group
```jsx [router.js]
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("@/views/Home"))
const About =lazy(()=>import("@/views/About"))

export default const routers=[
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"about",
                element:<About/>
            }
        ]
    },{
        path:"/",
        element:<Navigate to="/home"/>
    }
]
```
```jsx [App.jsx]
import {Suspense} from 'react'
import {useRoutes } from 'react-router-dom'
import routers from "./router.js"
export default function App(){
    const routerView =useRoutes(routers);
    return (
        <>
        <div>
            {
               <Suspense fallback={<div>loading...</div>}>{routerView}</Suspense> 
            }
        </div>
        </>
    )
}

```
```jsx [Home.jsx]
import {Link,Outlet} from 'react-router-dom'
export default function Home(){
    return(
        <>
            <div>Home Pages</div>
            <Link to="about" >跳转About</Link>
            {/* 子路由出口 */}
            <Outlet />
        </>
    )
}

```
```jsx [About.jsx]
import {Link} from 'react-router-dom'
export default function About(){

    return (
        <>
            <div>About Pages</div>
            <Link to="/" > 返回Home</Link>
        </>
    )
}
```
:::

## 路由传参
::: details params传参 `useParams`
::: code-group
```js [router.js] 
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("@/views/Home"))
const About =lazy(()=>import("@/views/About"))

export default const routers=[
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"about/:id",
                element:<About/>
            }
        ]
    },{
        path:"/",
        element:<Navigate to="/home"/>
    }
]
```
```jsx [App.jsx]
import {Suspense} from 'react'
import {useRoutes } from 'react-router-dom'
import routers from "./router.js"
export default function App(){
    const routerView =useRoutes(routers);
    return (
        <>
        <div>
            {
               <Suspense fallback={<div>loading...</div>}>{routerView}</Suspense> 
            }
        </div>
        </>
    )
}

```
```jsx [Home.jsx]
import {Link,Outlet} from 'react-router-dom'
export default function Home(){
    return(
        <>
            <div>Home Pages</div>
            <Link to="about/123" >跳转About</Link>
            {/* 子路由出口 */}
            <Outlet />
        </>
    )
}
```
```jsx [About.jsx]
import {Link,useParams} from 'react-router-dom'
export default function About(){
    const {id} =useParams();
    return (
        <>
            <div>About Pages id:{id}</div>
            <Link to="/" > 返回Home</Link>
        </>
    )
}
```

:::
::: details search传参 `useSearchParams`
::: code-group
```js [router.js] 
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("@/views/Home"))
const About =lazy(()=>import("@/views/About"))

export default const routers=[
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"about",
                element:<About/>
            }
        ]
    },{
        path:"/",
        element:<Navigate to="/home"/>
    }
]
```
```jsx [App.jsx]
import {Suspense} from 'react'
import {useRoutes } from 'react-router-dom'
import routers from "./router.js"
export default function App(){
    const routerView =useRoutes(routers);
    return (
        <>
        <div>
            {
               <Suspense fallback={<div>loading...</div>}>{routerView}</Suspense> 
            }
        </div>
        </>
    )
}

```
```jsx [Home.jsx]
import {Link,Outlet} from 'react-router-dom'
export default function Home(){
    return(
        <>
            <div>Home Pages</div>
            <Link to="about?id=123" >跳转About</Link>
            {/* 子路由出口 */}
            <Outlet />
        </>
    )
}
```
```jsx [About.jsx]
import {Link,useSearchParams} from 'react-router-dom'
export default function About(){
     const [search, setSearch] = useSearchParams();
    return (
        <>
            <div>About Pages id:{search.get('id')}</div>
            <Link to="/" > 返回Home</Link>
        </>
    )
}
```
:::
::: details state传参 `useLocation`
::: code-group
```js [router.js] 
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home =lazy(()=>import("@/views/Home"))
const About =lazy(()=>import("@/views/About"))

export default const routers=[
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"about",
                element:<About/>
            }
        ]
    },{
        path:"/",
        element:<Navigate to="/home"/>
    }
]

```

```jsx [App.jsx]
import {Suspense} from 'react'
import {useRoutes } from 'react-router-dom'
import routers from "./router.js"
export default function App(){
    const routerView =useRoutes(routers);
    return (
        <>
        <div>
            {
               <Suspense fallback={<div>loading...</div>}>{routerView}</Suspense> 
            }
        </div>
        </>
    )
}

```
```jsx [Home.jsx]
import {Link,Outlet} from 'react-router-dom'
export default function Home(){
    return(
        <>
            <div>Home Pages</div>
            <Link to="about" state={{id:123}} >跳转About</Link>
            {/* 子路由出口 */}
            <Outlet />
        </>
    )
}
```
```jsx [About.jsx]
import {Link,useLocation} from 'react-router-dom'
export default function About(){
     const {state:{id}} = useLocation();
    return (
        <>
            <div>About Pages id:{id}</div>
            <Link to="/" > 返回Home</Link>
        </>
    )
}
```
:::

## 编程式路由
::: details 使用
```jsx
import { useNavigate} from 'react-router-dom'

export default function App(){

    function onParams(){
        // 等价于 <Link to="about/123" >跳转About</Link>
        useNavigate("/about/123")
    }

    function onSearch(){
        // 等价于 <Link to="about?id=123" >跳转About</Link>
        useNavigate("/about?id=123",{replace:true})//true:replace模式 false:push模式
    }
    function onState(){
        // 等价于<Link to="about" state={{id:123}} >跳转About</Link>
        useNavigate("/about",{state:{id:123}})
    }

    function back(){
        useNavigate(-1)
    }
    function forward(){
         useNavigate(1)
    }
    return (
        <>
        <button onClick={onParams}>params传参</button>
        <button onClick={onSearch}>search传参</button>
        <button onClick={onState}>state传参</button>
        <button onClick={back}>后退</button>
        <button onClick={forward}>前进</button>
        </>
    )
}
```
:::

## useInRouterContext
### 判断组件是在 `<Router>` 的上下文中呈现
:::details 用法
```jsx
import { useInRouterContext } from 'react-router-dom'
export default function App(){
     console.log(useInRouterContext());//true在  false不在
}
```
:::

## useNavigationType
### 返回当前的导航类型或用户是如何进入当前页面的
::: details 用法

```jsx
import { useNavigationType } from 'react-router-dom'
export default function App(){
     console.log(useNavigationType());//"POP" | "PUSH" | "REPLACE"
}
```
:::