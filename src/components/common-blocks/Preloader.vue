<template>
    <div class="preloader">
        <div class="preloader__content">
            <div class="preloader__wrapper">
               <oval></oval>
            </div>
        </div>
    </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';

import Oval from '@/assets/svg/svg-components/preloader/oval.svg';
import Vue from 'vue';


let path = process.env.publicPath === '/' ? '' : process.env.publicPath;

// console.log(path);

const images = [
  `${path}/static/images/preloader-test/bg2.jpg`,
  `${path}/static/images/preloader-test/bg3.jpg`,
];

export default {
  name: 'Preloader',
  components: {
    Oval,
  },
  data() {
    return {
      images,
      promises: [],
      animated: false,
    };
  },
  computed: {
    wait() {
      return this.$store.getters['PRELOADER_STATE'];
    },
  },
  watch: {
    wait(val) {
      if (val) {
        this.$store.commit('UPDATE_CAN_START', val);
      }
    },
  },
  methods: {
    preloadImage(src) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = src;
      });
    },
    preloadImages() {
      this.images.forEach((src) => {
        this.promises.push(this.preloadImage(src));
      });
      return this.promises;
    },
  },
  created() {
    Promise.all(this.preloadImages()).then(() => {
      this.$store.commit('UPDATE_PRELOADER_STATE', true);
    });
  },
  mounted() {
  },
};
</script>
