<template>
  <div>
    <div class="container iconfont">
      <div class="home-search">
        <mt-search v-model="keywords"
                   placeholder="搜索"> </mt-search>
      </div>
      <div class="classification"
           v-for="(item, index) in search(keywords)"
           :key="index">
        <router-link :to="'/product/'+item.pid">
          <div class="classification-img">
            <img :src="item.img"
                 alt="" />
          </div>
          <div class="classification-title">
            <div>
              <span>{{ item.title }}</span>
              <span>{{ item.transport }}</span>
            </div>
            <div>
              <div>
                <span>￥{{ item.price.toFixed(2) }}</span>
                <span>{{ item.sales }}人付款</span>
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
      keywords: ""
    };
  },
  methods: {
    search(keywords) {
      return this.items.filter(item => {
        if (item.title.includes(keywords)) {
          return item;
        }
      });
    }
  },
  created() {
    this.axios
      .get("classification")
      .then(res => {
        console.log(res);
        this.items = res.data;
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
span {
  text-align: start;
}
.home-search {
  position: absolute;
  left: 0;
  right: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 60px;
}
.classification {
  width: 49.5%;
}
.classification:nth-child(even) {
  margin-left: 1%;
}
.classification img {
  width: 100%;
}
.classification-title > div > span:nth-child(1) {
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.classification-title > div > span:nth-child(2) {
  display: block;
  width: 34px;
  height: 16px;
  border-radius: 10px;
  text-align: center;
  line-height: 16px;
  color: #ff7100;
  background-color: rgba(255, 113, 0, 0.2);
  font-size: 12px;
}
.classification-title > div > div > span:nth-child(1) {
  color: #ff7100;
  font-size: 16px;
}
.classification-title > div > div > span:nth-child(2) {
  color: #999;
  font-size: 12px;
}
.classification-title div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  color: #ff7100;
}
.classification-title > div > div:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.classification-title span {
  margin: 2px;
}
</style>
