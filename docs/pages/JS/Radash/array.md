# Array数组

## alphabetical （按字母顺序排列）
按属性的字母顺序对对象数组进行排序
### 基本用法
给定一个包含对象的数组和一个回调函数，用于确定用于排序的属性，返回一个按字母顺序排序的新数组。第三个可选参数允许您按降序而不是默认的升序对其进行排序。   

对于数字排序，请参见 sort 函数。
```js
import { alphabetical } from "radash";
 const array =[{
            name:'d',
            power:20
        },{
            name:"c",
            power:14
        },{
            name:"b",
            power:10
        },{
            name:"a",
            power:7
        }
    ]
    alphabetical(array,r=>r.name);//=>[{name:"a",power:7},{name:"b",power:10},{name:"c",power:14},{name:"d",power:20}]
    alphabetical(array,r=>r.name,"desc");//=>[{name:"d",power:20},{name:"c",power:14},{name:"b",power:10},{name:"a",power:7}]
```

## boil （沸腾）
将项目列表减少到一个项目
### 基本用法
给定一个项目数组，返回匹配比较条件的最终项。适用于更复杂的最小/最大值。   
```js
import { boil } from "radash";
 const array =[{
            name:'d',
            power:20
        },{
            name:"c",
            power:14
        },{
            name:"b",
            power:10
        },{
            name:"a",
            power:7
        }
    ]
    boil(array,(a, b) => (a.power > b.power ? a : b));//=>{name:"d",power:20}
```

## cluster （集群）
将列表拆分为给定大小的多个列表

### 基本用法
给定一个项目数组和期望的簇大小 ( n )，返回一个数组的数组。每个子数组包含 n (簇大小) 个项目，尽可能均匀地拆分。
```js
import { cluster } from "radash";
 const array =[1,2,3,4,5,6,7,8,9];
 cluster(array,3);//=>[[1,2,3],[4,5,6],[7,8,9]]

```

## counting（计数）
创建一个具有项目出现次数计数的对象
### 基本用法
给定一个对象数组和一个身份回调函数来确定每个对象的标识方式。返回一个对象，其中键是回调返回的 id 值，每个值是一个整数，告诉这个 id 出现了多少次。
```js
import { counting } from "radash";

 const array =[
    {name:a,value:"xx"},
    {name:b,value:"xx"},
    {name:c,value:"x"},
    {name:a,value:"xxx"}
    ]
    counting(array,r=>r.value);//=>{xx:2,x:1,xxx:1}
```

## diff（差异）
创建两个数组之间的差异数组
### 基本用法
给定两个数组，返回一个数组，其中包含第一个数组中存在但第二个数组中不存在的所有项。
```js

import { diff } from "radash";

    const array1 =[1,2,3,4,5,6,7,8,9,10];
    const array2 =[1,2,3,4,5,6,7,8,9];
    diff(array1,array2);//=>[10]
```

## first（第一个）
从列表中获取第一个项目
### 基本用法
给定一个项目数组，如果没有项目存在，则返回第一个项目或默认值。
```js
import { first } from "radash";
 
 const array =["a","b","c"];
 first(array);//=>"a"
 first([],"default");//=>"default"

```

## flat （拍平）
将数组的数组扁平化为一维数组
### 基本用法
给定一个包含许多数组的数组，返回一个新数组，其中所有子数组中的所有项都出现在顶层。   
注意， `_.flat` 不是递归的，它只会展开第一层
```js
import { flat } from "radash";
const arr1 =[[1,2],[3,4,5]];
const arr2 =[[6,7],[8,9,[10,11]]];
flat(arr1);//=>[1,2,3,4,5]
flat(arr2);//=>[6,7,8,9,[10,11]]
```

## fork（分叉）
按条件将数组分割成两个数组
### 基本用法
给定一个项目数组和一个条件，返回两个数组，第一个包含所有通过条件的项目，第二个包含所有未通过条件的项目。   
```js
import { fork } from "radash";
const person =[{name:"a",age:20},{name:"b",age:30},{name:"c",age:40},{name:"d",age:50}];
fork(person,p=>p.age>=30);//=>[{name:"b",age:30},{name:"c",age:40},{name:"d",age:50}],[{name:"a",age:20}]
```

## group（分组）
对项目数组进行分组排序
### 基本用法
给定一个项目数组， `group` 将构建一个对象，其中每个键是属于该组的项目数组。一般来说，这对于对数组进行分类是很有用的。
```js
import { group } from "radash";
const person =[{name:"a",age:20},{name:"b",age:30},{name:"c",age:20},{name:"d",age:20}];
group(person,p=>p.age);//=>[[{name:"a",age:20},{name:"c",age:20},{name:"d",age:20}],[{name:"b",age:30}]]
```

## intersects（相交）
确定两个数组是否具有共同项
### 基本用法
给定两个项目数组，如果任何项目存在于两个数组中，则返回 true。
```js
import { intersects } from "radash";
const arr1 =[1,2,3,4,5];
const arr2 =[6,7,8,9];
const arr3 =[1,3,5,7];
intersects(arr1,arr2);//=>false
intersects(arr1,arr3);//=>true
```

## iterate（迭代）
遍历回调函数 n 次
### 基本用法
有点像 `forEach` 遇到 `reduce` 。 用于运行函数 n 次以生成一个值。` _.iterate` 函数接受计数（运行回调的次数），回调函数和初始值。回调被作为一个减少函数运行计数次，然后累积的值被返回。   
注意，这不是从零开始索引的。如果你传递一个 5 的 `count` ，你将在回调函数中得到 1、2、3、4、5 的索引。
```js
import { iterate } from "radash";

iterate(5,(acc,i)=>acc+i,1);//=>1+1+2+3+4+5=16
iterate(4,(acc,i)=>acc*acc,2);//=>2*2*4*16*256=65536
```

## last（最后）
从列表中获取最后一个项目
### 基本用法
给定一个项目数组，如果没有项目存在，则返回最后一个项目或默认值
```js
import { last } from "radash";
const fish = ["marlin", "bass", "trout"];
last(fish);//=>"trout"
last([],"default");//=>"default"

```

## list（列表）
使用特定项创建一个列表
### 基本用法
给定一个开始值、结束值、步长和步长大小，返回一个包含从开始到结束值的值的列表。

接口与 `range` 相同。

向`Python` 的 `range` 功能致敬

```js
import { list } from "radash";
list(3);//=>[0,1,2,3]
list(0,3);//=>[0,1,2,3]
list(0,3,'y');//=>['y','y','y','y']
list(0,3,()=>'x');//=>['x','x','x','x']
list(0,3,(i)=>i);//=>[0,1,2,3]
list(0,3,(i=>{return {count:i}}));//=>[{count:0},{count:1},{count:2},{count:3}]
list(0,100,(i)=>i,20);//=>[0,20,40,60,80,100]
```

### 签名
list 功能可以通过不同的参数实现很多功能。
#### lsit(size)
在提供单个参数时，它被视为 `size` 。返回一个值从 0 到 `size` 的列表。
```js
list(3);//=>[0,1,2]
```
#### list(start, end)
当给定两个参数时，它们被视为 `start` 和 `end` 。返回一个由 `start` 到 `end` 的值组成的列表。
```js
list(1, 3);//=>[1,2,3]
```

#### list(start, end, value)
当给定第三个参数时，它被视为要在列表中使用的 `value` 。如果 `value` 是一个函数，它将被调用，带有一个索引参数，以创建每个值。
```js
list(0,3,(i)=>i);//=>[0,1,2,3]
list(0,3,()=>null);//=>[null,null,null,null]
list(0,3,{});//=>[{},{},{},{}]
```

#### list(start, end, value, step)
当给定第四个参数时，它被视为 `step` 大小，从 `start` 到 `end` 生成值时要跳过的。
```js
list(0,100,(i)=>i,10);//=>[0,10,20,30,40,50,60,70,80,90,100]

```


## max（最大值）
从数组中获取最大的项
### 基本用法
给定一个项目数组和一个获取每个项目值的函数，返回具有最大值的项目。在底层使用 `_.boil` 。
```js
import {max} from 'radash'
max([1,3,5,7,9]);//=>9
```

## merge（合并）
组合两个列表，覆盖第一个列表中的项目
### 基本用法
给定两个项目数组和一个身份函数，返回第一个列表，其中包含第二个列表中所有与之匹配的项目。
```js
import {merge} from 'radash'
const arr1 =[{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}]
const arr2 =[{id:100,name:'a'},{id:20,name:'b'}]
merge(arr1,arr2,item=>item.name);//=>[{id:100,name:'a'},{id:20,name:'b'},{id:3,name:'c'}]
```

## min（最小值）
从数组中获取最小的项目
### 基本用法
给定一个项目数组和一个获取每个项目值的函数，返回具有最小值的项目。在内部使用 `_.boil` 。
```js
import {min} from 'radash'
min([1,3,5,7,9]);//=>1
```

## objectify（对象化）
将列表转换为字典对象
### 基本用法
给定一个项目数组，使用给定函数创建一个键和值映射的字典。第一个参数是要映射的数组。第二个参数是确定每个项目键的函数。第三个参数是可选的，确定每个项目的值。
```js
import {objectify} from 'radash'
const users =[{id:1,name:'John'},{id:2,name:'Jane'},{id:3,name:'Jim'}];
objectify(users,user=>user.name);//=>{John:{id:1,name:'John'},Jane:{id:2,name:'Jane'},Jim:{id:3,name:'Jim'}}
objectify(users,user=>user.name,user=>user.id);//=>{John:1,Jane:2,Jim:3}

```

## range（范围）
创建一个用于迭代的范围
### 基本用法
给定一个起始值、结束值、步长和值，返回一个生成器，该生成器将按步长从起始值到结束值产生值。用于将 `for (let i = 0)` 替换为 `for of` 。`Range` 将返回一个生成器， `for of` 将逐个调用，因此可以安全地创建大范围。

接口与 `list` 相同。

向`Python` 的 `range` 功能致敬
```js
import { range } from "radash";

range(3); // yields 0, 1, 2, 3
range(0, 3); // yields 0, 1, 2, 3
range(0, 3, "y"); // yields y, y, y, y
range(0, 3, () => "y"); // yields y, y, y, y
range(0, 3, (i) => i); // yields 0, 1, 2, 3
range(0, 3, (i) => `y${i}`); // yields y0, y1, y2, y3
range(0, 3, obj); // yields obj, obj, obj, obj
range(0, 6, (i) => i, 2); // yields 0, 2, 4, 6

// 三个参数有bug
// for (const i of range(0, 200, 10)) {
//   console.log(i); // => 0, 10, 20, 30 ... 190, 200
// }

for (const i of range(0, 5)) {
  console.log(i); // => 0, 1, 2, 3, 4, 5
}
```

## replaceOrAppend （替换或追加）
替换数组中的项目，如果没有匹配项则追加
### 基本用法
给定一个项目数组，一个项目和一个身份函数，返回一个新数组，其中项目要么替换现有项目的索引 - 如果存在，否则将其附加到末尾。
```js
import { replaceOrAppend } from 'radash';
const persons =[{ name: 'John',age: 20 },{ name: 'Jane',age: 25 }]
const newPerson = { name: 'Jim',age: 30 }
const Jane = { name: 'Jane',age: 35 }
replaceOrAppend(persons, newPerson, p => p.name==='Jim');//=> [{ name: 'John',age: 20 },{ name: 'Jane',age: 25 },{ name: 'Jim',age: 30 }]
replaceOrAppend(persons, Jane, p => p.name==='Jane');//=> [{ name: 'John',age: 20 },{ name: 'Jane',age: 35 }]
```

## replace（替换）
替换数组中的一个项目
### 基本用法
给定一个项目数组，替换与给定条件函数匹配的项目。只替换第一个匹配项。始终返回原始数组的副本。
```js
import { replace } from 'radash'
const persons = [{ name: 'John', age: 20 }, { name: 'Jane', age: 35 }]
const newPerson ={ name: 'Jim', age: 30 }
replace(persons,newPerson,person=>person.name==='John');//=>[{ name: 'Jim', age: 30 }, { name: 'Jane', age: 35 }]
```

## select（选择）
过滤和映射数组
### 基本用法
一次性在一个步骤中同时应用过滤器和映射操作。
```js
import { select } from 'radash'
const persons = [{ name: 'John', age: 20 }, { name: 'Jane', age: 35 }]
select(persons,p=>p.name==='John',p=>p);//=>[{ name: 'John', age: 20 }]
select([1,2,3,4,6,7],i=>i,i=>i>3);//=>[4,6,7]

```

## shift（转移）
将数组项向前或向后移动 n 步
### 基本用法
给定一个项目列表，返回一个向右移动 n 个位置的数组。
```js
import { shift } from 'radash'
const arr =[1,2,3,4,5,6,7,8,9];
shift(arr,2);//=>[8,9,1,2,3,4,5,6,7]
shift(arr,-2);//=>[3,4,5,6,7,8,9,1,2]

```

## sift（筛选）
从列表中删除所有假值项目
### 基本用法
给定一个项目列表，返回一个新列表，其中包含所有不为假的项目。
```js
import { sift } from 'radash'
const arr = [0, 1, false, 2, '', 3]
sift(arr);//=>[1,2,3]
```

## sort（排序）
按数字属性对对象列表进行排序
### 基本用法
给定一个对象数组，通过 get 函数指定的数值属性返回一个新的排序数组。第三个可选参数允许您按降序而不是默认的升序排序。

此函数仅支持数字排序。对于字母排序，请参见字母函数。
```js
const persons =[{name: 'fred', age: 40},{name: 'barney', age: 30},{name: 'bob', age: 20}];
sort(persons,p=>p.age);//=>[{name: 'bob', age: 20},{name: 'barney', age: 30},{name: 'fred', age: 40}]
sort(persons,p=>p.age,true);//=>[{name: 'fred', age: 40},{name: 'barney', age: 30},{name: 'bob', age: 20}]
```
## sum（求和）
将数组中的所有项相加
### 基本用法
给定一个项目数组，并可选地将每个项目映射到一个数字的函数，将所有项目相加。
```js
import { sum } from 'radash';
const lists =[{count:10},{count:20},{count:30}]
sum(lists,p=>p.count);//=>60
sum([1, 2, 3, 4, 5]);//=>15
```

## toggle（切换）
在数组中切换项目的存在
### 基本用法
如果列表中已经存在与条件匹配的项目，则将其移除。如果不存在，则将其添加。

