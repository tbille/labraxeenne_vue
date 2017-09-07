<template>
    <div class="social">
        <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
    
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
        color: rgba(178, 1, 1, 0.6);
    }

    i:hover {
        color: rgba(178, 1, 1, 0.8);
    }
    
  }
</style>
