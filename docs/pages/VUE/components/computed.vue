<template>
    姓： <input class="inputs" type="text" v-model="firstName"> <br>
    名： <input class="inputs" type="text" v-model="lastName"> <br>
    <div> 全名：{{ fullName }}</div>
    <button class="buttons" @click="changeFullName">修改全名为‘li-si’</button>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

const firstName = ref('zhang');
const lastName = ref('san');


// 计算属性——只读取，不修改
// const fullName = computed(() => {
//     return firstName.value + '-' + lastName.value; //zhang-san
// })

// 计算属性——既读取又修改
const fullName = computed({
    get() {
        return firstName.value +'-'+ lastName.value;
    },
    set(val) {
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
    }
})
function changeFullName() {
    fullName.value = 'li-si';//firstName：li  lastName：si
}
</script>

<style scoped>

</style>