# js 简写技巧

## If-Else 用 ||简化

- 如果||前面的值是 0,'',false,null,undefined,NaN 其中的任意一种，则直接返回||后面的值

```js
function name(params) {
  let value = params || {};
}
//等价于=>
function name(params) {
  let value;
  if (
    params === 0 ||
    params === "" ||
    params === false ||
    params === null ||
    params === undefined ||
    isNaN(params)
  ) {
    value = {};
  } else {
    value = params;
  }
}
```  

## If-Else 用??简化  
- 左侧操作数为null或undefined时，返回右侧操作数 
```js
function name(params){
    let value = params ?? {}
}
//等价于=>  
function name(params) {
  let value;
  if (
    params === null ||
    params === undefined
  ) {
    value = {};
  } else {
    value = params;
  }
}
``` 

## 三目运算符简化If-Else  
```js
let result = condition ? valueIfTrue : valueIfFalse;
```  

## includes简化  
```js
if([0, '', false, null, undefined].includes(obj)){
  // ...
}
```


## 解构赋值  
```js
let [num1,num2] =[1,2];//num1=1 num2=2
let {count1,count2} ={count1:3,count2:5};
```  

## 默认参数  
```js
function add(a=10,b=20){
    return a+b
}
add();//30
add(1);//21
add(undefined,5);//15
add(4,8);//12
```    

## 数组克隆  
```js

let arr =[1,2,3];
const arr1 =arr.slice();
const arr2 =[].concat(arr);
const arr3 =[...arr];
const arr4 =Array.from(arr);
const arr5 =JSON.parse(JSON.stringify(arr))
```  

## 数组去重  
```js
const arr = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArr = [...new Set(arr)];

const arr1 = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArr1 = arr1.filter((item, index) => arr1.indexOf(item) === index);
```  

## 快速生成数组  
```js
const arr1 = [...new Array(10).keys()];//[0,1,2,3,4,5,6,7,8,9]
const arr2 = Array.from(Array(10), (v, k) => k);//[0,1,2,3,4,5,6,7,8,9]
const arr3 = [...Array(10)].map((v, i) => i + 1);//[1,2,3,4,5,6,7,8,9,10]
const arr4 = new Array(10).fill(0);//[0,0,0,0,0,0,0,0,0,0]
```

## 数组降维  
- 接受一个参数，表示要降的维度数，默认为1
```js
const arr = [1, [2, [3, 4], 5], 6];
const flatArr = arr.flat();//[1,2,3,4,5,6]
```
