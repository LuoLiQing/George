<template>
  <div class="container iconfont">
    <div class="groupBuy" v-for="(item, index) in items" :key="index">
      <router-link to="/product/">
        <img :src="item.img" alt="" />
        <span class="groupBuy-title"
          ><i class="icon-duorenxian">{{ item.salesSum }}人团</i
          ><span>{{ item.title }}</span></span
        >
        <div class="groupBuy-Sp">
          <div class="groupBuy-price">
            <span class="title"
              >${{ item.price }} <span>${{ item.price1 }}</span></span
            >
            <span>已团{{ item.sales }}件</span>
          </div>
          <div class="groupBuy-sales"><span>去拼团</span></div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      };
    },
    created() {
      this.axios
        .get("groupBuy")
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
  a {
    text-decoration: none;
    color: #333;
  }
  i {
    font-style: normal;
  }
  .container {
    padding-bottom: 60px;
  }
  .groupBuy {
    text-align: start;
    font-size: 14px;
  }
  .groupBuy img {
    width: 100%;
  }
  .groupBuy-Sp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 15px 5px 5px;
  }
  .groupBuy-price {
    display: flex;
    flex-direction: column;
  }
  .groupBuy-price span:nth-child(1) {
    font-size: 18px;
    color: #ff3600;
  }
  .groupBuy-price span:nth-child(2) {
    color: #a1a1a1;
    font-size: 13px;
  }
  .groupBuy-price span > span {
    text-decoration: line-through;
    color: #a1a1a1 !important;
    font-size: 13px !important;
  }
  .groupBuy-sales {
    width: 75px;
    height: 28px;
    border-radius: 15px;
    text-align: center;
    line-height: 28px;
    color: #fff;
    background: linear-gradient(270deg, #ff3600, #ffae00);
  }
  .icon-duorenxian {
    border: 1px solid red;
    color: #ff3600;
    margin: 0 5px;
  }
  .icon-duorenxian::before {
    background: #ff3600;
    color: #fff;
  }
</style>
