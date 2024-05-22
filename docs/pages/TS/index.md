## 类型声明

```ts
let a: string; //变量a只能存储字符串
let b: number; //变量b只能存储数值
let c: boolean; //变量c只能存储布尔值
a = "hello";
a = 100; //警告：不能将类型“number”分配给类型“string”
b = 666;
b = "你好"; //警告：不能将类型“string”分配给类型“number”
c = true;
c = 666; //警告：不能将类型“number”分配给类型“boolean”
// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x: number, y: number): number {
  return x + y;
}
demo(100, 200);
demo(100, "200"); //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100, 200, 300); //警告：应有 2 个参数，但获得 3 个
demo(100); //警告：应有 2 个参数，但获得 1 个
```

## 类型推断

```ts
let d = -99; //TypeScript会推断出变量d的类型是数字
d = false; //警告：不能将类型“boolean”分配给类型“number”
```

## 类型总览

:::info js 数据类型
string 、 number 、 boolean 、 null 、 undefined 、 bigint 、 symbol 、 object  
备注：其中 object 包含： Array 、 Function 、 Date ......
:::

:::info ts 数据类型
string 、 number 、 boolean 、 null 、 undefined 、 bigint 、 symbol 、 object  
四个新类型： void 、 never 、 unknown 、 any 、 enum 、 tuple  
⾃定义类型： type 、 interface

:::

## 常用类型

- 字面量

```ts
let a: "你好"; //a的值只能为字符串“你好”
let b: 100; //b的值只能为数字100
a = "欢迎"; //警告：不能将类型“"欢迎"”分配给类型“"你好"”
b = 200; //警告：不能将类型“200”分配给类型“100”
let gender: "男" | "⼥"; //定义⼀个gender变量，值只能为字符串“男”或“⼥”
gender = "男";
gender = "未知"; //不能将类型“"未知"”分配给类型“"男" | "⼥"”
```

- any

```ts
//明确的表示a的类型是any —— 显式的any
let a: any;
//以下对a的赋值，均⽆警告
a = 100;
a = "你好";
a = false;
//没有明确的表示b的类型是any，但TS主动推断了出来 —— 隐式的any
let b;
//以下对b的赋值，均⽆警告
b = 100;
b = "你好";
b = false;

//注意点： any 类型的变量，可以赋值给任意类型的变量
let c;
let x: string;
x = c; // ⽆警告
```

- unknown

```ts
//unknown 的含义是：未知类型
//备注1： unknown 可以理解为⼀个类型安全的any
//备注2： unknown 适⽤于：开始不知道数据的具体类型，后期才能确定数据的类型

// 设置a的类型为unknown
let a: unknown;
//以下对a的赋值，均正常
a = 100;
a = false;
a = "你好";
// 设置x的数据类型为string
let x: string;
x = a; //警告：不能将类型“unknown”分配给类型“string”

// 设置a的类型为unknown
let a: unknown;
a = "hello";
//第⼀种⽅式：加类型判断
if (typeof a === "string") {
  x = a;
}
//第⼆种⽅式：加断⾔
x = a as string;
//第三种⽅式：加断⾔
x = <string>a;

//any 后点任何的东⻄都不会报错，⽽ unknown 正好与之相反
let str1: string = "hello";
str1.toUpperCase(); //⽆警告
let str2: any = "hello";
str2.toUpperCase(); //⽆警告
let str3: unknown = "hello";
str3
  .toUpperCase()(
    //警告：“str3”的类型为“未知”
    // 使⽤断⾔强制指定str3的类型为string
    str3 as string
  )
  .toUpperCase(); //⽆警告
```

- never

```ts
//never 的含义是：任何值都不是，简⾔之就是不能有值， undefined 、 null 、 '' 、 0 都不行！
//1. ⼏乎不⽤never 去直接限制变量，因为没有意义
/* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
let a: never;
// 以下对a的所有赋值都会有警告
a = 1;
a = true;
a = undefined;
a = null;

//2.never ⼀般是 TypeScript 主动推断出来的
// 指定a的类型为string
let a: string;
// 给a设置⼀个值
a = "hello";
if (typeof a === "string") {
  a.toUpperCase();
} else {
  console.log(a); // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
}

//3.never 也可⽤于限制函数的返回值
// 限制demo函数不需要有任何返回值，任何值都不⾏，像undeifned、null都不⾏
function demo(): never {
  throw new Error("程序异常退出");
}
```

- void

```ts
//void 常⽤于限制函数返回值

// ⽆警告
function demo1(): void {}
// ⽆警告
function demo2(): void {
  return;
}
// ⽆警告
function demo3(): void {
  return undefined;
}
// 有警告：不能将类型“number”分配给类型“void”
function demo4(): void {
  return 666;
}
```

- object

```ts
// 1. object 的含义：任何【⾮原始值类型】，包括：对象、函数、数组等，限制的范围⽐较宽泛，⽤的少。
let a: object; //a的值可以是任何【⾮原始值类型】，包括：对象、函数、数组等
// 以下代码，是将【⾮原始类型】赋给a，所以均⽆警告
a = {};
a = { name: "张三" };
a = [1, 3, 5, 7, 9];
a = function () {};
// 以下代码，是将【原始类型】赋给a，有警告
a = null; // 警告：不能将类型“null”分配给类型“object”
a = undefined; // 警告：不能将类型“undefined”分配给类型“object”
a = 1; // 警告：不能将类型“number”分配给类型“object”
a = true; // 警告：不能将类型“boolean”分配给类型“object”
a = "你好"; // 警告：不能将类型“string”分配给类型“object”

//2.Object 的含义： Object 的实例对象，限制的范围太⼤了，⼏乎不⽤。
let a: Object; //a的值必须是Object的实例对象，
// 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
a = {};
a = { name: "张三" };
a = [1, 3, 5, 7, 9];
a = function () {};
a = 1; // 1不是Object的实例对象，但其包装对象是Object的实例
a = true; // truue不是Object的实例对象，但其包装对象是Object的实例
a = "你好"; // “你好”不是Object的实例对象，但其包装对象是Object的实例
// 以下代码均有警告
a = null; // 警告：不能将类型“null”分配给类型“Object”
a = undefined; // 警告：不能将类型“undefined”分配给类型“Object”

//3. 实际开发中，限制⼀般对象，通常使⽤以下形式
// 限制person对象的具体内容，使⽤【,】分隔，问号代表可选属性
let person: { name: string; age?: number };
// 限制car对象的具体内容，使⽤【;】分隔，必须有price和color属性，其他属性不去限制，有没有都⾏
let car: { price: number; color: string; [k: string]: any };
// 限制student对象的具体内容，使⽤【回⻋】分隔
let student: {
  id: string;
  grade: number;
};
// 以下代码均⽆警告
person = { name: "张三", age: 18 };
person = { name: "李四" };
car = { price: 100, color: "红⾊" };
student = { id: "tetqw76te01", grade: 3 };

//4. 限制函数的参数、返回值，使⽤以下形式
let demo: (a: number, b: number) => number;
demo = function (x, y) {
  return x + y;
};

//5. 限制数组，使⽤以下形式
let arr1: string[]; // 该⾏代码等价于： let arr1: Array<string>
let arr2: number[]; // 该⾏代码等价于： let arr2: Array<number>
arr1 = ["a", "b", "c"];
arr2 = [1, 3, 5, 7, 9];
```

- tuple

```ts
//tuple 就是⼀个⻓度固定的数组
let t: [string, number];
t = ["hello", 123];
// 警告，不能将类型“[string, number, boolean]”分配给类型“[string, number]”
t = ["hello", 123, false];
```

- enum

```ts
//enum枚举
// 定义⼀个枚举
enum Color {
  Red,
  Blue,
  Black,
  Gold,
}
// 定义⼀个枚举，并指定其初识数值
enum Color2 {
  Red = 6,
  Blue,
  Black,
  Gold,
}
console.log(Color);
/*
{
0: 'Red',
1: 'Blue',
2: 'Black',
3: 'Gold',
Red: 0,
Blue: 1,
Black: 2,
Gold: 3
}
*/
console.log(Color2);
/*
{
6: 'Red',
7: 'Blue',
8: 'Black',
9: 'Gold',
Red: 6,
Blue: 7,
Black: 8,
Gold: 9
}
*/
// 定义⼀个phone变量，并设置对⻬进⾏限制
let phone: { name: string; price: number; color: Color };
phone = { name: "华为Mate60", price: 6500, color: Color.Red };

phone = { name: "iPhone15Pro", price: 7999, color: Color.Blue };
if (phone.color === Color.Red) {
  console.log("⼿机是红⾊的");
}
```

## 自定义类型

```ts
//⾃定义类型，可以更灵活的限制类型

// 性别的枚举
enum Gender {
  Male,
  Female,
}
// ⾃定义⼀个年级类型（⾼⼀、⾼⼆、⾼三）
type Grade = 1 | 2 | 3;
// ⾃定义⼀个学⽣类型
type Student = {
  name: string;
  age: number;
  gender: Gender;
  grade: Grade;
};
// 定义两个学⽣变量：s1、s2
let s1: Student;
let s2: Student;
s1 = { name: "张三", age: 18, gender: Gender.Male, grade: 1 };
s2 = { name: "李四", age: 18, gender: Gender.Female, grade: 2 };
```

## 抽象类

- 常规类

```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person("张三", 18);
const p2 = new Person("李四", 19);
console.log(p1);
console.log(p2);
```

- 继承
```ts
// Person类
class Person {}
// Teacher类继承Person
class Teacher extends Person {}
// Student类继承Person
class Student extends Person {}
// Person实例
const p1 = new Person("周杰伦", 38);
// Student实例
const s1 = new Student("张同学", 18);
const s2 = new Student("李同学", 20);
// Teacher实例
const t1 = new Teacher("刘⽼师", 40);
const t2 = new Teacher("孙⽼师", 50);
```
