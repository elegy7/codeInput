<template>
  <div class="verificationCodeBox">
    <label for="code">
      <ul class="verificationCodeContainer">
        <li ref="codeLi" class="field-wrap" v-for="(item, index) in number" :key="index" :class="{'input-active': value.length === index}" :style="{'border-color': (value.length === index) ? currentColor : '#BDC3CE'}">
          <i class="after" :style="{'background': (value.length === index) ? currentColor : '#BDC3CE'}"></i>
          <i class="char-field">{{value[index]}}</i>
        </li>
      </ul>
    </label>
    <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
      id="code" name="code"  type="tel" :maxlength="number" autofocus="autofocus" autocorrect="off" autocomplete="off" autocapitalize="off" @blur="handleBlur">
  </div>
</template>
 
<script>
import store from '@/utils/store';

  export default {
    name: 'verificationCode',
    props: {
      number: {
        type: Number,
        default: 6
      },
      placeholder: {
        type: String,
        default: '-'
      },
    },
    // variables
    data() {
      return {
        value: '',
      }
    },
    computed: {
      currentColor() {
        return this.$store.state.currentStyleColor;
      },
    },
    methods: {
      hideKeyboard() {
        document.activeElement.blur();
        this.$refs.input.blur();
      },
      handleSubmit() {
        this.$emit('input', this.value)
      },
      handleInput(e) {
        this.$refs.input.value = this.value;
        if (this.value.length >= this.number) {
          this.hideKeyboard();
        }
        this.handleSubmit();
      },
      clear() {
        this.value = '';
      },
      focus() {
        this.$refs.input.focus();
      },
      handleBlur() {
        this.$emit('input', this.value)
      },
    },
  }
  
</script>
 
<style scoped>

@import './common.css';

</style>
