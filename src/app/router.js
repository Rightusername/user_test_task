import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Main,
    },
  ],
});
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'User List';
  });
});

export default router;
