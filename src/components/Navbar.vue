<template>

  <b-navbar toggleable="md" variant="info">
    <div class="menu-toggle">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand class="title hidden-sm-up" href="#/"><img src="../assets/SVG/Header.svg" width="auto" height="50"/></b-navbar-brand>

    </div>

    <b-collapse is-nav id="nav_collapse" class="menu">

      <b-nav is-nav-bar>
        <b-nav-item class="item menu-item" href="#/brasserie">LA BRASSERIE</b-nav-item>
        <b-nav-item class="item menu-item" href="#/brasserie">NOS BIERES</b-nav-item>
        <b-nav-item class="item menu-item" href="#/brasserie">LES STAGES</b-nav-item>
      </b-nav>
      <img class="hidden-xs-down" src="../assets/SVG/Header.svg" width="auto" height="60"/>
      <b-nav is-nav-bar>
        <b-nav-item class="item menu-item" href="#/brasserie">LA BRASSERIE</b-nav-item>
        <b-nav-item class="item menu-item" href="#/brasserie">NOS BIERES</b-nav-item>
        <b-nav-item class="item menu-item" href="#/brasserie">LES STAGES</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss"> 

  @import '~bootstrap/scss/_variables.scss';
  @import '~bootstrap/scss/_mixins.scss';

  .menu-toggle {
    display: flex;
    justify-content: center;
    align-items: center;

    .navbar-toggler{
      align-self: center;
    }
  }

  .menu {
    display: flex;

    @include media-breakpoint-down(xs,$grid-breakpoints){
      flex-direction: column;
    }

    @include media-breakpoint-up(xs,$grid-breakpoints){
      justify-content: center;
      flex-direction: row;
    }
  }

  .navbar {
    background-color: #ab2d1b !important;
  }
</style>
