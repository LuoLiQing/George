<template>
  <div>
    <div class="mine iconfont">
      <div class="custom-page">
        <div>
          <div class="senior-mode-user">
            <div class="cover-thumb">
              <img src="../../../public/img/touxiang.png" alt="" />
              <span class="font14">16461892</span>
            </div>
            <label><i class="icon-youjiantou"></i></label>
          </div>
        </div>
        <div class="card-head">
          <div class="card-head-title">
            <i class="icon-huiyuanqia"></i>
            <span>会员卡</span>
          </div>
          <div class="card-head-btn">
            <span>展开</span>
            <i class="icon-xiajiantou"></i>
          </div>
        </div>
        <div class="user-data-show">
          <div>
            <span>0张</span>
            <span>优惠券</span>
          </div>
          <div>
            <span>0</span>
            <span>积分</span>
          </div>
          <div>
            <span>0元</span>
            <span>储值</span>
          </div>
        </div>
      </div>
      <div class="usercenter-block">
        <div class="block-name">
          <span>电商订单</span>
        </div>
        <div class="block-detail block-red">
          <div>
            <i class="icon-daifukuan"></i>
            <span>待付款</span>
          </div>
          <div>
            <i class="icon-daifahuo"></i>
            <span>待发货</span>
          </div>
          <div>
            <i class="icon-daishouhuo"></i>
            <span>待收货</span>
          </div>
          <div>
            <i class="icon-daipingjia"></i>
            <span>待评价</span>
          </div>
          <div>
            <i class="icon-kefu"></i>
            <span>售后</span>
          </div>
        </div>
      </div>
      <div class="usercenter-block">
        <div class="block-name">
          <span>我的工具</span>
        </div>
        <div class="block-detail block-cheng">
          <div @click="ress">
            <i class="icon-shouhuodizhi"></i>
            <span>收货地址</span>
          </div>
          <div>
            <i class="icon-qicheqianlian-1-copy"></i>
            <span>购物车</span>
          </div>
          <div>
            <i class="icon-xitongtongzhi"></i>
            <span>系统通知</span>
          </div>
          <div>
            <i class="icon-zuji"></i>
            <span>足迹</span>
          </div>
          <div>
            <i class="icon-shoucang"></i>
            <span>收藏</span>
          </div>
        </div>
      </div>
      <div class="usercenter-block">
        <div class="block-name">
          <span>会员中心</span>
        </div>
        <div class="block-detail block-yello">
          <div>
            <i class="icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
            <span>会员卡</span>
          </div>
          <div>
            <i class="icon-youhuiquan"></i>
            <span>优惠券</span>
          </div>
          <div>
            <i class="icon-jifen"></i>
            <span>积分</span>
          </div>
          <div>
            <i class="icon-chuzhijin"></i>
            <span>储值金</span>
          </div>
        </div>
      </div>
      <div class="usercenter-block">
        <div class="block-name">
          <span>营销中心</span>
        </div>
        <div class="block-detail block-red">
          <div>
            <i class="icon-ziyuan"></i>
            <span>我的拼团</span>
          </div>
          <div>
            <i class="icon-zhongjiangjilu"></i>
            <span>中奖纪录</span>
          </div>
          <div @click="Obtain">
            <i class="icon-wode"></i>
            <span>团长中心</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      ress() {
        this.$router.push("/address");
      },
      Obtain() {
        this.$toast("跳转页面不存在");
      }
    }
  };
</script>
<style scoped>
  i {
    font-style: normal;
    font-weight: normal;
  }
  span {
    font-size: 14px;
    color: #333;
  }
  .mine {
    padding-bottom: 60px;
  }
  .custom-page {
    padding: 0 10px;
  }
  .senior-mode-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
  }
  .cover-thumb {
    display: flex;
    align-items: center;
  }
  .cover-thumb img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .cover-thumb span {
    padding: 0 10px;
  }
  .icon-youjiantou::before {
    font-size: 8px;
  }
  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 43px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 10px;
    background: #e5d0aa;
  }
  .user-data-show {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    text-align: center;
  }
  .user-data-show div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .user-data-show div:nth-child(2) {
    border-left: 1px solid#e4e4e4;
    border-right: 1px solid#e4e4e4;
  }
  .user-data-show span:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
  }
  .user-data-show span:nth-child(2) {
    font-size: 12px;
    color: #999;
  }
  .block-name {
    height: 45px;
    line-height: 45px;
    text-align: start;
    text-indent: 1rem;
    border-top: 10px solid#f3f3f3;
  }
  .block-detail {
    display: flex;
    flex-wrap: wrap;
    border-top: 0.1px solid#ccc;
  }
  .block-detail div {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 48px;
    align-items: center;
    align-content: space-between;
    padding: 10px 0;
  }
  .block-name span {
    font-size: 12px;
  }
  .block-detail i::before {
    font-size: 25px;
  }
  .block-red {
    color: #fc6c5b;
  }
  .block-yello {
    color: #fdc247;
  }
  .block-cheng {
    color: #fd8825;
  }
  .block-detail span {
    margin: 5px 0;
  }
</style>
