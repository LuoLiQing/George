<template>
  <div>
    <div class="back">
      <mt-header>
        <mt-button @click="back" icon="back" slot="left">返回</mt-button>
      </mt-header>
    </div>
    <div class="container">
      <div class="login">
        <div class="phone">
          <input type="text" placeholder="请输入手机号码" /><br />
        </div>
        <div class="password">
          <input type="password" placeholder="请输入密码" /><br />
        </div>
        <div class="Verification">
          <input type="text" placeholder="图形验证码" /><img src="#" alt="" />
        </div>
        <div class="btn">
          <mt-button size="large" type="primary">登录</mt-button>
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
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>
<style scoped>
  .back {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  input {
    outline: none;
    border: 1px solid #efefef;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    padding-left: 10px;
  }
  .container {
    margin-top: 40px;
    padding: 10%;
  }
  .login {
    display: flex;
    flex-direction: column;
  }
  .login div {
    margin-top: 10px;
  }
  .phone input,
  .password input {
    width: 100%;
  }
  .Verification input {
    width: 60%;
  }
  .btn {
    width: 100%;
  }
</style>
