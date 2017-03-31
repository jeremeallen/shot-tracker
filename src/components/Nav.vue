<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Shots</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <router-link 
            :to="{name: 'home'}" 
            tag="li" 
            class="nav-item" 
            active-class="active" 
            exact
          >
            <a class='nav-link'>Home</a>
          </router-link>
          <router-link 
            :to="{name: 'offense'}" 
            tag="li" 
            class="nav-item" 
            active-class="active" 
            exact
          >
            <a class='nav-link'>Offense</a>
          </router-link>
          <router-link 
            :to="{name: 'defense'}" 
            tag="li" 
            class="nav-item" 
            active-class="active" 
            exact
          >
            <a class='nav-link'>Defense</a>
          </router-link>
          <router-link 
            :to="{name: 'saves'}" 
            tag="li" 
            class="nav-item" 
            active-class="active" 
            exact
          >
            <a class='nav-link'>Saves</a>
          </router-link>
        </ul>
      </div>
    </nav>
</template>
<script>
  export default {
    name: 'nav',
  };
</script>
