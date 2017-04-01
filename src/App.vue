<template>
  <div id="app">
    <navigation></navigation>
    <router-view 
      :shots="shots"
      @shot="trackShot"
    >
    </router-view>
  </div>
</template>

<script>
import Navigation from './components/Nav';

export default {
  name: 'app',
  data() {
    return {
      shots: {
        period1: [],
        period2: [],
        period3: [],
      },
    };
  },
  components: {
    Navigation,
  },
  methods: {
    trackShot(shot) {
      this.shots[`period${shot.period}`].push({
        x: shot.x,
        y: shot.y,
      });
    },
  },
};
</script>

<style>
body {
  padding-top: 5rem;
}
.starter-template {
  padding: 3rem 1.5rem;
  text-align: center;
}
</style>
