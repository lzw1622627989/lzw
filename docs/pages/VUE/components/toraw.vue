<template>
    <div>car:{{  car}}</div>
    <div>rawCar:{{ rawCar }}</div>
    <div>person:{{ person }}</div>
    <div>marPerson:{{ marPerson }}</div>
    <button @click="changeRawPesonName" class="buttons" >修改rawCar名字</button>
    <button @click="changerawCarPrice" class="buttons" >修改rawCar价格</button>
    <button @click="changerawCar" class="buttons">修改rawCar</button> <br>
    <button @click="changemarPersonName" class="buttons">修改marPerson名字</button>
    <button @click="changemarPersonAge" class="buttons">修改marPerson年龄</button>
    <button @click="changemarPerson" class="buttons">修改marPerson</button>
</template>

<script setup lang="ts">
import {reactive, toRaw,markRaw } from 'vue'


const car = reactive({ name: "保时捷", price: 100 });
let rawCar = toRaw(car)
console.log(car);
console.log(rawCar)

const person = markRaw({ name: '小米', age: 20 });
const marPerson =reactive(person)
console.log(person)
console.log(marPerson)



function changeRawPesonName() {
    rawCar.name = "宝马";//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}

function changerawCarPrice() {
    rawCar.price = 80;//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}
function changerawCar() {
    rawCar = { name: "奔驰", price: 90 };//页面不更新 rawCar不是响应式数据
    console.log(rawCar)
}

function changemarPersonName() {
    marPerson.name = "小红";//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
function changemarPersonAge() {
    marPerson.age = 30;//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
function changemarPerson() {
    Object.assign(marPerson, { name: "小刚", age: 8 });//页面不更新 marPerson不是响应式数据
    console.log(marPerson)
}
</script>

