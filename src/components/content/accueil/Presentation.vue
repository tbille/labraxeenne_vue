
<template>
  <div class="presentation">
        <div class="item">
            <a class="cadre bouteille" href="#">
                <img height="75" src="~@/assets/biere.png"/>
                <span class="nombre">8</span>
            </a>

            <a class="cadre boutique" href="#">
                <img height="75" src="~@/assets/boutique.png"/>
                <div class="nombre">13</div>
            </a>
        </div>  
        <div class="card item">
            <img class="card-img-bottom" src="~@/assets/photos/img_04.jpg" width="100%" height="auto" alt="Card image cap">
            <div class="card-block">
                <p>
                    La MicroBrasserie La Braxéenne est installée à Brax, petit village de l’ouest toulousain depuis mars 2014.

                    Elle fabrique 7 bières artisanales de haute fermentation sans filtrage ni pasteurisation et utilise des produits bio issus d’une agriculture locale.

                </p>
                <p>
                    La MicroBrasserie propose aussi de vous apprendre à faire la Bière de A à Z. Des stages sont organisés 1 fois par mois.
                </p>
                <a href="tiwtter.com" class="btn btn-success">En savoir plus</a>
            </div>
        </div>

        <!-- <div class="card jumbotron">
            <h1 class="display-3">La Brasserie</h1>
            <p class="lead">
                La MicroBrasserie La Braxéenne est installée à Brax, petit village de l’ouest toulousain depuis mars 2014.
                Elle fabrique 7 bières artisanales de haute fermentation sans filtrage ni pasteurisation et utilise des produits bio issus d’une agriculture locale.
            </p>
            <hr class="my-4">
            <p>
                La MicroBrasserie propose aussi de vous apprendre à faire la Bière de A à Z. Des stages sont organisés 1 fois par mois.
            </p>
            <p class="lead">
                <a class="btn btn-danger btn-lg" href="#" role="button">Plus d'information</a>
            </p>
        </div> -->

        <div class="card item">
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
@import '~@/utils/style/KeyFramesMixin.scss';

@include keyframes(tilt) {
    0% {
        transform: rotate(0deg)
    }

    25% {
        transform: rotate(15deg)
    }

    50% {
        transform: rotate(-15deg)
    }
        
    100% {
        transform: rotate(0deg)
    }
}

.presentation {
    display: flex;
    flex-direction: column;

    .item {
        width: 100%;
        margin:0 0 30px 0;
        display: flex;
        .cadre {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-right: 20px;
            padding: 8px;
            width: 100px;
            height: 100px;
            background-color: #ffffff;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
            border-radius: 0.25rem;
            
            &:hover img{
                animation: tilt .6s ease-in-out;
                animation-iteration-count: infinite;   
            }

            img {
                outline: 1px solid transparent;
            }

            .nombre {
                display: table-cell;
                vertical-align: middle;
                width: 1.6em;
                height: 1.6em;
                line-height: 1.6em;
                text-align: center;
                border-radius: 50%;
                top: -.7em;
                right: -.7em;
                position: absolute;   
                color: #ffffff;
                font-size: 1.4em;
                background-color: orange;
                text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
            }
        }
    }

    .card {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

        .card-header {
            font-family: BebasNeue;
            font-size: 1.6em;
            line-height: 1em;
            color: #292F33;
        }

        .card-block {
            p {
                text-align: justify;
            }
        }
    }

    .card.jumbotron {
        background-image: url("~@/assets/photos/img_04.jpg");
        background-position: center 0;
        background-size: auto 100%;

        .display-3 {
            color: rgb(248, 242, 220)
            // text-shadow: 1px 1px 1px rgba(255,255,255,.2);
        }
        
        p {
            text-align: justify;
            color: white;
        }
    }
}
</style>
