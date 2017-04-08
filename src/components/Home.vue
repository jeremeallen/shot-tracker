<template>
  <div class="row">
    <div class='col'>
      <div class="container">
        <form @submit.prevent="startGame">
          <div class="form-group row">
            <label for="home" class="col-2 col-form-label col-form-label-lg">Home</label>
            <div class="col-10">
              <input class="form-control form-control-lg" type="text" v-model="game.home">
            </div>
          </div>
          <div class="form-group row">
            <label for="home" class="col-2 col-form-label col-form-label-lg">Visitor</label>
            <div class="col-10">
              <input class="form-control form-control-lg" type="text" v-model="game.visitor">
            </div>
          </div> 
          <div class="form-group row">
            <label for="home" class="col-2 col-form-label col-form-label-lg">Game time</label>
            <div class="col-10">
              <input class="form-control form-control-lg" type="text" v-model="game.gameTime">
            </div>
          </div>                                     
          <div class="col-sm-12 start-game-row text-right">
            <button class='btn btn-primary btn-lg'>Start game</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      game: {
        home: '',
        visitor: '',
        gameTime: '',
      },
    };
  },
  methods: {
    startGame() {
      this.$emit('startGame', this.game);
    },
  },
};
</script>
<style>
  .start-game-row {
    padding-right: 0px;
  }
</style>
