<template>
    <div id="flex-wrap">
        <div>容器属性</div>
        <div>
       flex-direction: <select v-model="boxStyle.flexDirection">
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column ">column</option>
            <option value="column-reverse">column-reverse</option>
        </select>
        </div>
        <div>
       flex-wrap: <select v-model="boxStyle.flexWrap">
            <option value="nowrap">nowrap</option>
            <option value="wrap">wrap</option>
            <option value="wrap-reverse ">wrap-reverse</option>
        </select>
        </div>
        <div>
       justify-content: <select v-model="boxStyle.justifyContent">
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
        </select>
        </div>
        <div>
       align-items: <select v-model="boxStyle.alignItems">
            <option value="stretch">stretch</option>
            <option value="flex-end">flex-end</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
        </select>
        </div>
        <div>
       align-content: <select v-model="boxStyle.alignContent">
            <option value="stretch">stretch</option>
            <option value="flex-end">flex-end</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
        </select>
        </div>
        <!-- <div>项目属性</div>
        <div>
            ① order: <select>
                <option v-for="item in 5" :key="item" :value="item-1">{{ item-1 }}</option>
            </select>
            flex-grow:<select>
                    <option v-for="item in 5" :key="item" :value="item - 1">{{ item - 1 }}</option>
                </select>
            flex-shrink:<select>
                    <option v-for="item in 5" :key="item" :value="item - 1">{{ item - 1 }}</option>
                </select>
            flex-basis:<select>
                    <option v-for="item in 5" :key="item" :value="item - 1">{{ item - 1 }}</option>
                </select>

        </div> -->

        <div :style="[boxStyle as StyleValue]"  class="box">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch,reactive,type StyleValue } from 'vue'
const value = ref('row-reverse');
const boxStyle = reactive({
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent:'stretch'
})

</script>

<style scoped>
#flex-wrap{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 0;
}
select{
    appearance:auto;
}
.box{
    width: 400px;
    display: flex;
    margin-top: 50px;
    border: solid goldenrod;
    padding-top: 10px;
    padding-right: 10px;
}
.box >div{
    width: 100px;
    height: 100px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: solid red;
    text-align: center;
    line-height: 100px;
}
</style>