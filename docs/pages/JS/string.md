# 字符串（String）方法
## charAt()
- charAt(index): 返回指定位置的字符
```js 
let str = "Hello";  
console.log(str.charAt(0));  // 输出 "H"
console.log(str.charAt(5))// '' 超出字符串长度返回''
```
## charCodeAt()
- charCodeAt(index):返回在指定的位置的字符的  [Unicode](https://www.lddgo.net/string/unicode-chart)   编码。
```js 
let str ="Hello"
console.log(str.charCodeAt(0));//72  因为 H 的 Unicode 值是 72
console.log(str.charCodeAt(5));//NaN 超出字符段长度返回NaN
```
## concat()
- concat(string2, string3..., stringX): 连接两个或更多字符串，并返回新的字符串。
```js 
let str1='Hello,'
let str2 ='World!'
console.log(str1.concat(str2));// 'Hello,World!'
```
## includes()
- includes(searchvalue, start): 判断字符串是否包含指定的子字符串，如果指定了 start 则从该位置开始查找。
```js
let str ='Hello, World!'
console.log(str.includes('World'));//true
console.log(str.includes('World',7));//true 从第七位开始查找（包含空格）
console.log(str.includes('World',8));//false 从第八位开始查找（包含空格）
```
## indexOf()
- indexOf(searchvalue, start): 返回一个指定的字符串值在字符串中首次出现的位置。如果没有找到，则返回-1。
```js 
let str ='Hello,World!'
console.log(str.indexOf('H'));//0
console.log(str.indexOf('H',1));//-1
console.log(str.indexOf(''));//0
console.log(str.indexOf('l'));//2
console.log(str.indexOf('a'));//-1
```
## lastIndexOf()
- lastIndexOf(searchvalue, start): 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。如果没有找到，则返回-1。
```js
let str ='Hello,World!'
console.log(str.lastIndexOf('W'));//6
console.log(str.lastIndexOf('a'));//-1
console.log(str.lastIndexOf('l'));//9
console.log(str.lastIndexOf('l',1));//-1
console.log(str.lastIndexOf('l',10));//9

 ```
 ## match()
 - match(regexp): 返回一个包含匹配结果的数组或 null。
 ```js
 let str ='Hello,World!'
 console.log(str.match(/o/g));//['o','o']
 console.log(str.match(/H/g));//['H']
 console.log(str.match(/l/g));//['l','l','l']
 console.log(str.match(/a/g));//null
 ```
 ## replace()
 - replace(searchvalue, newvalue): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
 ```js 
 let str ='Hello,World!'
 console.log(str.replace('World','JS'));//'Hello,JS!'
 console.log(str.replace(/l/g,'a'));//'Heaao,Worad!'
 ```
 ## slice()
 - slice(start, end): 提取字符串的一部分并在新的字符串中返回被提取的部分。提取的部分包括 start 处的字符，但不包括 end 处的字符。如果省略 end，则 slice 会提取到原字符串的结尾。如果提供的 start 大于字符串的长度，则返回一个空字符串。如果省略 start，则 slice 会从字符串的开始处提取到 end。如果提供的 end 大于字符串的长度，则 slice 会提取到原字符串的结尾
 ```js
 let str ='Hello,World!'
 console.log(str.slice(0,5));//'Hello'
 console.log(str.slice(6));//'World!'
 console.log(str.slice(12));//''
 console.log(str.slice('',5));//'Hello'
 console.log(str.slice('',12));//'Hello,World!'
  ```
  ## trim()
  - trim(): 返回字符串的副本，去除前后的空白字符。
  ```js 
  let str =' Hello, World! '
  console.log(str.trim());//'Hello, World!' 中间空间还保留
  ```
  ## trimStart() / trimLeft()
- trimStart() / trimLeft(): 返回字符串的副本，去除左侧的空白字符。
```js 
let str =' Hello,World!'
console.log(str.trimLeft());//'Hello,World!'
console.log(str.trimStart());//'Hello,World!'
```
## trimEnd() / trimRight()
- trimEnd() / trimRight(): 返回字符串的副本，去除右侧的空白字符。
```js 
let str ='Hello,World!  '
console.log(str.trimRight());//'Hello,World!'
console.log(str.trimEnd());//'Hello,World!'
```
## startsWith()
- startsWith(searchString[, position]): 判断字符串是否以指定的前缀开始。如果指定了位置参数，则在指定的位置开始搜索。
```js 
let str ='Hello,World!'
console.log(str.startsWith('Hello'));//true
console.log(str.startsWith('Hello',0));//true
console.log(str.startsWith('Hello',1));//false
console.log(str.startsWith('World'));//false
```
## endsWith()
- endsWith(searchString[, position]): 判断字符串是否以指定的后缀结束。如果指定了位置参数，则在指定的位置结束搜索。
```js 
let str ='Hello,World!'
console.log(str.endsWith('World!'));//true
console.log(str.endsWith('World!',12));//true
console.log(str.endsWith('World!',11));//false
console.log(str.endsWith('Hello'));//false
```
## repeat()
- repeat(count): 返回一个字符串重复指定次数的结果。
```js 
let str ='abc'
console.log(str.repeat(3));//'abcabcabc'
```

## search()
- search(regexp): 返回字符串中匹配到的正则表达式的索引，如果没有找到则返回-1。
```js 
let str = "Hello, World!"; 
console.log(str.search('H'));//0
console.log(str.search(/o/));//4
console.log(str.search(/a/));//-1
```
## split()
- split(separator[, limit]): 把字符串分割为字符串数组。这是 split() 方法的基本用法，还可以指定分隔符和限制数组长度
```js 
let str = "Hello,World!"; 
console.log(str.split(','));//['Hello','World!']
console.log(str.split(''));//['H','e','l','l','o',',','W','o','r','l','d','!']
console.log(str.split('',5));//['H','e','l','l','o']
```
## substr()
- substr(start, length): 从起始索引号提取字符串中指定数目的字符。
```js
let str = "Hello,World!";
console.log(str.substr(0,5));//'Hello'
```
## substring()
- substring(indexStart[, indexEnd]): 提取字符串中两个指定的索引号之间的字符。
```js 
let str = "Hello,World!";
console.log(str.substring(0,5));//'Hello'
console.log(str.substring(6));//'World!'
```
## toLowerCase()
- toLowerCase():返回字符串的副本，所有大写字母都被转换为小写字母。
```js 

let str='ABCD'
console.log(str.toLowerCase());//abcd
```
## toUpperCase()
- toUpperCase(): 返回字符串的副本，所有小写字母都被转换为大写字母。
```js 
let str ='abcd'
console.log(str.toUpperCase());//'ABCD'
```
## padStart()
- padStart(length [, padString]): 在当前字符串开始处用指定的字符串填充至指定长度。如果未指定填充字符串，则默认使用空格填充
```js
let str ='abc'
console.log(str.padStart(10,'x'));//'xxxxxxxabc'
```
## padEnd()
- padEnd(length [, padString]): 在当前字符串结尾处用指定的字符串填充至指定长度。如果未指定填充字符串，则默认使用空格填充。
```js
let str ='abc';
console.log(str.padEnd(10,'x'));//'abcxxxxxxx'
```
## valueOf()
- valueOf()	返回某个字符串对象的原始值。
```js
let num =new Number(20);
console.log(num);//Number {20}
console.log(num.valueOf()); //20
```
## toString()
- toString() 返回一个字符串。
```js
let num =3;
console.log(num);//3
console.log(num.toString());//'3'
console.log(typeof num==='string');//false
console.log(typeof num.toString()==='string');//true
```