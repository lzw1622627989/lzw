<template>
    <div>当水温达到80°或水位达到10</div>
    <div>水温：{{ temp }}°</div>
    <div>水位：{{ height }}</div>
    <div>警报是否响起：{{ istrue }}</div>
    <button class="buttons" @click="changeTemp">温度+10</button> <br>
    <button class="buttons" @click="changeHeight">水位+1</button>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue"

const temp = ref(0);
const height = ref(0);
const istrue = ref(false);

// watch实现
watch([temp, height], (value) => {
    const [newTemp, newHeight] = value;
    if (newTemp >= 80 || newHeight >= 10) {
        istrue.value = true;
    } else {
        istrue.value = false;
    }
})

//watchEffect实现
watchEffect(() => {
    if (temp.value >= 80 || height.value >= 10) {
        istrue.value = true;
    } else {
        istrue.value = false;
    }
})
function changeTemp() {
    temp.value += 10;
    if (temp.value >= 110) {
        temp.value = 0;
    }
}
function changeHeight() {
    height.value += 1;
    if (height.value >= 12) {
        height.value = 0;
    }
}
</script>

<style scoped></style>