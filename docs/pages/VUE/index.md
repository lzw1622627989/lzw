# [Vue2](https://v2.cn.vuejs.org/)

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

- class 样式绑定

```vue
<template>
  <!-- 字符串写法:类名不确定 -->
  <div :class="className"></div>
  <!-- <div class="box"></div> -->

  <!-- 对象写法:个数确定、类名确定，但不确定用不用。-->
  <div :class="{ active: isActive }"></div>
  <!-- <div class="active"></div> -->

  <!-- 数组写法：个数、类名都不确定 -->
  <div :class="[activeClass, errClass]"></div>
  <!-- <div class="active err"></div> -->
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      className: "box",
      isActive: true,
      activeClass: "active",
      errClass: "err",
    };
  },
};
</script>
```

- style 样式绑定

```vue
<template>
  <!-- 对象写法:样式的属性名确定，但值不确定 -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  //
  <div style="color:red,font-size:16px"></div>

  <!-- 数组写法：样式的属性名确定，但值不确定 -->
  <div :style="[activeStyle, errStyle]"></div>
  //
  <div style="color:red,font-size:18px"></div>
</template>
<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: "16",
      activeStyle: {
        fontSize: "18px",
      },
      errStyle: {
        color: "red",
      },
    };
  },
};
</script>
```

## 列表渲染

- v-for
  > key 属性帮助 Vue 跟踪每个节点的身份，当数据发生变化时，Vue 可以更准确地确定哪些节点是新创建的、被修改的或被删除的。Vue 通过比较新旧节点的 key 来最小化 DOM 操作，提高性能。

```vue
<template>
  <!-- 遍历数组 -->
  <div v-for="(item, index) in arr" :key="item">{{ item }}</div>

  <!-- 遍历对象 -->
  <div v-for="(value, key, index) in car" :key="index">
    {{ value }} - {{ key }} - {{ index }}
  </div>

  <!-- 遍历字符串 -->
  <div v-for="(char, index) in str" :key="index">{{ char }} - {{ index }}</div>

  <!-- 遍历指定次数 -->
  <div v-for="(number, index) in 10" :key="index">
    {{ number }} - {{ index }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
      car: { name: "a", price: 15 },
      str: "string",
    };
  },
};
</script>
```

## 事件绑定

```vue
<template>
  <!-- 不传递参数 -->
  <div @click="test"></div>
  <!-- 传一个参数 -->
  <div @click="test1(6)"></div>
  <!-- 传多个参数 -->
  <div @click="test2(6, 7, 8)"></div>
  <!-- 传参+事件对象 -->
  <div @click="test3($event, 6)"></div>

  <!-- 事件修饰符 -->
  <!-- .stop 阻止事件冒泡。使用.stop修饰符可以阻止事件向上冒泡，即停止事件传播到父元素。 -->
  <div @click.stop="test"></div>

  <!-- 阻止默认事件。使用.prevent修饰符可以阻止元素的默认行为，例如阻止表单提交或链接跳转等。 -->
  <div @click.prevent="test"></div>

  <!-- 只触发一次事件处理函数。使用.once修饰符可以确保事件处理函数只执行一次，之后会自动解绑。 -->
  <div @click.once="test"></div>
</template>
<script>
export default {
  methods: {
    // 接收一个event对象
    test(e) {},
    // 接收参数num:6
    test1(num) {},
    // 接收参数num1:6,num2:7,num3:8
    test2(num1, num2, num3) {},
    // 接收e：evnent对象, num:6
    test3(e, num) {},
  },
};
</script>
```

## 生命周期

::: info

1.  beforeCreate (在初始化之前执行的函数)
2.  Created (在初始化之后执行的函数)
3.  beforeMount (在组件内容被渲染到页面之前自动执行的函数)
4.  mounted (在组件内容被渲染到页面之后自动执行的函数,可以访问 dom 元素)
5.  beforeUpdate (在数据将要变化之前自动执行的函数)
6.  updated (在数据发生变化之后自动执行的函数)
7.  beforeUnmount (在 VUE 实例销毁之前自动执行的函数)
8.  unmounted (在 VUE 实例销毁之后自动执行的函数)
:::

## solt 插槽

- 默认插槽 (app 父组件 hello 子组件)
::: code-group

```vue [app.vue]
<template>
  <hello>123</hello>
</template>
<script>
import Hello from "hello.vue";
</script>
```

```vue [hello.vue]
<template>
<div>
<solt></solt>
</div>
</template>
```

:::

- 具名插槽 (app 父组件 hello 子组件)
::: code-group

```vue [app.vue]
<template>
  <hello>
    <template slot="header"></template>
    <template slot="main"></template>
    <template slot="footer"></template>
  </hello>
</template>
<script>
import Hello from "hello.vue";
</script>
```

```vue [hello.vue]
<template>
<div>
  <solt name="header"></solt>
  <solt name="main"></solt>
  <solt name="footer"></solt>
</div>
</template>
```

:::

- 作用域插槽
::: code-group

```vue [app.vue]
<template>
  <hello>
    <template  scope="data" >
      <span>{{data}}</span>
    </template>
  </hello>
</template>
<script>
import Hello from "hello.vue";
</script>
```

```vue [hello.vue]
<template>
<div>
<solt :data="helloData" ></solt>
</div>
</template>
<script>
export default {
  data(){
    return {
      helloData:[1,2,3]
    }
  }
}
</script>
```
:::
