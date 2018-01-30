import _ from 'lodash';

export const UPDATE_PRELOADER_STATE = (State, value) => {
  State.imagesLoaded = value;
};

export const UPDATE_CAN_START = (State, value) => {
  State.canStart = value;
};

export const TOGGLE_MOBILE_MENU = (state, value) => {
  state.isMobileMenuActive = value;
};
