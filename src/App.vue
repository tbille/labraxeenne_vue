<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>

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
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 300px;
  background-color: #f5f5f5;
}

.container {
  width: auto;
  padding: 0 15px;
}
</style>
