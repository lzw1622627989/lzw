# 数组 （Array）方法

## push()

- push(): 向数组的末尾添加一个或多个元素，并返回新的长度。

```js
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1,2,3,4]
```

## unshift()

- unshift(): 向数组的开头添加一个或多个元素，并返回新的长度。

```js
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); //[0,1,2,3]
```

## shift()

- shift(): 删除并返回数组的第一个元素。

```js
let arr = [1, 2, 3];
arr.shift();
console.log(arr); //[2,3]
```

## pop()

- pop(): 删除并返回数组的最后一个元素。

```js
let arr = [1, 2, 3];
arr.pop();
console.log(arr); //[1,2]
```

## slice()

- slice([begin[, end]]): 返回一个新的数组对象，这个对象是一个由原数组的一部分浅复制而来。不会改变原数组
  > begin（可选）：提取起始处的索引，从 0 开始。如果该参数是负数，表示从末尾开始算起的索引。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。  
  > end（可选）：提取结束处的索引（不包括）。如果省略该参数，slice 会一直提取到数组末尾。如果该参数是负数，表示从末尾开始算起的索引。

```js
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(2)); //[3,4,5]
console.log(arr1.slice(1, 3)); //[2,3]
console.log(arr1.slice(-1)); //[5]
console.log(arr1.slice(-3, -1)); //[3,4]
```

## splice()

- splice(index, deleteCount, item1, ..., itemX): 通过删除或替换现有元素或者添加新元素来修改数组，然后返回被修改的元素。
  > index：必需。一个整数，指定添加/删除项目的位置，使用负数可从末尾计算位置。  
  > deleteCount：必需。要删除的项目数量。如果设置为 0，则不会删除项目。  
  > item1, ..., itemX：可选。向数组添加的新项目。

```js
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr.splice(0, 1);
arr1.splice(-1, 1);
arr2.splice(0, 1, 0, 1);
console.log(arr); //[2,3]
console.log(arr1); //[1,2]
console.log(arr2); //[0,1,2,3]
```

## sort()

- sort(): 对数组的元素进行排序，并返回数组。默认排序顺序是根据字符串 Unicode 码点。可以接收一个比较函数作为参数，以实现自定义排序。

```js
let arr = [1, 7, 5, 8, 6, 9];
let arr1 = arr.slice();

// 升序
arr.sort((a, b) => {
  return a - b;
});
// 降序
arr1.sort((a, b) => {
  return b - a;
});
console.log(arr); //[1,5,6,7,8,9]
console.log(arr1); //[9,8,7,6,5,1]
```

## reverse()

- reverse(): 颠倒数组中元素的顺序。

```js
let arr = [5, 2, 8, 9, 1];
arr.reverse();
console.log(arr); //[1,9,8,2,5]
```

## concat()

- concat(): 用于合并两个或多个数组。此方法不会改变现有的数组，而是返回一个新数组。这也是用于创建新数组的常用方法。

```js
let arr = [1, 2];
let arr1 = [3, 4];
console.log(arr.concat(arr1)); //[1,2,3,4]
console.log([...arr, ...arr1]); //[1,2,3,4]
```

## includes()

- includes(searchElement[, fromIndex]): 检查数组是否包含一个指定的值，返回一个布尔值。
  > searchElement：必需。要查找的值。  
  > fromIndex（可选）：在数组中开始搜索的位置。如果该值为负数，则表示从数组末尾开始计数的位置。默认为 0。

```js
let arr = [1, 2, 3];
console.log(arr.includes(1)); //true
console.log(arr.includes(4)); //false
console.log(arr.includes(3, 1)); //true
```

## find()

- find(predicate[, thisArg]): 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  > predicate：必需。一个测试函数，对数组中的每个元素执行，直到找到第一个满足该函数的元素
  > thisArg（可选）：执行 predicate 函数时使用的 this 值。

```js
let arr = [1, 2, 3, 5, 7, 9];

let count = arr.find((item) => {
  return item % 3 === 0;
});
let count1 = arr.find((item) => {
  return item % 10 === 0;
});
console.log(count); //3
console.log(count1); //undefined
```

## findIndex()

- findIndex(): 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1。

```js
let arr = [1, 2, 3, 5, 7, 9];

let count = arr.findIndex((item) => {
  return item % 3 === 0;
});
let count1 = arr.findIndex((item) => {
  return item % 10 === 0;
});
console.log(count); //2
console.log(count1); //-1
```

## forEach()

- forEach(): 对数组的每个元素执行一次给定的函数。没有返回值

```js
let arr = [1, 2, 3];
arr.forEach((item) => {
  console.log(item * 2); //2,4,6
});
```

## map()

- map(): 对数组的每个元素执行一次给定的函数，并返回结果数组。

```js
let arr = [1, 2, 3];
let arr1 = arr.map((item) => item * 3);
console.log(arr1); //[3,6,9]
```

## reduce()

- reduce(): 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个输出值。

```js
let arr = [1, 2, 3, 4, 5];
function add(a, b) {
  return a + b;
}
console.log(arr.reduce(add)); //15
```

## reduceRight()

- reduceRight(): 与 reduce() 方法类似，但是从右到左执行。

```js
let arr = [1, 2, 3, 4, 5];
function add(a, b) {
  return a + b;
}
console.log(arr.reduceRight(add)); //15
```

## some()

- some(): 检查数组中是否至少有一个元素通过由提供的函数实现的测试。返回一个布尔值。

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.some((item) => item > 3)); //true
console.log(arr.some((item) => item < 0)); //false
```

## every()

- every(): 检查数组的所有元素是否都通过由提供的函数实现的测试。返回一个布尔值。

```js
let arr = [2, 4, 6, 8];
console.log(arr.every((item) => item > 3)); //false
console.log(arr.every((item) => item < 2)); //false
console.log(arr.every((item) => item % 2 === 0)); //true
```

## filter()

- filter(): 创建一个新数组，新数组中的元素是通过检查指定条件而过滤出来的。

```js
let arr = [1, 2, 3, 4];
let arr1 = arr.filter((item) => item > 2);
console.log(arr1); //[3,4]
```

## indexOf()

- indexOf(): 返回指定元素在数组中的第一个索引，如果不存在则返回 -1。

```js
let arr = [1, 2, 3, 4];
console.log(arr.indexOf(1)); //0
console.log(arr.indexOf(4)); //3
console.log(arr.indexOf(5)); //-1
```

## lastIndexOf()

- lastIndexOf(): 与 indexOf() 方法类似，但是从右到左查找。

```js
let arr = [1, 2, 3, 4];
console.log(arr.lastIndexOf(1)); //0
console.log(arr.lastIndexOf(4)); //3
console.log(arr.lastIndexOf(5)); //-1
```

##

- fill(value[, start[, end]]) 用于使用特定值填充数组的某些或所有元素。
  > value：必需。要填充数组的元素值。  
  > start（可选）：开始填充的起始索引。默认为 0。  
  > end（可选）：停止填充的结束索引。默认为数组的长度。

```js
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice();
let arr2 = arr.slice();
arr.fill(0);
arr1.fill(0, 2);
arr2.fill("x", 2, 4);
console.log(arr); //[0,0,0,0,0]
console.log(arr1); //[1,2,0,0,0]
console.log(arr2); //[1,2,'x','x',5]
```

## Array.isArray()

- Array.isArray() 判断对象是否为数组。

```js
console.log(Array.isArray([1, 2])); //true
console.log(Array.isArray({ key: 3 })); //false
console.log(Array.isArray(3)); //false
```

## join()

- join() 将数组中的所有元素连接成一个字符串。这个方法不会改变原始数组。

```js
let arr = [1, 2, 3];
console.log(arr.join()); //'1,2,3'
console.log(arr.join("")); //'123'
console.log(arr.join(",")); //'1,2,3'
```

## toString()

- toString()将数组的所有元素连接成一个字符串。这个方法不会改变原始数组。

```js
let arr = [1, 2, 3];
console.log(arr.toString());//("1,2,3");
```
