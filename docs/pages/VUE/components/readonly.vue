<template>
    <div>sum:{{ sum }}</div>
    <div>sum1:{{ sum1 }}</div>
    <div>car1：{{ car1}}</div>
    <div>car2：{{ car2}}</div>
    <button @click="changeSum" class="buttons">sum+1</button> 
    <button @click="changeSum1" class="buttons">sum1+1</button> <br>
    <button @click="changeCarName" class="buttons">修改车名（car2）</button>
    <button @click="changeCarColor" class="buttons">修改车颜色（car2）</button>
    <button @click="changeCarPrice" class="buttons">修改车价格（car2）</button>
</template>

<script setup lang="ts">
import { ref,reactive, readonly,shallowReadonly } from 'vue'

const sum = ref(0);
const sum1 = readonly(sum)
const car1 = reactive({
    name: "保时捷",
    options: {
        color: "白",
        price:100
    }
})
const car2 =shallowReadonly(car1)


function changeSum() {
    sum.value += 1;
}
function changeSum1() {
    sum1.value += 1;//无法修改：Set operation on key "value" failed: target is readonly
}

function changeCarName() {
    car2.name = "宝马";//无法修改 ：Set operation on key "name" failed: target is readonly
}

function changeCarColor() {
    car2.options.color = "黑";//可以修改
}

function changeCarPrice() {
    car2.options.price = 80;//可以修改
}
</script>

<style scoped>

</style>