<!-- src/App.vue -->
<template>
  <div id="app" class="p-2 w-max-screen h-screen ">
    <router-view class="w-full"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('This is a reactive message!');

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
}

nav {
  background-color: #333;
  padding: 10px;
}

nav a,
nav button {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
}

nav a:hover,
nav button:hover {
  background-color: #575757;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  background-color: #575757;
  border-radius: 4px;
}

nav a:not(:last-child) {
  margin-right: 10px;
}

nav button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
