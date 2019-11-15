<template>
  <div>
    <mt-header class="back">
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="container">
      <div class="setAddress iconfont">
        <div class="newAddressBox">
          <div class="newAddressView">
            <label>收货人</label
            ><input
              type="text"
              maxlength="20"
              placeholder="请填写收货人姓名"
              v-model="Recipient"
            />
          </div>
          <div class="newAddressView">
            <label>性别</label>
            <div class="adress-label-box">
              <div
                :class="ageClass==uage?'adressLabel active':'adressLabel'"
                v-for="(uage, agei) in uages"
                :key="agei"
                @click="getage(uage)"
              >
                {{ uage }}
              </div>
            </div>
          </div>
          <div class="newAddressView">
            <label>国家</label>
            <div class="country">
              <span>中国</span>
            </div>
          </div>
          <div class="newAddressView">
            <label>区号</label>
            <div class="AreaCode">
              <span>中国大陆 +86</span>
            </div>
          </div>
          <div class="newAddressView">
            <label>手机号码</label
            ><input
              type="text"
              maxlength="11"
              placeholder="请填写收货人手机号"
              v-model="phone"
            />
          </div>
          <div class="newAddressView">
            <label>所在地区</label>
            <div class="city" @click="toggle">
              <span>{{
                myAddressProvince + " " + myAddressCity + " " + myAddresscounty
              }}</span
              ><i class="icon-youjiantou"></i>
            </div>
          </div>
          <div class="newAddressView">
            <label>详细地址</label
            ><input
              type="text"
              placeholder="详细地址(列如门牌号等) "
              v-model="ress"
            />
          </div>
          <div class="newAddressView">
            <label>选择标签</label>
            <div class="adress-label-box">
              <div
                :class="activeClass==label?'adressLabel active':'adressLabel'"
                v-for="(label, index) in labels"
                :key="index"
                @click="getitem(label)"
              >
                {{ label }}
              </div>
            </div>
          </div>
          <div class="newAddressView">
            <label>取货方式</label>
            <div class="adress-pick-up">
              <div
                v-for="(pick, picki) in pickUps"
                :key="picki"
                :class="pickClass==pick?' iconColor':''"
                @click="getpick(pick)"
              >
                <i class="icon-zhengque"></i><span>{{ pick }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="newAddressBottom">
          <div class="sureAddress" @keyup.enter="submit" @click="save">
            保存并使用
          </div>
          <div
            :class="this.id=='add'?'cancelAddAddress hide':'cancelAddAddress'"
            @click="del"
          >
            删除收货地址
          </div>
        </div>
      </div>
      <div class="am-picker-popup-container" v-show="alert">
        <div class="am-picker-popup-mask" @click="toggle"></div>
        <div class="am-picker-popup-wrap">
          <div class="am-picker-popup">
            <div class="am-picker-popup-header">
              <div class="header-left" @click="toggle">取消</div>
              <div class="header-right" @click="determine">确定</div>
            </div>
            <div class="am-picker">
              <mt-picker
                :slots="myAddressSlots"
                @change="onMyAddressChange"
              ></mt-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myaddress from "./json/provinces";
  export default {
    props: ["id"],
    data() {
      return {
        Recipient: "", //收件人uname
        phone: "", //手机号码
        ress: "", //详细地址
        alert: false,
        uages: ["女士", "男士"],
        labels: ["家", "学校", "公司"],
        pickUps: ["快递", "同城", "自提"],
        ageClass: "男士", //性别uage
        pickClass: "快递", //取货方式
        activeClass: "家", //选择标签
        //myAddressProvince,myAddressCity,myAddresscounty
        items: [],
        myAddressSlots: [
          //城市三级联动
          {
            flex: 1,
            defaultIndex: 1,
            values: Object.keys(myaddress),
            className: "slot1",
            textAlign: "center"
          },
          {
            divider: true,
            content: "-",
            className: "slot2"
          },
          {
            flex: 1,
            values: [],
            className: "slot3",
            textAlign: "center"
          },
          {
            divider: true,
            content: "-",
            className: "slot4"
          },
          {
            flex: 1,
            values: [],
            className: "slot5",
            textAlign: "center"
          }
        ],
        myAddressProvince: "省",
        myAddressCity: "市",
        myAddresscounty: "区/县",
        arr: []
      };
    },
    mounted() {
      this.$nextTick(() => {
        //城市三级联动
        this.myAddressSlots[0].defaultIndex = 0;
      });
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      load() {
        if (this.id !== "add") {
          //判断如果id不是add那么获得数据,并在页面显示
          this.axios
            .get("http://localhost:4001/course/" + this.id)
            .then(res => {
              this.Recipient = res.data.uname; //收货人
              this.phone = res.data.phone; //手机
              this.ress = res.data.address; //详细地址
              this.ageClass = res.data.uage; //性别uage
              this.pickClass = res.data.is_default; //取货方式
              this.activeClass = res.data.label; //选择标签
              this.myAddressProvince = res.data.province; //省
              this.myAddressCity = res.data.city; //市
              this.myAddresscounty = res.data.country; //县
            })
            .catch(err => {
              console.error(err);
            });
        }
      },
      toggle() {
        this.alert = !this.alert; //三级联动,如果显示,那么隐藏
      },
      onMyAddressChange(picker, values) {
        //城市三级联动
        if (myaddress[values[0]]) {
          picker.setSlotValues(1, Object.keys(myaddress[values[0]]));
          picker.setSlotValues(2, myaddress[values[0]][values[1]]);
          this.arr[0] = values[0];
          this.arr[1] = values[1];
          this.arr[2] = values[2];
        }
      },
      determine() {
        this.myAddressProvince = this.arr[0]; //省
        this.myAddressCity = this.arr[1]; //市
        this.myAddresscounty = this.arr[2]; //区
        this.alert = false; //确定后地址显示在页面
      },
      getitem(index) {
        //选择标签(家,学校,公司)
        this.activeClass = index;
        console.log(index);
      },
      getage(agei) {
        //性别
        this.ageClass = agei;
        console.log(agei);
      },
      getpick(picki) {
        //取货方式
        this.pickClass = picki;
        console.log(picki);
      },
      save() {
        console.log("save");
        var uname = /^[\u4e00-\u9fa5]{2,12}$/;
        var phone = /^1[3-9]\d{9}$/;
        var ress = /^[\u4e00-\u9fa5]+$/;
        var u = this.Recipient; //收货人
        var p = this.phone; //手机
        var r = this.ress; //详细地址
        var age = this.ageClass; //性别uage
        var pick = this.pickClass; //取货方式
        var active = this.activeClass; //选择标签
        var sheng = this.myAddressProvince; //省
        var shi = this.myAddressCity; //市
        var xian = this.myAddresscounty; //县
        if (uname.test(u) == false) {
          this.$messagebox("收货人格式不正确");
          return;
        } else if (phone.test(p) == false) {
          this.$messagebox("手机号码格式不正确");
          return;
        } else if (ress.test(r) == false) {
          this.$messagebox("详细地址不能为空");
        } else if (this.myAddressProvince == "省") {
          this.$messagebox("请选择所在地区");
          return;
        } else if (this.id == "add") {
          this.axios({
            url:
              "http://localhost:4001/course" +
              `?city=${shi}&country=${xian}&is_default=${pick}&label=${active}&phone=${p}&province=${sheng}&uage=${age}&uname=${u}`,
            method: "POST",
            data: {
              country: xian,
              is_default: pick,
              label: active,
              phone: p,
              province: sheng,
              uage: age,
              uname: u,
              city: shi,
              address: r
            }
          }).then(res => {
            this.$messagebox("添加成功");
            this.$router.push("/address");
          });
        } else {
          this.axios({
            url:
              "http://localhost:4001/course/" +
              this.id +
              `?city=${shi}&country=${xian}&is_default=${pick}&label=${active}&phone=${p}&province=${sheng}&uage=${age}&uname=${u}`,
            method: "PUT",
            data: {
              country: xian,
              is_default: pick,
              label: active,
              phone: p,
              province: sheng,
              uage: age,
              uname: u,
              city: shi,
              address: r
            }
          }).then(res => {
            this.$messagebox("添加成功");
            this.$router.push("/address");
          });
        }
      },
      del() {
        this.$messagebox
          .confirm("是否删除该收获地址")
          .then(res => {
            console.log("提交了删除操作");
            this.axios
              .delete("course/" + this.id)
              .then(res => {
                this.$messagebox("删除成功");
                this.$router.push("/address");
              })
              .catch(err => {
                console.error(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>
<style scoped>
  i {
    font-style: normal;
  }
  input {
    outline: none;
    text-align: right;
    border: 0;
  }
  div,
  label,
  input,
  span {
    font-size: 14px;
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
  }
  .container {
    margin-top: 40px;
  }
  .setAddress {
    height: 100vh;
    background: #f3f3f3;
  }
  .newAddressBox {
    background: #fff;
  }
  .newAddressBox,
  .newAddressBottom {
    padding: 5px 15px;
  }
  .newAddressView {
    height: 42px;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    align-content: center;
    color: #666;
  }
  .newAddressView:nth-child(9) {
    border-bottom: none;
  }
  .newAddressView label {
    line-height: 42px;
    white-space: nowrap;
  }
  .adress-label-box {
    display: flex;
    align-items: center;
  }
  .city,
  .country,
  .AreaCode {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .country,
  .AreaCode {
    color: #000;
  }
  .adressLabel {
    width: 50px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 14px;
    text-align: center;
    line-height: 23px;
    margin-left: 10px;
  }
  .active {
    background: rgba(255, 113, 0, 0.2);
    color: #ff7100;
    border: 1px solid #ff7100;
  }
  .iconColor {
    color: #ff7100;
  }
  .icon-youjiantou::before {
    line-height: 0px;
  }
  .hide {
    display: none;
  }
  .adress-pick-up {
    display: flex;
    align-items: center;
  }
  .adress-pick-up i {
    padding: 0 5px 0 15px;
    vertical-align: middle;
  }
  .newAddressBottom {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px;
  }
  .sureAddress,
  .cancelAddAddress {
    width: 100%;
    height: 44px;
    background: rgb(255, 113, 0);
    text-align: center;
    color: #fff;
    line-height: 44px;
    border-radius: 3px;
  }
  .cancelAddAddress {
    background: #fff;
    margin: 15px 0 0;
    color: #000;
  }
  @keyframes transition {
    from {
      height: 0%;
    }
    to {
      height: 45%;
    }
  }
  .am-picker-popup-mask {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .am-picker-popup-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 45%;
    width: 100%;
    z-index: 2;
    background: #fff;
    animation: transition 0.2s;
  }
  .am-picker-popup-header {
    display: flex;
    justify-content: space-between;
    height: 20px;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    color: #108ee9;
  }
</style>
