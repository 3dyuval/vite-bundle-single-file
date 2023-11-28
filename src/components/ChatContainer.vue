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
  opacity: 0;
  transition: 200ms ease-in-out;
  z-index: 100000;
  overflow-x: hidden;
  margin: auto;
  overflow-y: auto;
  > iframe {
    height: 100%;
    width: 12.5rem;
    border: none;
  }
  &.open {
    opacity: 1;
  }
}
</style>
