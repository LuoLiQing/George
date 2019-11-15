<template>
  <div>
    <div class="container iconfont">
      <div class="home-search">
        <mt-search v-model="keywords"></mt-search>
      </div>
      <div class="home-swipe">
        <mt-swipe style="height: 31vh;"
                  :auto="3000">
          <mt-swipe-item>
            <img src="../../../public/img/lunbo.png"
                 alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../public/img/lunbo1.png"
                 alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../public/img/lunbo2.png"
                 alt="" />
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="home-conponent">
        <div><img src="../../../public/img/home1.png"
               alt="" /></div>
        <div>
          <span>新鲜果送</span>
          <span>工作也要VC满满的</span>
          <span>开始点单</span>
        </div>
      </div>
      <div class="home-vessel">
        <div>
          <img src="../../../public/img/rexiao.png"
               alt="" /><span>热销</span>
        </div>
        <div>
          <img src="../../../public/img/youhuijuan.png"
               alt="" /><span>优惠券</span>
        </div>
        <div>
          <img src="../../../public/img/chongzhika.png"
               alt="" /><span>充值卡</span>
        </div>
        <div>
          <img src="../../../public/img/fukuan.png"
               alt="" /><span>付款</span>
        </div>
      </div>
      <div class="am-notice-bar">
        <i class="icon-xitongtongzhi"></i><span>新鲜水果到！有礼进店享</span>
      </div>
      <div class="free-vessel">
        <div class="free-vessel-img">
          <img src="../../../public/img/miaosha.png"
               alt="" />
        </div>
        <div class="request-none">
          <i class="icon-daipingjia"></i>
          <span>暂无秒杀商品~</span>
        </div>
      </div>
      <div class="new-goods-list"
           v-for="(item, index) in items"
           :key="index">
        <router-link :to="'/product/'+item.pid">
          <div class="free-vessel-img">
            <img :src="item.titleImg"
                 alt="" />
          </div>
          <div class="new-goods-item">
            <div class="new-goodsSp">
              <img :src="item.img"
                   alt="" />
              <div class="new-goodsSp-title">
                <span>{{ item.title }}</span>
                <span>{{ item.transport }}</span>
              </div>
              <div class="new-goodsSp-list">
                <div>
                  <span>￥{{ item.price.toFixed(2) }}</span>
                  <span>{{ item.sales }}人付款</span>
                </div>
                <div><i class="icon-ziyuan2"></i></div>
              </div>
            </div>
            <div class="new-goodsSp">
              <img :src="item.imgi"
                   alt="" />
              <div class="new-goodsSp-title">
                <span>{{ item.title }}</span>
                <span>{{ item.transport }}</span>
              </div>
              <div class="new-goodsSp-list">
                <div>
                  <span>￥{{ item.price.toFixed(2) }}</span>
                  <span>{{ item.sales }}人付款</span>
                </div>
                <div><i class="icon-ziyuan2"></i></div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="home-xswipe">
        <mt-swipe style="height: 10vh;"
                  :auto="3000">
          <mt-swipe-item>
            <img src="../../../public/img/xlunbo.png"
                 alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../public/img/xlunbo1.png"
                 alt="" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="free-vesselList">
        <span>Daily Recommand</span>
        <span>每日推荐</span>
      </div>
      <div v-for="lis in search(keywords)"
           :key="lis.id">
        <router-link class="goods-content"
                     :to="'/product/'+lis.pid">
          <img :src="lis.img"
               alt="" />
          <div class="new-goodsSpD">
            <div class="new-goodsSp-title">
              <div>{{ lis.title }}</div>
              <span>{{ lis.transport }}</span>
            </div>
            <div class="new-goodsSp-list">
              <div>
                <span>￥{{ lis.price.toFixed(2) }}</span>
                <span>{{ lis.sales }}人付款</span>
              </div>
              <div><i class="icon-ziyuan2"></i></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      list: [],
      value: "",
      keywords: ""
    };
  },
  methods: {
    search(keywords) {
      return this.list.filter(lis => {
        if (lis.title.includes(keywords)) {
          return lis;
        }
      });
    }
  },
  created() {
    this.axios
      .get("home")
      .then(res => {
        console.log(res);
        this.items = res.data;
      })
      .catch(err => {
        console.error(err);
      });
    this.axios
      .get("homeList")
      .then(res => {
        console.log(res);
        this.list = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
<style scoped>
i {
  font-style: normal;
}
a {
  text-decoration: none;
}
.container {
  padding-bottom: 60px;
}

.home-swipe {
  position: relative;
  left: 0;
  right: 0;
}
.home-search {
  position: absolute;
  top: 3vh;
  left: 0;
  right: 0;
  padding: 0 3vh;
}
.home-swipe img {
  width: 100%;
  height: 100%;
}
.home-conponent {
  display: flex;
  justify-content: space-between;
}
.home-conponent div {
  flex: 1;
}
.home-conponent div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
}
.home-conponent img {
  width: 100%;
}
.home-conponent div > span:nth-child(1) {
  font-size: 16px;
}
.home-conponent div > span:nth-child(2) {
  font-size: 12px;
  color: #666;
}
.home-conponent div > span:nth-child(3) {
  width: 104px;
  height: 29px;
  border-radius: 15px;
  text-align: center;
  line-height: 29px;
  color: #fff;
  font-size: 14px;
  background: linear-gradient(270deg, #fd802a, #fecc2f);
  font-weight: bold;
}
.home-conponent div > span {
  margin-bottom: 3px;
}
.home-vessel {
  display: flex;
  justify-content: space-between;
}
.home-vessel img {
  width: 40%;
}
.home-vessel div {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.am-notice-bar {
  font-size: 14px;
  border-bottom: 10px solid #efefef;
}
.am-notice-bar i::before {
  display: inline-block;
  color: #f77100;
  margin: 5px 10px;
}
.free-vessel-img {
  padding: 5px 5px 0px 5px;
}
.free-vessel-img img {
  width: 100%;
}
.request-none {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #efefef;
  padding-bottom: 10px;
}
.request-none i {
  font-size: 80px;
}
.new-goods-item {
  display: flex;
  justify-content: space-between;
}

.new-goodsSp {
  width: 49%;
}
.new-goodsSp img {
  width: 100%;
}
.new-goodsSp-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new-goodsSp-list i {
  padding-right: 15px;
  color: #f77100;
}
.new-goodsSp-title {
  display: flex;
  flex-direction: column;
}
.new-goodsSp-title > span:nth-child(1) {
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.new-goodsSp-title > span:nth-child(2) {
  display: block;
  width: 34px;
  height: 16px;
  border-radius: 10px;
  text-align: center;
  line-height: 16px;
  color: #ff7100;
  background-color: rgba(255, 113, 0, 0.2);
  font-size: 12px;
  margin-left: 5px;
}
.new-goodsSp-list > div > span:nth-child(1) {
  color: #f77100;
}
.new-goodsSp-list > div > span:nth-child(2) {
  color: #999;
  font-size: 12px;
  margin-left: 5px;
}
.new-goodsSp-list > div {
  display: flex;
  flex-direction: column;
}
.home-xswipe img {
  width: 100%;
  height: 100%;
}
.home-xswipe {
  margin-top: 10px;
}
.free-vesselList {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}
.free-vesselList span:nth-child(1) {
  color: #f77100;
  font-size: 12px;
}
.goods-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #efefef;
}
.goods-content img {
  width: 35%;
  margin-right: 5px;
}
.new-goodsSp-title > div {
  color: #333;
  font-size: 14px;
  margin: 5px;
}
.new-goodsSpD {
  width: 60%;
}
.new-goodsSpD i {
  flex: 2;
}
</style>
