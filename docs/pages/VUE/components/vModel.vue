<template>
    <span>子组件</span>
    <Child v-model="inpValue"  v-model:show="showValue"></Child>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from './vModelChild.vue';
const inpValue = ref('123456');
const showValue = ref(true);

</script>

<style scoped>

</style>