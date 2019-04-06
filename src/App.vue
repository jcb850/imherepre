<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/icon-font/iconfont.css'
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
