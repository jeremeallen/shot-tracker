import Vue from 'vue';
import Router from 'vue-router';
import Defense from '@/components/Defense';
import Goalie from '@/components/Goalie';
import Offense from '@/components/Offense';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/offense',
      name: 'offense',
      component: Offense,
    },
    {
      path: '/defense',
      name: 'defense',
      component: Defense,
    },
    {
      path: '/saves',
      name: 'saves',
      component: Goalie,
    },
  ],
});
