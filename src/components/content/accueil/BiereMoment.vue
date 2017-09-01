<template>
  <div class="biere-moment">
    <div class="title">
        <h4>BIERE DU MOMENT !</h4>
    </div>
    <div class="biere">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'BiereMoment'
    }
</script>

<style lang="scss" scoped>
  .biere-moment {
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.2);
    border-radius: 4px;
    .title {
        position: relative;
        width:80%;
        height: 4em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: rgba(0, 122, 57, 1);
        h4 {
            margin-left: 10px;
            font-size: 2em;
            font-weight: 550;
            color: white;
            margin-bottom: 0;
            text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67);
        }
    }

    .title::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 0%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4em 4em 0 0;
        border-color: rgba(0, 122, 57, 1) transparent transparent transparent;
        clear: both;
    }

    .biere {
        height: 500px;
    }
  }
</style>
