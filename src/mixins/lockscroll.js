const lockScroll = {
  data() {
    return {
      unlockedScrollPosition: '',
    };
  },
  methods: {
    lockBodyScroll() {
      const scrollPos = $(window).scrollTop();
      $('body').css({
        top: `${-scrollPos}px`,
        position: 'fixed',
        'overflow-y': 'scroll',
        'max-width': '100%',
      });
      this.unlockedScrollPosition = scrollPos;
    },
    unlockBodyScroll() {
      $('body').css({
        position: 'static',
        'overflow-y': 'scroll',
      });
      $(window).scrollTop(this.unlockedScrollPosition);
    },
  },
};

export default lockScroll;
