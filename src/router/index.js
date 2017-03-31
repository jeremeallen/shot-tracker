import Vue from 'vue';
import Router from 'vue-router';
import Offense from '@/components/Offense';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/offense',
      name: 'offense',
      component: Offense,
    },
  ],
});
