import isMobile from 'ismobilejs';
import windowSize from 'get-window-size';
import browser from 'browser-detect';

const userAgent = {
  state: {
    window: {
      width: windowSize().width,
      height: windowSize().height,
    },
    device: {
      isPhone: isMobile.phone,
      isTablet: isMobile.tablet,
      isMobile: isMobile.any,
    },
    orientation: null,
    ssr: /PhantomJS/.test(window.navigator.userAgent),
    browser: {
      name: browser().name,
      version: browser().version,
    },
  },
  mutations: {
    DETECT_DEVICE(state, devices) {
      state.device = devices;
    },
    DETECT_ORIENTATION(state, payload) {
      payload
        ? (state.orientation = 'portrait')
        : (state.orientation = 'landscape');
    },
    UPDATE_WINDOW_PARAMS(state, payload) {
      state.window = payload;
    },
  },
};

export default userAgent;
