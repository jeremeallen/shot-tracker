<template>
  <div class="row">
    <div class='col'>
      <b-tabs>
        <b-tab title="1st" active>
          <div 
            v-for="shot in shots.period1" 
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
        </b-tab>
        <b-tab title="2nd" >
          I'm the second tab content
        </b-tab>
        <b-tab title="3rd" disabled>
          <b-card>I'm the card in tab</b-card>
        </b-tab>
      </b-tabs>
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
      offsetY: 30,
    };
  },
  props: [
    'shots',
  ],
  methods: {
    shot(e) {
      const shot = {
        period: 1,
        x: null,
        y: null,
      };
      const el = this.$refs.rinkcontainer;
      shot.x = e.offsetX ? (e.offsetX) : e.pageX - el.offsetLeft;
      shot.y = e.offsetY ? (e.offsetY) : e.pageY - el.offsetTop;

      shot.x += this.offsetX;
      shot.y += this.offsetY;

      this.$emit('shot', shot);
    },
  },
};
</script>
<style>
  .shot {
    position: absolute;
  }
</style>
