<template>
    <div><span> sum:ref(0);</span> <span>  sum1:reactive([]);</span>  <span> sum2:3 </span> </div>
    <div>isRef(sum):{{ isRefsum }}</div>
    <div>isRef(sum1):{{ isRefsum1 }}</div>
    <div>isRef(sum2):{{ isRefsum2}}</div>
    <hr>
    <div>unref(sum):{{ unrefSum }}</div>
    <div>unref(sum1):{{ unrefSum1 }}</div>
    <div>unref(sum2):{{ unrefSum2}}</div> 
    <hr>
    <div>toValue(sum):{{ toValueSum }}</div>
    <div>toValue(()=>1):{{ toValueSum1 }}</div>
    <div>toValue(sum2):{{ toValueSum2 }}</div>
    <hr>
    <div><span>person: reactive({ name: 'a' })</span> <span>person1:readonly(person)</span></div>
    <div>isProxy(person):{{ isProxyPerson }}</div>
    <div>isProxy(person1):{{ isProxyPerson1 }}</div>
    <div>isProxy(sum):{{ isProxySum }}</div>
    <div>isProxy(sum2):{{ isProxySum2 }}</div>
    <hr>
    <div>isReactive(person):{{ isReactivePerson }}</div>
    <div>isReactive(person1):{{ isReactivePerson1 }}</div>
    <div>isReactive(sum):{{ isReactiveSum }}</div>
    <hr>
    <div>isReadonly(person):{{  isReadonlyPerson}}</div>
    <div>isReadonly(person1):{{  isReadonlyPerson1}}</div>

</template>

<script setup lang="ts">
import { ref,unref,toValue, readonly,reactive, isRef,isProxy,isReadonly,isReactive, computed } from 'vue' 

const sum = ref(0)
const sum1 = reactive([])
const sum2 = 3;

const person = reactive({ name: 'a' })
const person1 = readonly(person);

const isRefsum = computed(() => {
    return isRef(sum)
})
const isRefsum1 = computed(() => {
    return isRef(sum1)
})
const isRefsum2 = computed(() => {
    return isRef(sum2)
})

const unrefSum = computed(() => {
    return unref(sum)
})
const unrefSum1 = computed(() => {
    return unref(sum1)
})
const unrefSum2 = computed(() => {
    return unref(sum2)
})
const toValueSum = computed(() => {
    return toValue(sum)
})
const toValueSum1 = computed(() => {
    return toValue(()=>1)
})
const toValueSum2 = computed(() => {
    return toValue(sum2)
})
const isProxyPerson = computed(() => {
    return isProxy(person)
})
const isProxyPerson1 = computed(() => {
    return isProxy(person1)
})
const isProxySum = computed(() => {
    return isProxy(sum)
})
const isProxySum2 = computed(() => {
    return isProxy(sum2)
})
const isReadonlyPerson = computed(() => {
    return isReadonly(person)
})
const isReadonlyPerson1 = computed(() => {
    return isReadonly(person1)
})
const isReactivePerson = computed(() => {
    return isReactive(person)
})
const isReactivePerson1 = computed(() => {
    return isReactive(person1)
})
const isReactiveSum = computed(() => {
    return isReactive(sum)
})

</script>

<style scoped>
span{
    margin-right: 15px;
}
</style>