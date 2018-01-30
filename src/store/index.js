import Vue from 'vue';
import Vuex from 'vuex';
import userAgent from './modules/userAgent';
import preloader from './modules/preloader';
import { state } from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: debug,
  modules: {
    userAgent,
    preloader,
  },
});
