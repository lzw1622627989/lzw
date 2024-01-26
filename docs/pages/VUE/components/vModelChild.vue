<template>
    <div>
        <input type="text" class="inputs" 
            :value="modelValue" 
           @input="emit('update:model-value', ($event.target as HTMLInputElement ).value)"
        />
        <div>v-model:show:{{ show }}</div>
        <button class="buttons" @click="emit('update:show',!show)" >点击修改show</button>
    </div>
</template>

<script setup lang="ts">
defineProps(['modelValue','show']);
// 声明事件
const emit = defineEmits(['update:model-value','update:show'])
</script>

<style scoped>

</style>