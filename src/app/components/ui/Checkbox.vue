<template>
  <label class="app-checkbox-comp">
    <input type="checkbox" v-bind="{ checked: value }" @change="onchange" />
    <div class="box" :class="{ checked: value }"></div>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  components: {},
  props: ['value'],

  data() {
    return {};
  },
  created() {},

  methods: {
    onchange(e) {
      if (this.value) {
        this.$emit('input', false);
      } else {
        this.$emit('input', true);
      }
    },

    toggle(e) {
      if (this.value) {
        this.$emit('input', false);
      } else {
        this.$emit('input', true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.app-checkbox-comp {
  width: 18px;
  height: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #efefef;
  flex-shrink: 0;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .box {
    width: 14px;
    height: 14px;
    transform: rotate(-30deg) scale(0);
    background: #15ce05 url('./../../../assets/images/connect.svg') no-repeat center;
    background-size: 80%;
    opacity: 0;
    transition: transform 0.15s ease-in, opacity 0.05s ease-in;

    &.checked {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }
}
</style>
