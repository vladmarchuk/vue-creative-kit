import windowSize from 'get-window-size';

const handleOrientation = {
  methods: {
    checkOrientation() {
      const hasWindowOrientationProp = typeof window.orientation !== 'undefined';
      const orientation = hasWindowOrientationProp
        ?
        (Math.abs(window.orientation) === 90)
        :
        (windowSize().width > windowSize().height);

      this.$store.commit('DETECT_ORIENTATION', orientation);
    },
  },
  mounted() {
    this.checkOrientation();
    window.addEventListener('orientationchange', () => {
      this.checkOrientation();
    }, false);
  },
};

export default handleOrientation;

