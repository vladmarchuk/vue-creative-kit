<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import ScrollMagic from 'scrollmagic';
  import { TweenMax, TimelineMax } from 'gsap';

  export default {
    // Options / Data
    data() {
      return {};
    },
    props: [],
    computed: {},
    name: 'table-animation',
    mounted() {
      if (!this.$store.state.userAgent.device.isMobile && !this.$route.query.screentest) {
        this.initScrollTrigger();
      }
    },
    methods: {
      initScrollTrigger() {
        if (window.scrollController) {
          const vm = this;
          const scene = new ScrollMagic.Scene({
            triggerElement: vm.$el,
            triggerHook: 'onEnter',
            offset: 190,
          })
            .on('enter', () => {
              // vm.PlayAnimation();
              const tl = new TimelineMax();
              tl.fromTo($('.table', vm.$el), 0.2, { opacity: 0 }, { opacity: 1 });
              tl.add(TweenMax.staggerFromTo($('.table tbody > tr', vm.$el),
                0.2, { skewX: 50, opacity: 0, scaleX: 0.995, transformOrigin: 'top right' }, {
                  opacity: 1,
                  skewX: 0,
                  scaleX: 1,
                }, 0.1));
              tl.add(TweenMax.staggerFromTo($('.main-table__line', vm.$el),
                0.2, { skewX: 50, opacity: 0, scaleX: 0.995 }, {
                  opacity: 1,
                  rotationX: 0,
                  skewX: 0,
                  scaleX: 1,
                }, 0.1));
              tl.call(() => {
                scene.destroy();
              });
            })
            .addTo(window.scrollController);
        }
      },
    },
    // watch: {},
    // Options / Lifecycle Hooks
    // mounted () {},
    // beforeDestroy () {},
    // Options / Assets
    // components: {},
    // transitions: {},
    // Options / Misc
    // mixins: [],

  };

</script>
