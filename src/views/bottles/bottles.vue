<template>
  <div>
    <here_tabbar></here_tabbar>
<here_card></here_card>
  </div>
</template>

<script>
  import here_tabbar from './components/here-tabbar'
  import here_card from './components/here-card'
  import Flexbox from "vux/src/components/flexbox/flexbox";
  import FlexboxItem from "vux/src/components/flexbox/flexbox-item";

  export default {
    name: "bottles",
    components: {
      FlexboxItem,
      Flexbox,
      here_tabbar,
      here_card
    },
    data() {
      return {
        backgrounds: [
          '172,213,215',
          '186,226,215',
          '220,237,201'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
