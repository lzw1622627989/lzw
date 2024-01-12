<template>
    <div>
    <img style="width: 300px;" :style="[styleObj]"  src="/avatar.jpg" alt="">
    </div>
</template>

<script setup lang="ts">
import { type StyleValue } from 'vue'
const props= defineProps<{styleObj?:StyleValue}>()
</script>

<style scoped>

</style>