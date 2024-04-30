# React Router

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
::: details params传参
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
::: details search传参

:::
::: details state传参

:::
