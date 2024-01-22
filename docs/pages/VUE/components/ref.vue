<template>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>person年龄：{{ person.age }}</div>
    <div>person姓名：{{ person.name }}</div>
    <button class="buttons" @click="changeAge">修改年龄为20</button><br>
    <button  class="buttons" @click="changePerson">修改person姓名为小明</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref('小米')
const age = ref(18)
const person = ref({ name: 'abc', age: 20 });
function changeAge() {
    age.value = 20;//age发生变化 视图更新，age是响应式数据
    console.log(age.value);//20
}

function changePerson() {
    person.value.name = '小明';//person 发生变化，视图更新
} 
</script>
