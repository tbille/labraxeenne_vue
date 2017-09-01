<template>
  <div class="twitter card">
    <a class="twitter-timeline"
      href="https://twitter.com/labraxeenne"
      data-tweet-limit="1"
      data-chrome="nofooter noborders noscrollbar noheader">
    Tweets by @labraxeenne
    </a>
    <div class="card-block">
      <a href="tiwtter.com" class="btn btn-danger">Voir plus</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'twitter',

  mounted () {
    console.log('twitter mounted')
  }

}
</script>

<style lang="scss" scoped>
  .twitter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;


    .card-block {
      align-self: flex-end;
      .btn {
        
      }
    }
    
  }
</style>
