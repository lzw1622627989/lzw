<template>
    <div v-if="type=='default'" class="wrap-box">
        <div class="title">{{ title }}</div>
        <slot></slot>
    </div>
    <div v-else-if="type=='sign'" class="wrap-box">
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
    <div v-else-if="type=='action'" class="wrap-box">
         <div class="title">热门游戏</div>
        <slot :game="games" ></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const games = reactive([{ id: 1, name: "原神" }, { id: 2, name: "王者" }, { id: 3, name: "崩铁" }]);
defineProps(['type','title'])

</script>

<style scoped>
.wrap-box{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    width: 200px;
}
.title{
    text-align: center;
}
</style>