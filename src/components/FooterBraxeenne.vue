<template>
  <div class="footer-braxeenne">
    <div class="row justify-content-md-center">
      <div class="col-md-4">
        <div class="map">
          <v-map :zoom=13 :center="marker">
            <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
            <v-marker :lat-lng="marker"></v-marker>
          </v-map>
        </div>
      </div>
      <div class="col-md-2">
        <address>
          <strong>Microbrasserie La Braxéeenne</strong> </br>
          31 avenue du château d'eau </br>
          31490, Brax </br> </br>
          <abbr title="Phone">P:</abbr> +33 6 89 27 22 67 </br>
          <abbr title="Email">M:</abbr> <a href="mailto:#">contact@labraxeenne.com</a>
        </address>
      </div>
      <div class="col-md-2">
        <div>
          <strong>Horaires</strong>
          <ul>
            <li>Vendredi : 18h-20h</li>
            <li>Samedi : 8h-18h</li>
            <li>Dimanche : 8h-12h</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'

// This is a fix for the marker position of the marker on the map
// Source: https://github.com/KoRiGaN/Vue2Leaflet/issues/28
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'footer-braxeenne',
  data () {
    return {
      marker: L.latLng(43.61845, 1.23441)
    }
  },
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  }
}
</script>

<style lang="scss" scoped>
@import "~leaflet/dist/leaflet.css";

.footer-braxeenne {
  padding-top: 25px;

  .map {
    width:100%;
    height:250px;
  }
}
</style>
