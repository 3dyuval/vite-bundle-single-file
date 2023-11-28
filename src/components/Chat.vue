<script setup>
const props = defineProps({ open: Boolean, messages: Array });
defineOptions({inheritAttrs: false});

</script>
<template>
  <div class="chat" :class="{ open: open }">
  <ul>
  <li v-for="(msg, key) of messages" :key="key">
        {{ msg }}
  </li>
  </ul>
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
  box-shadow: 4px 4px 4px rgb(0,0,0,0.2);
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
