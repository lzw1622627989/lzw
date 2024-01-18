# Vue2

## Vue 实例

- MVVM 模型
  > 1. 模型（Model）:可以是：从服务器获取的数据、本地存储的数据。
  > 2. 视图（View）:视图通常由 HTML 模板表示，用于将模型的数据渲染到视图上。
  > 3. 视图模型（ViewModel）:视图和模型之间的桥梁，它负责处理视图和模型之间的通信和交互。
- new Vue(options)

1. el 指定 Vue 实例挂载的元素，可以是一个 CSS 选择器字符串，或一个 DOM 元素。

```js
new Vue({
  el: "#app",
});
```

2. data 定义响应式数据

```js
new Vue({
  data() {
    return {
      num: 1,
    };
  },
});
```

3. props 接收父组件传递的属性

```js
//仅接收
new Vue({
  props: ["propsData"],
});

// 限制类型
new Vue({
  props: {
    propsData: {
      type: String, //限制string类型
    },
  },
});

//限制类型、限制必要性、指定默认值
new Vue({
  props: {
    type: String,
    required: true, //true必传 false可以不传
    default: () => "abc", //指定默认值
  },
});
```

4. methods 定义方法

```js
new Vue({
    el:"#app",
    data(){
        return{
            num:1
        }
    }
    methods:{
        add(){
            this.num=3;
        }
    }
})
```

5. computed 计算属性

```js
new Vue({
  el: "#app",
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    doubleNum() {
      return this.num * 2;
    },
  },
});
```

6. watch 监听属性

```js
new Vue({
  el: "#app",
  data() {
    return {
      num: 1,
      num1: 2,
    };
  },
  watch: {
    // num变化时执行
    num(newValue, oldValue) {
      if (newValue) {
        console.log(newValue);
      }
    },
    // deep:true 深度监听 immediate 立即执行一次
    num1: {
      handler(newValue, oldValue) {
        if (newValue) {
          console.log(newValue);
        }
      },
      deepe: true,
      immediate: true,
    },
  },
});
```

7. template 用于定义 Vue 实例的模板

## 模板语法

- 插值语法 \{ \{ } }

```vue
<template>
  <div>{{ num }}</div>
  <div>{{ 1 + 2 }}</div>
  <div>{{ str.toUpperCase() }}</div>
  <template />
  <script>
    export default {
      data() {
        return {
          num: 1,
          str: "abc",
        };
      },
    };
  </script>
</template>
```

- 指令语法

```vue
<template>
<!-- v-model -->
<input v-model="value"></input>

<!-- v-bind 简写 : -->
<div :class="class">123</div>

<!-- v-if、v-else、v-else-if  用于根据条件来添加或移除元素。 -->
<div v-if="num===1">1</div>
<div v-else-if="num===2">2</div>
<div v-else>3</div>

<!-- v-show 根据条件来控制元素的显示和隐藏。通过修改元素的display CSS属性来实现，元素始终存在于DOM中。 -->
<div v-show="show" >123</div>

<!-- v-for 用于循环渲染列表中的元素  key唯一标识符 -->
<div v-for="item in arrList" :key="item">{{item}}</div>

<!-- v-on 简写@  绑定事件 -->
<div @click="test" > </div>

<!-- v-text 用于将数据渲染到元素的文本内容中。v-text会将数据转换为字符串 -->
<div v-text="text"></div>

<!-- v-html 用于将数据渲染到元素的文本内容中。v-html会解析数据中的HTML标签。 -->
<div v-html="html"></div>
</template>

<script>
  export default {
    data(){
        return{
            value:'input',
            class:'box',
            num:1,
            show:true,
            arrList:[1,2,3,4],
            text:"text",
            html:'<div>html</div>'
        }
    },
    methods:{
        test(){
            console.log(123)
        }
    }
  }

</script>

```

## 样式绑定

## 列表渲染

## 事件绑定

## 生命周期

## 组件化

## solt 插槽

## mixin 混入
