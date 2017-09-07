<template>
  <div id="app">
    <navbar v-on:isNavBrandVisisble="handleScroll"></navbar>
    
    <router-view class="content"></router-view>

    <footer class="footer">
      <footer-braxeenne></footer-braxeenne>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FooterBraxeenne from './components/FooterBraxeenne'

export default {
  name: 'app',
  components: {
    Navbar,
    FooterBraxeenne
  },
  mounted () {
    this.handleScroll()
    console.log(this.$route.name)
  },
  methods: {
    handleScroll () {
      window.addEventListener('scroll', function () {
      })
    }
  }
}
</script>

<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}

body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  /* background: url("~@/assets/chateau.png"), url("~@/assets/chateau-2.png");
  background-size: 102% auto, 100% auto;
  background-repeat: no-repeat;
  background-position: center 70px, center 80px; */
  /* background: green;
  -webkit-mask: url("~@/assets/chateau.png") top center no-repeat; */
  /* background: url("~@/assets/chateau-2.png"), #FFE57F;
  background-position: center 50px;
  background-repeat: no-repeat;
  background-size: 100% auto; */
  background: url("~@/assets/bg-main.jpeg") repeat 0px 0px;
}

a {
  cursor: pointer;
}

.content {
  padding-bottom: 40px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}
</style>
