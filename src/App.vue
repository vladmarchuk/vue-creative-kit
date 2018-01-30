<template>
  <div id="app" :class="{
        'screentest': $route.query.screentest,
        'desktop': (!userAgent.device.isMobile && userAgent.window.width >= 950),
         phone: userAgent.device.isPhone,
         tablet: userAgent.device.isTablet,
         mobile: userAgent.device.isMobile || userAgent.window.width <= 960
        }">

      <transition name="preloader">
        <preloader v-if="!canStart"></preloader>
      </transition>
      <transition name="pages" appear>
        <div v-if="canStart" class="pages-wrapper">
          <router-view></router-view>
        </div>
      </transition>

    <rotate-lock v-if="this.$store.state.orientation === 'landscape' && this.$store.state.device.isPhone"></rotate-lock>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { TimelineMax } from 'gsap';
import handleResize from '@/mixins/handleResize';
import handleOrientation from '@/mixins/handleOrientation';
import Preloader from '@/components/common-blocks/Preloader';
import rotateLock from '@/components/common-blocks/rotate-lock/rotate-lock';

export default {
  name: 'app',
  components: {
    Preloader,
    rotateLock,
  },
  computed: {
    ...mapState(['userAgent']),
    canStart() {
      return this.$store.getters['CAN_START'];
    },
  },
  metaInfo() {
    return {
      title: 'Animated Project',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          vmid: 'description',
          name: 'description',
          content: 'Page description example',
        },
      ],
      base: {
        href: this.$router.options.base,
      },
    };
  },
};
</script>

<style src="./main.scss" lang="scss"></style>
