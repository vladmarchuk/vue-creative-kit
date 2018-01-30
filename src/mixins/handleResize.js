import windowSize from 'get-window-size';
import _ from 'lodash';

const handleResize = {
  methods: {
    handleResize: _.throttle(function resize() {
      this.$store.commit('UPDATE_WINDOW_PARAMS', {
        width: windowSize().width,
        height: windowSize().height,
      });
    }, 300),
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
};

export default handleResize;
