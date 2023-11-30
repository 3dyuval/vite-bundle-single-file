<script setup>
import { onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";

const iframeUrl = import.meta.env.VITE_CHAT_URL;
const origin = new URL(iframeUrl).href

function post (event, payload) {
  parent.postMessage({type: `chat-app:${event}`, payload: JSON.stringify(payload)}, '*')
}

let msgInterval
const messages = reactive([])

onMounted(() => {
  msgInterval = setInterval(() => {
    post('all-messages',  ['hello', 'world'])
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(msgInterval);
})


</script>
<template>
  <h2>Chat iframe</h2>
  <p>This is chat app within an iframe, it is a separate app from the main app.</p>
  <hr />
  <p>The '💬' and this window are inject with a single javascript script tag.</p>
  <hr />
  <p>
    With this repository, you can create develop 2 apps simultaneously, and deploy them
    together. These two apps then can communicate with each other via postMessage. Any
    client who wants to implenent this chat app, can simply inject the script tag, and the
    chat app will be available.
  </p>
</template>
