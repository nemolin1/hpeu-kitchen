<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 相关路由的关联(自己子啊index.js里面写的路由跳转) -->
    <router-view/>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
}
.icon-size-24px{
  font-size: 24px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
