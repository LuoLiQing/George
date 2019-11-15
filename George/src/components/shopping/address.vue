<template>
  <div>
    <mt-header class="back">
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="container">
      <div class="myAddress iconfont">
        <div class="get-wechat-address" @click="Obtain">
          <div><i class="icon-ziyuan1"></i><span>获取微信收货地址</span></div>
          <i class="icon-youjiantou"></i>
        </div>
        <div class="my-address" v-for="(item, index) in items" :key="index">
          <div class="myAddress-address">
            <div class="myAddress-address-top">
              <label class="adressLabel" :class="addclass(item.label)">{{
                item.label
              }}</label
              ><span class="address-person"
                >{{ item.uname }} ({{ item.uage }}) {{ item.phone }}</span
              >
            </div>
            <span class="address-detail"
              >{{ item.province }}{{ item.city }}{{ item.country
              }}{{ item.address }}</span
            >
          </div>
          <router-link :to="'/setaddress/'+item.id"
            ><i class="icon-edit"></i
          ></router-link>
        </div>
      </div>
      <div class="myAddress-bottom-nav" @click="add">
        新增收货地址
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [],
        type: 0
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      addclass(i) {
        var arr = ["school", "home", "company"];
        if (i == "家") {
          return "home";
        } else if (i == "公司") {
          return "company";
        }
        if (i == "学校") {
          return "school";
        }
      },
      Obtain() {
        this.$toast("除微信里面，其他地方暂时不支持导入");
      },
      add() {
        this.$router.push("/setaddress/add");
      }
    },
    created() {
      this.axios
        .get("course")
        .then(res => {
          this.items = res.data;
          // console.log(res);
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
  body {
    margin: 0;
  }
  .back {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    margin-bottom: 55px;
  }
  .container {
    margin-top: 40px;
  }
  .myAddress {
    padding: 0 15px;
    font-size: 13px;
    color: #666;
  }
  .get-wechat-address {
    height: 34.5px;
    margin-bottom: 7.5px;
    display: flex;
    justify-content: space-between;
    line-height: 34.5px;
  }
  .icon-ziyuan1::before {
    color: #5fc726;
    margin-right: 5px;
  }
  .myAddress-address {
    padding: 13px 0;
    display: flex;
    flex-direction: column;
  }
  .my-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f3f3f3;
  }

  .adressLabel {
    display: inline-block;
    width: 2rem;
    border: 1px solid #ccc;
    border-radius: 14px;
    text-align: center;
    line-height: 14px;
    font-size: 12px;
    margin-right: 5px;
  }
  .address-person {
    color: #000;
  }
  .address-detail {
    font-size: 13px;
    margin: 5px 0 0;
  }
  .icon-edit {
    width: 10%;
    height: 38px;
    border-left: 1px solid #f3f3f3;
    text-align: center;
    line-height: 38px;
  }
  .icon-edit::before {
    color: #666;
  }
  .myAddress-bottom-nav {
    height: 47px;
    width: 100%;
    background: rgb(255, 113, 0);
    color: #fff;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 47px;
    margin: 0;
    padding: 0;
  }
  .school {
    background: #f1fbea;
    color: #79dc31;
    border: 1px solid #79dc31;
  }
  .home {
    background: #ffefe2;
    color: #ff7100;
    border: 1px solid #ff7100;
  }
  .company {
    background: #eaf4fe;
    color: #3091f2;
    border: 1px solid #3091f2;
  }
</style>
