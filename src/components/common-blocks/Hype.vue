<script>
/* eslint-disable import/no-webpack-loader-syntax,object-shorthand */
import Vue from 'vue';
import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const controller = new ScrollMagic.Controller(
  {
    // loglevel: 3
  },
);

export default {
  // Options / Data
  render(createElement) {
    return createElement(
      'div',
      {
        class: this.hidden ? 'hype' : 'hype hype--hidden',
      },
      [
        createElement('iframe', {
          attrs: {
            src: `${Vue.config.publicPath}static/${this.src}/${this.src}.html`,
          },
        }),
      ],
    );
  },
  data() {
    return {
      hidden: true,
      iframeDimentions: '',
      iframeWidth: '',
    };
  },
  props: [
    'src',
    'align',
  ],
  computed: {
    $hypeContainer() {
      return `#${this.src.replace(/[^a-z0-9]/gi, '').toLowerCase()}_hype_container`;
    },
  },
  methods: {
    setScrollMagic(isSet) {
      if (isSet) {
        const vm = this;
        new ScrollMagic.Scene({
          triggerElement: vm.$el,
          triggerHook: 0.8,
        })
        .on('enter', function enter() {
          if (vm.hidden) {
            vm.hidden = false;
            vm.playHypeDocument();
          }
          this.destroy(); // destroy scene once it played
        })
        .addTo(controller);
      }
    },
    playHypeDocument() {
      $(this.$el)
      .find('iframe')[0]
        .contentWindow.HYPE.documents[this.src].playTimelineNamed();
    },
    scaleCharts() {
      const parentWidth = $(this.$el).width();
      const iframe = $(this.$el).find('iframe');
      const iframeWidth = this.iframeWidth;

      if (parentWidth < iframeWidth && parentWidth < 960) {
        const scale = parentWidth / iframeWidth;
        iframe.css('transform', `scale(${scale})`);
        iframe.css('transform-origin', '-2% top');
        iframe.parent().css('height', iframe[0].getBoundingClientRect().height);
        iframe.data('scale', scale);
      } else {
        iframe.css('transform', 'scale(1)');
        iframe.parent().css('height', 'auto');
      }
    },
  },
  watch: {
    iframeDimentions(value) {
      $(this.$el).find('iframe').attr('style', value);
    },
    '$store.state.window.width'() {
      this.scaleCharts();
    },
  },
  mounted() {
    const vm = this;
    const $hypeIframe = $(this.$el).find('iframe');
    if (this.align) {
      $(this.$el).css('text-align', this.align);
    }
    // $hypeIframe[0].contentWindow.HYPE = window.HYPE;
    // $hypeIframe[0].contentWindow.HYPE_584 = window.HYPE_584;
    // $hypeIframe[0].contentWindow.HYPE_dtl_584 = window.HYPE_dtl_584;
    $hypeIframe[0].contentWindow.addEventListener('load', function hypeOnLoad() {
      vm.iframeDimentions = $(this.document)
      .find(vm.$hypeContainer)
      .attr('style');
      vm.setScrollMagic(true);
      vm.$nextTick(() => {
        vm.iframeWidth = $(vm.$el).find('iframe').width();
        vm.scaleCharts();
        vm.playHypeDocument();
      });
    });

    if (this.$route.query.screentest) {
      this.hidden = false;
    }
  },
  beforeDestroy() {
    this.setScrollMagic(false);
  },
};
</script>

<style lang="scss" scoped>
  .hype {
    opacity: 0;
    transition: opacity 0.3s;

    @media screen and (max-width: 900px) {
      margin-left: 7px;
    }

    @media screen and (max-width: 900px) {
      margin-left: 2px;
    }
  }

  .hype--hidden {
    opacity: 1;
  }
</style>

