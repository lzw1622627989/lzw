# React Hooks

## useState 状态变量

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

## 