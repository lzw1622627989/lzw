<template>
   <div v-if="type==='default'" style="display: flex;justify-content: space-evenly;">
   <SlotChild :type="type" title="热门游戏"  class="wrap">
      <ul>
         <li v-for="item in games" :key="item.id">{{ item.name }}</li>
      </ul>
   </SlotChild>
   <SlotChild :type="type" title="热门影剧" class="wrap">
      <ul>
         <li v-for="item in videos" :key="item.id">{{ item.name }}</li>
      </ul>
   </SlotChild>
   <SlotChild :type="type" title="今日图片" class="wrap">
     <img class="image" src="/avatar.jpg" alt="">
   </SlotChild>
   </div>
   <div v-else-if="type==='sign'"  style="display: flex;justify-content: space-evenly;">
       <SlotChild :type="type"   class="wrap">
         <template #content>
            <ul>
               <li v-for="item in games" :key="item.id">{{ item.name }}</li>
            </ul>
            </template>
            <template #title>
               <div class="title">热门游戏</div>
            </template>
         </SlotChild>
       <SlotChild :type="type"   class="wrap">
         <template #content>
            <ul>
               <li v-for="item in videos" :key="item.id">{{ item.name }}</li>
            </ul>
            </template>
            <template #title>
               <div class="title">热门影剧</div>
            </template>
         </SlotChild>
       <SlotChild :type="type"   class="wrap">
         <template #content>
               <img class="image" src="/avatar.jpg" alt="">
            </template>
            <template #title>
               <div class="title">今日图片</div>
            </template>
         </SlotChild>
   </div>
   <div v-else-if="type==='action'"  style="display: flex;justify-content: space-evenly;">
        <SlotChild :type="type"   class="wrap">
         <template v-slot="param">
         <ul>
            <li v-for="item in param.game" :key="item.id">{{ item.name }}</li>
         </ul>
      </template>
      </SlotChild>
        <SlotChild :type="type"   class="wrap">
         <template #default="param">
         <ol>
            <li v-for="item in param.game" :key="item.id">{{ item.name }}</li>
         </ol>
      </template>
      </SlotChild>
        <SlotChild :type="type"   class="wrap">
         <template #default="{game}">
            <h4 v-for="item in game" :key="item.id">{{ item.name }}</h4>
      </template>
      </SlotChild>
   </div>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue'
import SlotChild from './slotChild.vue'

const games = reactive([{ id: 1, name: "原神" }, { id: 2, name: "王者" }, { id: 3, name: "崩铁" }]);
const videos = reactive([{ id: 10, name: "大话西游" }, { id: 11, name: "百变星君" }, {id:12,name:"大圣娶亲"}])



defineProps(['type'])
</script>

<style scoped>
.wrap{
   margin: 20px 0;
}
.image{
   border-radius: 50%;
   margin: 10px;
   width: 180px;
}
.title{
   text-align: center;
}
</style>