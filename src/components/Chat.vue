<script setup>
console.log("hello");
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
