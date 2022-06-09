<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
  import CommonHeader from "./modules/common/CommonHeader.vue";
  import CommonFooter from "./modules/common/CommonFooter.vue";
export default {
  components:{CommonHeader, CommonFooter}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
