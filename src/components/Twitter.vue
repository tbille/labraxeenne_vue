<template>
  <div class="twitter card">
    <a class="twitter-timeline"
      href="https://twitter.com/labraxeenne"
      data-tweet-limit="3"
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
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 20px;
    .card { 
    }
  }
</style>
