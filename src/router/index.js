import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Goalie from '@/components/Goalie';
import Shots from '@/components/Shots';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shots',
      name: 'shots',
      component: Shots,
    },
    {
      path: '/goalie',
      name: 'goalie',
      component: Goalie,
    },
  ],
});
