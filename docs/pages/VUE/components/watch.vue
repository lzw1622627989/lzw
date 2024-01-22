<template>
    <div>
        <div>用法一</div>
        <div>sum:{{ sum }}</div>
        <button class="buttons" @click="changeSum">点击sum+1</button>
        <hr>
        <div>用法二</div>
        <div>person姓名：{{ person.name }}</div>
        <div>person年龄：{{ person.age }}</div>
        <button class="buttons" @click="changeName">修改person名字</button> <br>
        <button class="buttons" @click="changeAge">修改person年龄</button> <br>
        <button class="buttons" @click="changePerson">修改person</button>
        <hr>
        <div>用法三</div>
        <div>车名：{{ car.name }}</div>
        <div>价格：{{ car.price }}w</div>
        <button class="buttons" @click="changeCarName">修改car名字为保时捷</button> <br>
        <button class="buttons" @click="changeCarPrice">修改car价格为100</button> <br>
        <button class="buttons" @click="changeCar">修改car</button>
        <hr>
        <div>用法四</div>
        <div>游戏名字：{{ game.name }}</div>
        <div>count: {{ count }}</div>
        <button class="buttons" @click="changeGame">修改游戏为王者荣耀</button> <br>
        <button class="buttons" @click="changeCount">修改count</button>
        <hr>
        <div>用法五</div>
        <div>猫咪爱好：{{ animal.hobby }}</div>
        <div>小狗年龄：{{ dogAge }}</div>
        <button class="buttons" @click="changeAnimalHobby">修改猫咪爱好</button> <br>
        <button class="buttons" @click="changeDogAge">修改小狗年龄</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue"
const sum = ref(0);
const person = ref({
    name: "小米",
    age: 20
})
const car = reactive({
    name: "奔驰",
    price: 40
})
const game = reactive({ name: "原神", id: 1 })
const count = ref(0)
const animal = reactive({
    name: "猫",
    hobby: "睡觉"
})
const dogAge = ref(2)


const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('sum发生变化', newValue, oldValue)
    if (newValue >= 10) {
        stopWatch();//卸载监听器
    }
})
// 开启深度监听
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}, { deep: true })

watch(car, (newVlue, oldValue) => {
    console.log("car发生变化", newVlue, oldValue);
})
watch(() => count.value, (newValue, oldValue) => {
    console.log("count发生变化", newValue, oldValue);
})
watch(() => game.name, (newValue, oldValue) => {
    console.log("游戏名字发生变化", newValue, oldValue);
}, { deep: true })
watch([() => animal.hobby, () => dogAge.value], (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, { deep: true })

function changeName() {
    person.value.name += '~';
}

function changeAge() {
    person.value.age += 1;
}

function changePerson() {
    person.value = { name: "小明", age: 40 }
}
function changeSum() {
    sum.value += 1;
}
function changeCarName() {
    car.name = "保时捷"
}

function changeCarPrice() {
    car.price = 100
}

function changeCar() {
    Object.assign(car, { name: "宝马", price: 35 });//直接修改整个reactive定义的数据需要使用Object.assign
}

function changeGame() {
    game.name = "王者荣耀"
}
function changeCount() {
    count.value += 1;
}
function changeAnimalHobby() {
    animal.hobby = "吃饭"
}

function changeDogAge() {
    dogAge.value += 1;
}
</script>

<style scoped></style>