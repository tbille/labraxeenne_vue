<template>
    <nav class="menu sticky-top navbar navbar-toggleable-md">
      <div class="top">
        <div class="navbar-brand hidden-lg-up" href="#/"><img src="~@/assets/SVG/Header-cut.png" width="auto" height="50"/></div>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'brasserie'}">LA BRASSERIE</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'bieres'}">NOS BIERES</router-link>
          </li>
          <li class="nav-item brand hidden-lg-down" v-bind:class="{'pop-up' : isNavBrandVisible}">
            <a class="nav-link" href="#"><img v-show="isNavBrandVisible" src="~@/assets/SVG/Header-cut.png" height="60"/></a>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'stages'}">LES STAGES</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'points-vente'}">POINTS DE VENTE</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import {EventBus} from '@/utils/js/EventBus.js'

export default {
  name: 'navbar',
  data () {
    return {
      isNavBrandVisible: false
    }
  },

  mounted () {
    if (this.$route.name === 'Accueil') {
      EventBus.$on('isNavBrandVisible', this.checkNavBrandVisible)
    } else {
      this.isNavBrandVisible = true
    }
  },

  watch: {
    '$route' (to, from) {
      if (to.name === 'Accueil') {
        EventBus.$on('isNavBrandVisible', this.checkNavBrandVisible)
        this.isNavBrandVisible = false
      } else {
        this.isNavBrandVisible = true
      }
    }
  },

  methods: {
    checkNavBrandVisible: function (val) {
      this.isNavBrandVisible = val
    }
  }
}
</script>

<style lang="scss" scoped> 

  @import '~bootstrap/scss/_variables.scss';
  @import '~bootstrap/scss/_mixins.scss';

  .menu {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: rgba(125, 3, 3, 1);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    .navbar-collapse {
      justify-content: center;
    }

    .navbar-nav {
      .nav-item.brand {
        width: 0;
        height:0;
        transition: all 0.1 ease-in;
        overflow: hidden;
      }

      .nav-item.pop-up {
        height: 68px;
        width: 200px;
        transition: all .1s ease-in;
      }
      .nav-item {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 4px 0 4px;
        border-radius: 2px;

        a{
          text-decoration: none;
          color: #EEEEEE;
          font-size: 1.6em;
          line-height: 1em;
          font-family: BebasNeue;
          padding: 5px 20px;
        }

        a:hover {
          text-decoration: underline;
        }

        a:focus {
          background-color: rgba(255, 255, 255, .2)
        }
      }
    }

    .navbar-brand {
      align-self: center;
      transition: all 0,5 linear;
    }

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
      cursor: pointer;
    }

    .navbar-toggler-icon:hover {

    }
  }
    

  
</style>
