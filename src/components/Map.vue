<template>
  <div class="container mainPart">
    <div class="topPart">
      <div class="mapPart">
        <div class="mapPart__filters"></div>
        <div class="mapPart__map" id="map"></div>
      </div>
    </div>
    <div class="cafePart">
      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <h2 class="cafePart__title">Co hleda jmeno</h2>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../db.js";
export default {
  name: "Map",
  data() {
    return {};
  },

  mounted() {
    // vlozeni mapy
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
    // vlozeni znacky
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();
    let coords = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let marker = new SMap.Marker(coords);
    layer.addMarker(marker);
    //vlozeni karty
    let card = new SMap.Card();
    card.setSize(300, 200);
    card.getHeader().innerHTML = `<h3 class=''>Kavárna Orient</h3>`;
    card.getBody().innerHTML = `<div class='profil'>
                                <div class="cafeImg">
                                  <img class="img-fluid" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
                                </div>
                                </div>`;
    // znacka z predchozi ukazky
    marker.decorate(SMap.Marker.Feature.Card, card);
  }
};
</script>
<style>
/* pro prepis stylu Bootstrapu */
.container {
  max-width: 100% !important;
  padding: 0 !important;
}
.mainPart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* mapa */
.topPart {
  width: 100%;
}
.mapPart {
  width: 100%;
}
.mapPart__map {
  position: relative;
  width: 100%;
  height: 100vw;
  z-index: 0;
}
/* kavarny */
.cafePart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cafePart__img {
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.cafePart__bg {
  width: 100%;
  filter: brightness(50%);
  object-fit: cover;
}
.cafePart__title {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0%, -50%);
  color: #eff0f4;
}

/* Responzivita */
@media only screen and (min-width: 720px) {
  .mainPart {
    flex-direction: row-reverse;
    align-items: stretch;
  }
  .topPart {
    flex: 5;
  }
  .mapPart__map {
    height: 100vh;
  }
  .cafePart {
    flex: 2;
    margin-right: 1rem;
  }
  .cafePart__img {
    margin-top: 0;
  }
}
</style>
