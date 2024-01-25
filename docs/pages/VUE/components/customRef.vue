<template>
    <div>{{ msg }}</div>
    <input class="inputs" type="text" v-model="msg">
</template>

<script setup lang="ts">
import { customRef } from 'vue'

let { msg} =useSumRef('hello',2000)


function useSumRef(initValue:string,delay:number) {
    let msg = customRef((track, trigger) => {
        let timer:number
        return {
            get() {
                track()
                return initValue
            },
            set(value) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    initValue = value;
                    trigger();
                },delay)
            },
        }
    })
    return {msg}
}

</script>

<style scoped>

</style>