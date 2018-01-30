<template>
  <div class="rotate-wrapper">
    <div class="rotate-wrapper_content">
      <div class="rotate-wrapper_circle">
        <div class="rotate-wrapper_phone">
        </div>
      </div>
      <span class="rotate-wrapper_text">Please rotate your device</span>
    </div>
  </div>
</template>

<script>

  export default {
    // Options / Data
    data() {
      return {};
    },
    props: [],
    computed: {},
    methods: {},
    // watch: {},
    // Options / DOM
    // el () {},
    // replace: true,
    // template: '',
    // Options / Lifecycle Hooks
    // init () {},
    // crated () {},
    // beforeCompile () {},
    // compiled () {},
    // mounted() {},
    // attached () {},
    // detached () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // elementDirectives: {},
    // filters: {},
    // components: {},
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: ''
  };

</script>

<style lang="scss" rel="stylesheet/scss">

  .rotate-wrapper {
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 999999;
    background-color: $color-blue;
    position: fixed;

    &_content {
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    &_circle {
      background: url("./assets/rotate-circle.svg") no-repeat;
      width: 125px;
      height: 116px;
      position: relative;
      animation: wiggle 1.5s infinite;
    }

    &_phone {
      background: url("./assets/rotate-device.svg") no-repeat center;
      width: 100%;
      height: 100%;
      left: -5px;
      position: absolute;
    }

    &_text {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 18px;
      color: #fff;
      display: block;
      margin-top: 20px;
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(1deg);
    }

    50% {
      transform: rotate(-91deg);
    }

    100% {
      transform: rotate(1deg);
    }
  }

</style>
