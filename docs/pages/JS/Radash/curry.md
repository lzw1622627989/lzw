# Curry 柯里化

## debounce（防抖）

### 基本用法
防抖接受一个选项对象，其中包含一个 `delay` 和一个源函数，在调用时调用。当调用返回的函数时，它将在 `delay` 毫秒的时间过去后才调用源函数。不会导致调用源函数的调用会重置延迟，推迟下一次调用。

```js
import { debounce } from 'radash';

// 调用后200毫秒触发
const handlenClick =debounce({delay:200},()=>{
    //..
})

```


## throttle（节流）

### 基本用法
节流函数接受一个带有 `interval` 和源函数的选项对象，在调用时会调用源函数。当调用返回的函数时，只有在 `interval` 毫秒的时间经过后才会调用源函数。否则，它将忽略调用。
```js
import { throttle } from 'radash';

//第二次触发距离上一次触发200毫秒
 const handlenClick =throttle({interval:200},()=>{
    //..
 })
```