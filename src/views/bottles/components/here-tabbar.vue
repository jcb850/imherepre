<template>
  <div>
    <tabbar style="position: fixed;">
      <tabbar-item>
        <span slot="label">巴拉巴拉</span>
      </tabbar-item>
      <tabbar-item style="margin: auto 0;" class="here-tabbar-middle">
          <img src="../../../assets/new.png" slot="icon" style="height:4rem;width: 4rem;">


      </tabbar-item>
      <tabbar-item>
        <span slot="label">巴拉巴拉</span>

      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Icon} from 'vux'


  export default {
    name: "here_tabbar",
    components: {
      Tabbar,
      TabbarItem,
      Icon
    },
    mounted() {
      let div_new = document.getElementsByClassName('here-tabbar-middle')[0].children[0]
      div_new.setAttribute('style', 'width:4rem;height:4rem;')
    }
  }
</script>


<style scoped>
.weui-tabbar:before {
  border-top: 0;
  background: rgba(0, 0, 0, 0);
}

.here-tabbar-middle {

}
</style>
