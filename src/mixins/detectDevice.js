import isMobile from 'ismobilejs';

const detectDevice = {
  mounted() {
    this.$store.commit('DETECT_DEVICE', {
      isPhone: isMobile.phone,
      isTablet: isMobile.tablet,
      isMobile: isMobile.any,
    });
  },
};

export default detectDevice;
