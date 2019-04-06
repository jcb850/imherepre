<template>
  <div>
    <flexbox orient="vertical">
      <flexbox-item v-for="bg in backgrounds">
        <div class="here-card" v-bind:style="'margin:1rem;margin-bottom:0;border-radius:5px;background:rgb('+bg+')'">
          <!-- 一行（用户头像 + 用户名 + 时间 + 位置）-->
          <flexbox>
            <!--头像↓-->
            <flexbox-item style="flex:0 1 3.4rem;">
              <div class="here-card-avatar">
                <img src="http://img.zcool.cn/community/0106835542ecad0000019ae9971a89.jpg@1280w_1l_2o_100sh.jpg">
              </div>
            </flexbox-item>
            <!--文字信息部分-->
            <flexbox-item>
              <div class="here-card-body">
                <div class="here-card-title" style="color: #222222; font-size: 12px;margin-top: 0.3rem;">这是一个用户</div>
                <div class="here-card-others" style="font-size: 12px;line-height: 10px;">1分钟前 15米</div>
              </div>
            </flexbox-item>
          </flexbox>
          <!--内容文本部分-->
          <flexbox>
            <!--左边占位部分-->
            <flexbox-item style="flex:0 1 4rem;">
              <div style="height: 5.3rem;width: 5.3rem;"></div>
            </flexbox-item>
            <flexbox-item>
              <div class="here-card-body">
                <div class="here-card-body-content">一食太难吃了了了了了了了了了真的很难吃啊啊啊啊啊啊啊啊啊</div>
                <div class="here-card-body-operation">
                  <a><i class="iconfont here-collect"></i></a>
                  <a><i class="iconfont here-comment"></i></a>
                  <a><i class="iconfont here-location"></i></a>
                  <a><i class="iconfont here-more"></i></a>


                </div>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    name: "here_card",
    components: {
      Flexbox,
      FlexboxItem

    },
    data() {
      return {
        backgrounds: [
          '172,213,215',
          '186,226,215',
          '220,237,201',
          '172,213,215',
          '186,226,215',
          '220,237,201'
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

  .here-card {
    min-height: 10rem;
    max-height: 15rem;
  }
  .iconfont{
    width: 20px !important;
    height: 20px !important;
  }

  .here-card-avatar img {
    height: 2rem;
    width: 2rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .here-card-others {
    font-size: .8rem;
    color: #888;
  }
  .here-card-body-content {
    padding-right: 3rem;
    line-height: 1.1;
  }
  .here-card-body-operation {
    text-align: right;
    margin-top: 1rem;
  }
  .here-card-body-operation a{
    margin-right: .5rem;
  }
  .here-card-body-operation i {
    font-size: 1.7rem;
    color: #FFF;
    margin-right: .2rem;
  }
  .here-card-body-operation a:last-child i{
    margin-right: .5rem;
  }

</style>
