<template>
    <div class="social">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
        <i class="fa fa-google-plus-square" aria-hidden="true"></i>
    </div>
</template>

<script>
    export default {
      name: 'Social'
    }
</script>

<style lang="scss" scoped>
  .social {
    display: flex;
    justify-content: flex-end;
    i {
        margin: 4px;
        font-size: 4em;
        color: rgba(178, 1, 1, 0.80);
    }
    
  }
</style>
