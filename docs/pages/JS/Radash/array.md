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
