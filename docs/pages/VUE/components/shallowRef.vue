<template>
   <div>sum:{{ sum }}</div>
   <div>person名字：{{  person.name}}</div>
   <div>person年龄：{{  person.age}}</div>
   <div>车名：{{ car.name }}</div>
   <div>车价格：{{ car.options.price }}</div>
   <div>车颜色：{{ car.options.color }}</div>
   <button @click="changeSum" class="buttons" >sum+1</button> <br>
   <button @click="changeName" class="buttons" >修改名字</button> <br>
   <button @click="changeAge" class="buttons" >修改年龄</button> <br>
   <button @click="changePerson" class="buttons" >修改person</button> <br>
   <button @click="changeCarName" class="buttons" >修改车名</button> <br>
   <button @click="changeCarPrice" class="buttons" >修改车价格</button> <br>
   <button @click="changeCarColor" class="buttons" >修改车颜色</button> <br>
</template>

<script setup lang="ts">
import { shallowRef, shallowReactive } from "vue"

const sum = shallowRef(0);
const person = shallowRef({ name: "小米", age: 15 });
const car = shallowReactive({
    name: "保时捷",
    options: {
        color: '白',
        price:45
    }
})


function changeSum() {
    sum.value += 1;//触发更改
}
function changeAge() {
    person.value.age += 1;//不会触发更改
    console.log(person.value)
}
function changeName() {
    person.value.name = "小明";//不会触发更改
    console.log(person.value)
}
function changePerson() {
    person.value = { name: "小红", age: 10 };//会触发更改
    console.log(person.value)
}

function changeCarColor() {
    car.options.color = "黑";//不会触发更改
    console.log(car)
}
function changeCarPrice() {
    car.options.price = 100;//不会触发更改
    console.log(car)
}

function changeCarName() {
    car.name = "宝马";//会触发更改
    console.log(car)
}
</script>

<style scoped>

</style>