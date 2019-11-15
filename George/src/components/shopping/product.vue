<template>
  <div class="iconfont">
    <mt-header class="back">
      <mt-button @click="back"
                 icon="back"
                 slot="left">返回</mt-button>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div>
      <div class="container">
        <div class="product">
          <div class="product-Details">
            <img src="../../../public/img/putaod.jpg"
                 alt="" />
            <p>
              顺丰空运 陕西户太八号葡萄新鲜水果 2.5kg 非云南无籽夏黑葡萄提子
            </p>
            <span>¥119.00</span>
          </div>
          <div class="product-text">
            <div>
              <span>活动: <span>[最新优惠券]</span></span>
              <span>立即领取<i class="icon-youjiantou"></i></span>
            </div>
            <div>
              <span>配送费: <span>包邮</span></span>
              <span></span>
            </div>
            <div>
              <span>取货方式</span>
              <span><i class="icon-zhengque"></i><span>快递</span></span>
            </div>
            <div>
              <span>选择商品规格</span>
              <span><i class="icon-youjiantou"></i></span>
            </div>
            <div>
              <p><i class="icon-ziyuan1"></i><span>微信支付交易</span></p>
              <p><span>购买2+</span><span>浏览1143+</span></p>
            </div>
          </div>
          <div class="product-recommend">
            <div>
              <span>继续拖动 查看商品详情</span>
            </div>
            <div class="product-detail">
              <div><span class="active">详情</span></div>
              <div><span>评论</span></div>
            </div>
          </div>
          <div class="product-img">
            <img src="../../../public/img/productputao.jpg"
                 alt="" />
          </div>
          <div class="product-Evaluation">
            <span>全部</span>
            <span>好评(0)</span>
            <span>中评(0)</span>
            <span>差评(0)</span>
            <span>有图(0)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footerB">
      <div class="footer">
        <div class="footer-icon">
          <div>
            <i class="icon-qicheqianlian-1-copy"></i><span>购物车</span>
          </div>
          <div><i class="icon-shoucang"></i><span>收藏</span></div>
          <div><i class="icon-kefu"></i><span>客服</span></div>
        </div>
        <div>
          <div class="addcart"><span>加入购物车</span></div>
          <div class="addcart-btn"><span>立即购买</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pid"],
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    load(){
      
    }
  },
  created() {
    this.load()
  },
};
</script>
<style scoped>
.container {
  margin-top: 40px;
}
i {
  font-style: normal;
}
.back {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.product-Details > img {
  width: 100%;
}
.product-Details > p {
  color: #333;
}
.product-Details span {
  display: inline-block;
  margin-bottom: 10px;
  color: #e77100;
  font-weight: bold;
}
.product-Details {
  text-align: center;
}
.icon-zhengque,
.product-text div:first-child > span > span {
  color: #e77100;
}
.icon-zhengque {
  margin-right: 5px;
}
.product-text {
  padding: 0 10px;
}
.product-text p {
  display: inline-block;
}
.product-text div {
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  border-top: 1px solid #efefef;
  font-size: 14px;
}
.product-text div:last-child {
  border-top: 0;
}
.product-text div:last-child i {
  color: #5fc725;
  margin-right: 5px;
}
.product-text div:last-child > p:last-child > span:first-child {
  color: #e77100;
  margin-right: 8px;
}
.product-recommend {
  text-align: center;
}
.product-recommend > div:first-child > span {
  padding: 0.3rem;
  text-align: center;
  color: rgb(178, 178, 178);
  font-size: 0.24rem;
}
.product-recommend div:last-child {
  display: flex;
  justify-content: center;
}
.product-detail {
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
}
.product-detail div {
  flex: 1;
}
.product-detail span {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.product-img img {
  padding-top: 15px;
  width: 100%;
}
.active {
  border-bottom: 1px solid #e77100;
  color: #e77100;
}
.product-Evaluation {
  display: flex;
  justify-content: space-between;
}
.product-Evaluation span {
  display: inline-block;
  width: 62px;
  height: 25px;
  line-height: 25px;
  background: #fee3d3;
  border-radius: 2px;
  margin-right: 8px 8px 8px 0;
  text-align: center;
  font-size: 12px;
  color: #333;
}
.product-Evaluation span:last-child {
  margin-right: 0;
}
.footerB {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #efefef;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 40px;
}
footer > div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.footer > div:nth-child(2) {
  display: flex;
  flex: 1;
  color: #fff;
}
.footer > div:nth-child(2) div {
  flex: 1;
}
.addcart {
  background-color: #ffac0c;
  height: 40px;
  line-height: 40px;
}
.addcart-btn {
  background-color: #ff7100;
  height: 40px;
  line-height: 40px;
}
.footer-icon {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.footer-icon i {
  font-size: 20px;
  color: #666;
}
.footer-icon div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
}
</style>
