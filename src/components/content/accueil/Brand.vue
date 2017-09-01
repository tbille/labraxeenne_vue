<template>
  <div class="brand">
    <img class="picture" src="~@/assets/SVG/Header.svg" width="500" height="auto"/>
  </div>
</template>

<script>
    export default {
      name: 'Brand'
    }
</script>

<style lang="scss" scoped>
  .brand {
    display: flex;
    align-items: center;
    width: 800px;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(178, 1, 1, 0.80);

    .picture {

    }
  }
</style>
