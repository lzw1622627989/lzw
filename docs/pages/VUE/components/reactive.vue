<template>
     <div v-for="(game,index) in games" :key="game.id" >{{index+1}}.{{ game.name }}</div>
        <button class="buttons" @click="changeFirstGame" >修改第一款游戏为：穿越火线</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const games = reactive([
    { id: 1, name: "王者荣耀" },
    { id: 2, name: "原神" },
    { id: 3, name: "星穹铁道" }
])

function changeFirstGame() {
    games[0].name = "穿越火线";//视图更新
}
</script>