<template>
  <div>
    <van-button :style="{'background': currentColor}" class="yr_confirmSignBtn" type="primary" @click="confirmClick">确认</van-button>
    <van-dialog v-model="sendCodeShow" :showConfirmButton="false" class="sendCodeDialog">
      <van-row>
        <van-row class="title">请填写短信验证码</van-row>
        <van-row class="titlesub">验证码已发至173****7565</van-row>
        <signCode ref="signCode" v-model="authCode"></signCode>
        <van-row v-show="waitTimerShow" class="waitTimertitle">{{wait_timer}}s后重新发送</van-row>
        <van-button :style="{'color': currentColor}" v-show="renewGetCode" class="yr_renewCodeBtn" type="primary" @click="confirmClick">重新获取</van-button>
      </van-row>
    </van-dialog>
  </div>
</template>

<script>
import signCode from './verificationCode';

export default {
  name: 'index',
  data () {
    return {
      waitTimerShow: false,
      authCode: '',
      currentColor: '',
      renewGetCode: false,
      sendCodeShow: false,
      wait_timer: 60,
    }
  },
  watch: {
    authCode(value) {
      if (value.length === 6) {
        this.sendCodeShow = false;
      }
    },

  },
  mounted () {
    this.currentColor = '#4169E1';
    this.$store.commit("changeStyleColor", this.currentColor);
  },
  methods: {
    // 确认
    confirmClick() {
      this.$refs.signCode.clear();
      this.$refs.signCode.focus();
      this.authCode = '';
      this.sendCodeShow = true;
      this.getMobileCode();
    },
    getMobileCode() {
      this.renewGetCode = false;
      this.waitTimerShow = true;
      this.wait_timer = 59;
      var that = this;
      var timer_interval = setInterval(function() {
        if (that.wait_timer > 0) {
          that.wait_timer -- ;
        } else {
          that.waitTimerShow = false;
          that.renewGetCode = true;
          clearInterval(timer_interval);
        }
      }, 1000);
    },
  },
  components: {
    signCode,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './common.css';

</style>
