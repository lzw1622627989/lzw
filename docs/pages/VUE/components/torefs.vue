<template>
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>性别：{{ person.gender }}</div>
    <button class="buttons" @click="changeName">修改名字为小明</button> <br>
    <button class="buttons" @click="changeAge">修改年龄为25</button> <br>
    <button class="buttons" @click="changeGender">修改性别为女</button>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, toRef } from 'vue'
const person = reactive({ name: "小米", age: 20, gender: "男" })
// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
let { name, age } = toRefs(person);

// 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
let gender = toRef(person, 'gender')

function changeName() {
    name.value = "小明";
}
function changeAge() {
    age.value = 25;
}
function changeGender() {
    gender.value = '女'
}
</script>

