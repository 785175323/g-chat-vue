<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: "微软雅黑";
    color: #666;
    border: none;
  }
</style>
