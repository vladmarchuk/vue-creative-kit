<template>
    <div class="spinner-logo" :class="{'spinner-logo--visible': visible}"></div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>

.spinner-logo {
  position: absolute;
  bottom: -125px;
  left: 50%;
  margin-left: -26px;
  width: 52px;
  height: 49px;
  opacity: 0;
  z-index: 100;
  background: url("assets/spinner.svg") no-repeat center / 100% auto;
  animation: rotate 1s infinite ease;
  &--visible {
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
