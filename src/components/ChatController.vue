<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  count: Number,
});
const emit = defineEmits({
  ["open-chat"]: null,
  ['close-chat']: null,
  ['click']: null,
  ['new-message']: String,
  ['all-messages']: Array,
});

const iframeUrl = import.meta.env.VITE_CHAT_URL;

onBeforeMount(() => {
  window.addEventListener('message', (event) => {
    if (event.data?.type?.startsWith('chat-app:')) {
      const [type] = event.data.type.split(':').slice(1)
      emit(type, JSON.parse(event.data.payload))
    }
  });
})


</script>

<template>
  <button class="fab" @click="emit('click')">
    🗨️
    <i>{{ count }}</i>
  </button>
</template>

<style lang="scss">
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
    padding: 0.5rem;
    border-radius: 50%;
    top: 1rem;
    right: 0rem;
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
