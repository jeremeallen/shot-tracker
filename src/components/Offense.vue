<template>
  <div class="row">
    <div class='col'>
      <div 
        v-for="shot in shots" 
        class="shot"
        :style="{top: `${shot.y}px`, left: `${shot.x}px`}"
      >
        X
      </div>
      <img 
        src='/static/img/half_rink.png' 
        class='img-fluid'
        @click='shot'
        ref="rinkcontainer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'offense',
  data() {
    return {
      shots: [],
      offsetX: 10,
      offsetY: -10,
    };
  },
  methods: {
    shot(e) {
      const el = this.$refs.rinkcontainer;
      const posX = e.offsetX ? (e.offsetX) : e.pageX - el.offsetLeft;
      const posY = e.offsetY ? (e.offsetY) : e.pageY - el.offsetTop;

      this.shots.push({
        x: posX + this.offsetX,
        y: posY + this.offsetY,
      });
    },
  },
};
</script>
<style>
  .shot {
    position: absolute;
  }
</style>
