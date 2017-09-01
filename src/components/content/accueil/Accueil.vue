<template>
  <div class="accueil">
    <div class="brand hidden-md-down">
      <Brand></Brand>
    </div>
    <div class="container-fluid">
      <div class="row accueil-menu">
        <AccueilMenu></AccueilMenu>
      </div>
      <hr/>
      <div class="row presentation">
        <div class="container col-md-4">
          <Presentation>
          </Presentation>
        </div>
        <div class="container col-md-4">
          <BiereMoment>
          </BiereMoment>
        </div>
        <div class="container col-md-4">
          <Social>
          </Social>
          <Twitter>
          </Twitter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Twitter from './../../Twitter'
import Brand from './Brand'
import BiereMoment from './BiereMoment'
import Presentation from './Presentation'
import AccueilMenu from './AccueilMenu'
import Social from './Social'

export default {
  name: 'accueil',
  components: {
    Twitter,
    Brand,
    BiereMoment,
    Presentation,
    AccueilMenu,
    Social
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlide (slide) {
      this.sliding = true
    },
    onSlid (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>

  .accueil {
    position: relative;
    background-image: url("~@/assets/header.jpg");

    hr {
      margin-top: 10px;
      margin-bottom: 40px; 
      width: 40%;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }

    .brand {
      display: flex;
      justify-content: center;
      height: 300px;
    }

    .accueil-menu {
      margin-top: 10px;
    }
  }
</style>
