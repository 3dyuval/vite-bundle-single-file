<script setup>
import Chat from "~/components/Chat.vue";
defineProps({ open: Boolean, messages: Array });
defineOptions({ inheritAttrs: false });

const isProd = import.meta.env.PROD;
const iframeUrl = import.meta.env.VITE_CHAT_URL;
const concurrently = import.meta.env.VITE_CONCURRENTLY;
</script>
<template>
  <div class="chat-container" :class="{ open: open }">
    <iframe v-if="isProd" :src="iframeUrl"> </iframe>
    <iframe v-else-if="concurrently" src="http://localhost:3030"></iframe>
    <chat v-else />
  </div>
</template>

<style lang="scss">
#app-iframe, #app-chat {
  all: unset;
  font-family: sans-serif !important;
}
.chat-container {
  height: 30rem;
  max-height: 50vh;
  min-height: 20rem;
  width: 15rem;
  z-index: 10000;
  background: white;
  box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.2);
  outline: 1px solid black;
  border-radius: 1rem;
  color: black;
  transform: translateY(25%);
  opacity: 0;
  transition: 200ms ease-in;
  z-index: 100000;
  overflow: hidden;
  margin: auto;
  pointer-events: none;

  > iframe {
    height: 100%;
    width: 100%;
    border: none;
    overflow-y: auto;
  }

  
  &.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0%);
    transition: transform 100ms ease-out;
  }


}
</style>
