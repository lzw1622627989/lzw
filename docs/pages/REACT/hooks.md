# React Hooks

## useState  
### 状态变量

::: details  用法1：简单值

```jsx
import { useState } from 'react'

// app组件
export default function App(){
    const [count,setCount] =useState(0);
    function changeCount(){
        setCount((count)=>count+1);//count+=1
        setCount(20)//count=20
    }
    return (
        <>
            <button onClick={changeCount}>{count}</button>
        </>
    )
}
```
:::
::: details 用法2：数组或对象
```jsx
function App(){
    const [person,setPerson] =useState({
        name:"张三"，
        age:20
    })
    const [list,setList] =useState([1,2,3])

    function changePerson(){
        // 不能对源对象直接修改
        // person.age=10

        // 方法一
        let newPerson ={...person};
        newPerson.age=30;
        setPerson(newPerson); //person={name:"张三",age:30}
        
        // 方法二
        setPerson({...person,name:"李四"})//person ={name:"李四",age:20}
    }

    function changeList(){
        // 不能对源数组直接修改
        // list[0]=8;

        // 方法一
        let newList =[...list];
        newList[0] =8;
        setList(newList);//list=[8,2,3]

        // 方法二
        let nerList =[8,1,2,3];
        setList(newList);//list=[8,1,2,3]
    }

    return (
        <>
            <button onClick={changePerson}>修改对象</button>
            <button onClick={changeList}>修改数组</button>
        </>
    )
}

```
:::

## useRef 
### 引用一个不需要渲染的值 
::: details 用法1:引用一个值
```jsx
import { useRef,useEffect,useState } from 'react';

function App(){
    // 改变 ref 不会触发重新渲染
    const timer =useRef(0)
    const [count,setCount] =useState(0)

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCount((count)=>count+1)
        },1000);
        timer.current = intervalId;
    },[])

    function clearnTimer(){
        clearInterval(timer.current);
    }

    return(
        <>
        <div>{count}</div>
        <button onClick={clearnTimer}>清除定时器</button>
        </>
    )
}
```
:::

::: details 用法2：通过ref操作DOM
```jsx

function App(){
    const btn = useRef(null);

    function getBtnDom(){
        console.log(btn.current);//button标签
    }
    return(
        <>
            <button ref={btn} onClick={getBtnDom}>按钮</button>
        </>
    )
}
```
:::

## useEffect  
### 将组件与外部系统同步

::: details 用法1：执行数据获取
```jsx
import { useEffect,useState } from 'react';

function App(){
    
    const [list,setList] =useState([]);

    useEffect(()=>{
    fetch('...')
      .then(response => response.json())
      .then(data => setList(data));
      },[]);//空数组作为依赖，只在组件挂载时执行


    return (
        <>
        {
            list.map(item=>{
                return <div key={item.id}>{item.name}</div>
            })
        }
        </>
    )
}
```
:::

::: details 用法2：订阅事件
```jsx
import { useEffect} from 'react';

function App(){
    useEffect(()=>{
        const handleScroll = () => {
            console.log('Window scrolled!');
        };
        window.addEventListener('scroll', handleScroll);
        // 清除副作用，避免内存泄露
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);//空数组作为依赖，只在组件挂载和卸载时执行
    return <div>APP content</div>
}
```
:::

::: details 用法3：依赖数组控制
```jsx
import { useState,useEffect } from "react";

function App(){
    const [count,setCount] =useState(0);
    const [isEven, setIsEven] = useState(false);
    useEffect(()=>{
        if (isEven) {
      console.log("Count is even:", count);
    } else {
      console.log("Count is odd:", count);
    }
    },[count,isEven]);// 当 count 或 isEven 变化时重新执行

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>  
        </>
    )
}

```
:::

::: details 用法4：无需依赖执行
 ```jsx
 import { useEffect } from 'react';

 function App(){
    useEffect(() => {
        console.log('Component mounted!');
    }); // 不传递第二个参数，每次渲染后都会执行

    return <div>App content</div>;
 }
 ```
:::


## useContext
### 读取和订阅组件中的`context`

::: details 用法

::: code-group
```js [conText.js]
import {createContext} from 'react'
export const ThemeContext =createContext(null)
```
```jsx [App.jsx]
import {useState} from 'react'
import {  ThemeContext } from './conText.js'
import Header from './Header.jsx'
import Main from './Main.jsx'
export default function App(){
    const [theme,setTheme] =useState('light')
    return(
        <>
        <ThemeContext.Provider value={{theme,setTheme}}  >
            <Header/>
            <Main/>
        </ThemeContext.Provider>
        </>
    )
}

```
```jsx [Header.jsx]
import { useContext } from 'react'
import {  ThemeContext } from './conText.js'

export default function Header(){
   const { theme } =useContext(ThemeContext)
    return (
        <>
            <div>当前主题：{theme}</div>
        </>
    )
}
```


```jsx [Main.jsx]
import { useContext } from 'react'
import {  ThemeContext } from './conText.js'
export default function Main(){
    const { theme,setTheme } =useContext(ThemeContext)
    function changeTheme(){
       setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <button onClick={changeTheme}>设置主题</button>
        </>
    )

}

```
:::

## useMemo
### 每次重新渲染的时候能够缓存计算的结果
::: details 用法
```jsx
import { useState,useMemo } from 'react'
export default function App(){
    const [list,setList] =useState([1,2,3,4,5]);
    const [inpValue,setInpValue] = useState("");
    const filterList =useMemo(()=>{
        let result =list.filter(item=>item.toString().includes(inpValue));
        return result
    },[list,inpValue]) // 依赖项数组，只有当 list 或 inpValue 发生变化时，才会重新计算 filterList
    return (
        <>
        <input value={inpValue}  onChange={e=>setInpValue(e.target.value)}  />
        <ul>
            {
                filterList.map(item=>{
                    return <li key={item}>{item}</li>
                })
            }
        </ul>
        </>
    )

}
```
:::

## useCallback
### 在多次渲染中缓存函数
::: details 1

:::

## useId
### 生成一个唯一的`ID`
::: details 用法

```jsx
import {useId} from 'react'
export default function App(){
    const id =useId();
    return (
        <>
            <div id={id}>id</div>
        </>
    )
}
```
:::

## useImperativeHandle
### 向父组件暴露一个自定义的`ref`
::: details 用法
::: code-group
```jsx [Childen.jsx]
import { forwardRef,useImperativeHandle,useState } from 'react'
export default forwardRef(function Childen(props,ref){
    const [count,setCount] =useState(0);
    useImperativeHandle(ref,()=>({
        count,
        increment:()=>setCount(count+1)
    }))
    return(
        <div>Childen content</div>
    )
})

```
```jsx [App.jsx]
import {useRef} from 'react'
import Childen from './Chileden'
export default function App(){
    const childenRef =useRef(null);
    function increment(){
        childenRef.current.increment();
        console.log( childenRef.current.count)
    }
    return(
        <>
        <Childen ref={childenRef} ></Childen>
        <button onClick={increment}>increment count</button>
        </>
    )
}

```


:::