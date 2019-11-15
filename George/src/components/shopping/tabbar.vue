<template>
  <div class="iconfont">
    <div class="container">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="首页">
          <home></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="分类">
          <classification></classification>
        </mt-tab-container-item>
        <mt-tab-container-item id="拼团">
          <groupBuy></groupBuy>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine></mine>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar class="tabbar-font" v-model="active" fixed>
        <mt-tab-item id="首页">
          <i slot="icon" class="icon-mendian"></i>
          首页
        </mt-tab-item>
        <mt-tab-item id="分类">
          <i slot="icon" class="icon-fenlei"></i>
          分类
        </mt-tab-item>
        <mt-tab-item id="拼团">
          <i slot="icon" class="icon-ziyuan"></i>
          拼团
        </mt-tab-item>
        <mt-tab-item id="我的">
          <i slot="icon" class="icon-wode"></i>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  import mine from "./mine";
  import home from "./home";
  import groupBuy from "./groupBuy";
  import classification from "./classification";

  export default {
    data() {
      return {
        active: "首页"
      };
    },
    methods: {},
    created() {},
    components: {
      mine,
      home,
      groupBuy,
      classification
    }
  };
</script>
<style scoped>
  i {
    font-style: normal;
  }
  .tabbar-font i::before {
    font-size: 20px;
  }
</style>
