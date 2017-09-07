<template>
  <div class="accueil">
    <div class="container-fluid top">
      <div class="row">
        <Brand></Brand>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-lg-center social">
        <div class="col-lg-10">
          <Social>
          </Social>
        </div>
      </div>
      <div class="row justify-content-lg-center presentation" align="center">
        <div class=" col-lg-5">
          <Presentation>
          </Presentation>
        </div>
        <div class="col-lg-5">
          <Twitter class="twitter">
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
import Social from './Social'

export default {
  name: 'accueil',
  components: {
    Twitter,
    Brand,
    BiereMoment,
    Presentation,
    Social
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  destroy () {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  .accueil {
    position: relative;
    //background:  url("~@/assets/header.jpg") no-repeat top;
    // linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, #F5F5F5 600px),
    // background-image: url("~@/assets/header.jpg") no-repeat top, linear-gradient(transparent, #d13531);
    // background-image: url("~@/assets/header.jpg"), linear-gradient(red, yellow);
    // background: url("~@/assets/header.jpg"), linear-gradient(#004092, #020202, transparent) bottom; 
// background-size: cover; 
    //background-image: url("http://www.transparenttextures.com/patterns/beige-paper.png");
    //background-color: #ffffcc;
    background-size: 100% auto;
    background-image: url("~@/assets/houblons-brand.png");
    background-position: center top;
    background-size: auto 700px;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .presentation {
      flex-wrap: wrap-reverse;
      .container {
        margin-top: 1em;
        width: 100%;
      }
    }

    .top {
      margin-bottom: 20px;

    }

    .twitter {
      margin: 0 0 30px 0;
    }

  }
</style>
