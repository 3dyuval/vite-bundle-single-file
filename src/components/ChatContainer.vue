<script setup>
import Chat from "~/components/Chat.vue"
defineProps({ open: Boolean, messages: Array });
defineOptions({ inheritAttrs: false });

const isProd = import.meta.env.PROD
const iframeUrl = import.meta.env.VITE_CHAT_URL
const concurrently = import.meta.env.VITE_CONCURRENTLY

</script>
<template>
  <div class="chat" :class="{ open: open }">
  <iframe v-if="isProd" :src="iframeUrl">
  </iframe>
  <iframe v-else-if="concurrently"
   src="http://localhost:3030"></iframe>
  <chat v-else /> 
  </div>
</template>

<style lang="scss">
.chat {
  height: 30rem;
  max-height: 50vh;
  min-height: 20rem;
  width: 10rem;
  z-index: 10000;
  background: white;
  box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.2);
  outline: 1px solid black;
  border-radius: 1rem;
  color: black;
  opacity: 0;
  //   transform: translate(0, 120%);
  transition: 200ms ease-in-out;
  z-index: 100000;
  overflow: auto;

  &.open {
    opacity: 1;
    // transform: translate(0, 0%);
  }
}
</style>
