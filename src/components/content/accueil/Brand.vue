<template>
    <div class="brand hidden-md-down">
      <div class="row-border">
        <div class="border border-left"></div>
        <div class="image">
          <img class="picture" src="~@/assets/SVG/Header.svg" width="500" height="auto"/>
        </div>
        <div class=" border border-right"></div>
      </div>
      <div class="border border-bottom"></div>
    </div>
</template>

<script>
import {EventBus} from '@/utils/js/EventBus.js'

export default {
  name: 'Brand',

  data () {
    return {
      posY: 0
    }
  },

  methods: {
  },

  mounted () {
    var isNavBrandVisible = false
    this.posY = this.$el.getBoundingClientRect().bottom

    var scrollHandler = function () {
      var currentINBV = (window.scrollY > this.posY)

      if (isNavBrandVisible !== currentINBV) {
        isNavBrandVisible = currentINBV
        EventBus.$emit('isNavBrandVisible', currentINBV)
      }
    }

    window.onscroll = scrollHandler.bind(this)
  }
}
</script>

<style lang="scss" scoped>
  $border: 15px;
  $border-opacity: .9;

  .brand {
    display: flex;
    flex-direction: column;
    width: 800px;
    height:300px;
    margin-left: auto;
    margin-right: auto;

    // .border {
    //   // background-color: rgba(105, 2, 2, 0.7);
    //   background: url("~@/assets/bg-main.jpeg") repeat 0px 0px;
    //   opacity: .6;
    //   // filter: invert(.9);
    //   filter: invert(1);
    // }

    .row-border {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex: 1;

      // .border {
      //   width: $border;
      // }

      // .border-left {    
      //   height: 100%;
      // }

      // .border-right {
      //   height: 60%;       
      // }

      .image {
        flex: 1;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        background: url("~@/assets/chateau.png"), rgba(178, 1, 1, 0.7 );  //rgba(178, 1, 1, 0.75),
        background-position: bottom center;
        background-size: 100% 110%; 
        border-left: 1px solid rgba(0, 0, 0, .2);
        border-right: 1px solid rgba(0, 0, 0, .2);
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }

      .picture {
        position: relative;
        top:25px;
      }
    }

    // .border-bottom {
    //   width: 80%;
    //   height: $border;
    // }
  }
</style>
