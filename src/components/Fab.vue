<script setup>

const props = defineProps({
    count: Number
})
const emit = defineEmits({
    ['open-chat']: null
})

</script>

<template>
    <button class="fab" @click="emit('open-chat')">
    🗨️
    <i>{{count}}</i>
    </button>
</template>

<style  lang="scss">
    button.fab {
      all: initial;
        font-size: 5rem;
        transition: 100ms ease;
        position: relative;
        
        i {
            position: absolute;
            font-size: 1.5rem;
            background-color: red;
            color: white;
            font-family: sans-serif;
            padding: .5rem;
            border-radius: 50%;
        }

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            i {
                transform: initial;
            }
        }
    }
</style>