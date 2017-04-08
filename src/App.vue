<template>
  <div id="app">
    <navigation></navigation>
    <router-view 
      :shots="shots"
      @shot="trackShot"
      @startGame="startGame"
    >
    </router-view>
  </div>
</template>

<script>
import slugify from 'slugify';
import Navigation from './components/Nav';

export default {
  name: 'app',
  data() {
    return {
      game: {
        home: '',
        visitor: '',
        gameTime: '',
        gameSlug: '',
      },
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
    startGame(gameName) {
      this.game = gameName;
      this.game.gameSlug = this.slugGame();

      this.$router.push('/shots');
    },
    slugGame() {
      return slugify(`${this.game.home}-${this.game.visitor}-${this.game.gameTime}`);
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
