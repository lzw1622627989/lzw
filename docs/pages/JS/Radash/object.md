# Object 对象

## assign（分配）
递归合并两个对象
### 基本用法
```js
import { assign } from 'radash';
const ra = {
  name: "Ra",
  power: 100,
};
assign(ra, { name: "Loki" });//=>{name:"Loki",power:100}
```

## clone（克隆）
创建给定对象/值的浅拷贝。
### 基本用法
创建给定对象/值的浅拷贝。
```js
import { clone } from "radash";
const ra = {
  name: "Ra",
  power: 100,
};
const gods =[ra]
clone(gods)//=>[{name:"Ra",power:100}]
clone(ra)//=>{name:"Ra",power:100}

```

## construct（构建）
从键路径和值构建对象
### 基本用法
相反的是压扁，给定一个被压扁成关键路径和值的对象，会返回重建原始对象。
```js
import { construct } from "radash";

const ra ={
    name:"Ra",
    power:100,
    "skills.0.name":"Fire",
    "skills.1.level":10
}

construct(ra)//=>{name:"Ra",power:100,skills:[{name:"Fire"},{level:10}]}

```

## crush（压碎）
将深层对象压平为单一维度
### 基本用法
将深层对象压平为单个维度。深层键将在新对象中转换为点符号表示法。
```js
import { crush } from "radash";
const ra ={
    name:"Ra",
    power:100,
    skills:[{name:"Fire"},{level:10}]
}
crush(ra)//=>{name:"Ra",power:100,"skills.0.name":"Fire","skills.1.level":10}
```

## get（获取）
使用深路径获取任何属性或子属性
### 基本用法
给定任何值和一个选择函数来获取所需的属性，如果找不到所需的值，则返回所需的值或默认值。
