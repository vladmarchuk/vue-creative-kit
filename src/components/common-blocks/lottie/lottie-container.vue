<template>
    <div ref="lottieContainer">
        <lottie :options="defaultOptions"  v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ScrollMagic from 'scrollmagic';
import Lottie from './lottie';

export default {
  name: 'app',
  components: {
    lottie: Lottie,
  },
  props: {
    animation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'userAgent',
    ]),
  },
  data() {
    return {
      defaultOptions: {
        animationData: this.animation,
        loop: false,
        renderer: 'svg',
        autoplay: this.$route.query.screentest || false,
        renderSetting: {
          progressiveLoad: true,
        },
      },
      animationSpeed: 1,
    };
  },
  mounted() {
    this.initScrollTrigger();
  },
  methods: {
    initScrollTrigger() {
      if (window.scrollController) {
        const vm = this;
        new ScrollMagic.Scene({
          triggerElement: vm.$el,
          triggerHook: 0.3,
        })
          .on('enter', function enter() {
            vm.play();
            this.destroy(); // destroy scene once it played
          })
          .addTo(window.scrollController);
      }
    },
    handleAnimation(anim) {
      this.anim = anim;
    },
    stop() {
      this.anim.stop();
    },
    play() {
      this.anim.play();
    },
    pause() {
      this.anim.pause();
    },
    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>
