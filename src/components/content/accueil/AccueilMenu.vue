<template>
    <b-navbar class="accueil-menu" toggleable toggle-breakpoint="md">

        <div class="menu-toggle">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand class="title hidden-lg-up" href="#/"><img src="~@/assets/SVG/Header.svg" width="auto" height="50"/></b-navbar-brand>
        </div>

        <b-collapse class="items" is-nav id="nav_collapse">

        <b-nav is-nav-bar>
            <b-nav-item class="link" href="#/brasserie">LA BRASSERIE</b-nav-item>
            <b-nav-item class="link" href="#/brasserie">NOS BIERES</b-nav-item>
            <b-nav-item class="link" href="#/brasserie">LES STAGES</b-nav-item>
            <b-nav-item class="link" href="#/brasserie">LA BRASSERIE</b-nav-item>
            <b-nav-item class="link" href="#/brasserie">NOS BIERES</b-nav-item>
            <b-nav-item class="link" href="#/brasserie">LES STAGES</b-nav-item>
        </b-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
      name: 'AccueilMenu'
    }
</script>

<style lang="scss">
  .accueil-menu {
      box-sizing: border-box;
      width: 100%;
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
        justify-content: center;
        .nav-item {
          display: flex;
          align-items: flex-end;
          margin: 0 2px 0 2px;
          border-radius: 2px;

          .nav-link {
            color: white;
            font-size: 1.6em;
            text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67);
          } 
        }

        .nav-item:hover {
          background-color: rgba(255,255,255,.2);
        }
      }
    }
</style>
