<template>

  <b-navbar v-show="visible" class="menu sticky-top" toggleable type="light" variant="info" toggle-breakpoint="md">

    <div class="menu-toggle">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-navbar-brand class="title hidden-lg-up" href="#/"><img src="./../assets/SVG/Header.svg" width="auto" height="50"/></b-navbar-brand>
    </div>

    <b-collapse class="items" is-nav id="nav_collapse">

      <b-nav is-nav-bar>
          <b-nav-item href="#/brasserie">LA BRASSERIE</b-nav-item>
          <b-nav-item href="#/brasserie">NOS BIERES</b-nav-item>
          <b-nav-item href="#/brasserie">LES STAGES</b-nav-item>
      </b-nav>
      <img class="hidden-md-down" v-show="visible" src="./../assets/SVG/Header.svg" width="auto" height="60"/>
      <b-nav is-nav-bar>
        <b-nav-item href="#/brasserie">LA BRASSERIE</b-nav-item>
        <b-nav-item href="#/brasserie">NOS BIERES</b-nav-item>
        <b-nav-item href="#/brasserie">LES STAGES</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      brandVisible: false,
      visible: false
    }
  },
  watch: {
    '$route': function () {
      this.setVisible()
    }
  },

  mounted () {
    this.setVisible()
  },

  methods: {
    setVisible () {
      this.visible = !(this.$route.name === 'Accueil')
    }
  },

  toggleBrand () {
    this.brandVisible = !this.brandVisible
  }

}
</script>

<style lang="scss"> 

  @import '~bootstrap/scss/_variables.scss';
  @import '~bootstrap/scss/_mixins.scss';

  .menu {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: #ab2d1b !important;

    .menu-toggle {
      display: flex;
      justify-content: center;
      align-items: center;

      .navbar-toggler{
        align-self: center;
      }
    }

    .items {
      display: flex;
      @include media-breakpoint-down(md,$grid-breakpoints){
        flex-direction: column;
      }

      @include media-breakpoint-up(xs,$grid-breakpoints){
        justify-content: center;
        flex-direction: row;
      }

      .nav-item {
        display: flex;
        align-items: flex-end;
        margin: 0 2px 0 2px;
        border-radius: 2px; 
        .nav-link {
          color: white;
          font-family: 'BebasNeue', sans-serif;
        }
      }

      .nav-item:hover {
        background-color: rgba(255,255,255,.1);
      }

    }
  }

  
</style>
