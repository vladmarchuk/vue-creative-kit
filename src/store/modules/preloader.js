const userAgent = {
  state: {
    imagesLoaded: false,
    canStart: false,
  },
  mutations: {
    UPDATE_PRELOADER_STATE(state, value) {
      state.imagesLoaded = value;
    },
    UPDATE_CAN_START(state, value) {
      state.canStart = value;
    },
  },
  getters: {
    PRELOADER_STATE(state) {
      return state.imagesLoaded;
    },
    CAN_START(state) {
      return state.canStart;
    },
  },
};

export default userAgent;
