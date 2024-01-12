<template>
    <div :style="styleObj"   class="grid-wrap">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div :style="childenStyle">5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
    </div>
</template>

<script setup lang="ts">
import { type StyleValue } from 'vue'
const props= defineProps<{ styleObj: StyleValue,childenStyle?:StyleValue }>();

// console.log(props)
</script>

<style scoped>
.grid-wrap{
    border: solid goldenrod;
    display: grid;
    margin: 20px;
    width: 306px;
}
.grid-wrap :nth-child(1){
    font-size: 30px;
    background: red;
    text-align: center;
}
.grid-wrap :nth-child(2){
    font-size: 30px;
    background: Orange;
    text-align: center;
}
.grid-wrap :nth-child(3){
    font-size: 30px;
    background: Yellow;
    text-align: center;
}
.grid-wrap :nth-child(4){
    font-size: 30px;
    background: Green;
    text-align: center;
}
.grid-wrap :nth-child(5){
    font-size: 30px;
    background: Blue;
    text-align: center;
}
.grid-wrap :nth-child(6){
    font-size: 30px;
    background: Indigo;
    text-align: center;
}
.grid-wrap :nth-child(7){
    font-size: 30px;
    background: Violet;
    text-align: center;
}
.grid-wrap :nth-child(8){
    font-size: 30px;
    background: Pink;
    text-align: center;
}
.grid-wrap :nth-child(9){
    font-size: 30px;
    background: Brown;
    text-align: center;
}

</style>