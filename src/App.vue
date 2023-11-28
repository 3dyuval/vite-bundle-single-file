<script setup>
import Chat from "./components/Chat.vue";
import Fab from "./components/Fab.vue";
import { reactive, onMounted, onBeforeUnmount } from "vue";

const chat = reactive({
  open: false,
  messages: []
});

function openChat() {
  chat.open = true;
}

function closeChat() {
  chat.open = false;
}

function toggleChat() {
  chat.open = !chat.open;
}

let msgInterval

onMounted(() => {
  msgInterval = setInterval(() => {
      chat.messages.push('message...')
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(msgInterval);
})
</script>

<template>
  <chat v-bind="chat" />
  <fab @open-chat="toggleChat" :count="chat.messages.length" />
</template>

<style lang="scss">
#app-inject {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 9999;
}
</style>
