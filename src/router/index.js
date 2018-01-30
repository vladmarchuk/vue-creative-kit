import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Meta from 'vue-meta';
import Index from '@/components/pages/Index';
import Content from '@/components/pages/content/content';
import ScrollMagic from 'scrollmagic';


Vue.config.publicPath = process.env.publicPath;

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on. 111111
});


const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: Vue.config.publicPath,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if ((to.path !== from.path) && window.scrollController) {
    window.scrollController = window.scrollController.destroy(true);
  }
  next();
});

router.afterEach((to, from) => {
  window.scrollController = new ScrollMagic.Controller();
});

export default router;
