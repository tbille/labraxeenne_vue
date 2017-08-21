<template>
  <div class="navbar">
    <b-navbar toggleable variant="info" toggle-breakpoint="md">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">La Braxéenne</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#/">Hello</b-nav-item>
          <b-nav-item href="#/test">Test</b-nav-item>
        </b-nav>

      </b-collapse>
    </b-navbar>
  </div>
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

<style scoped>
</style>
