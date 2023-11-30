<script setup>
import ChatController from "~/components/ChatController.vue";
import ChatContainer from "~/components/ChatContainer.vue";
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

function newMessage(message) {
  chat.messages.push(message)
}

function allMessages(messages) {
  chat.messages = messages
}

</script>

<template>
  <chat-container v-bind="chat" />
  <chat-controller @chat-close="closeChat"
                   @open-chat="openChat"
                   @click="toggleChat"
                   @new-message="newMessage"
                   @all-messages="allMessages"
                   :count="chat.messages.length"
  />
</template>

<style lang="scss">
#app-iframe {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
