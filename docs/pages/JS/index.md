# JS
## 数据类型
|数据类型 | 描述 |  
|:---:|:---:|
|字符串(String)|由Unicode字符、数字、标点符号等组成的序列|
|数字（Number）|可以带小数点，也可以不带|
|布尔（Boolean）|只有两个值：true 或 false|
|对象（Object）|表示和操作有序的数据集合|
|数组（Array）|特殊的对象，用于表示和操作有序的数据集合|
|函数（Function）| 特殊的对象，代表一段可重复使用的代码，可以接受输入参数并返回一个值|
|空（null）|一个空对象引用|
|未定义（undefined）|变量没有被赋值|
|符号（Symbol）|表示独一无二的值，用于对象属性的标识符。|  


## 算术运算符
|运算符|描述|例子|y值|x值|
|:---:|:---:|:---:|:---:|:---:|
|+|加法|x=y+2|y=1|x=3|
|-|减法|x=y-2|y=3|x=1|
|*|乘法|x=y*2|y=2|x=4|
|/|除法|x=y/2|y=4|x=2|
|%|余数|x=y%2|y=5|x=1|
|++|自增|x=++y|y=5|x=5|
|++|自增|x=y++|y=5|x=4|
|--|自减|x=--y|y=5|x=5|
|--|自减|x=y--|y=5|x=6|

## 赋值运算符  
``` js 
let x=10; 
let y=5;
```
|运算符|例子|实例|x值|
|:---:|:---:|:---:|:---:|
|=|x=y|x=y|x=5|
|+=|x+=y|x=x+y|x=15|
|-=|x-=y|x=x-y|x=5|
|*=|x*=y|x=x*y|x=50|
|/=|x/=y|x=x/y|x=2|
|%=|x%=y|x=x%y|x=0|

## 比较运算符
```js
let x=5;
```
|运算符|描述|比较|结果|
|:---:|:---:|:---:|:---:|
|==|等于|x==10|false|
|==|等于|x==5|true|
|===|全等于(类型也相等)|x==='5'|false|
|===|全等于(类型也相等)|x===5|true|
|!=|不等于|x!=6|true|
|!==|不等于(类型也不相等)|x!=='5'|true|
|!==|不等于(类型也不相等)|x!==5|false|
|>|大于|x>5|false|
|<|小于|x<5|false|
|>=|大于等于|x>=8|false|
|<=|小于等于|x<=8|true|

## 逻辑运算符
```js 
let x=2;
let y=3;
``` 
|运算符|描述|例子|
|:---:|:---:|:---:|
|&&|和|(x>3&&y<2)为true|
|&#124;&#124;|或|(x=3&#124;&#124;y=2)为false|
|!|非|!(x==y)为true|

## String方法
|方法|描述|
|:---:|:---:|
|[charAt()](/JS/string.md#charat)|返回指定位置的字符|
|[charCodeAt()](/JS/string.md#charcodeat)|返回在指定的位置的字符的 Unicode 编码|
|[concat()](/JS/string.md#concat)|连接两个或更多字符串，并返回新的字符串|
|[includes()](/JS/string.md#includes)|判断字符串是否包含指定的子字符串|
|[indexOf()](/JS/string.md#indexof)|返回一个指定的字符串值在字符串中首次出现的位置,如果没有找到，则返回-1|
|[lastIndexOf()](/JS/string.md#lastindexof)|从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置|
|[match()](/JS/string.md#match)|返回一个包含匹配结果的数组或 null|
|[replace()](/JS/string.md#replace)|在字符串中查找匹配的子串，并替换与正则表达式匹配的子串|
|[slice()](/JS/string.md#slice)|提取字符串的片断，并在新的字符串中返回被提取的部分|
|[trim()](/JS/string.md#trim)|去除字符串两边的空白|
|[trimStart()/trimLeft()](/JS/string.md#trimstart-trimleft)|去除左侧的空白字符|
|[trimEnd()/trimRight()](/JS/string.md#trimend-trimright)|去除右侧的空白字符|
|[startsWith()](/JS/string.md#startswith)|判断字符串是否以指定的前缀开始|
|[endsWith()](/JS/string.md#endswith)|判断字符串是否以指定的后缀结束|
|[repeat()](/JS/string.md#repeat)|复制字符串指定次数，并将它们连接在一起返回|
|[search()](/JS/string.md#search)|查找与正则表达式相匹配的值|
|[split()](/JS/string.md#split)|把字符串分割为字符串数组|
|[substr()](/JS/string.md#substr)|从起始索引号提取字符串中指定数目的字符|
|[substring()](/JS/string.md#substring)|提取字符串中两个指定的索引号之间的字符|
|[toLowerCase()](/JS/string.md#tolowercase)|把字符串转换为小写|
|[toUpperCase()](/JS/string.md#touppercase)|把字符串转换为大写|
|[padStart()](/JS/string.md#padstart)|在当前字符串开始处用指定的字符串填充至指定长度|
|[padEnd()](/JS/string.md#padend)|在当前字符串结尾处用指定的字符串填充至指定长度|
|[valueOf()](/JS/string.md#valueof)|返回某个字符串对象的原始值|
|[toString()](/JS/string.md#tostring)|返回一个字符串|

## Array方法
|方法|描述|
|:---:|:---:|
|[push()](/JS/array.md#push)|向数组的末尾添加一个或多个元素，并返回新的长度|
|[unshift()](/JS/array.md#unshift)|向数组的开头添加一个或更多元素，并返回新的长度|
|[shift()](/JS/array.md#shift)|删除并返回数组的第一个元素|
|[pop()](/JS/array.md#pop)|删除并返回数组的最后一个元素|
|[slice()](/JS/array.md#slice)|选取数组的一部分，并返回一个新数组|
|[splice()](/JS/array.md#splice)|从数组中添加或删除元素|
|[sort()](/JS/array.md#sort)|对数组的元素进行排序|
|[reverse()](/JS/array.md#reverse)|反转数组的元素顺序|
|[concat()](/JS/array.md#concat)|连接两个或更多的数组，并返回结果|
|[includes()](/JS/array.md#includes)|判断一个数组是否包含一个指定的值|
|[find()](/JS/array.md#find)|返回符合传入测试（函数）条件的数组元素|
|[findIndex()](/JS/array.md#findindex)|返回符合传入测试（函数）条件的数组元素索引|
|[forEach()](/JS/array.md#foreach)|数组每个元素都执行一次回调函数|
|[map()](/JS/array.md#map)|通过指定函数处理数组的每个元素，并返回处理后的数组|
|[reduce()](/JS/array.md#reduce)|将数组元素计算为一个值（从左到右）|
|[reduceRight()](/JS/array.md#reduceright)|将数组元素计算为一个值（从右到左）|
|[some()](/JS/array.md#some)|检测数组元素中是否有元素符合指定条件|
|[every()](/JS/array.md#every)|检测数值元素的每个元素是否都符合条件|
|[filter()](/JS/array.md#filter)|检测数值元素，并返回符合条件所有元素的数组|
|[indexOf()](/JS/array.md#indexof)|搜索数组中的元素，并返回它所在的位置|
|[lastIndexOf()](/JS/array.md#lastindexof)|搜索数组中的元素，并返回它最后出现的位置|
|[fill()](/JS/array.md#fill)|使用一个固定值来填充数组|
|[join()](/JS/array.md#join)|把数组的所有元素放入一个字符串|
|[toString()](/JS/array.md#tostring)|把数组转换为字符串，并返回结果|

## Date方法