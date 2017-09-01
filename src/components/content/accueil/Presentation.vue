
<template>
  <div class="presentation">
        <div class="card">
            <img class="card-img-top" src="~@/assets/photos/img_01.jpg" width="100%" height="auto" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">La Brasserie</h4>
                <p>
                    La MicroBrasserie La Braxéenne est installée à Brax, petit village de l’ouest toulousain depuis mars 2014.

                    Elle fabrique 7 bières artisanales de haute fermentation sans filtrage ni pasteurisation et utilise des produits bio issus d’une agriculture locale.

                    La MicroBrasserie propose aussi de vous apprendre à faire la Bière de A à Z. Des stages sont organisés 1 fois par mois.

                </p>
                <a href="tiwtter.com" class="btn btn-danger">En savoir plus</a>
            </div>
        </div>
  </div>
</template>

<script>
    export default {
      name: 'Presentation'
    }
</script>

<style lang="scss" scoped>
  .biere-presentation {
    display: flex;
    flex-direction: column;

    .card {
        margin: 0px;
    }
  }
</style>
